import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const WhatsAppLink =
  "https://wa.me/919999999999?text=Hi%20voltGo%2C%20I%20want%20to%20know%20about%20battery%20swapping.";

function scrollTo(id) {
  return (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
}

function CustomerPage() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("voltgo-theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("voltgo-theme", theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".animate-in, .swap-flow-v-item").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const btn = document.querySelector(".back-to-top");
    const onScroll = () => {
      if (window.scrollY > 400) {
        btn?.classList.add("visible");
      } else {
        btn?.classList.remove("visible");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-inner">
          <Link to="/" className="logo">
            <span className="logo-mark">V</span>
            <span>voltGo</span>
          </Link>
          <nav className="nav-links">
            <a href="#how-it-works" onClick={scrollTo("how-it-works")}>How It Works</a>
            <a href="#pricing" onClick={scrollTo("pricing")}>Pricing</a>
            <Link to="/about" className="nav-link-router">More About Us</Link>
          </nav>
          <a href={WhatsAppLink} className="nav-cta" target="_blank" rel="noreferrer">
            Get Started
          </a>
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
          >
            {theme === "light" ? "\u{1F319}" : "\u2600\uFE0F"}
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero customer-hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <h1>
                Stop waiting to charge.
                <span> Start swapping.</span>
              </h1>
              <p className="hero-subtitle">
                voltGo gives working EV drivers access to charged batteries
                near their route. Swap in minutes, keep earning.
              </p>
              <div className="hero-actions">
                <a href={WhatsAppLink} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Get Started <span>&rarr;</span>
                </a>
                <a href="#how-it-works" className="btn btn-secondary" onClick={scrollTo("how-it-works")}>
                  See How It Works
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-card main-battery-card">
                <div className="battery-top">
                  <span className="battery-label">voltGo</span>
                  <span className="battery-status">SWAP &amp; GO</span>
                </div>
                <div className="battery-graphic">
                  <div className="battery-terminal"></div>
                  <div className="battery-body">
                    <div className="battery-lines"></div>
                    <div className="battery-bolt">&#9889;</div>
                    <div className="battery-level">
                      <span></span><span></span><span></span><span></span>
                    </div>
                  </div>
                </div>
                <div className="battery-footer">
                  <div>
                    <small>PLAN</small>
                    <strong>FROM &#8377;6,000/MO</strong>
                  </div>
                  <div>
                    <small>COVERAGE</small>
                    <strong>NEAR YOUR ROUTE</strong>
                  </div>
                </div>
              </div>
              <div className="floating-card floating-card-top">
                <span className="floating-icon">&#9889;</span>
                <div>
                  <strong>Quick Swap</strong>
                  <small>Minutes, not hours</small>
                </div>
              </div>
              <div className="floating-card floating-card-bottom">
                <span className="floating-icon">&#128205;</span>
                <div>
                  <strong>Hub Nearby</strong>
                  <small>Stations where you work</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT voltGo */}
        <section className="section animate-in about-section">
          <div className="container">
            <div className="section-heading centered">
              <span className="eyebrow">About voltGo</span>
              <h2>Built for drivers who keep moving</h2>
              <p>
                We are an early-stage EV battery-swapping startup. Our mission
                is simple &mdash; give working electric vehicle drivers fast,
                affordable access to charged batteries so they spend less time
                waiting and more time earning.
              </p>
            </div>
            <div className="about-grid">
              <article className="about-card">
                <div className="about-icon">&#128161;</div>
                <h3>What we are building</h3>
                <p>
                  A network of battery-swap hubs where EV drivers can exchange
                  a drained battery for a charged one in minutes. No long
                  charging waits. No expensive downtime.
                </p>
              </article>
              <article className="about-card">
                <div className="about-icon">&#127758;</div>
                <h3>Who it is for</h3>
                <p>
                  Commercial auto drivers, delivery riders, and small EV fleet
                  operators &mdash; anyone who depends on their vehicle for
                  daily income and cannot afford to sit idle.
                </p>
              </article>
              <article className="about-card">
                <div className="about-icon">&#128268;</div>
                <h3>How we are different</h3>
                <p>
                  Unlike platforms that lock you into their vehicle and battery,
                  voltGo works with compatible batteries you can swap at any hub.
                  You keep your freedom of choice.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* WHAT IS voltGo */}
        <section className="section animate-in what-section">
          <div className="container">
            <div className="section-heading centered">
              <span className="eyebrow">How It Works</span>
              <h2>Battery access without the wait</h2>
              <p>
                Swap a drained battery for a charged one at a nearby hub and
                keep moving. Three simple steps.
              </p>
            </div>
            <div className="what-grid">
              <article className="what-card">
                <div className="what-icon">&#9889;</div>
                <h3>Swap, don&apos;t charge</h3>
                <p>
                  No waiting at charging stations. Walk in with a drained
                  battery, walk out with a fully charged one.
                </p>
              </article>
              <article className="what-card">
                <div className="what-icon">&#128241;</div>
                <h3>Track on the app</h3>
                <p>
                  The voltGo app is in development. It will show battery
                  availability near you and let you check your battery&apos;s
                  charge level if you own one.
                </p>
              </article>
              <article className="what-card">
                <div className="what-icon">&#128176;</div>
                <h3>Flexible pricing</h3>
                <p>
                  Pay per swap, rent monthly, or own your battery. Choose
                  what fits your riding routine.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section animate-in how-section" id="how-it-works">
          <div className="container">
            <div className="section-heading centered">
              <span className="eyebrow">How It Works</span>
              <h2>Five steps to get started</h2>
              <p>
                From sign-up to your first swap, here is the full flow.
              </p>
            </div>

            {/* Animated vertical flow */}
            <div className="swap-flow-vertical">
              <div className="swap-flow-v-item">
                <div className="swap-flow-v-dot"></div>
                <div className="swap-flow-v-card">
                  <div className="swap-flow-v-icon">&#128241;</div>
                  <div>
                    <strong>Open the app</strong>
                    <p>See available batteries near you in real time.</p>
                  </div>
                </div>
              </div>
              <div className="swap-flow-v-item">
                <div className="swap-flow-v-dot"></div>
                <div className="swap-flow-v-card">
                  <div className="swap-flow-v-icon">&#128205;</div>
                  <div>
                    <strong>Find a hub</strong>
                    <p>Pick the nearest hub with charged batteries ready.</p>
                  </div>
                </div>
              </div>
              <div className="swap-flow-v-item">
                <div className="swap-flow-v-dot"></div>
                <div className="swap-flow-v-card">
                  <div className="swap-flow-v-icon">&#128663;</div>
                  <div>
                    <strong>Ride to the hub</strong>
                    <p>No appointment needed — walk in anytime.</p>
                  </div>
                </div>
              </div>
              <div className="swap-flow-v-item swap-flow-v-highlight">
                <div className="swap-flow-v-dot"></div>
                <div className="swap-flow-v-card">
                  <div className="swap-flow-v-icon">&#9889;</div>
                  <div>
                    <strong>Swap your battery</strong>
                    <p>Hand in drained, collect charged. Just a few minutes.</p>
                  </div>
                </div>
              </div>
              <div className="swap-flow-v-item">
                <div className="swap-flow-v-dot"></div>
                <div className="swap-flow-v-card">
                  <div className="swap-flow-v-icon">&#128640;</div>
                  <div>
                    <strong>Keep riding</strong>
                    <p>Back on the road with a full battery. Repeat as needed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="section animate-in pricing-section" id="pricing">
          <div className="container">
            <div className="section-heading centered">
              <span className="eyebrow">Pricing</span>
              <h2>Choose what works for you</h2>
              <p>
                Three ways to access charged batteries. Pick the option that
                fits your riding routine.
              </p>
            </div>
            <div className="pricing-grid pricing-grid-3">
              <article className="price-card">
                <div className="price-label">Pay Per Swap</div>
                <div className="price">&#8377;200</div>
                <div className="price-unit">per swap</div>
                <p>
                  Pay only when you swap. No monthly commitment. Ideal for
                  occasional users or anyone trying the service for the first
                  time.
                </p>
                <ul className="price-features">
                  <li>&#10003; No monthly fee</li>
                  <li>&#10003; Swap on demand</li>
                  <li>&#10003; Compatible batteries</li>
                </ul>
                <a href={WhatsAppLink} className="btn btn-primary price-cta" target="_blank" rel="noreferrer">
                  Try It <span>&rarr;</span>
                </a>
              </article>
              <article className="price-card featured">
                <div className="featured-badge">POPULAR</div>
                <div className="price-label">Rent a Battery</div>
                <div className="price">&#8377;6,000&ndash;&#8377;7,500</div>
                <div className="price-unit">/ month</div>
                <p>
                  Monthly battery rental plan. Unlimited swaps included. Best
                  for daily riders who need reliable battery access.
                </p>
                <ul className="price-features">
                  <li>&#10003; Unlimited swaps</li>
                  <li>&#10003; Compatible batteries</li>
                  <li>&#10003; Hub access near your route</li>
                </ul>
                <a href={WhatsAppLink} className="btn btn-primary price-cta" target="_blank" rel="noreferrer">
                  Join Pilot <span>&rarr;</span>
                </a>
              </article>
              <article className="price-card">
                <div className="price-label">Get Your Own Battery</div>
                <div className="price">Custom</div>
                <div className="price-unit">depends on vehicle &amp; choice</div>
                <p>
                  We buy a battery exclusively for you. It is yours alone &mdash;
                  no sharing with other riders. Pricing depends on your vehicle
                  type and battery preference.
                </p>
                <ul className="price-features">
                  <li>&#10003; Exclusive battery &mdash; not shared</li>
                  <li>&#10003; Swap at hubs when needed</li>
                  <li>&#10003; Pricing based on your vehicle</li>
                  <li>&#10003; Terms &amp; conditions apply</li>
                </ul>
                <a href={WhatsAppLink} className="btn btn-primary price-cta" target="_blank" rel="noreferrer">
                  Get Quote <span>&rarr;</span>
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section animate-in faq-section" id="faq">
          <div className="container">
            <div className="section-heading centered">
              <span className="eyebrow">FAQ</span>
              <h2>Common questions</h2>
            </div>
            <div className="faq-list">
              <details className="faq-item">
                <summary>What vehicles are compatible with voltGo?</summary>
                <p>
                  We are working to support popular electric two-wheelers and
                  three-wheelers. Compatibility depends on battery type. Check
                  with us on WhatsApp to confirm if your vehicle is supported.
                </p>
              </details>
              <details className="faq-item">
                <summary>How does pay-per-swap work?</summary>
                <p>
                  You pay a flat fee each time you swap a battery. No monthly
                  commitment. Ideal for occasional users or anyone trying the
                  service for the first time.
                </p>
              </details>
              <details className="faq-item">
                <summary>Can I switch between plans?</summary>
                <p>
                  Yes. You can start with pay-per-swap and switch to a monthly
                  rental plan whenever you are ready. Talk to us on WhatsApp to
                  make the switch.
                </p>
              </details>
              <details className="faq-item">
                <summary>What if I own my battery?</summary>
                <p>
                  If you purchase your own battery through voltGo, it is
                  exclusively yours — not shared with other riders. You can use
                  the app to check its charge level and swap it at any hub when
                  needed.
                </p>
              </details>
              <details className="faq-item">
                <summary>Where are the swap hubs located?</summary>
                <p>
                  We are placing hubs near auto stands, delivery hotspots, and
                  commercial corridors. Open the app to see hubs near you. We
                  are expanding to new areas based on driver demand.
                </p>
              </details>
              <details className="faq-item">
                <summary>Is there an app?</summary>
                <p>
                  The voltGo app is currently in development. Once launched, it
                  will let you find nearby hubs, check battery availability in
                  real time, and track your battery&apos;s charge level if you
                  own one.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final-cta" id="contact">
          <div className="container final-cta-inner">
            <div>
              <span className="eyebrow">Ready to ride?</span>
              <h2>Join the voltGo pilot</h2>
              <p className="final-cta-desc">
                We are early-stage and running pilots with working EV drivers.
                Get in touch to see if voltGo is available in your area.
              </p>
            </div>
            <div className="final-actions">
              <a
                href={WhatsAppLink}
                className="btn btn-light"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp voltGo <span>&rarr;</span>
              </a>
              <a href="tel:+919999999999" className="btn btn-outline-light">
                Call +91 99999 99999
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp button */}
      <a
        href={WhatsAppLink}
        className="floating-whatsapp"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        &#128172;
      </a>

      {/* Back to top */}
      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        &#8593;
      </button>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <Link to="/" className="logo" style={{ color: "white" }}>
              <span className="logo-mark">V</span>
              <span>voltGo</span>
            </Link>
            <p>Battery access for drivers who keep moving.</p>
          </div>
          <div className="footer-links">
            <a href="#how-it-works" onClick={scrollTo("how-it-works")}>How It Works</a>
            <a href="#pricing" onClick={scrollTo("pricing")}>Pricing</a>
            <Link to="/about">Marketing Plan</Link>
          </div>
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} voltGo. Early-stage pilot.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default CustomerPage;
