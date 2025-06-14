import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Privacy Policy
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              How we collect, use, and protect your personal information.
            </p>
            <div className="mt-8 flex items-center">
              <Link href="/" className="text-primary-600 hover:text-primary-900 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <div className="prose prose-lg text-gray-500 mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h3>
              <p>
                StickerFly ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from us.
              </p>
              <p className="mt-2">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h3>
                <p>
                  We collect information about you in various ways when you use our website:
                </p>
                <h4 className="text-lg font-medium text-gray-900 mt-4">Personal Information You Provide:</h4>
                <ul className="list-disc pl-5 mt-2 mb-4">
                  <li>Contact information (name, email address, postal address, phone number)</li>
                  <li>Billing information (credit card details, billing address)</li>
                  <li>Account information (username, password)</li>
                  <li>Order information (products purchased, order history)</li>
                  <li>Communication preferences</li>
                  <li>Custom design files and images you upload</li>
                </ul>

                <h4 className="text-lg font-medium text-gray-900 mt-4">Information Automatically Collected:</h4>
                <ul className="list-disc pl-5 mt-2 mb-4">
                  <li>Log data (IP address, browser type, pages visited, time spent)</li>
                  <li>Device information (device type, operating system)</li>
                  <li>Location information (general location based on IP address)</li>
                  <li>Cookie data (see our Cookie Policy section below)</li>
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h3>
                <p>
                  We may use the information we collect about you for various purposes, including to:
                </p>
                <ul className="list-disc pl-5 mt-2 mb-6">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you about your orders, products, and services</li>
                  <li>Provide customer support and respond to your inquiries</li>
                  <li>Improve our website, products, and services</li>
                  <li>Send you marketing communications (if you've opted in)</li>
                  <li>Detect and prevent fraud or unauthorized access</li>
                  <li>Comply with legal obligations</li>
                  <li>Enforce our terms and conditions</li>
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sharing Your Information</h3>
                <p>
                  We may share your personal information with:
                </p>
                <ul className="list-disc pl-5 mt-2 mb-6">
                  <li><strong>Service Providers:</strong> Companies that help us operate our business (payment processors, shipping companies, cloud storage providers)</li>
                  <li><strong>Marketing Partners:</strong> With your consent, we may share information with marketing partners</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                </ul>
                <p className="text-sm italic">
                  We do not sell your personal information to third parties.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cookie Policy</h3>
                <p>
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.
                </p>
                <p className="mt-2">
                  Types of cookies we use:
                </p>
                <ul className="list-disc pl-5 mt-2 mb-4">
                  <li><strong>Essential cookies:</strong> Necessary for the website to function properly</li>
                  <li><strong>Preference cookies:</strong> Enable the website to remember your preferences</li>
                  <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Marketing cookies:</strong> Used to track visitors across websites to display relevant advertisements</li>
                </ul>
                <p className="mt-2">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h3>
                <p>
                  We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
                </p>
                <p className="mt-2">
                  While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h3>
                <p>
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-5 mt-2 mb-6">
                  <li>Right to access your personal information</li>
                  <li>Right to rectify inaccurate information</li>
                  <li>Right to erasure ("right to be forgotten")</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                  <li>Right to withdraw consent</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the details provided below.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h3>
                <p>
                  Our website is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h3>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
                <p className="mt-2">
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h3>
                <p>
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="mt-4">
                  <p><strong>Email:</strong> <a href="mailto:privacy@stickerfly.com" className="text-primary-600 hover:text-primary-500">privacy@stickerfly.com</a></p>
                  <p><strong>Phone:</strong> 0800 123 4567 (Mon-Fri, 9am-5pm)</p>
                  <p><strong>Address:</strong> StickerFly Ltd, 123 Sticker Street, London, UK, SW1A 1AA</p>
                  <p className="mt-2">
                    <Link href="/contact" className="text-primary-600 hover:text-primary-500">
                      Contact form →
                    </Link>
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6 text-sm text-gray-500">
                <p>
                  This Privacy Policy was last updated on June 14, 2025.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
