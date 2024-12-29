import React from 'react';
import { Shield } from 'lucide-react';

export function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <header className="text-center">
        <div className="flex justify-center mb-4">
          <Shield className="h-12 w-12 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
        <p className="text-lg text-gray-600">
          How we protect and handle your information
        </p>
      </header>

      <section className="prose prose-green max-w-none">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed">
              GardeningMath is committed to protecting your privacy. Our calculators and tools operate 
              entirely in your browser - we don't collect or store any personal information about your 
              garden plans or calculations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Information</h2>
            <p className="text-gray-600 leading-relaxed">
              We use anonymous analytics data to understand how our tools are being used and to make 
              improvements. This includes:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
              <li>Pages visited</li>
              <li>Time spent on site</li>
              <li>Browser type and device information</li>
              <li>Geographic region (country level only)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              We use essential cookies to improve your experience on our website. These cookies are 
              necessary for the website to function properly and cannot be switched off in our systems.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Third-Party Services</h2>
            <p className="text-gray-600 leading-relaxed">
              We use trusted third-party services for:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
              <li>Website analytics (Google Analytics)</li>
              <li>Content delivery networks (CDN)</li>
              <li>Hosting services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect any 
              information we might collect. However, please note that no method of transmission over 
              the internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes 
              by posting the new privacy policy on this page.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this privacy policy or our practices, please contact us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}