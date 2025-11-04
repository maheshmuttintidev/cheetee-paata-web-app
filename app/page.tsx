import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Shield, Users, TrendingUp, Globe, Bell } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Cheetee Paata
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-orange-50 font-medium">
            చిట్టీ పాట - Your Digital Chit Fund Manager
          </p>
          <p className="text-lg md:text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            Manage your chit funds digitally. Join, organize & track payments with ease.
            Available in 6 Indian languages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
              <a href="https://play.google.com/store/apps/details?id=com.cheeteepaata.app" target="_blank" rel="noopener noreferrer">
                Download on Google Play
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30">
              <Link href="#features">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Key Features</h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Everything you need to manage chit funds efficiently and securely
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Join & Manage Chit Funds</CardTitle>
                <CardDescription>
                  Easily join multiple chit funds and manage your memberships in one place
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Track Payments</CardTitle>
                <CardDescription>
                  Monitor monthly contributions, view payment history, and never miss a due date
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Monthly Auctions</CardTitle>
                <CardDescription>
                  Participate in monthly auctions and receive notifications for important events
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Multi-Language Support</CardTitle>
                <CardDescription>
                  Available in 6 Indian languages: Telugu, Tamil, Hindi, Kannada, Malayalam, and English
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Secure & Reliable</CardTitle>
                <CardDescription>
                  Bank-level security with Firebase authentication and cloud-based data backup
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Role-Based Access</CardTitle>
                <CardDescription>
                  Separate interfaces for members and foremans with appropriate permissions
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Who is it for Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Perfect For</h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Whether you&apos;re a member or organizing chit funds, Cheetee Paata has you covered
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chit Fund Members</h3>
              <p className="text-gray-600">
                Track your investments, view payment history, and participate in auctions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Foremans</h3>
              <p className="text-gray-600">
                Organize and manage chit funds, track member payments, and conduct auctions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Savers & Investors</h3>
              <p className="text-gray-600">
                Anyone looking to save systematically through traditional chit fund schemes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-orange-500 to-amber-600 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Download Cheetee Paata today and simplify your chit fund management!
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
            <a href="https://play.google.com/store/apps/details?id=com.cheeteepaata.app" target="_blank" rel="noopener noreferrer">
              Download Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
