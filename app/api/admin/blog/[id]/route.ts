import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../../auth/options';
import fs from 'fs';
import path from 'path';

// Mock blog posts data for development (same as in main route)
const mockBlogPosts = [
  {
    id: 'creative-sticker-marketing',
    title: 'Creative Sticker Marketing: 10 Innovative Strategies to Boost Your Brand',
    excerpt: 'Discover innovative ways to use stickers in your marketing campaigns. From guerrilla marketing to user-generated content, learn how to make your brand stick in customers\' minds.',
    content: `<h2>Introduction</h2>
<p>In today's competitive marketplace, brands are constantly seeking innovative ways to capture attention and create lasting impressions. Stickers, often overlooked as a marketing tool, offer unique opportunities for creative brand promotion that can yield impressive results.</p>

<h2>1. Guerrilla Marketing Campaigns</h2>
<p>Transform urban spaces into your canvas with strategic sticker placement. Create eye-catching designs that spark curiosity and encourage social sharing.</p>

<h2>2. Limited Edition Collections</h2>
<p>Generate excitement and urgency by releasing limited edition sticker series. This strategy works particularly well for building collector communities around your brand.</p>

<h2>3. User-Generated Content</h2>
<p>Encourage customers to share photos of your stickers in creative locations. This organic content creation amplifies your reach while building community engagement.</p>

<h2>4. Event Marketing</h2>
<p>Use stickers as memorable giveaways at trade shows, conferences, and community events. They serve as lasting reminders of your brand long after the event ends.</p>

<h2>5. Loyalty Programs</h2>
<p>Implement sticker-based loyalty programs where customers collect different designs to unlock rewards. This gamification increases repeat purchases and brand loyalty.</p>

<h2>6. Packaging Enhancement</h2>
<p>Transform ordinary packaging into premium experiences with custom stickers. They add personality and can turn unboxing into a shareable moment.</p>

<h2>7. Community Building</h2>
<p>Create stickers that represent membership in your brand community. These identity markers help customers feel part of something larger than themselves.</p>

<h2>8. Cross-Promotion Partnerships</h2>
<p>Collaborate with complementary brands to create co-branded stickers. This strategy expands your reach to new audiences while sharing marketing costs.</p>

<h2>9. Educational Content</h2>
<p>Design informative stickers that provide value beyond branding. Tips, facts, or how-to guides make your stickers useful and more likely to be kept.</p>

<h2>10. Seasonal Campaigns</h2>
<p>Align sticker designs with holidays, seasons, or trending topics. This relevance increases engagement and provides natural conversation starters.</p>

<h2>Measuring Success</h2>
<p>Track the effectiveness of your sticker campaigns through:</p>
<ul>
<li>Social media mentions and hashtag usage</li>
<li>QR code scans or unique URL visits</li>
<li>Customer surveys and feedback</li>
<li>Sales data correlation with campaign periods</li>
</ul>

<h2>Design Tips for Maximum Impact</h2>
<p>Create stickers that people want to display:</p>
<ul>
<li>Use bold, contrasting colors</li>
<li>Keep text minimal and readable</li>
<li>Ensure designs work at small sizes</li>
<li>Consider die-cut shapes for uniqueness</li>
</ul>

<h2>Future Trends</h2>
<p>Stay ahead of the curve by exploring:</p>
<ul>
<li>Augmented reality integration</li>
<li>Sustainable materials and processes</li>
<li>Interactive elements like scratch-off features</li>
<li>Smart stickers with NFC technology</li>
</ul>

<h2>Conclusion</h2>
<p>Sticker marketing offers endless possibilities for creative brand expression. By implementing these strategies thoughtfully and measuring their impact, you can create memorable campaigns that stick with your audience long after the initial interaction.</p>`,
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
    content: `<h2>The Environmental Impact of Traditional Stickers</h2>
<p>Traditional stickers often rely on vinyl materials and petroleum-based adhesives that can persist in the environment for decades. As brands become more environmentally conscious, the demand for sustainable alternatives has grown significantly.</p>

<h2>Sustainable Material Options</h2>

<h3>Paper-Based Stickers</h3>
<p>Paper stickers made from recycled content or sustainably sourced materials offer an excellent eco-friendly alternative. They're biodegradable and can be recycled along with other paper products.</p>

<h3>Biodegradable Films</h3>
<p>New biodegradable film materials break down naturally over time, reducing long-term environmental impact while maintaining durability during use.</p>

<h3>Recycled Content Materials</h3>
<p>Stickers made from post-consumer recycled materials help close the loop on waste streams while reducing the need for virgin materials.</p>

<h3>Stone Paper</h3>
<p>Made from calcium carbonate, stone paper requires no water or chemicals in production and is naturally biodegradable.</p>

<h2>Eco-Friendly Printing Processes</h2>

<h3>Water-Based Inks</h3>
<p>Unlike solvent-based inks, water-based alternatives contain fewer volatile organic compounds (VOCs) and are safer for both the environment and workers.</p>

<h3>Soy-Based Inks</h3>
<p>Derived from soybeans, these inks are renewable, biodegradable, and produce vibrant colors while reducing environmental impact.</p>

<h3>Digital Printing</h3>
<p>Digital printing processes often use less energy and produce less waste compared to traditional offset printing methods.</p>

<h2>Sustainable Production Methods</h2>

<h3>Renewable Energy</h3>
<p>Choose printing partners who use renewable energy sources like solar or wind power for their operations.</p>

<h3>Waste Reduction</h3>
<p>Look for printers who implement waste reduction strategies, including recycling programs for production scraps and efficient material usage.</p>

<h3>Local Production</h3>
<p>Reducing transportation distances by choosing local suppliers can significantly decrease the carbon footprint of your sticker orders.</p>

<h2>Design Considerations for Sustainability</h2>

<h3>Minimize Material Usage</h3>
<p>Efficient design layouts that maximize the number of stickers per sheet reduce material waste and production costs.</p>

<h3>Avoid Lamination When Possible</h3>
<p>While lamination adds durability, it can complicate recycling. Consider whether your application truly requires this additional layer.</p>

<h3>Choose Appropriate Sizes</h3>
<p>Right-sizing your stickers prevents over-consumption of materials while ensuring they serve their intended purpose effectively.</p>

<h2>Cost Considerations</h2>
<p>While sustainable options may have higher upfront costs, consider the total cost of ownership:</p>
<ul>
<li>Brand reputation benefits</li>
<li>Customer loyalty from environmentally conscious consumers</li>
<li>Potential regulatory compliance advantages</li>
<li>Long-term cost stability as sustainable materials become mainstream</li>
</ul>

<h2>Case Study: Patagonia's Approach</h2>
<p>Outdoor clothing company Patagonia has successfully implemented sustainable sticker practices by using recycled paper materials and soy-based inks for their product labels and promotional stickers. This approach aligns with their brand values and resonates with their environmentally conscious customer base.</p>

<h2>Certification Programs</h2>
<p>Look for certifications that verify environmental claims:</p>
<ul>
<li>Forest Stewardship Council (FSC) certification</li>
<li>Sustainable Forestry Initiative (SFI) certification</li>
<li>Cradle to Cradle certification</li>
<li>GREENGUARD certification for low emissions</li>
</ul>

<h2>Future Innovations</h2>
<p>The sustainable sticker industry continues to evolve with innovations like:</p>
<ul>
<li>Algae-based materials</li>
<li>Mushroom-derived adhesives</li>
<li>Compostable films</li>
<li>Plant-based barrier coatings</li>
</ul>

<h2>Implementation Strategy</h2>
<p>To transition to sustainable stickers:</p>
<ol>
<li>Audit your current sticker usage and environmental impact</li>
<li>Research sustainable alternatives that meet your performance requirements</li>
<li>Start with a pilot program to test materials and processes</li>
<li>Communicate your sustainability efforts to customers</li>
<li>Continuously evaluate and improve your approach</li>
</ol>

<h2>Conclusion</h2>
<p>Sustainable stickers represent more than just an environmental choice—they're a strategic business decision that can enhance brand reputation, attract conscious consumers, and contribute to a more sustainable future. By carefully selecting materials, processes, and partners, brands can maintain quality while reducing their environmental footprint.</p>`,
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

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const postId = params.id;
    const post = blogPosts.find(p => p.id === postId);

    if (!post) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    return NextResponse.json({ post });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const postId = params.id;
    const body = await request.json();
    
    const postIndex = blogPosts.findIndex(p => p.id === postId);
    if (postIndex === -1) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

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
      tags
    } = body;

    // Validate required fields
    if (!title || !excerpt || !content || !slug || !author || !readTime) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Check if slug already exists (excluding current post)
    if (slug !== blogPosts[postIndex].slug && blogPosts.some(post => post.slug === slug)) {
      return NextResponse.json({ error: 'Slug already exists' }, { status: 400 });
    }

    // Update the post
    const updatedPost = {
      ...blogPosts[postIndex],
      title,
      excerpt,
      content,
      slug,
      author,
      authorRole: authorRole || 'Content Writer',
      readTime,
      image: image || '',
      featured: featured || false,
      published: published || false,
      tags: tags || [],
      updatedAt: new Date().toISOString()
    };

    blogPosts[postIndex] = updatedPost;

    // Update the page file if slug changed
    if (slug !== postId) {
      try {
        // Remove old file
        const oldPagePath = path.join(process.cwd(), 'app', 'blog', postId, 'page.tsx');
        if (fs.existsSync(oldPagePath)) {
          fs.rmSync(path.dirname(oldPagePath), { recursive: true, force: true });
        }

        // Create new file
        const pageContent = generateBlogPageContent(updatedPost);
        const newPagePath = path.join(process.cwd(), 'app', 'blog', slug, 'page.tsx');
        
        const dir = path.dirname(newPagePath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        
        fs.writeFileSync(newPagePath, pageContent, 'utf8');
        console.log(`Updated blog page: ${newPagePath}`);
      } catch (fileError) {
        console.error('Error updating blog page file:', fileError);
      }
    } else {
      // Update existing file
      try {
        const pageContent = generateBlogPageContent(updatedPost);
        const pagePath = path.join(process.cwd(), 'app', 'blog', slug, 'page.tsx');
        fs.writeFileSync(pagePath, pageContent, 'utf8');
        console.log(`Updated blog page: ${pagePath}`);
      } catch (fileError) {
        console.error('Error updating blog page file:', fileError);
      }
    }

    return NextResponse.json({ post: updatedPost });
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const postId = params.id;
    const body = await request.json();
    
    const postIndex = blogPosts.findIndex(p => p.id === postId);
    if (postIndex === -1) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    // Update only the provided fields
    const updatedPost = {
      ...blogPosts[postIndex],
      ...body,
      updatedAt: new Date().toISOString()
    };

    blogPosts[postIndex] = updatedPost;

    return NextResponse.json({ post: updatedPost });
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const postId = params.id;
    const postIndex = blogPosts.findIndex(p => p.id === postId);
    
    if (postIndex === -1) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    const post = blogPosts[postIndex];
    
    // Remove from in-memory storage
    blogPosts.splice(postIndex, 1);

    // Remove the page file
    try {
      const pagePath = path.join(process.cwd(), 'app', 'blog', post.slug);
      if (fs.existsSync(pagePath)) {
        fs.rmSync(pagePath, { recursive: true, force: true });
        console.log(`Deleted blog page: ${pagePath}`);
      }
    } catch (fileError) {
      console.error('Error deleting blog page file:', fileError);
    }

    return NextResponse.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog post:', error);
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