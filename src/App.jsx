import React from "react";

const categories = [
{ icon: "🎮", number: "01", title: "Top Up Game", desc: "Diamond, UC, Robux dan lainnya" },
{ icon: "🤖", number: "02", title: "Bot WA LIXERA", desc: "Sewa bot dan layanan premium" },
{ icon: "💎", number: "03", title: "APK Premium", desc: "Aplikasi premium pilihan" },
{ icon: "⚔️", number: "04", title: "Joki Game", desc: "Push rank bersama LIXERA" },
{ icon: "💻", number: "05", title: "Jasa Website", desc: "Website sesuai kebutuhanmu" },
{ icon: "👑", number: "06", title: "Akun & Membership", desc: "Layanan membership digital" },
{ icon: "✨", number: "07", title: "Produk Digital", desc: "Temukan produk digital lainnya" },
{ icon: "💬", number: "08", title: "Bantuan & Informasi", desc: "Hubungi admin LIXERA STORE" },
];

export default function App() {
const anime = "/6fb9698cf4ccb60781b35caeec55690a.jpg";
const logo = "/IMG-20261009-WA0001.jpg";

return (
<main className="lixera">
<div className="cyber-grid" />
<header className="navbar">
<a className="brand" href="#">
<img src={logo} alt="LIXERA STORE" />
<span>LIXERA <b>STORE</b></span>
</a>
<a className="nav-button" href="#kategori">JELAJAHI ↗</a>
</header>

  <section className="hero">
    <div className="hero-copy">
      <div className="eyebrow"><i /> DIGITAL STORE • INDONESIA</div>
      <h1>YOUR DIGITAL <span>UNIVERSE.</span></h1>
      <p>Top up game, layanan digital, dan produk premium. Semua kebutuhan digitalmu dalam satu tempat.</p>
      <a className="primary-button" href="#kategori">JELAJAHI PRODUK <span>↗</span></a>
      <div className="stats">
        <div><b>08+</b><small>Kategori layanan</small></div>
        <div><b>24/7</b><small>Akses toko online</small></div>
        <div><b>LS</b><small>LIXERA STORE</small></div>
      </div>
    </div>

    <div className="anime-stage">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="anime-frame">
        <img src={anime} alt="Anime LIXERA STORE" />
      </div>
      <div className="floating-tag tag-top">✦ LIXERA SYSTEM</div>
      <div className="floating-tag tag-bottom"><span /> ONLINE STORE // READY</div>
      <div className="glow-ball" />
    </div>
  </section>

  <section className="category-section" id="kategori">
    <div className="section-heading">
      <div>
        <div className="eyebrow">01 / PILIH KEBUTUHANMU</div>
        <h2>Jelajahi <span>Kategori</span></h2>
        <p>Pilih layanan yang ingin kamu cari.</p>
      </div>
      <div className="service-count">08 SERVICES</div>
    </div>

    <div className="category-grid">
      {categories.map((item) => (
        <a className="category-card" href="#bantuan" key={item.number}>
          <div className="card-top">
            <span className="category-icon">{item.icon}</span>
            <span className="card-arrow">↗</span>
          </div>
          <div className="category-number">{item.number} / LIXERA</div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </a>
      ))}
    </div>
  </section>

  <section className="support" id="bantuan">
    <div className="support-icon">✦</div>
    <div className="eyebrow">LIXERA STORE SUPPORT</div>
    <h2>Butuh bantuan, bang?</h2>
    <p>Hubungi admin untuk bertanya tentang produk dan pemesanan.</p>
    <a href="https://wa.me/573122353419" target="_blank" rel="noreferrer">
      CHAT ADMIN ↗
    </a>
  </section>

  <footer>
    <a className="brand" href="#">
      <img src={logo} alt="" />
      <span>LIXERA <b>STORE</b></span>
    </a>
    <p>© 2026 LIXERA STORE. All rights reserved.</p>
    <a href="#">Kembali ke atas ↑</a>
  </footer>
</main>

);
}
