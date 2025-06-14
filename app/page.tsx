import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative flex flex-col items-center">
          <h1 className="text-4xl font-bold text-center mb-6">Welcome to StickerFly</h1>
          <div className="relative w-full max-w-3xl h-80 mb-8">
            <Image
              src="/images/stickerfly_main.jpg"
              alt="StickerFly - Custom Stickers for Your Business"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <p className="text-xl text-center max-w-2xl mb-8">
            High-quality custom stickers for your business, brand, or personal projects.
            Made in the UK, shipped nationwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link
              href="/products"
              className="px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
            >
              Shop Products
            </Link>
            <Link
              href="/custom-order"
              className="px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-md hover:bg-primary-50 transition-colors"
            >
              Create Custom Order
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <Link
            href="/products"
            className="group rounded-lg border border-transparent p-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Products{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 text-sm opacity-70">
              Browse our collection of premium stickers and labels.
            </p>
          </Link>

          <Link
            href="/custom-order"
            className="group rounded-lg border border-transparent p-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Custom Orders{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 text-sm opacity-70">
              Create personalized stickers with your own designs.
            </p>
          </Link>

          <Link
            href="/blog"
            className="group rounded-lg border border-transparent p-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Blog{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 text-sm opacity-70">
              Tips and insights about stickers and branding.
            </p>
          </Link>

          <Link
            href="/contact"
            className="group rounded-lg border border-transparent p-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Contact{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 text-sm opacity-70">
              Get in touch with our friendly support team.
            </p>
          </Link>
        </div>
      </div>
    </main>
  )
} 