import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'GTA 6 Blog & Updates',
  description: 'Evergreen list posts, rankings, launch updates, and supporting content that expands beyond strict walkthrough searches.'
}

const posts = [{"title": "Best Beginner Tips for GTA 6", "meta": "Blog \u2022 6 min read", "text": "A broad early-traffic article aimed at first-time players and launch-week search demand.", "href": "/blog"}, {"title": "Best Weapons to Buy Early", "meta": "Blog \u2022 7 min read", "text": "A buyer-style guide that supports both mission and money content clusters.", "href": "/blog"}, {"title": "Best Safehouses in GTA 6", "meta": "Blog \u2022 8 min read", "text": "A list-style article that blends utility with discovery and ranking intent.", "href": "/blog"}];

export default function Page(){
  return (
    <>
      <Header />
      <main className="container">
        <section className="page-hero">
          <span className="kicker">Blog</span>
          <h1>GTA 6 Blog & Updates</h1>
          <p>Evergreen list posts, rankings, launch updates, and supporting content that expands beyond strict walkthrough searches.</p>
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
