import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Mission Guides',
  description: 'Walkthroughs, mission order hubs, rewards, route suggestions, and objective help for GTA 6 story content.'
}

const posts = [{"title": "GTA 6 Main Missions in Order", "meta": "Core Hub \u2022 12 min read", "text": "A spoiler-light story hub that links to every mission and shows campaign progression cleanly.", "href": "/guides/gta-6-main-missions-in-order"}, {"title": "Best Mission Route Tips for Hard Objectives", "meta": "Walkthrough \u2022 7 min read", "text": "How to handle chase missions, stealth sections, and optional objectives more efficiently.", "href": "/blog"}, {"title": "Mission Rewards and Unlocks Guide", "meta": "Reference \u2022 6 min read", "text": "Track the missions that unlock businesses, gear, or progression-critical side content.", "href": "/blog"}];

export default function Page(){
  return (
    <>
      <Header />
      <main className="container">
        <section className="page-hero">
          <span className="kicker">Mission Guides</span>
          <h1>Mission Guides</h1>
          <p>Walkthroughs, mission order hubs, rewards, route suggestions, and objective help for GTA 6 story content.</p>
        </section>
        <section className="article-grid section">
          {posts.map(post => (
            <article className="card" key={post.title}>
              <div className="meta">{post.meta}</div>
              <h3>{post.title}</h3>
              <p className="muted">{post.text}</p>
              <Link href={post.href} className="btn secondary">Read guide</Link>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}
