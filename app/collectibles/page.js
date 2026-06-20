// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import Link from 'next/link';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Collectibles & 100% Guides',
  description: 'Hidden packages, region trackers, rare unlocks, and 100% completion planning.'
}

const posts = [{"title": "GTA 6 100% Collectibles Tracker", "meta": "Tracker \u2022 10 min read", "text": "A parent hub for hidden packages, rare items, and region-based completion routes.", "href": "/guides/gta-6-collectibles-tracker"}, {"title": "Vice City Hidden Secrets You Should Check First", "meta": "Secrets \u2022 6 min read", "text": "A shareable secrets page focused on hidden pickups, shortcuts, and easter eggs.", "href": "/guides/vice-city-hidden-secrets"}, {"title": "Best Completion Order for 100%", "meta": "Planning \u2022 6 min read", "text": "A practical route for minimizing backtracking while you chase full completion.", "href": "/blog"}];

export default function Page(){
  return (
    <>
      <Header />
      <main className="container">
        <section className="page-hero">
          <span className="kicker">Collectibles</span>
          <h1>Collectibles & 100% Guides</h1>
          <p>Hidden packages, region trackers, rare unlocks, and 100% completion planning.</p>
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
