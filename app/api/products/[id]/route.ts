import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Product } from '@/models/Product';

const isDev = process.env.NODE_ENV === 'development';

// GET single product by ID
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    // In development without MongoDB, return mock data
    if (isDev && !process.env.MONGODB_URI) {
      console.log('Development mode: Returning mock product');
      const mockProduct = {
        _id: id,
        name: 'Mock Product',
        description: 'This is a mock product for development',
        price: 9.99,
        category: 'logo',
        imageUrl: '/placeholder-image.jpg',
        sizes: [{ width: 3, height: 3, unit: 'in' }],
        isCustom: false,
        featured: false,
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      return NextResponse.json({ product: mockProduct });
    }
    
    await connectToDatabase();
    const product = await Product.findById(id);
    
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ product });
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}

// PUT update product by ID (admin only)
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await request.json();
    
    // In development without MongoDB, return mock success
    if (isDev && !process.env.MONGODB_URI) {
      console.log('Development mode: Updating mock product');
      const mockProduct = {
        _id: id,
        ...data,
        updatedAt: new Date()
      };
      return NextResponse.json({ product: mockProduct });
    }
    
    await connectToDatabase();
    
    const product = await Product.findByIdAndUpdate(
      id,
      data,
      { new: true, runValidators: true }
    );
    
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ product });
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 }
    );
  }
}

// DELETE product by ID (admin only)
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    // In development without MongoDB, return mock success
    if (isDev && !process.env.MONGODB_URI) {
      console.log('Development mode: Deleting mock product');
      return NextResponse.json(
        { message: 'Product deleted successfully' }
      );
    }
    
    await connectToDatabase();
    const product = await Product.findByIdAndDelete(id);
    
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { message: 'Product deleted successfully' }
    );
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 500 }
    );
  }
}
