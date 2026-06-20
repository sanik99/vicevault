// import Link from 'next/link';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import { featured, latest } from '@/components/data';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { featured, latest } from '../components/data';

export default function Home(){
  return (
    <>
      <Header />
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-card">
            <div className="glow"></div>
            <span className="kicker">Version 2 • monetization-ready GTA 6 guide site</span>
            <h1>ViceVault — GTA 6 missions, money methods, collectibles, and launch-day strategy.</h1>
            <p>
              A premium dark-neon gaming website built to rank for GTA 6 guide searches, capture repeat visitors,
              and grow into a real ad-supported content business.
            </p>
            <div className="hero-actions">
              <Link href="/guides/gta-6-main-missions-in-order" className="btn primary">Open mission hub</Link>
              <Link href="/guides/make-money-fast-gta-6" className="btn secondary">See money guide</Link>
            </div>
            <div className="stats">
              <div className="stat"><strong>30+</strong><span>article ideas ready to publish</span></div>
              <div className="stat"><strong>3</strong><span>high-value content silos</span></div>
              <div className="stat"><strong>Ad-ready</strong><span>clean placements without hurting UX</span></div>
            </div>
          </div>

          <div className="hero-side">
            <div className="panel">
              <h3>Why this can make money</h3>
              <p className="muted">Money guides, mission walkthroughs, and collectibles all map to strong search intent. The layout supports ads, internal links, and repeat visits from checklist-style content.</p>
            </div>
            <div className="panel">
              <h3>What changed in Version 2</h3>
              <p className="muted">Real article detail pages, homepage slider, search bar, fake ad slots, author box, privacy/disclaimer pages, and a cleaner category-page structure.</p>
            </div>
            <div className="ad-slot">Homepage ad slot<br/>728×90 / responsive leaderboard</div>
          </div>
        </div>
      </section>

      <main className="container">
        <section className="section">
          <div className="section-head"><div><h2>Featured guide slider</h2><p className="muted">These are the first content pieces I would publish because they match the biggest GTA guide searches.</p></div></div>
          <div className="slider">
            <div className="feature-visual"></div>
            <div className="card">
              <span className="tag">Featured launch guide</span>
              <h2 style={{marginTop:0}}>How to Make Money Fast in GTA 6</h2>
              <div className="badges">
                <span className="badge">Money guide</span>
                <span className="badge">High-intent keyword</span>
                <span className="badge">AdSense-friendly</span>
              </div>
              <p className="muted">
                A flagship money page should compare fast cash methods, businesses, solo routes, and what to buy first.
                This is one of the strongest categories for search traffic and long session duration.
              </p>
              <Link href="/guides/make-money-fast-gta-6" className="btn primary">Read the article</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-head"><div><h2>Core content hubs</h2><p className="muted">These category pages are structured as content clusters rather than thin archives.</p></div></div>
          <div className="grid-3">
            <article className="card">
              <span className="tag">Missions</span>
              <h3>Walkthroughs that answer exactly what players search</h3>
              <p className="muted">Mission order, individual walkthroughs, rewards, route tips, and objective-specific help.</p>
              <Link href="/missions" className="btn secondary">Open missions</Link>
            </article>
            <article className="card">
              <span className="tag">Money</span>
              <h3>Fast cash guides, businesses, and ROI articles</h3>
              <p className="muted">One of the best traffic + monetization categories for a GTA guide site.</p>
              <Link href="/money" className="btn secondary">Open money</Link>
            </article>
            <article className="card">
              <span className="tag">Collectibles</span>
              <h3>Trackers, hidden packages, rare vehicles, and 100% routes</h3>
              <p className="muted">Excellent for repeat visits and longer engagement because readers return while progressing through the game.</p>
              <Link href="/collectibles" className="btn secondary">Open collectibles</Link>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="section-head"><div><h2>Latest guides</h2><p className="muted">Starter content cards included so the site feels like a real gaming magazine from day one.</p></div></div>
          <div className="latest-grid">
            <div className="article-grid">
              {latest.map(post => (
                <article className="card" key={post.title}>
                  <div className="meta">{post.category} • {post.date}</div>
                  <h3>{post.title}</h3>
                  <p className="muted">{post.excerpt}</p>
                  <Link href={post.href} className="btn secondary">Read guide</Link>
                </article>
              ))}
            </div>
            <div style={{display:'grid',gap:'18px'}}>
              <div className="ad-slot">Sidebar ad slot<br/>300×250 / 300×600</div>
              <div className="card">
                <h3 style={{marginTop:0}}>Email capture block</h3>
                <p className="muted">Use this to collect launch-week traffic and turn it into repeat readers.</p>
                <div className="search"><input placeholder="Enter your email for GTA 6 updates" /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="card">
            <span className="tag">AdSense-safe layout note</span>
            <p className="muted">
              The site uses clearly separated ad placeholders. Google allows ads above the fold if users can still see meaningful content,
              and ads should remain distinguishable from navigation or guide content. Avoid styling ads to look like article cards. 
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
