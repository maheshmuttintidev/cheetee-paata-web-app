import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const metadata = {
  title: 'Privacy Policy - Cheetee Paata',
  description: 'Privacy Policy for Cheetee Paata - Digital Chit Fund Manager',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: November 4, 2025</p>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Introduction</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Welcome to Cheetee Paata (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the &quot;App&quot;).
            </p>
            <p>
              By using Cheetee Paata, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use the App.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="font-semibold text-lg">Personal Information</h3>
            <p>We collect the following personal information when you create an account and use our services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Information:</strong> Name, email address, phone number</li>
              <li><strong>Profile Information:</strong> Role (Member/Foreman), city, state, preferred language</li>
              <li><strong>Authentication Data:</strong> Encrypted password, authentication tokens</li>
            </ul>

            <Separator className="my-4" />

            <h3 className="font-semibold text-lg">Chit Fund Data</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Chit fund memberships and participation details</li>
              <li>Payment history and transaction records</li>
              <li>Auction participation and bidding information</li>
              <li>Communication between members and foremans</li>
            </ul>

            <Separator className="my-4" />

            <h3 className="font-semibold text-lg">Technical Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Device information (model, operating system version)</li>
              <li>App usage statistics (features used, session duration)</li>
              <li>Crash reports and error logs</li>
              <li>Language preferences and settings</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Provision:</strong> To provide and maintain the chit fund management functionality</li>
              <li><strong>User Authentication:</strong> To verify your identity and secure your account</li>
              <li><strong>Communication:</strong> To send you notifications about payments, auctions, and important updates</li>
              <li><strong>Personalization:</strong> To customize the app experience based on your language preference and role</li>
              <li><strong>Analytics:</strong> To understand how users interact with the App and improve our services</li>
              <li><strong>Security:</strong> To detect, prevent, and address fraud, security issues, and technical problems</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Firebase and Third-Party Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="font-semibold text-lg">Firebase Services</h3>
            <p>Cheetee Paata uses Google Firebase for backend services, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Firebase Authentication:</strong> For secure user login and account management</li>
              <li><strong>Cloud Firestore:</strong> For storing chit fund data, user profiles, and transaction records</li>
              <li><strong>Firebase Cloud Storage:</strong> For storing uploaded documents and images (if applicable)</li>
            </ul>
            <p className="mt-4">
              Firebase processes your data in accordance with Google&apos;s privacy policies. For more information, visit:{' '}
              <a href="https://firebase.google.com/support/privacy" className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Firebase Privacy & Security
              </a>
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Data Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We implement industry-standard security measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All data transmission is encrypted using HTTPS/SSL</li>
              <li>Passwords are hashed and never stored in plain text</li>
              <li>Firebase security rules restrict data access based on user authentication and roles</li>
              <li>Regular security audits and updates</li>
            </ul>
            <p className="mt-4">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Data Sharing and Disclosure</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Within Chit Funds:</strong> Your profile information is visible to other members of chit funds you join</li>
              <li><strong>With Foremans:</strong> Foremans can view member details within their managed chit funds</li>
              <li><strong>Service Providers:</strong> With Firebase/Google for hosting and data storage</li>
              <li><strong>Legal Requirements:</strong> If required by law or to protect our rights and users&apos; safety</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Your Rights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>You have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information via the Profile screen</li>
              <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
              <li><strong>Portability:</strong> Request your data in a machine-readable format</li>
              <li><strong>Objection:</strong> Object to certain processing of your data</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw consent for data processing at any time</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at: <a href="mailto:support@cheeteepaata.com" className="text-orange-600 hover:underline">support@cheeteepaata.com</a>
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Data Retention</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We retain your personal information for as long as necessary to provide our services and comply with legal obligations:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account data is retained while your account is active</li>
              <li>Chit fund transaction records are retained for 7 years for financial compliance</li>
              <li>When you delete your account, personal data is removed within 30 days, except where legally required</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Children&apos;s Privacy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Cheetee Paata is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If we discover that a child under 18 has provided us with personal information, we will delete it immediately.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>International Data Transfers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Your data may be processed and stored in servers located in different countries through Firebase&apos;s global infrastructure. By using Cheetee Paata, you consent to the transfer of your information to countries outside your country of residence, which may have different data protection laws.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Changes to This Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Posting the new Privacy Policy on this page</li>
              <li>Updating the &quot;Last updated&quot; date at the top</li>
              <li>Sending an in-app notification for significant changes</li>
            </ul>
            <p className="mt-4">
              You are advised to review this Privacy Policy periodically. Continued use of the App after changes constitutes acceptance of the updated policy.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <ul className="space-y-2">
              <li><strong>Email:</strong> <a href="mailto:support@cheeteepaata.com" className="text-orange-600 hover:underline">support@cheeteepaata.com</a></li>
              <li><strong>App:</strong> Cheetee Paata Mobile Application</li>
              <li><strong>Response Time:</strong> We aim to respond to all inquiries within 48 hours</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
