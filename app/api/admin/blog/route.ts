import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/options';
import fs from 'fs';
import path from 'path';

// Mock blog posts data for development
const mockBlogPosts = [
  {
    id: 'creative-sticker-marketing',
    title: 'Creative Sticker Marketing: 10 Innovative Strategies to Boost Your Brand',
    excerpt: 'Discover innovative ways to use stickers in your marketing campaigns. From guerrilla marketing to user-generated content, learn how to make your brand stick in customers\' minds.',
    content: '', // Will be loaded from file
    slug: 'creative-sticker-marketing',
    author: 'Sarah Johnson',
    authorRole: 'Marketing Strategist',
    date: '2024-01-15T00:00:00.000Z',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2339&q=80',
    featured: true,
    published: true,
    tags: ['marketing', 'branding', 'strategy'],
    createdAt: '2024-01-15T00:00:00.000Z',
    updatedAt: '2024-01-15T00:00:00.000Z'
  },
  {
    id: 'sustainable-stickers',
    title: 'Sustainable Stickers: Eco-Friendly Options for Conscious Brands',
    excerpt: 'Learn about environmentally friendly sticker materials and printing processes. Discover how to make your sticker campaigns more sustainable without compromising on quality.',
    content: '', // Will be loaded from file
    slug: 'sustainable-stickers',
    author: 'Mike Chen',
    authorRole: 'Sustainability Expert',
    date: '2024-01-10T00:00:00.000Z',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2313&q=80',
    featured: false,
    published: true,
    tags: ['sustainability', 'eco-friendly', 'materials'],
    createdAt: '2024-01-10T00:00:00.000Z',
    updatedAt: '2024-01-10T00:00:00.000Z'
  }
];

// In-memory storage for development (in production, use a database)
let blogPosts = [...mockBlogPosts];

export async function GET(request: NextRequest) {
  try {
    // In development mode, skip session check if there are JWT issues
    const isDev = process.env.NODE_ENV === 'development';
    
    if (!isDev) {
      const session = await getServerSession(authOptions);
      if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
    }

    console.log('Development mode: Returning mock blog posts');
    
    return NextResponse.json({ 
      posts: blogPosts.map(post => ({
        ...post,
        content: post.content.substring(0, 200) + '...' // Truncate content for list view
      }))
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const {
      title,
      excerpt,
      content,
      slug,
      author,
      authorRole,
      readTime,
      image,
      featured,
      published,
      tags,
      date
    } = body;

    // Validate required fields
    if (!title || !excerpt || !content || !slug || !author || !readTime) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Check if slug already exists
    if (blogPosts.some(post => post.slug === slug)) {
      return NextResponse.json({ error: 'Slug already exists' }, { status: 400 });
    }

    // Create new blog post
    const newPost = {
      id: slug,
      title,
      excerpt,
      content,
      slug,
      author,
      authorRole: authorRole || 'Content Writer',
      date: date || new Date().toISOString(),
      readTime,
      image: image || '',
      featured: featured || false,
      published: published || false,
      tags: tags || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Add to in-memory storage
    blogPosts.push(newPost);

    // In development, also create the actual page file
    try {
      const pageContent = generateBlogPageContent(newPost);
      const pagePath = path.join(process.cwd(), 'app', 'blog', slug, 'page.tsx');
      
      // Create directory if it doesn't exist
      const dir = path.dirname(pagePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(pagePath, pageContent, 'utf8');
      console.log(`Created blog page: ${pagePath}`);
    } catch (fileError) {
      console.error('Error creating blog page file:', fileError);
      // Don't fail the API call if file creation fails
    }

    return NextResponse.json({ post: newPost }, { status: 201 });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

function generateBlogPageContent(post: any): string {
  return `import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${post.title} | StickerFly Blog',
  description: '${post.excerpt}',
  openGraph: {
    title: '${post.title}',
    description: '${post.excerpt}',
    images: ['${post.image}'],
  },
};

export default function ${post.slug.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join('')}Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              ${post.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              ${post.excerpt}
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <span className="font-medium text-gray-900">${post.author}</span>
                <span className="ml-1">${post.authorRole}</span>
              </div>
              <span>•</span>
              <span>${new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>•</span>
              <span>${post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      ${post.image ? `<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
          <Image
            src="${post.image}"
            alt="${post.title}"
            fill
            className="object-cover"
          />
        </div>
      </div>` : ''}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: \`${post.content.replace(/`/g, '\\`')}\` }} />
        </div>

        {/* Tags */}
        ${post.tags && post.tags.length > 0 ? `<div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            ${post.tags.map((tag: string) => `<span key="${tag}" className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
              ${tag}
            </span>`).join('\n            ')}
          </div>
        </div>` : ''}

        {/* CTA Section */}
        <div className="mt-16 bg-primary-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Create Amazing Stickers?
          </h3>
          <p className="text-gray-600 mb-6">
            Get started with our custom sticker printing services today.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}`;
} 