import './globals.css';

export const metadata = {
  metadataBase: new URL('https://vicevault.gg'),
  title: {
    default: 'ViceVault | GTA 6 Guides, Money Methods & Collectibles',
    template: '%s | ViceVault'
  },
  description: 'ViceVault is a GTA 6 guide hub covering mission walkthroughs, money-making methods, hidden collectibles, rankings, and launch-day strategy guides.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'ViceVault | GTA 6 Guides, Money Methods & Collectibles',
    description: 'Mission guides, money routes, collectibles, and launch-day strategy content for GTA 6.',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
