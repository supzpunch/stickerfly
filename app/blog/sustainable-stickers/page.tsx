import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Sustainable Stickers: Eco-Friendly Options for Conscious Brands | StickerFly',
  description: 'Discover eco-friendly sticker materials and sustainable printing practices. Learn how to reduce environmental impact while maintaining quality and brand appeal.',
  keywords: 'sustainable stickers, eco-friendly stickers, biodegradable stickers, recyclable materials, green printing, environmental impact',
};

export default function SustainableStickers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <span className="text-4xl mr-3">🌱</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Sustainable Stickers
            </h1>
            <span className="text-4xl ml-3">🌱</span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Eco-Friendly Options for Environmentally Conscious Brands
          </p>
          <div className="flex items-center justify-center mt-6 text-gray-500">
            <span className="mr-4">📅 December 14, 2024</span>
            <span className="mr-4">⏱️ 9 min read</span>
            <span>🏷️ Sustainability</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2313&q=80"
            alt="Eco-friendly sustainable stickers made from recycled materials"
            width={1200}
            height={600}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                As environmental consciousness grows among consumers and businesses alike, the demand for sustainable alternatives in every aspect of marketing has never been higher. Stickers, while small, can make a significant impact when produced and disposed of responsibly.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-3">🌍</span>
                The Environmental Impact of Traditional Stickers
              </h2>

              <p className="text-gray-700 mb-6">
                Traditional stickers often rely on vinyl materials and petroleum-based adhesives that can take decades to decompose. With billions of stickers produced annually worldwide, the cumulative environmental impact is substantial.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                <h3 className="text-xl font-semibold text-red-900 mb-3">⚠️ Environmental Concerns</h3>
                <ul className="text-red-800 space-y-2">
                  <li>• Vinyl stickers can take 50-100 years to decompose</li>
                  <li>• Petroleum-based adhesives contribute to fossil fuel consumption</li>
                  <li>• Non-recyclable materials end up in landfills</li>
                  <li>• Chemical inks can release harmful substances</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-3">♻️</span>
                Sustainable Sticker Materials
              </h2>

              <div className="space-y-8">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Paper-Based Stickers</h3>
                  <p className="text-gray-700 mb-4">
                    Made from renewable wood pulp, paper stickers are biodegradable and recyclable. They work excellently for indoor applications and short-term outdoor use.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <strong className="text-green-900">Best For:</strong> Indoor applications, temporary promotions, packaging labels
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Biodegradable Films</h3>
                  <p className="text-gray-700 mb-4">
                    Advanced biodegradable films made from plant-based materials like corn starch or sugarcane offer durability similar to traditional vinyl while breaking down naturally.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <strong className="text-blue-900">Best For:</strong> Outdoor applications, long-term branding, weather-resistant needs
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 border border-primary-200 rounded-lg p-8 text-center mt-12">
                <h3 className="text-2xl font-bold text-primary-900 mb-4">Ready to Go Green with Your Stickers?</h3>
                <p className="text-primary-800 mb-6">
                  Join the sustainability movement with eco-friendly stickers that align with your brand values and customer expectations.
                </p>
                <Link href="/custom-order" className="btn-primary inline-flex items-center">
                  <span className="mr-2">🌱</span>
                  Order Sustainable Stickers
                </Link>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">📚</span>
              Related Articles
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/creative-sticker-marketing" className="group">
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">
                    Creative Sticker Marketing Strategies
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Discover innovative ways to use stickers in your marketing campaigns...
                  </p>
                </div>
              </Link>
              <Link href="/blog/stickers-customer-retention" className="group">
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">
                    How Stickers Boost Customer Retention
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Learn about the psychology behind customer loyalty and sticker collecting...
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
