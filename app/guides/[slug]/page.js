import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import AuthorBox from '../../../components/AuthorBox';
import { guidePages } from '../../../components/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const page = guidePages[params.slug];
  if (!page) return {};
  return {
    title: page.title,
    description: page.desc
  };
}

export default async function GuidePage({ params }) {
  const page = guidePages[params.slug];
  if (!page) notFound();

  return (
    <>
      <Header />
      <main className="container">
        <section className="page-hero">
          <span className="kicker">{page.category}</span>
          <h1>{page.title}</h1>
          <p>{page.desc}</p>
          <div className="meta">{page.category} • {page.read}</div>
        </section>

        <section className="article-layout">
          <article className="prose">
            <div className="callout">
              This is a real article detail template: hero, metadata, content sections, in-content ad block, author box, and room for FAQs or related guides.
            </div>

            {page.sections.map((section) => (
              <section key={section.h}>
                <h2>{section.h}</h2>
                {section.p.map((para, idx) => <p key={idx}>{para}</p>)}
              </section>
            ))}

            <div className="ad-slot" style={{margin:'26px 0'}}>In-content ad slot • responsive display / in-article unit</div>

            <h2>Related guides</h2>
            <ul>
              <li><Link href="/guides/make-money-fast-gta-6">How to Make Money Fast in GTA 6</Link></li>
              <li><Link href="/guides/gta-6-main-missions-in-order">GTA 6 Main Missions in Order</Link></li>
              <li><Link href="/guides/gta-6-collectibles-tracker">GTA 6 100% Collectibles Tracker</Link></li>
            </ul>
          </article>

          <aside style={{display:'grid',gap:'18px'}}>
            <div className="toc">
              <strong>On this page</strong>
              <ul className="list">
                {page.sections.map((s) => <li key={s.h}>{s.h}</li>)}
              </ul>
            </div>
            <div className="ad-slot">Sidebar ad slot<br/>300×250</div>
            <AuthorBox />
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
