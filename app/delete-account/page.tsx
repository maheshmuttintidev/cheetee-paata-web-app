import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AlertCircle, Mail, Trash2, Database, Clock, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Delete Account - Cheetee Paata',
  description: 'Request deletion of your Cheetee Paata account and associated data. Learn about what data is deleted, what is retained, and how long the process takes.',
};

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trash2 className="h-10 w-10 text-orange-600" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Delete Your Account
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Request deletion of your <strong>Cheetee Paata</strong> account and associated data
          </p>
        </div>

        {/* Important Notice */}
        <Card className="mb-8 border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/20">
          <CardHeader>
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
              <div>
                <CardTitle className="text-orange-900 dark:text-orange-100">
                  Important Notice
                </CardTitle>
                <CardDescription className="text-orange-700 dark:text-orange-300">
                  Account deletion is permanent and cannot be undone. Please read this page carefully before proceeding.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Steps to Delete Account */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-6 w-6 text-orange-600" />
              How to Request Account Deletion
            </CardTitle>
            <CardDescription>
              Follow these steps to request deletion of your Cheetee Paata account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Send a Deletion Request Email</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Send an email to our support team with the subject line: <strong>&ldquo;Account Deletion Request&rdquo;</strong>
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Email Address:</p>
                    <a 
                      href="mailto:cheeteepaata@gmail.com?subject=Account%20Deletion%20Request"
                      className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 font-semibold text-lg"
                    >
                      cheeteepaata@gmail.com
                    </a>
                  </div>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Include Required Information</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    In your email, please provide the following details:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Your registered email address or phone number used in the app</li>
                    <li>Your full name (as registered in the app)</li>
                    <li>Confirmation that you want to permanently delete your account</li>
                    <li>Optional: Reason for deletion (helps us improve our service)</li>
                  </ul>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Verification Process</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We will verify your identity and send you a confirmation email within <strong>48 hours</strong>. 
                    You may be asked to confirm your request one more time for security purposes.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Account Deletion Completed</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Once verified, your account and associated data will be permanently deleted within <strong>30 days</strong>, 
                    and you will receive a final confirmation email.
                  </p>
                </div>
              </li>
            </ol>

            <div className="mt-8">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="mailto:cheeteepaata@gmail.com?subject=Account%20Deletion%20Request&body=Hello%20Cheetee%20Paata%20Team%2C%0A%0AI%20would%20like%20to%20request%20the%20deletion%20of%20my%20account.%0A%0ARegistered%20Email%2FPhone%3A%20%5BEnter%20your%20email%20or%20phone%5D%0AFull%20Name%3A%20%5BEnter%20your%20name%5D%0A%0AI%20understand%20that%20this%20action%20is%20permanent%20and%20cannot%20be%20undone.%0A%0AThank%20you.">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Deletion Request Email
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        {/* What Data is Deleted */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-6 w-6 text-red-600" />
              Data That Will Be Deleted
            </CardTitle>
            <CardDescription>
              The following data will be permanently removed from our systems
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Trash2 className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Personal Information:</strong> Name, email address, phone number, and profile details
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Trash2 className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Chit Fund Data:</strong> All chit groups you created or participated in, transaction records, and payment history
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Trash2 className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>User-Generated Content:</strong> Notes, comments, and any customizations you made within the app
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Trash2 className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Device Information:</strong> Device IDs, app usage analytics, and crash reports associated with your account
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Trash2 className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Authentication Data:</strong> Login credentials and session tokens
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* What Data is Retained */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-600" />
              Data That May Be Retained
            </CardTitle>
            <CardDescription>
              Certain data may be kept for legal, security, or operational purposes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Legal Compliance:</strong> Financial transaction records may be retained for up to <strong>7 years</strong> to comply with tax and financial regulations
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Security Logs:</strong> Anonymized security and fraud prevention logs may be retained for <strong>90 days</strong> to protect our systems
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Aggregated Analytics:</strong> De-identified, aggregated usage statistics that cannot be linked back to you may be retained indefinitely
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Backup Systems:</strong> Data in backup systems will be purged within <strong>90 days</strong> following the standard backup rotation cycle
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Retention Period */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-orange-600" />
              Data Retention Timeline
            </CardTitle>
            <CardDescription>
              How long different types of data are retained after deletion request
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-semibold">Account & Personal Data</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Name, email, phone, profile</p>
                </div>
                <span className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 px-3 py-1 rounded-full text-sm font-semibold">
                  30 days
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-semibold">Chit Fund Data</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Groups, transactions, payments</p>
                </div>
                <span className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 px-3 py-1 rounded-full text-sm font-semibold">
                  30 days
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-semibold">Backup Systems</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Automated backup purge cycle</p>
                </div>
                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
                  90 days
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-semibold">Financial Records (Legal Requirement)</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tax & regulatory compliance</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-semibold">
                  7 years
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Considerations */}
        <Card className="mb-8 border-amber-200 dark:border-amber-800">
          <CardHeader>
            <CardTitle className="text-amber-900 dark:text-amber-100">
              Before You Delete Your Account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>Make sure to settle all pending chit fund contributions and claims before deletion</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>Download or export any data you wish to keep (transaction history, reports, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>Inform other members in your chit groups if you are an organizer or active participant</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>Cancel any recurring reminders or notifications you have set up</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>Account deletion cannot be reversed once the process is completed</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact Support */}
        <Card>
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
            <CardDescription>
              If you have questions about account deletion or data retention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our support team is here to help. Contact us at:
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
            <Link href="/privacy-policy" className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300">
              Terms of Service
            </Link>
            <Link href="/" className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300">
              Back to Home
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
