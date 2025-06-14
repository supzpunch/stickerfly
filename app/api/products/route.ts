import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Product } from '@/models/Product';

// Define size type
interface Size {
  width: number;
  height: number;
  unit: string;
}

// GET all products
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const isCustom = searchParams.get('isCustom');
    
    const query: any = {};
    
    if (category) {
      query.category = category;
    }
    
    if (isCustom !== null) {
      query.isCustom = isCustom === 'true';
    }
    
    await connectToDatabase();
    const products = await Product.find(query).sort({ createdAt: -1 });
    
    return NextResponse.json({ products });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

// POST create new product (admin only)
export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    console.log('Received product data:', JSON.stringify(data));
    
    // Validate required fields
    if (!data.name || !data.description || !data.price || !data.category) {
      console.error('Missing required fields:', {
        name: !!data.name,
        description: !!data.description,
        price: !!data.price,
        category: !!data.category
      });
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Ensure sizes array is properly formatted
    if (data.sizes && Array.isArray(data.sizes)) {
      // Make sure each size has the required properties
      data.sizes = data.sizes.map((size: string | Size | any) => {
        if (typeof size === 'string') {
          // Handle legacy string format
          return size;
        } else if (typeof size === 'object') {
          // Ensure object has required properties
          return {
            width: size.width || 0,
            height: size.height || 0,
            unit: size.unit || 'in'
          };
        }
        return size;
      });
    }
    
    // Ensure images array exists
    if (!data.images) {
      data.images = [];
    }
    
    // If imageUrl is provided but not in images, add it
    if (data.imageUrl && !data.images.includes(data.imageUrl)) {
      data.images.push(data.imageUrl);
    }
    
    await connectToDatabase();
    
    try {
      const product = await Product.create(data);
      console.log('Product created successfully:', product._id);
      return NextResponse.json({ product }, { status: 201 });
    } catch (mongoError: any) {
      console.error('MongoDB error creating product:', mongoError);
      return NextResponse.json(
        { error: `Database error: ${mongoError.message}` },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { error: `Failed to create product: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
} 