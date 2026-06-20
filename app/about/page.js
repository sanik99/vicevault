import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutPage(){
  return (
    <>
      <Header />
      <main className="container">
        <section className="page-hero">
          <span className="kicker">About</span>
          <h1>About ViceVault</h1>
          <p>ViceVault is built as an independent GTA 6 guide brand focused on mission walkthroughs, money-making methods, hidden collectibles, and 100% completion resources. The goal is to grow it into a premium gaming guide site rather than a throwaway launch-week blog.</p>
        </section>
      </main>
      <Footer />
    </>
  )
}
