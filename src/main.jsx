import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, BatteryCharging, Check, ChevronDown, Clock3, ExternalLink,
  MapPin, Menu, MessageCircle, Phone, ShieldCheck, Users, Zap
} from "lucide-react";
import "./styles.css";

const PHONE = "tel:+919999999999";
const WHATSAPP = "https://wa.me/919999999999?text=" + encodeURIComponent(
  "Hi! I want to know about EV battery swapping. I drive in "
);

export default function App() {
  const [menu, setMenu] = useState(false);
  const [faq, setFaq] = useState(0);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  return (
    <div className="site">
      <header className="nav">
        <div className="nav-inner">
          <button className="brand" onClick={() => scrollTo("top")}>
            <span className="brand-mark"><Zap size={20} fill="currentColor"/></span>
            <span>SWAP<span className="brand-dot">.</span></span>
          </button>

          <nav className={menu ? "nav-links open" : "nav-links"}>
            <button onClick={() => scrollTo("drivers")}>🛺 Drivers</button>
            <button onClick={() => scrollTo("fleets")}>🏢 Fleets</button>
            <button onClick={() => scrollTo("companies")}>🤝 Companies</button>
            <a href={WHATSAPP} className="nav-wa">💬 WhatsApp</a>
          </nav>

          <button className="menu-btn" onClick={() => setMenu(!menu)}>
            {menu ? "×" : "☰"}
          </button>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero section" id="drivers">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse"/> EV BATTERY SWAPPING</div>
            <h1>Don't wait to charge.<br/><span>Keep earning.</span></h1>
            <p className="hero-sub">
              Swap your empty battery for a fully charged one in <b>about 2 minutes.</b>
              Get back on the road and keep working.
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => scrollTo("hubs")}>
                <MapPin/> Find Nearby Hub
              </button>
              <a className="btn btn-whatsapp" href={WHATSAPP}>
                <MessageCircle/> Message on WhatsApp
              </a>
              <a className="btn btn-outline" href={PHONE}>
                <Phone/> Call Us
              </a>
            </div>

            <div className="hero-points">
              <span><Check/> ~2 minute swap</span>
              <span><Check/> No long charging wait</span>
              <span><Check/> Built for working EVs</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="swap-card">
              <div className="swap-card-top">
                <span>SEE HOW IT WORKS</span><b>~2 MIN</b>
              </div>
              <div className="swap-scene">
                <div className="city-glow"></div>
                <div className="road"></div>
                <div className="vehicle">🛺</div>
                <div className="battery battery-left">
                  <BatteryCharging/>
                  <small>EMPTY</small>
                </div>
                <div className="swap-symbol">↔</div>
                <div className="battery battery-right">
                  <BatteryCharging/>
                  <small>FULL</small>
                </div>
                <div className="big-time"><strong>~2</strong><small>MINUTES</small></div>
              </div>
              <div className="swap-caption">
                <div><b>Empty → Swap → Full</b><span>Back on the road.</span></div>
                <div className="play">▶</div>
              </div>
            </div>
            <div className="earn-badge"><Zap fill="currentColor"/> <b>More road time.</b> More earning time.</div>
          </div>
        </section>

        {/* WHO */}
        <section className="section audience">
          <div className="section-heading">
            <div className="eyebrow">BUILT FOR YOU</div>
            <h2>Made for people who<br/><span>cannot afford downtime.</span></h2>
          </div>
          <div className="audience-grid">
            <Audience emoji="🛺" title="Electric Auto Drivers"
              text="Spend more time driving and less time waiting for a charge."/>
            <Audience emoji="🛵" title="Delivery Riders"
              text="Keep taking orders instead of sitting at a charging point."/>
            <Audience emoji="🚚" title="Small Fleets"
              text="Keep your vehicles moving while we manage the batteries."/>
          </div>
        </section>

        {/* PROBLEM / SOLUTION */}
        <section className="problem section">
          <div>
            <div className="eyebrow">THE PROBLEM</div>
            <h2>Charging takes hours.<br/><span>Your work cannot wait.</span></h2>
            <p>
              For drivers, time off the road can mean lost income. Waiting 2–4 hours
              for a charge is not always practical during a working shift.
            </p>
            <div className="lost-time">
              <Clock3/>
              <div><strong>2–4 HOURS</strong><span>Typical charging wait can mean valuable road time lost.</span></div>
            </div>
          </div>

          <div className="solution">
            <div className="eyebrow">OUR SOLUTION</div>
            <h3>Replace hours with minutes.</h3>
            <div className="simple-flow">
              <div><b>🔋</b><span>Empty</span></div>
              <ArrowRight/>
              <div><b>🔄</b><span>Swap</span></div>
              <ArrowRight/>
              <div><b>⚡</b><span>Full</span></div>
              <ArrowRight/>
              <div><b>🛺</b><span>Go</span></div>
            </div>
            <div className="solution-time">~2 <small>MINUTES</small></div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <div className="section-heading center">
            <div className="eyebrow">HOW IT WORKS</div>
            <h2>Swap. Pay. <span>Go.</span></h2>
            <p>No complicated app. No long process.</p>
          </div>
          <div className="steps">
            <Step n="01" icon="👤" title="Register once" text="Tell us your name, phone number and vehicle."/>
            <Step n="02" icon="🔋" title="Bring your empty battery" text="Come to a nearby swap hub when your battery is low."/>
            <Step n="03" icon="⚡" title="Take a full battery" text="Swap, pay and get back on the road in about 2 minutes."/>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="benefits section-sm">
          <div className="section-heading center">
            <div className="eyebrow">WHY SWAP?</div>
            <h2>Your time is your <span>income.</span></h2>
          </div>
          <div className="benefit-grid">
            <Benefit emoji="⏱️" title="Save Time" text="No 2–4 hour charging wait."/>
            <Benefit emoji="💰" title="Earn More" text="Spend more time driving and taking orders."/>
            <Benefit emoji="🔋" title="Battery Worry? Less." text="We manage charging and battery operations."/>
            <Benefit emoji="📍" title="Near Your Route" text="Hubs planned around busy driver locations."/>
          </div>
        </section>

        {/* PRICING */}
        <section className="section pricing">
          <div className="section-heading center">
            <div className="eyebrow">SIMPLE PLANS</div>
            <h2>Pay the way that <span>works for you.</span></h2>
            <p>Pilot pricing will depend on your vehicle and battery type.</p>
          </div>
          <div className="price-grid">
            <Price title="Pay Per Swap" price="₹XX" unit="/ swap" text="For occasional swapping."/>
            <Price title="Daily" price="₹XXX" unit="/ day" text="For drivers working every day." featured/>
            <Price title="Weekly" price="₹XXXX" unit="/ week" text="For regular full-time users."/>
          </div>
          <div className="pricing-bottom">
            <span>🏢 Fleet plans available for 5+ vehicles.</span>
            <a href={WHATSAPP}>💬 Ask us on WhatsApp</a>
          </div>
        </section>

        {/* HUBS */}
        <section className="section hubs" id="hubs">
          <div className="section-heading">
            <div className="eyebrow">PILOT LOCATIONS</div>
            <h2>Find a hub <span>near you.</span></h2>
            <p>We are starting with selected areas and expanding based on driver demand.</p>
          </div>
          <div className="hub-grid">
            <Hub area="Pilot Area 01" detail="Coming soon" />
            <Hub area="Pilot Area 02" detail="Coming soon" />
            <Hub area="Your Area?" detail="Join the waitlist" />
          </div>
          <div className="waitlist">
            <div><b>Don't see your area?</b><span>Tell us where you drive.</span></div>
            <a className="btn btn-whatsapp" href={WHATSAPP}><MessageCircle/> Join WhatsApp Waitlist</a>
          </div>
        </section>

        {/* STORIES */}
        <section className="section stories">
          <div className="section-heading center">
            <div className="eyebrow">DRIVER STORIES</div>
            <h2>What drivers are <span>telling us.</span></h2>
            <p>We are learning directly from drivers during customer discovery.</p>
          </div>
          <div className="story-grid">
            <Story quote="“I don't want my vehicle sitting at a charger during my shift.”" tag="Electric Auto Driver"/>
            <Story quote="“If I can get back on the road quickly, I can take more orders.”" tag="Delivery Rider"/>
            <Story quote="“Keeping the vehicle working is the biggest value.”" tag="Fleet Driver"/>
          </div>
        </section>

        {/* FAQ */}
        <section className="section faq">
          <div className="section-heading center">
            <div className="eyebrow">QUESTIONS</div>
            <h2>Simple <span>answers.</span></h2>
          </div>
          <div className="faq-list">
            {[
              ["Do I need to buy a new battery?", "No. If your vehicle and battery type are supported, we provide the swap battery at the hub."],
              ["How long does a swap take?", "Our target is about 2 minutes. Actual time can vary by vehicle and hub."],
              ["How do I pay?", "Payment options will be available at the hub. Ask us on WhatsApp for the latest details."],
              ["What if no battery is available?", "We are designing hubs with enough battery capacity. Our team will help if a swap is unavailable."],
              ["Is my battery safe?", "We check, charge and manage batteries through our operating process."]
            ].map(([q,a], i) => (
              <button className="faq-item" key={q} onClick={() => setFaq(faq === i ? -1 : i)}>
                <span><b>{q}</b>{faq === i && <small>{a}</small>}</span>
                <ChevronDown className={faq === i ? "up":""}/>
              </button>
            ))}
          </div>
          <a className="btn btn-whatsapp faq-cta" href={WHATSAPP}><MessageCircle/> Any other question? WhatsApp us</a>
        </section>

        {/* B2B */}
        <section className="business-intro">
          <div className="eyebrow">FOR BUSINESSES</div>
          <h2>Keep your EVs moving.</h2>
          <p>We handle the batteries. You handle the business.</p>
        </section>

        <section className="section b2b" id="companies">
          <div className="b2b-top">
            <div>
              <div className="eyebrow">🤝 DELIVERY & LOGISTICS</div>
              <h2>Cut delivery downtime.<br/><span>Hit your EV goals.</span></h2>
              <p>Battery swapping and rental solutions for delivery partners and last-mile operations.</p>
            </div>
            <div className="company-chips">
              <span>Swiggy</span><span>Zomato</span><span>Blinkit</span>
              <span>Zepto</span><span>Amazon</span><span>Flipkart</span>
              <small>Target customer segments — not current partners.</small>
            </div>
          </div>
          <div className="b2b-benefits">
            <Benefit emoji="⏱️" title="Less downtime" text="Reduce the time riders spend waiting for charging."/>
            <Benefit emoji="📦" title="More road time" text="Help riders spend more of their shift delivering."/>
            <Benefit emoji="⚡" title="Support EV growth" text="Make EV adoption easier for delivery operations."/>
            <Benefit emoji="📊" title="Simple data" text="Track swaps, uptime and cost per km."/>
          </div>
          <div className="pilot">
            <div><div className="eyebrow">PILOT WITH US</div><h3>Start small. Measure the impact.</h3><p>We can design a city-level pilot around your vehicles and operating routes.</p></div>
            <div className="pilot-stats"><b>1 city</b><span>·</span><b>3–5 hubs</b><span>·</span><b>200–500 riders</b></div>
          </div>
          <div className="cta-row">
            <a className="btn btn-primary" href={PHONE}><Phone/> Schedule a 30-min Call</a>
            <button className="btn btn-outline" onClick={() => alert("Attach your actual partnership brief PDF here before presenting.")}><ExternalLink/> Partnership Brief</button>
            <a className="btn btn-whatsapp" href={WHATSAPP}><MessageCircle/> WhatsApp</a>
          </div>
        </section>

        <section className="section fleet" id="fleets">
          <div className="section-heading">
            <div className="eyebrow">🏢 FOR FLEET OWNERS • 5–50 EVs</div>
            <h2>We handle batteries.<br/><span>You handle business.</span></h2>
            <p>Keep your vehicles working without building your own battery charging operation.</p>
          </div>
          <div className="fleet-benefits">
            <Benefit emoji="⚡" title="More uptime" text="Keep vehicles on the road for longer."/>
            <Benefit emoji="₹" title="Lower cost / km" text="Choose a plan based on your usage."/>
            <Benefit emoji="📊" title="Simple visibility" text="See swaps, cost and uptime per vehicle."/>
          </div>
          <div className="get-box">
            <h3>What you get</h3>
            <div><Check/><span><b>Reserved batteries</b> — more predictable availability.</span></div>
            <div><Check/><span><b>Dedicated hubs</b> — locations close to your operations.</span></div>
            <div><Check/><span><b>Custom plans</b> — based on your fleet size.</span></div>
            <div><Check/><span><b>2W + 3W support</b> — for delivery bikes and electric autos.</span></div>
          </div>
          <div className="cta-row">
            <a className="btn btn-primary" href={PHONE}><Phone/> Get Fleet Proposal</a>
            <a className="btn btn-whatsapp" href={WHATSAPP}><MessageCircle/> Message on WhatsApp</a>
          </div>
        </section>

        {/* FINAL */}
        <section className="final section">
          <div>
            <div className="eyebrow">READY?</div>
            <h2>Save time.<br/><span>Keep moving.</span></h2>
            <p>Talk to us. We will explain everything in simple words.</p>
          </div>
          <div className="final-buttons">
            <a className="btn btn-whatsapp" href={WHATSAPP}><MessageCircle/> Message on WhatsApp</a>
            <a className="btn btn-light" href={PHONE}><Phone/> Call Us</a>
            <button className="btn btn-ghost" onClick={() => scrollTo("hubs")}><MapPin/> See Hubs</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <div className="brand footer-brand"><span className="brand-mark"><Zap size={18} fill="currentColor"/></span>SWAP<span className="brand-dot">.</span></div>
          <p>Battery swapping and rental for India's working EVs.</p>
        </div>
        <div><b>Contact</b><a href={PHONE}>+91 XXXXX XXXXX</a><a href="mailto:hello@yourcompany.in">hello@yourcompany.in</a></div>
        <div><b>Languages</b><span>English · हिंदी · ગુજરાતી · मराठी</span></div>
      </footer>

      <a className="floating-wa" href={WHATSAPP}><MessageCircle size={27}/><span>WhatsApp Us</span></a>
    </div>
  );
}

