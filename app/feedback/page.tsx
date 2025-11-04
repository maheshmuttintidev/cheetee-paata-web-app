'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Send, CheckCircle, AlertCircle, Star } from 'lucide-react';

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'general',
    rating: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating: rating.toString() }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Create mailto link with form data
    const subject = `Cheetee Paata Feedback - ${formData.category.charAt(0).toUpperCase() + formData.category.slice(1)}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Category: ${formData.category}
Rating: ${formData.rating}/5 stars

Message:
${formData.message}

---
Submitted via Cheetee Paata Feedback Form
Date: ${new Date().toLocaleString()}
    `.trim();

    const mailtoLink = `mailto:cheeteepaata@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;

    // Show success message after a short delay
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        category: 'general',
        rating: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageSquare className="h-10 w-10 text-orange-600" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Feedback
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Help us improve <strong>Cheetee Paata</strong> - Share your thoughts, report bugs, or request features
          </p>
        </div>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <Card className="mb-8 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
            <CardHeader>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <CardTitle className="text-green-900 dark:text-green-100">
                    Thank You!
                  </CardTitle>
                  <CardDescription className="text-green-700 dark:text-green-300">
                    Your email client has been opened with your feedback. Please send the email to complete the submission.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        )}

        {/* Feedback Form */}
        <Card>
          <CardHeader>
            <CardTitle>Share Your Feedback</CardTitle>
            <CardDescription>
              Your feedback helps us make Cheetee Paata better for everyone
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Category Field */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Feedback Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                >
                  <option value="general">General Feedback</option>
                  <option value="bug">Bug Report</option>
                  <option value="feature">Feature Request</option>
                  <option value="ui">UI/UX Improvement</option>
                  <option value="performance">Performance Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Rating Field */}
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
                  How would you rate your experience? <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingClick(star)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`h-10 w-10 ${
                          formData.rating && parseInt(formData.rating) >= star
                            ? 'fill-orange-500 text-orange-500'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                {formData.rating && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {formData.rating === '5' && '⭐ Excellent!'}
                    {formData.rating === '4' && '👍 Very Good'}
                    {formData.rating === '3' && '😊 Good'}
                    {formData.rating === '2' && '😐 Fair'}
                    {formData.rating === '1' && '😞 Needs Improvement'}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-800 dark:text-white resize-none"
                  placeholder="Tell us what you think... Please be as detailed as possible."
                />
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Minimum 10 characters
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting || !formData.rating || formData.message.length < 10}
              >
                <Send className="mr-2 h-5 w-5" />
                {isSubmitting ? 'Opening Email Client...' : 'Submit Feedback'}
              </Button>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Your feedback will be sent to <strong>cheeteepaata@gmail.com</strong>
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Why We Value Your Feedback */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Why Your Feedback Matters</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Product Improvement:</strong> Your insights help us prioritize features and fixes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Bug Detection:</strong> Early reporting helps us maintain app stability</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Feature Requests:</strong> We build features that our users actually need</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Community Building:</strong> Your voice shapes the future of Cheetee Paata</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* What Happens Next */}
        <Card className="mt-8 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="text-blue-900 dark:text-blue-100">
              What Happens Next?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <span>Your email client will open with your feedback pre-filled</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <span>Send the email to complete your submission</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <span>Our team will review your feedback within <strong>48 hours</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <span>For critical bugs or important features, we'll respond directly to your email</span>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Alternative Contact */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Prefer Direct Contact?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You can also send feedback directly to:
            </p>
            <a 
              href="mailto:cheeteepaata@gmail.com"
              className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 font-semibold text-lg"
            >
              cheeteepaata@gmail.com
            </a>
          </CardContent>
        </Card>

        {/* Footer Links */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex justify-center gap-6 text-sm">
            <Link href="/" className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300">
              Back to Home
            </Link>
            <Link href="/privacy-policy" className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300">
              Terms of Service
            </Link>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 Cheetee Paata. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
