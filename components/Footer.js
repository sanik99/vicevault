import Link from 'next/link';

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3 style={{marginTop:0}}>ViceVault</h3>
          <p>A premium GTA 6 guide website focused on mission walkthroughs, money-making strategies, collectibles, rankings, and launch-day advice.</p>
        </div>
        <div>
          <h4>Guides</h4>
          <p><Link href="/missions">Mission Guides</Link></p>
          <p><Link href="/money">Money Guides</Link></p>
          <p><Link href="/collectibles">Collectibles</Link></p>
          <p><Link href="/blog">Blog</Link></p>
        </div>
        <div>
          <h4>Site</h4>
          <p><Link href="/about">About</Link></p>
          <p><Link href="/privacy-policy">Privacy Policy</Link></p>
          <p><Link href="/disclaimer">Disclaimer</Link></p>
        </div>
        <div>
          <h4>Monetization</h4>
          <p>AdSense-ready layout</p>
          <p>Newsletter capture</p>
          <p>Affiliate article support</p>
        </div>
      </div>
    </footer>
  )
}