function Audience({emoji,title,text}) {
  return <div className="audience-card"><div className="audience-icon">{emoji}</div><h3>{title}</h3><p>{text}</p></div>
}
function Step({n,icon,title,text}) {
  return <div className="step"><div className="step-number">{n}</div><div className="step-icon">{icon}</div><h3>{title}</h3><p>{text}</p></div>
}
function Benefit({emoji,title,text}) {
  return <div className="benefit"><span>{emoji}</span><div><h3>{title}</h3><p>{text}</p></div></div>
}
function Price({title,price,unit,text,featured}) {
  return <div className={"price-card " + (featured ? "featured":"")}><div className="price-head"><h3>{title}</h3>{featured && <small>BEST FOR DAILY USE</small>}</div><div className="price">{price}<em>{unit}</em></div><p>{text}</p><a href={WHATSAPP}><MessageCircle size={17}/> Ask on WhatsApp</a></div>
}
function Hub({area,detail}) {
  return <div className="hub-card"><div className="hub-pin"><MapPin/></div><div><span className="coming">PILOT</span><h3>{area}</h3><p>{detail}</p></div><div className="hub-actions"><button onClick={()=>alert("Replace this with your Google Maps hub link.")}><MapPin/> Maps</button><a href={WHATSAPP}><MessageCircle/> Directions</a></div></div>
}
function Story({quote,tag}) {
  return <div className="story"><div className="stars">★★★★★</div><p>{quote}</p><span className="story-tag">{tag}</span></div>
}

createRoot(document.getElementById("root")).render(<App />);
