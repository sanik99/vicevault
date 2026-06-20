import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Money Guides',
  description: 'Fast cash routes, businesses, passive income, solo money methods, and what to buy first with your GTA 6 money.'
}

const posts = [{"title": "How to Make Money Fast in GTA 6", "meta": "Money Guide \u2022 8 min read", "text": "A flagship money page covering early, mid, and late-game cash methods.", "href": "/guides/make-money-fast-gta-6"}, {"title": "Best Businesses to Buy First in GTA 6", "meta": "Money Guide \u2022 9 min read", "text": "Compare setup cost, ROI, and how much work each business needs to stay profitable.", "href": "/guides/best-businesses-to-buy-first-gta-6"}, {"title": "Best Early Money Route in GTA 6", "meta": "Money Route \u2022 7 min read", "text": "A route-style article built around quick early cash and low setup risk.", "href": "/guides/best-early-money-route-gta-6"}];

export default function Page(){
  return (
    <>
      <Header />
      <main className="container">
        <section className="page-hero">
          <span className="kicker">Money Guides</span>
          <h1>Money Guides</h1>
          <p>Fast cash routes, businesses, passive income, solo money methods, and what to buy first with your GTA 6 money.</p>
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
