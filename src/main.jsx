import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const WhatsAppLink =
  "https://wa.me/919999999999?text=Hi%20voltGo%2C%20I%20want%20to%20know%20about%20battery%20swapping.";

function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#" className="logo">
            <span className="logo-mark">V</span>
            <span>voltGo</span>
          </a>
          <nav className="nav-links">
            <a href="#problem">Problem</a>
            <a href="#discovery">Discovery</a>
            <a href="#differentiation">Why Us</a>
            <a href="#strategy">Strategy</a>
            <a href="#pricing">Pricing</a>
          </nav>
          <a href="#contact" className="nav-cta">
            Contact
          </a>
        </div>
      </header>

      <main>
        {/* 1. HERO */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <h1>
                Don't lose earning time.
                <span> Keep moving.</span>
              </h1>
              <p className="hero-subtitle">
                voltGo is building a battery-swapping and rental network
                designed around the needs of working EV drivers.
              </p>
              <div className="hero-actions">
                <a href="#strategy" className="btn btn-primary">
                  Explore Our Strategy <span>&rarr;</span>
                </a>
                <a href="#discovery" className="btn btn-secondary">
                  Customer Insights
                </a>
              </div>
              <div className="hero-note">
                <span>&#10003;</span>
                Based on customer interviews &bull; Early-stage pilot
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-card main-battery-card">
                <div className="battery-top">
                  <span className="battery-label">MARKETING PLAN</span>
                  <span className="battery-status">2026</span>
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
                    <small>STATUS</small>
                    <strong>EARLY STAGE</strong>
                  </div>
                  <div>
                    <small>BASED ON</small>
                    <strong>CUSTOMER DISCOVERY</strong>
                  </div>
                </div>
              </div>
              <div className="floating-card floating-card-top">
                <span className="floating-icon">&#9889;</span>
                <div>
                  <strong>Swap &amp; Go</strong>
                  <small>No long charging wait</small>
                </div>
              </div>
              <div className="floating-card floating-card-bottom">
                <span className="floating-icon">&#128205;</span>
                <div>
                  <strong>Near Your Route</strong>
                  <small>Demand-led hub network</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. CUSTOMER PROBLEM */}
        <section className="section problem-section" id="problem">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Customer Problem</span>
              <h2>Time matters. Cost matters too.</h2>
              <p>
                Working EV drivers face real barriers that affect their daily
                earnings. These problems emerged clearly from our customer
                discovery.
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card">
                <div className="problem-icon">&#9201;</div>
                <h3>Charging downtime</h3>
                <p>
                  Conventional charging can take hours. For drivers who earn by
                  the hour, that's lost income they can't recover.
                </p>
              </article>
              <article className="problem-card">
                <div className="problem-icon">&#128176;</div>
                <h3>Monthly EV cost</h3>
                <p>
                  Affordability is a key concern. Customers want predictable
                  monthly costs that make financial sense for daily work.
                </p>
              </article>
              <article className="problem-card">
                <div className="problem-icon">&#128205;</div>
                <h3>Station proximity</h3>
                <p>
                  A swap station is only useful if it's close to where drivers
                  already work and travel. Distance kills convenience.
                </p>
              </article>
              <article className="problem-card">
                <div className="problem-icon">&#128268;</div>
                <h3>Battery compatibility</h3>
                <p>
                  Not every battery fits every vehicle. Compatibility between
                  battery, vehicle and station must be confirmed before swapping.
                </p>
              </article>
            </div>
            <div className="problem-takeaway">
              <strong>That's why we're building an alternative.</strong>
              <span>
                Swap your empty battery for a charged compatible one and get
                back on the road — without waiting for a charge.
              </span>
            </div>
          </div>
        </section>

        {/* 3. CUSTOMER DISCOVERY */}
        <section className="section discovery-section" id="discovery">
          <div className="container">
            <div className="section-heading centered">
              <span className="eyebrow">What We Heard</span>
              <h2>Recurring themes from customer conversations</h2>
              <p>
                Key findings from early customer discovery interviews.
              </p>
            </div>
            <div className="signals-grid">
              <article className="signal-card">
                <div className="signal-top">
                  <span className="signal-icon">&#128205;</span>
                  <span className="signal-tag">Proximity</span>
                </div>
                <h3>Station needs to be nearby</h3>
                <p>
                  A swapping point must be close to the driver's route. Long
                  travel distances to access a station was seen as a dealbreaker.
                </p>
                <div className="signal-label">Customer discovery finding</div>
              </article>
              <article className="signal-card">
                <div className="signal-top">
                  <span className="signal-icon">&#8377;</span>
                  <span className="signal-tag">Affordability</span>
                </div>
                <h3>Monthly cost has to make sense</h3>
                <p>
                  Drivers want affordable monthly EV costs. Existing options were
                  seen as too expensive, and pricing is a key factor in adoption.
                </p>
                <div className="signal-label">Customer discovery finding</div>
              </article>
              <article className="signal-card">
                <div className="signal-top">
                  <span className="signal-icon">&#9889;</span>
                  <span className="signal-tag">Running Cost</span>
                </div>
                <h3>EV savings without the hassle</h3>
                <p>
                  Lower running cost is attractive compared to petrol/CNG, but
                  only if the charging or battery-access experience works for
                  the driver's routine.
                </p>
                <div className="signal-label">Customer discovery finding</div>
              </article>
            </div>
          </div>
        </section>

        {/* 4. TARGET MARKET */}
        <section className="section market-section" id="market">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Target Market</span>
              <h2>Who we are marketing to</h2>
              <p>
                We are prioritising individual working drivers first, then
                expanding to small fleets once the model is validated.
              </p>
            </div>
            <div className="market-grid">
              <div className="market-primary">
                <div className="market-label">Primary Market</div>
                <article className="market-card featured">
                  <div className="market-icon">&#128663;</div>
                  <h3>Commercial Auto / E-Rickshaw Drivers</h3>
                  <ul>
                    <li>Depend on vehicle availability for daily work</li>
                    <li>Sensitive to downtime and monthly costs</li>
                    <li>Need predictable operating expenses</li>
                    <li>Need convenient station locations</li>
                  </ul>
                </article>
                <article className="market-card featured">
                  <div className="market-icon">&#128666;</div>
                  <h3>Delivery / Gig Riders</h3>
                  <ul>
                    <li>High daily vehicle utilization</li>
                    <li>Charging downtime interferes with work</li>
                    <li>Price sensitive</li>
                    <li>Need convenient access to charged batteries</li>
                  </ul>
                </article>
              </div>
              <div className="market-secondary">
                <div className="market-label">Secondary Market</div>
                <article className="market-card">
                  <div className="market-icon">&#128666;</div>
                  <h3>Small EV Fleets</h3>
                  <ul>
                    <li>Multiple vehicles needing uptime</li>
                    <li>Centralised battery management</li>
                    <li>Potential for fleet-specific plans</li>
                    <li>To be validated after individual model</li>
                  </ul>
                </article>
                <div className="market-note">
                  <strong>Why primary first?</strong>
                  Individual drivers are easier to reach, faster to onboard,
                  and provide clearer signals about product-market fit before we
                  invest in fleet infrastructure.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CUSTOMER PERSONAS */}
        <section className="section personas-section">
          <div className="container">
            <div className="section-heading centered">
              <span className="eyebrow">Personas</span>
              <h2>Marketing personas from our discovery</h2>
              <p>
                Derived from early customer discovery, not statistically
                representative populations.
              </p>
            </div>
            <div className="personas-grid">
              <article className="persona-card">
                <div className="persona-avatar">&#128104;&#8205;&#128663;</div>
                <div className="persona-tag">Persona 1</div>
                <h3>The Daily Driver</h3>
                <p className="persona-role">Commercial auto / e-rickshaw driver</p>
                <div className="persona-concerns">
                  <div className="persona-concern">
                    <strong>Primary concern:</strong> Downtime + monthly cost
                  </div>
                  <div className="persona-concern">
                    <strong>Needs:</strong> Nearby swapping + predictable pricing
                  </div>
                </div>
              </article>
              <article className="persona-card">
                <div className="persona-avatar">&#129305;</div>
                <div className="persona-tag">Persona 2</div>
                <h3>The Gig Rider</h3>
                <p className="persona-role">Delivery rider</p>
                <div className="persona-concerns">
                  <div className="persona-concern">
                    <strong>Primary concern:</strong> Vehicle availability during working hours
                  </div>
                  <div className="persona-concern">
                    <strong>Needs:</strong> Convenient swapping + affordable plan
                  </div>
                </div>
              </article>
              <article className="persona-card">
                <div className="persona-avatar">&#127970;</div>
                <div className="persona-tag">Persona 3</div>
                <h3>The Small Fleet</h3>
                <p className="persona-role">5&ndash;50 EVs</p>
                <div className="persona-concerns">
                  <div className="persona-concern">
                    <strong>Primary concern:</strong> Fleet uptime and battery availability
                  </div>
                  <div className="persona-concern">
                    <strong>Needs:</strong> Centralised service + fleet plans
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 6. VALUE PROPOSITION */}
        <section className="section value-section">
          <div className="container">
            <div className="section-heading centered">
              <span className="eyebrow">Value Proposition</span>
              <h2>What we aim to offer</h2>
            </div>
            <div className="value-statement">
              <p>
                For working EV drivers who cannot afford unnecessary charging
                downtime, voltGo aims to provide convenient access to compatible
                charged batteries near their routes through an affordable usage
                model.
              </p>
            </div>
            <div className="value-grid">
              <article className="value-card">
                <div className="value-icon">&#9201;</div>
                <h3>Save Time</h3>
                <p>Reduce charging-related downtime and get back on the road in minutes.</p>
              </article>
              <article className="value-card">
                <div className="value-icon">&#128176;</div>
                <h3>Control Cost</h3>
                <p>Target an affordable monthly model based on what drivers told us they can pay.</p>
              </article>
              <article className="value-card">
                <div className="value-icon">&#128205;</div>
                <h3>Stay Near Your Route</h3>
                <p>Build station density around where drivers already work and travel.</p>
              </article>
              <article className="value-card">
                <div className="value-icon">&#128268;</div>
                <h3>Use Compatible Batteries</h3>
                <p>Check compatibility before swapping to ensure the right fit for your vehicle.</p>
              </article>
            </div>
          </div>
        </section>

        {/* 7. POSITIONING */}
        <section className="section positioning-section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Positioning</span>
              <h2>How we want to be positioned</h2>
              <p>
                voltGo is positioned as an uptime-focused battery-swapping
                service for working EV drivers.
              </p>
            </div>
            <div className="positioning-table-wrapper">
              <table className="positioning-table">
                <thead>
                  <tr>
                    <th>Option</th>
                    <th>Main Trade-Off</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Petrol / CNG</td>
                    <td>Higher fuel &amp; operating cost</td>
                  </tr>
                  <tr>
                    <td>Conventional Charging</td>
                    <td>Charging downtime</td>
                  </tr>
                  <tr>
                    <td>Battery Ownership</td>
                    <td>Upfront cost + maintenance responsibility</td>
                  </tr>
                  <tr className="positioning-highlight">
                    <td><strong>voltGo</strong></td>
                    <td>Access to charged compatible batteries</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 8. MARKETING STRATEGY */}
        <section className="section strategy-section" id="strategy">
          <div className="container">
            <div className="section-heading centered">
              <span className="eyebrow">Marketing Strategy</span>
              <h2>How we will reach customers</h2>
              <p>
                A 3-phase approach: start local, prove demand, build density,
                then scale.
              </p>
            </div>
            <div className="phases-grid">
              <article className="phase-card">
                <div className="phase-number">Phase 1</div>
                <h3>Hyperlocal Pilot</h3>
                <p className="phase-focus">Focus: one dense commercial area</p>
                <div className="phase-channels">
                  <span>EV dealerships</span>
                  <span>Auto stands</span>
                  <span>Rider communities</span>
                  <span>WhatsApp groups</span>
                  <span>On-ground demos</span>
                  <span>Referral incentives</span>
                </div>
                <p className="phase-goal">
                  <strong>Goal:</strong> Validate whether drivers will use the
                  service when a hub is conveniently located.
                </p>
              </article>
              <article className="phase-card">
                <div className="phase-number">Phase 2</div>
                <h3>Build Density</h3>
                <p className="phase-focus">Expand from pilot to nearby high-demand areas</p>
                <div className="phase-channels">
                  <span>User referrals</span>
                  <span>Demand data</span>
                  <span>Repeat usage</span>
                  <span>Local partnerships</span>
                </div>
                <p className="phase-goal">
                  <strong>Goal:</strong> Create a network, not isolated stations.
                </p>
              </article>
              <article className="phase-card">
                <div className="phase-number">Phase 3</div>
                <h3>Scale</h3>
                <p className="phase-focus">Expand after validating demand &amp; economics</p>
                <div className="phase-channels">
                  <span>Proven demand</span>
                  <span>Repeat usage</span>
                  <span>Station economics</span>
                  <span>Compatibility data</span>
                </div>
                <p className="phase-goal">
                  <strong>Goal:</strong> Expand only after the model is validated.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* 9. ACQUISITION FUNNEL */}
        <section className="section funnel-section">
          <div className="container">
            <div className="section-heading centered">
              <span className="eyebrow">Acquisition Funnel</span>
              <h2>From awareness to referral</h2>
              <p>Proposed marketing funnel — metrics to be validated in pilot.</p>
            </div>
            <div className="funnel">
              <div className="funnel-stage" style={{ "--stage-width": "100%" }}>
                <div className="funnel-bar">Awareness</div>
                <div className="funnel-desc">
                  Driver encounters voltGo through local partnerships, WhatsApp,
                  auto stands, EV dealers
                </div>
                <div className="funnel-objective">Objective: Generate qualified leads</div>
              </div>
              <div className="funnel-stage" style={{ "--stage-width": "85%" }}>
                <div className="funnel-bar">Interest</div>
                <div className="funnel-desc">
                  Driver checks compatibility, pricing, nearest hub
                </div>
                <div className="funnel-objective">Objective: Get compatibility &amp; pricing checks</div>
              </div>
              <div className="funnel-stage" style={{ "--stage-width": "70%" }}>
                <div className="funnel-bar">Trial</div>
                <div className="funnel-desc">Driver performs first swap</div>
                <div className="funnel-objective">Objective: Demonstrate convenience</div>
              </div>
              <div className="funnel-stage" style={{ "--stage-width": "55%" }}>
                <div className="funnel-bar">Conversion</div>
                <div className="funnel-desc">Driver adopts a monthly plan / recurring usage</div>
                <div className="funnel-objective">Objective: Build recurring users</div>
              </div>
              <div className="funnel-stage" style={{ "--stage-width": "42%" }}>
                <div className="funnel-bar">Retention</div>
                <div className="funnel-desc">Driver repeatedly swaps batteries</div>
                <div className="funnel-objective">Objective: Increase repeat usage</div>
              </div>
              <div className="funnel-stage" style={{ "--stage-width": "30%" }}>
                <div className="funnel-bar">Referral</div>
                <div className="funnel-desc">Satisfied drivers refer other drivers</div>
                <div className="funnel-objective">Objective: Lower acquisition cost</div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. PRICING STRATEGY */}
        <section className="section pricing-section" id="pricing">
          <div className="container">
            <div className="section-heading centered">
              <span className="eyebrow">Pricing Strategy</span>
              <h2>Affordable enough to work</h2>
              <p>
                Proposed pricing based on customer discovery. Final pricing will
                be validated through pilot experiments.
              </p>
            </div>
            <div className="pricing-grid">
              <article className="price-card">
                <div className="price-label">2-Wheeler Plan</div>
                <div className="price">&#8377;6,000</div>
                <div className="price-unit">/ month (proposed)</div>
                <p>Affordable monthly battery-swap plan for electric two-wheelers used by delivery riders.</p>
              </article>
              <article className="price-card featured">
                <div className="featured-badge">PRIMARY</div>
                <div className="price-label">3-Wheeler Plan</div>
                <div className="price">&#8377;6,500&ndash;&#8377;7,500</div>
                <div className="price-unit">/ month (proposed)</div>
                <p>Monthly battery-swap plan for commercial autos and e-rickshaws.</p>
              </article>
            </div>
            <div className="pricing-note">
              <strong>Note:</strong> These are proposed pilot prices. Affordability
              was a strong signal from customer discovery. Final pricing will be
              tested and refined during the pilot phase.
            </div>
          </div>
        </section>

        {/* 11. PROMOTION STRATEGY */}
        <section className="section promotion-section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Promotion</span>
              <h2>How we will convert interest into trial</h2>
              <p>
                Proposed tactics to test which acquisition channels work best for
                reaching working EV drivers.
              </p>
            </div>
            <div className="promotion-grid">
              <article className="promotion-card">
                <div className="promotion-icon">&#127873;</div>
                <h3>First-swap incentive</h3>
                <p>Proposed pilot incentive for first-time users. To be validated.</p>
                <div className="promotion-label">Proposed experiment</div>
              </article>
              <article className="promotion-card">
                <div className="promotion-icon">&#128101;</div>
                <h3>Driver referral program</h3>
                <p>Existing users refer other drivers. Test whether referrals lower acquisition cost.</p>
                <div className="promotion-label">Proposed experiment</div>
              </article>
              <article className="promotion-card">
                <div className="promotion-icon">&#128640;</div>
                <h3>On-ground demos</h3>
                <p>Live demonstrations at auto stands and delivery hotspots to show how swapping works.</p>
                <div className="promotion-label">Phase 1 tactic</div>
              </article>
              <article className="promotion-card">
                <div className="promotion-icon">&#129309;</div>
                <h3>Local partner referrals</h3>
                <p>EV mechanics, dealers and rental operators referring drivers to the service.</p>
                <div className="promotion-label">Phase 1 tactic</div>
              </article>
              <article className="promotion-card">
                <div className="promotion-icon">&#128172;</div>
                <h3>WhatsApp outreach</h3>
                <p>Direct engagement through driver communities and local WhatsApp groups.</p>
                <div className="promotion-label">Phase 1 tactic</div>
              </article>
              <article className="promotion-card">
                <div className="promotion-icon">&#127970;</div>
                <h3>Fleet pilot offers</h3>
                <p>Custom outreach to small fleet operators for pilot partnerships.</p>
                <div className="promotion-label">Phase 2 tactic</div>
              </article>
            </div>
          </div>
        </section>

        {/* 12. PLACE / DISTRIBUTION */}
        <section className="section place-section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Place &amp; Distribution</span>
              <h2>Where we put the hubs matters</h2>
              <p>
                We will prioritise locations where target drivers already work
                and travel. Station proximity was one of the strongest customer
                findings.
              </p>
            </div>
            <div className="place-grid">
              <article className="place-card">
                <div className="place-icon">&#128205;</div>
                <h3>High-density auto stands</h3>
                <p>Where commercial auto drivers gather and start their routes.</p>
              </article>
              <article className="place-card">
                <div className="place-icon">&#128666;</div>
                <h3>Delivery hotspots</h3>
                <p>Areas with high delivery rider concentration and activity.</p>
              </article>
              <article className="place-card">
                <div className="place-icon">&#127970;</div>
                <h3>Commercial corridors</h3>
                <p>Roads and zones with heavy commercial EV traffic.</p>
              </article>
              <article className="place-card">
                <div className="place-icon">&#9889;</div>
                <h3>EV-heavy neighbourhoods</h3>
                <p>Areas where EV adoption is already high among working drivers.</p>
              </article>
            </div>
            <div className="place-strategy">
              <strong>Strategy:</strong> Demand &rarr; Pilot hub &rarr; Measure usage &rarr;
              Expand nearby. We do not want to build stations everywhere. We want to
              build where our customers already are.
            </div>
          </div>
        </section>

        {/* COMPETITIVE LANDSCAPE */}
        <section className="section competitive-section" id="differentiation">
          <div className="container">
            <div className="section-heading centered">
              <span className="eyebrow">How We Differentiate</span>
              <h2>How voltGo compares</h2>
              <p>
                Existing players like Zypp and Eveez provide vehicles with
                bundled batteries — their stations only work with their own
                ecosystem. voltGo focuses on open-compatible battery swapping.
              </p>
            </div>
            <div className="competitive-table-wrapper">
              <table className="competitive-table">
                <thead>
                  <tr>
                    <th>Option</th>
                    <th>Vehicle</th>
                    <th>Battery Access</th>
                    <th>Station Compatibility</th>
                    <th>Driver Flexibility</th>
                    <th>Monthly Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Petrol / CNG</strong></td>
                    <td>Driver owns</td>
                    <td>Fuel station</td>
                    <td>N/A</td>
                    <td>High</td>
                    <td>High (fuel cost)</td>
                  </tr>
                  <tr>
                    <td><strong>Conventional Charging</strong></td>
                    <td>Driver owns</td>
                    <td>Charging station</td>
                    <td>Varies by connector</td>
                    <td>Medium (downtime)</td>
                    <td>Low (electricity)</td>
                  </tr>
                  <tr>
                    <td><strong>Zypp / Eveez</strong></td>
                    <td>Provided by platform</td>
                    <td>Bundled with vehicle</td>
                    <td>Own ecosystem only</td>
                    <td>Low (locked in)</td>
                    <td>Rental + battery fee</td>
                  </tr>
                  <tr className="positioning-highlight">
                    <td><strong>voltGo (proposed)</strong></td>
                    <td>Driver owns </td>
                    <td>Swap at hub</td>
                    <td>Compatible batteries</td>
                    <td>High (open model)</td>
                    <td>Proposed: &#8377;6K&ndash;&#8377;7.5K</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 17. FLEET / B2B */}
        <section className="section b2b-section">
          <div className="container b2b-grid">
            <div>
              <span className="eyebrow">Fleet / B2B</span>
              <h2>Secondary growth channel</h2>
              <p>
                After validating the individual-driver model, small fleets become
                a potential B2B expansion channel.
              </p>
              <div className="b2b-list">
                <div><span>&#10003;</span> Fleet uptime focus</div>
                <div><span>&#10003;</span> Centralised battery access</div>
                <div><span>&#10003;</span> Reserved battery capacity</div>
                <div><span>&#10003;</span> Usage visibility</div>
                <div><span>&#10003;</span> Custom fleet plans</div>
              </div>
              <div className="b2b-note">
                <strong>To be validated:</strong> Fleet pricing, minimum vehicle
                count, compatibility requirements.
              </div>
            </div>
            <div className="b2b-stats">
              <div className="stat-card">
                <strong>2W + 3W</strong>
                <span>Potential vehicle categories</span>
              </div>
              <div className="stat-card">
                <strong>5&ndash;50</strong>
                <span>Example small-fleet range</span>
              </div>
              <div className="stat-card wide">
                <strong>Uptime</strong>
                <span>Explore alternatives to relying entirely on charging downtime.</span>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL SUMMARY */}
        <section className="final-cta" id="contact">
          <div className="container final-cta-inner">
            <div>
              <span className="eyebrow">Strategy Summary</span>
              <h2>Start local. Prove demand. Build density. Scale.</h2>
              <div className="summary-grid">
                <div className="summary-item">
                  <strong>Who:</strong> Working EV drivers
                </div>
                <div className="summary-item">
                  <strong>Problem:</strong> Charging downtime + affordability + convenience
                </div>
                <div className="summary-item">
                  <strong>Position:</strong> Uptime-focused battery swapping
                </div>
                <div className="summary-item">
                  <strong>Acquisition:</strong> Hyperlocal partnerships + referrals + on-ground
                </div>
                <div className="summary-item">
                  <strong>Price:</strong> &#8377;6K&ndash;&#8377;7.5K/month (proposed)
                </div>
                <div className="summary-item">
                  <strong>Place:</strong> High-demand driver routes
                </div>
                <div className="summary-item">
                  <strong>Measurement:</strong> Leads &rarr; trials &rarr; repeat swaps &rarr; referrals
                </div>
                <div className="summary-item">
                  <strong>Next Step:</strong> Run a focused pilot and validate assumptions
                </div>
              </div>
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
            <div className="logo">
              <span className="logo-mark">V</span>
              <span>voltGo</span>
            </div>
            <p>Battery access for drivers who keep moving.</p>
          </div>
          <div className="footer-links">
            <a href="#problem">Problem</a>
            <a href="#discovery">Discovery</a>
            <a href="#differentiation">Why Us</a>
            <a href="#strategy">Strategy</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} voltGo. Early-stage pilot.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
