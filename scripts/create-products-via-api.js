// Script to create sample products via the deployed application's API
const { default: fetch } = require('node-fetch');

// Your deployed application URL
const BASE_URL = 'http://t80gg8g40cc4cwg4kk0gsgsk.94.72.109.103.sslip.io';

// Sample products with fly theme
const sampleProducts = [
  {
    name: "Fly High Logo Stickers",
    description: "Premium die-cut logo stickers that make your brand soar! Perfect for laptops, water bottles, and promotional materials. Weather-resistant and fade-proof.",
    price: 4.99,
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop",
    category: "logo",
    featured: true
  },
  {
    name: "Butterfly Dreams Collection",
    description: "Beautiful butterfly stickers that flutter with elegance. These colorful designs add a touch of nature to any surface. Set of 6 different butterfly designs.",
    price: 6.99,
    imageUrl: "https://images.unsplash.com/photo-1444927714506-8492d94b5ba0?w=400&h=400&fit=crop",
    category: "decorative",
    featured: true
  },
  {
    name: "Dragonfly Magic Stickers",
    description: "Iridescent dragonfly stickers that shimmer in the light. These mystical creatures bring good luck and positive energy wherever they land.",
    price: 5.99,
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop",
    category: "decorative"
  },
  {
    name: "Bee Happy Character Pack",
    description: "Adorable cartoon bee characters that spread joy and positivity! Perfect for kids' laptops, notebooks, and room decorations. Buzz with happiness!",
    price: 7.99,
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category: "character",
    featured: true
  },
  {
    name: "Ladybug Lucky Charms",
    description: "Cute ladybug stickers that bring good fortune! These spotted beauties are perfect for planners, phones, and anywhere you need a little luck.",
    price: 4.49,
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop",
    category: "character"
  },
  {
    name: "Firefly Glow Collection",
    description: "Magical firefly stickers that seem to glow with inner light. These enchanting insects create a whimsical atmosphere wherever they're placed.",
    price: 8.99,
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop",
    category: "decorative"
  },
  {
    name: "Wings of Freedom Logo Set",
    description: "Inspirational wing-themed logo stickers for businesses and personal brands. Let your brand take flight with these elegant wing designs.",
    price: 9.99,
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop",
    category: "logo"
  },
  {
    name: "Moth to the Flame Vintage",
    description: "Vintage-style moth stickers with an antique aesthetic. These mysterious night creatures add a gothic charm to any surface.",
    price: 6.49,
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop",
    category: "decorative"
  },
  {
    name: "Hummingbird Hover Pack",
    description: "Vibrant hummingbird stickers captured in mid-flight. These tiny speedsters bring energy and vitality to your favorite items.",
    price: 7.49,
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop",
    category: "character"
  },
  {
    name: "Fly Away Dreams",
    description: "Whimsical flying-themed stickers featuring clouds, birds, and inspirational quotes. Perfect for dreamers and adventurers at heart.",
    price: 5.49,
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop",
    category: "decorative"
  },
  {
    name: "Buzzing Business Logos",
    description: "Professional bee and hive-themed logo stickers for businesses. Show your industrious nature and team spirit with these buzzing designs.",
    price: 11.99,
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop",
    category: "logo"
  },
  {
    name: "Flutter By Fairy Tales",
    description: "Magical fairy and butterfly combination stickers that tell enchanting stories. Perfect for children's rooms and fairy tale enthusiasts.",
    price: 8.49,
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop",
    category: "character"
  }
];

async function createProductsViaAPI() {
  console.log('🚀 Starting to create sample products via API...');
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const product of sampleProducts) {
    try {
      console.log(`Creating: ${product.name}...`);
      
      const response = await fetch(`${BASE_URL}/api/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log(`✅ Created: ${product.name} - $${product.price}`);
        successCount++;
      } else {
        const error = await response.text();
        console.log(`❌ Failed to create ${product.name}: ${response.status} - ${error}`);
        errorCount++;
      }
      
      // Small delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 500));
      
    } catch (error) {
      console.log(`❌ Error creating ${product.name}:`, error.message);
      errorCount++;
    }
  }
  
  console.log('\n📊 Summary:');
  console.log(`✅ Successfully created: ${successCount} products`);
  console.log(`❌ Failed to create: ${errorCount} products`);
  console.log(`🎯 Total attempted: ${sampleProducts.length} products`);
  
  if (successCount > 0) {
    console.log(`\n🎉 Great! You can now visit ${BASE_URL}/products to see your new fly-themed sticker collection!`);
  }
}

// Run the script
createProductsViaAPI().catch(console.error); 