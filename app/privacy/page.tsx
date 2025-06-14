import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Last updated: June 15, 2025
          </p>
        </div>

        <div className="prose prose-lg text-gray-500">
          <p>
            StickerFly ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by StickerFly.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Information You Provide to Us</h3>
          <p>
            We collect information you provide directly to us when you:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Create an account or profile</li>
            <li>Place an order for products</li>
            <li>Upload designs for custom stickers</li>
            <li>Contact our customer service</li>
            <li>Subscribe to our newsletters</li>
            <li>Participate in surveys, contests, or promotions</li>
          </ul>
          
          <p className="mt-4">
            This information may include your name, email address, postal address, phone number, payment information, and any other information you choose to provide.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Information We Collect Automatically</h3>
          <p>
            When you access or use our website, we automatically collect certain information, including:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Log information (IP address, browser type, pages viewed)</li>
            <li>Device information</li>
            <li>Location information</li>
            <li>Cookie data</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Process and fulfill your orders</li>
            <li>Provide, maintain, and improve our services</li>
            <li>Send you technical notices, updates, and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Communicate with you about products, services, offers, and promotions</li>
            <li>Monitor and analyze trends, usage, and activities</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            <li>Personalize and improve your experience</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sharing of Information</h2>
          <p>
            We may share your personal information with:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Vendors, consultants, and service providers who need access to such information to carry out work on our behalf</li>
            <li>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process</li>
            <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of StickerFly or others</li>
            <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company</li>
            <li>With your consent or at your direction</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Retention</h2>
          <p>
            We store the information we collect about you for as long as is necessary for the purpose(s) for which we originally collected it. We may retain certain information for legitimate business purposes or as required by law.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, such as:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Accessing, correcting, or deleting your personal information</li>
            <li>Objecting to our use of your personal information</li>
            <li>Requesting that we restrict certain processing</li>
            <li>Requesting a copy of your personal information</li>
            <li>Withdrawing your consent</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mt-2">
            Email: <a href="mailto:swarnes@protonmail.com" className="text-primary-600 hover:text-primary-500">swarnes@protonmail.com</a>
          </p>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <Link href="/" className="text-primary-600 hover:text-primary-900 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 