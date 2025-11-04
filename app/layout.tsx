import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  metadataBase: new URL("https://cheetee-paata.vercel.app"),
  title: {
    default: "Cheetee Paata - Digital Chit Fund Manager",
    template: "%s | Cheetee Paata",
  },
  description: "Manage your chit funds digitally. Join, organize & track payments with ease. Available in 6 Indian languages: English, Telugu, Tamil, Hindi, Kannada, Malayalam.",
  keywords: [
    "chit fund",
    "chit fund manager",
    "digital chit fund",
    "cheetee paata",
    "chit fund app",
    "chit fund management",
    "indian chit fund",
    "chit payment tracker",
    "multi-language chit fund",
    "Telugu chit fund",
    "Tamil chit fund",
    "Hindi chit fund",
    "Kannada chit fund",
    "Malayalam chit fund"
  ],
  authors: [{ name: "Cheetee Paata Team" }],
  creator: "Cheetee Paata",
  publisher: "Cheetee Paata",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cheetee-paata.vercel.app",
    siteName: "Cheetee Paata",
    title: "Cheetee Paata - Digital Chit Fund Manager",
    description: "Manage your chit funds digitally. Join, organize & track payments with ease. Available in 6 Indian languages.",
    images: ["/android-chrome-512x512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheetee Paata - Digital Chit Fund Manager",
    description: "Manage your chit funds digitally. Join, organize & track payments with ease. Available in 6 Indian languages.",
    images: ["/android-chrome-512x512.png"],
    creator: "@cheeteepaata",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://cheetee-paata.vercel.app",
  },
  category: "finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Header */}
        <header className="border-b bg-white sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
            <Link href="/" className="text-2xl font-bold text-orange-600">
              Cheetee Paata
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors">
                Home
              </Link>
              <Link href="/feedback" className="text-gray-700 hover:text-orange-600 transition-colors">
                Feedback
              </Link>
              <Link href="/privacy-policy" className="text-gray-700 hover:text-orange-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-700 hover:text-orange-600 transition-colors">
                Terms of Service
              </Link>
              <Link href="/delete-account" className="text-gray-700 hover:text-orange-600 transition-colors">
                Delete Account
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        {children}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Cheetee Paata</h3>
                <p className="text-gray-400">
                  Your digital chit fund manager. Simplifying chit fund management across India.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/feedback" className="text-gray-400 hover:text-white transition-colors">
                      Feedback
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/delete-account" className="text-gray-400 hover:text-white transition-colors">
                      Delete Account
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Email: cheeteepaata@gmail.com</li>
                  <li>Available in 6 Indian languages</li>
                </ul>
              </div>
            </div>
            <Separator className="my-8 bg-gray-800" />
            <div className="text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Cheetee Paata. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
