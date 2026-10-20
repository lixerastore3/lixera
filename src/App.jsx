

import React from "react";
import "./index.css";

const categories = [
  { icon: "🎮", name: "Top Up Game", desc: "Diamond, UC, Robux & lainnya" },
  { icon: "🤖", name: "Bot WA LIXERA", desc: "Sewa bot dan layanan premium" },
  { icon: "📱", name: "APK Premium", desc: "Aplikasi premium pilihan" },
  { icon: "⚔️", name: "Joki Game", desc: "Bantu naik rank permainan" },
  { icon: "💻", name: "Jasa Website", desc: "Website sesuai kebutuhanmu" },
  { icon: "👑", name: "Akun & Membership", desc: "Layanan dan membership digital" },
  { icon: "✨", name: "Produk Digital", desc: "Temukan produk digital lainnya" },
  { icon: "💬", name: "Bantuan & Informasi", desc: "Hubungi admin LIXERA STORE" },
];

export default function App() {
  return (
    <main className="store">
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-mark">LS</span>
          <span>LIXERA <b>STORE</b></span>
        </a>
        <a className="login-btn" href="#kategori">Jelajahi ↗</a>
      </header>

      <section className="hero" id="home">
        <div className="hero-glow" />
        <div className="eyebrow">
          <span className="status-dot" /> DIGITAL STORE • INDONESIA
        </div>
        <h1>
          YOUR DIGITAL
          <br />
          <span>UNIVERSE.</span>
        </h1>
        <p className="hero-desc">
          Top up game, layanan digital, dan produk premium.
          Semua kebutuhan digitalmu dalam satu tempat.
        </p>
        <a className="primary-btn" href="#kategori">
          Jelajahi Produk <span>↗</span>
        </a>
        <div className="hero-stats">
          <div><strong>8+</strong><small>Kategori layanan</small></div>
          <div><strong>24/7</strong><small>Akses toko online</small></div>
          <div><strong>LS</strong><small>LIXERA STORE</small></div>
        </div>
        <div className="hero-decoration">LIXERA<br />DIGITAL STORE</div>
      </section>

      <section className="category-section" id="kategori">
        <div className="section-label">01 / PILIH KEBUTUHANMU</div>
        <div className="section-heading">
          <div>
            <h2>Jelajahi <span>Kategori</span></h2>
            <p>Pilih layanan yang ingin kamu cari.</p>
          </div>
          <span className="category-count">08 SERVICES</span>
        </div>

        <div className="category-grid">
          {categories.map((category, index) => (
            <button
              className="category-card"
              key={category.name}
              onClick={() =>
                alert(
                  category.name === "Bantuan & Informasi"
                    ? "Hubungi admin untuk informasi layanan."
                    : `Kategori ${category.name} dipilih. Daftar produk akan ditambahkan pada tahap berikutnya.`
                )
              }
            >
              <div className="card-top">
                <span className="category-icon">{category.icon}</span>
                <span className="card-arrow">↗</span>
              </div>
              <span className="card-number">
                0{index + 1} / LIXERA
              </span>
              <h3>{category.name}</h3>
              <p>{category.desc}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="info-banner">
        <div className="info-symbol">✦</div>
        <div>
          <span className="section-label">LIXERA STORE SUPPORT</span>
          <h2>Butuh bantuan, bang?</h2>
          <p>Hubungi admin untuk bertanya tentang produk dan pemesanan.</p>
        </div>
        <a
          className="support-btn"
          href="https://wa.me/573122353419"
          target="_blank"
          rel="noreferrer"
        >
          Chat Admin ↗
        </a>
      </section>

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-mark">LS</span>
          <span>LIXERA <b>STORE</b></span>
        </a>
        <p>© {new Date().getFullYear()} LIXERA STORE. All rights reserved.</p>
        <a href="#home" className="back-top">Kembali ke atas ↑</a>
      </footer>
    </main>
  );
}
