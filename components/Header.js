import Link from 'next/link';

export default function Header(){
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand">
          <div className="brand-badge"></div>
          <div><div>ViceVault</div><small>GTA 6 Guides</small></div>
        </Link>

        <div className="search">
          <span>⌕</span>
          <input placeholder="Search guides, missions, money routes..." />
        </div>

        <nav className="nav-links">
          <Link href="/missions">Missions</Link>
          <Link href="/money">Money</Link>
          <Link href="/collectibles">Collectibles</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  )
}
