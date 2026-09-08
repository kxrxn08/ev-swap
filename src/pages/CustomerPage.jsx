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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".animate-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
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

        {/* WHAT IS voltGo */}
        <section className="section animate-in what-section">
          <div className="container">
            <div className="section-heading centered">
              <span className="eyebrow">What is voltGo</span>
              <h2>Battery access without the wait</h2>
              <p>
                We are building a battery-swapping network for electric
                two-wheelers and three-wheelers. Swap a drained battery for a
                charged one at a nearby hub and keep moving.
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
                  See battery availability near you in real time. If you own
                  your battery, check its charge level from the app.
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
            <div className="how-steps">
              <div className="how-step">
                <div className="how-step-number">1</div>
                <div className="how-step-content">
                  <h3>Open the app</h3>
                  <p>
                    See available batteries near you in real time. The app
                    shows which hubs have charged batteries ready to swap.
                  </p>
                </div>
              </div>
              <div className="how-step">
                <div className="how-step-number">2</div>
                <div className="how-step-content">
                  <h3>Ride to the hub</h3>
                  <p>
                    Head to the nearest hub with your drained battery. No
                    appointment needed &mdash; walk in anytime during operating
                    hours.
                  </p>
                </div>
              </div>
              <div className="how-step">
                <div className="how-step-number">3</div>
                <div className="how-step-content">
                  <h3>Swap your battery</h3>
                  <p>
                    Hand in your drained battery. Collect a fully charged,
                    compatible replacement. The whole process takes just a few
                    minutes.
                  </p>
                </div>
              </div>
              <div className="how-step">
                <div className="how-step-number">4</div>
                <div className="how-step-content">
                  <h3>Track your battery</h3>
                  <p>
                    If you own your battery, open the app to check its charge
                    level anytime. Know exactly when it is time for a swap.
                  </p>
                </div>
              </div>
              <div className="how-step">
                <div className="how-step-number">5</div>
                <div className="how-step-content">
                  <h3>Keep riding</h3>
                  <p>
                    Get back on the road with a full battery. Repeat whenever
                    you need &mdash; swap as often as your work demands.
                  </p>
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
