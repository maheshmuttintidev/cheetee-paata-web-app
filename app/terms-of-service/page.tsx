import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Terms of Service - Cheetee Paata',
  description: 'Terms of Service for Cheetee Paata - Digital Chit Fund Manager',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: November 4, 2025</p>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Acceptance of Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Welcome to Cheetee Paata. By accessing or using our mobile application (the &quot;App&quot;), you agree to comply with and be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the App.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and Cheetee Paata (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We reserve the right to modify these Terms at any time. Your continued use of the App after changes are posted constitutes acceptance of the modified Terms.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Description of Service</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Cheetee Paata is a digital platform designed to facilitate the management of chit funds, also known as chitty or chit schemes. Our services include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Enabling users to join and manage chit fund memberships</li>
              <li>Tracking monthly contributions and payment history</li>
              <li>Facilitating monthly auctions for prize distribution</li>
              <li>Providing notifications and reminders for due dates</li>
              <li>Supporting multiple Indian languages for accessibility</li>
            </ul>
            <p className="mt-4 font-semibold text-orange-600">
              Important: Cheetee Paata is a management tool only. We do NOT organize, operate, or guarantee chit funds. We are not responsible for the financial transactions between members and foremans.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>User Eligibility</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>To use Cheetee Paata, you must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Be at least 18 years of age</li>
              <li>Have the legal capacity to enter into binding agreements</li>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Comply with all applicable laws in your jurisdiction</li>
            </ul>
            <p className="mt-4">
              You are solely responsible for all activities that occur under your account. If you suspect unauthorized access, notify us immediately at support@cheeteepaata.com.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>User Roles and Responsibilities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="font-semibold text-lg">Members</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Must verify chit fund legitimacy before joining</li>
              <li>Are responsible for making timely monthly contributions</li>
              <li>Must provide accurate personal and financial information</li>
              <li>Agree to participate honestly in auctions</li>
              <li>Must communicate directly with foremans for payment arrangements</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">Foremans</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Must operate chit funds in compliance with local laws and regulations</li>
              <li>Are responsible for collecting and distributing funds</li>
              <li>Must maintain transparency with members</li>
              <li>Are solely responsible for the financial integrity of their chit funds</li>
              <li>Must not misuse member information</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Financial Disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="font-semibold text-orange-600">
              IMPORTANT DISCLAIMER:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cheetee Paata is a SOFTWARE TOOL ONLY for chit fund management</li>
              <li>We DO NOT hold, transfer, or manage any funds</li>
              <li>We DO NOT provide financial advice or guarantee investment returns</li>
              <li>We are NOT responsible for the conduct or financial obligations of foremans or members</li>
              <li>All financial transactions occur directly between members and foremans</li>
              <li>We DO NOT verify the legitimacy or compliance of chit funds created using our App</li>
            </ul>
            <p className="mt-4">
              Chit funds are subject to local laws and regulations. Users are solely responsible for ensuring their participation complies with applicable legal requirements in their jurisdiction, including but not limited to the Chit Funds Act (where applicable).
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Prohibited Activities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>You agree NOT to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the App for any illegal or fraudulent purposes</li>
              <li>Misrepresent your identity or affiliation</li>
              <li>Share false or misleading information about chit funds</li>
              <li>Operate unregistered or unlawful chit fund schemes</li>
              <li>Harass, threaten, or abuse other users</li>
              <li>Attempt to access unauthorized areas of the App or its systems</li>
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Use automated scripts or bots to interact with the App</li>
              <li>Violate intellectual property rights</li>
              <li>Transmit malware, viruses, or harmful code</li>
            </ul>
            <p className="mt-4">
              Violation of these prohibitions may result in immediate account termination and legal action.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              All content, features, and functionality of Cheetee Paata, including but not limited to text, graphics, logos, icons, images, software code, and design, are the exclusive property of Cheetee Paata or its licensors and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              You are granted a limited, non-exclusive, non-transferable license to use the App for personal, non-commercial purposes in accordance with these Terms. You may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Copy, modify, or create derivative works based on the App</li>
              <li>Distribute, sell, lease, or sublicense the App</li>
              <li>Remove or alter any copyright, trademark, or proprietary notices</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>User Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              You retain ownership of any data, information, or content you submit to the App (&quot;User Content&quot;). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, store, and display it solely for the purpose of providing our services.
            </p>
            <p>
              You represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You own or have the rights to submit User Content</li>
              <li>User Content does not violate any laws or third-party rights</li>
              <li>User Content is accurate and not misleading</li>
            </ul>
            <p className="mt-4">
              We reserve the right to remove or modify User Content that violates these Terms or is otherwise objectionable.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Privacy and Data Protection</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Your privacy is important to us. Our collection and use of personal information is governed by our{' '}
              <a href="/privacy-policy" className="text-orange-600 hover:underline">Privacy Policy</a>, which is incorporated into these Terms by reference.
            </p>
            <p>
              By using the App, you consent to our data practices as described in the Privacy Policy, including the use of Firebase for data storage and processing.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="font-semibold uppercase">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND</li>
              <li>WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE</li>
              <li>WE ARE NOT LIABLE FOR ANY FINANCIAL LOSSES, DAMAGES, OR DISPUTES ARISING FROM CHIT FUND PARTICIPATION</li>
              <li>WE ARE NOT RESPONSIBLE FOR USER CONDUCT OR COMPLIANCE WITH LOCAL LAWS</li>
              <li>WE DO NOT GUARANTEE UNINTERRUPTED OR ERROR-FREE SERVICE</li>
              <li>OUR TOTAL LIABILITY FOR ANY CLAIMS SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE PAST 12 MONTHS (IF ANY)</li>
            </ul>
            <p className="mt-4">
              Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so the above may not apply to you in full.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Indemnification</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              You agree to indemnify, defend, and hold harmless Cheetee Paata, its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or related to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your use or misuse of the App</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any laws or third-party rights</li>
              <li>Financial disputes related to chit fund participation</li>
              <li>User Content you submit</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Termination</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We reserve the right to suspend or terminate your account and access to the App at any time, with or without notice, for any reason, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violation of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Harmful conduct toward other users</li>
              <li>Prolonged inactivity</li>
            </ul>
            <p className="mt-4">
              Upon termination, your right to use the App will cease immediately. You may terminate your account at any time by contacting us or using the in-app account deletion feature.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Dispute Resolution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              In the event of any dispute arising from these Terms or your use of the App, you agree to first attempt to resolve the dispute informally by contacting us at support@cheeteepaata.com.
            </p>
            <p>
              If informal resolution is unsuccessful, disputes shall be resolved through binding arbitration in accordance with the laws of [Your Jurisdiction], except where prohibited by law.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Governing Law</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Any legal action or proceeding related to your use of the App shall be brought exclusively in the courts of [Your Jurisdiction].
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Changes to Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We may update these Terms from time to time. When we make changes, we will:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Post the updated Terms on this page</li>
              <li>Update the &quot;Last updated&quot; date</li>
              <li>Notify you via in-app notification for material changes</li>
            </ul>
            <p className="mt-4">
              Your continued use of the App after changes are posted constitutes acceptance of the updated Terms.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              If you have questions or concerns about these Terms, please contact us:
            </p>
            <ul className="space-y-2">
              <li><strong>Email:</strong> <a href="mailto:support@cheeteepaata.com" className="text-orange-600 hover:underline">support@cheeteepaata.com</a></li>
              <li><strong>App:</strong> Cheetee Paata Mobile Application</li>
              <li><strong>Response Time:</strong> We aim to respond within 48 hours</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
