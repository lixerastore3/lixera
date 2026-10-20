
import React, { useState } from "react";
import "./index.css";

const categories = [
  { icon: "🎮", title: "TOP UP GAME", desc: "Diamond, UC, Robux & lainnya", tag: "GAME CENTER" },
  { icon: "🤖", title: "BOT WA LIXERA", desc: "Sewa bot, premium & owner", tag: "WHATSAPP" },
  { icon: "📱", title: "APK PREMIUM", desc: "Aplikasi premium pilihan", tag: "APPLICATIONS" },
  { icon: "⚔️", title: "JOKI GAME", desc: "Push rank dan jasa joki", tag: "GAME SERVICE" },
  { icon: "💻", title: "JASA WEBSITE", desc: "Website modern sesuai kebutuhan", tag: "WEB DEVELOPMENT" },
  { icon: "👑", title: "AKUN & MEMBERSHIP", desc: "Akun dan layanan digital", tag: "MEMBERSHIP" },
  { icon: "✨", title: "PRODUK DIGITAL", desc: "Temukan produk digital lainnya", tag: "DIGITAL GOODS" },
  { icon: "💬", title: "BANTUAN", desc: "Informasi dan bantuan pesanan", tag: "SUPPORT CENTER" },
];

const games = [
  { name: "Mobile Legends", short: "MLBB", icon: "⚔️" },
  { name: "Free Fire", short: "FREE FIRE", icon: "🔥" },
  { name: "Roblox", short: "ROBLOX", icon: "🧊" },
  { name: "PUBG Mobile", short: "PUBG MOBILE", icon: "🎯" },
  { name: "Honor of Kings", short: "HOK", icon: "👑" },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [musicOn, setMusicOn] = useState(false);

  function openCategory(category) {
    setActiveCategory(category);
    document.getElementById("catalog")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <main className="cyber-store" id="home">
      <div className="cyber-grid" />

      <header className="cyber-nav">
        <a className="cyber-brand" href="#home" aria-label="LIXERA STORE">
          <img
            src="/assets/logo-ls.png"
            alt="LIXERA STORE"
            className="brand-image"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
          <span className="brand-fallback">LS</span>
          <span className="brand-name">
            LIXERA <b>STORE</b>
            <small>DIGITAL GAMING UNIVERSE</small>
          </span>
        </a>

        <nav className="nav-links">
          <a href="#home">HOME</a>
          <a href="#catalog">STORE</a>
          <a href="#categories">CATEGORY</a>
        </nav>

        <button
          className={`music-toggle ${musicOn ? "is-on" : ""}`}
          onClick={() => setMusicOn(!musicOn)}
          aria-label="Toggle music"
        >
          {musicOn ? "♫ ON" : "♫ MUSIC"}
        </button>
      </header>

      <section className="cyber-hero">
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />
        <div className="hero-lines" />

        <div className="hero-copy">
          <div className="cyber-status">
            <span className="pulse-dot" />
            NEXT LEVEL DIGITAL EXPERIENCE
          </div>

          <p className="hero-kicker">WELCOME TO THE WORLD OF</p>

          <h1>
            LIXERA
            <span>STORE<span className="title-dot">.</span></span>
          </h1>

          <p className="hero-description">
            Your digital gaming universe. Temukan top up game,
            layanan premium, dan produk digital favoritmu dalam
            satu tempat.
          </p>

          <div className="hero-actions">
            <a href="#categories" className="cyber-button">
              EXPLORE STORE <span>↗</span>
            </a>
            <a href="#catalog" className="cyber-button secondary">
              DISCOVER GAMES
            </a>
          </div>

          <div className="hero-mini-stats">
            <div>
              <strong>08</strong>
              <span>CATEGORIES</span>
            </div>
            <i />
            <div>
              <strong>24/7</strong>
              <span>ONLINE ACCESS</span>
            </div>
            <i />
            <div>
              <strong>LS</strong>
              <span>YOUR STORE</span>
            </div>
          </div>
        </div>

        <div className="anime-stage">
          <div className="anime-ring ring-one" />
          <div className="anime-ring ring-two" />
          <div className="anime-ring ring-three" />

          <div className="anime-image-frame">
            <img
              src="/assets/anime.png"
              alt="Anime LIXERA STORE"
              className="anime-image"
              onError={(event) => {
                event.currentTarget.style.opacity = "0";
              }}
            />
            <div className="anime-placeholder">
              <span>LS</span>
              <strong>YOUR DIGITAL</strong>
              <strong>UNIVERSE</strong>
              <small>ANIME VISUAL COMING SOON</small>
            </div>
          </div>

          <div className="floating-label label-top">
            <span className="label-light" />
            SYSTEM ONLINE
          </div>
          <div className="floating-label label-bottom">
            <span>✦</span> POWERED BY LIXERA
          </div>
          <div className="floating-code">LX-2026 // 001</div>
        </div>

        <a href="#categories" className="scroll-cue">
          <span /> SCROLL TO EXPLORE
        </a>
      </section>

      <section className="ticker" aria-label="LIXERA services">
        <div className="ticker-track">
          {Array.from({ length: 2 }, (_, index) => (
            <React.Fragment key={index}>
              <span>TOP UP GAME</span><i>✦</i>
              <span>PREMIUM DIGITAL</span><i>✦</i>
              <span>BOT WHATSAPP</span><i>✦</i>
              <span>GAMING SERVICE</span><i>✦</i>
              <span>LIXERA STORE</span><i>✦</i>
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className="category-area" id="categories">
        <div className="section-overline">01 / CHOOSE YOUR DESTINATION</div>
        <div className="section-title-row">
          <div>
            <h2>
              ENTER THE <span>STORE.</span>
            </h2>
            <p>Delapan kategori untuk kebutuhan digitalmu.</p>
          </div>
          <span className="section-index">LX / 008</span>
        </div>

        <div className="cyber-category-grid">
          {categories.map((category, index) => (
            <button
              className={`cyber-category-card ${
                activeCategory === category.title ? "selected" : ""
              }`}
              key={category.title}
              onClick={() => openCategory(category.title)}
            >
              <div className="category-card-head">
                <span className="cyber-category-icon">{category.icon}</span>
                <span className="cyber-card-arrow">↗</span>
              </div>
              <span className="cyber-card-tag">
                0{index + 1} / {category.tag}
              </span>
              <strong>{category.title}</strong>
              <p>{category.desc}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="game-area" id="catalog">
        <div className="section-overline">02 / GAME ZONE</div>
        <div className="section-title-row">
          <div>
            <h2>
              SELECT YOUR <span>GAME.</span>
            </h2>
            <p>Pilih game untuk melihat layanan top up yang tersedia.</p>
          </div>
        </div>

        <div className="game-grid">
          {games.map((game, index) => (
            <button
              className="game-card"
              key={game.short}
              onClick={() =>
                alert(
                  `${game.name}: daftar nominal dan harga akan ditambahkan pada tahap berikutnya.`
                )
              }
            >
              <div className="game-art">
                <span>{game.icon}</span>
                <small>0{index + 1}</small>
              </div>
              <strong>{game.name}</strong>
              <span className="game-card-link">VIEW GAME ↗</span>
            </button>
          ))}
        </div>
      </section>

      <section className="support-area">
        <div className="support-glow" />
        <div className="support-icon">✦</div>
        <div className="support-copy">
          <span className="section-overline">LIXERA SUPPORT SYSTEM</span>
          <h2>NEED <span>ASSISTANCE?</span></h2>
          <p>Hubungi admin untuk informasi produk dan pemesanan.</p>
        </div>
        <a
          href="https://wa.me/573122353419"
          target="_blank"
          rel="noreferrer"
          className="cyber-button support-button"
        >
          CONTACT ADMIN ↗
        </a>
      </section>

      <footer className="cyber-footer">
        <a href="#home" className="cyber-brand">
          <span className="brand-fallback">LS</span>
          <span className="brand-name">
            LIXERA <b>STORE</b>
            <small>DIGITAL GAMING UNIVERSE</small>
          </span>
        </a>
        <span>© {new Date().getFullYear()} LIXERA STORE</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
        }
