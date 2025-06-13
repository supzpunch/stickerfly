# StickerFly

StickerFly is a full-stack e-commerce website for selling custom die-cut, weather-resistant stickers. The application is built with Next.js, TypeScript, Tailwind CSS, and MongoDB.

## Features

- User authentication (signup/login) using NextAuth.js
- Product catalog with filtering by categories
- Custom sticker design upload functionality with Cloudinary integration
- Shopping cart and checkout system
- Order management for both users and admins
- Responsive design for all device sizes

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** MongoDB with Mongoose
- **Authentication:** NextAuth.js
- **Image Storage:** Cloudinary
- **Forms:** React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- MongoDB (local or Atlas)
- Cloudinary account (for image uploads)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/stickerfly.git
   cd stickerfly
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add the following environment variables:
   ```
   # MongoDB Connection String
   MONGODB_URI=your_mongodb_connection_string

   # NextAuth Configuration
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret_key

   # Cloudinary Configuration
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/` - Next.js app directory containing pages and API routes
- `components/` - Reusable React components
- `lib/` - Utility functions and database connection
- `models/` - Mongoose models for MongoDB
- `public/` - Static assets

## Deployment

The application is designed to be deployed using Coolify on a self-hosted server. Follow these steps for deployment:

1. Set up a Coolify instance on your server
2. Connect your GitHub repository to Coolify
3. Configure the environment variables
4. Deploy the application

## License

This project is licensed under the MIT License. 