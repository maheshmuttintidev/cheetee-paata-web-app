import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feedback - Cheetee Paata | Share Your Thoughts & Report Issues',
  description: 'Send feedback for Cheetee Paata app. Report bugs, request features, or share your experience. Help us improve our chit fund management app. We respond within 48 hours.',
  keywords: ["feedback", "cheetee paata feedback", "report bug", "feature request", "app feedback", "user feedback", "contact support"],
  openGraph: {
    title: "Feedback",
    description: "Share your feedback about Cheetee Paata app",
    type: "website",
    url: "https://cheetee-paata.vercel.app/feedback",
    images: ["/android-chrome-512x512.png"],
  },
  alternates: {
    canonical: "https://cheetee-paata.vercel.app/feedback",
  },
};

export default function FeedbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
