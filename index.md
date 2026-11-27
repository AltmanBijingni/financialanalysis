---
layout: home
---

<div class="portfolio-home">
  <section class="portfolio-hero" aria-labelledby="portfolio-title">
    <div class="hero-copy">
      <p class="eyebrow"><span class="status-light" aria-hidden="true"></span>Finance analytics · Portfolio</p>
      <h1 id="portfolio-title">Read the numbers.<br><span>Find the decision.</span></h1>
      <p class="hero-lede">I’m ALTMAN BIJINGNI, with an MSc in International Finance, and I work with Python, SQL, Power BI and Excel.</p>
      <p class="hero-summary">This portfolio shares clear, practical finance analytics for small fund managers, wealth managers, and consumer or retail finance teams.</p>
      <p class="hero-contact">Contact <a href="mailto:amungwa33@gmail.com">amungwa33@gmail.com</a></p>
    </div>
    <aside class="market-snapshot" aria-label="Illustrative promotion example">
      <div class="snapshot-heading">
        <p class="aside-kicker">Promotion snapshot</p>
        <span class="example-badge">Illustrative</span>
      </div>
      <p class="snapshot-caption">A simple worked example</p>
      <div class="market-figures">
        <div><span>Margin</span><strong>40%</strong></div>
        <div><span>Discount</span><strong class="negative-figure">−20%</strong></div>
        <div><span>Break-even uplift</span><strong class="positive-figure">+100%</strong></div>
      </div>
      <p class="snapshot-footnote">£100 full price · £60 cost · before returns and other costs</p>
    </aside>
  </section>

  <section class="market-demo" data-promo-demo data-baseline-profit="40" data-promo-profit-per-order="20" aria-labelledby="demo-title">
    <div class="demo-intro">
      <p class="section-kicker">Interactive example</p>
      <h2 id="demo-title">What does the discount need to earn back?</h2>
      <p>Move the slider to see how extra discounted orders compare with one full-price order in the worked example.</p>
    </div>
    <div class="demo-controls">
      <div class="slider-heading">
        <label for="volume-uplift">Extra promotional volume</label>
        <output data-uplift-output for="volume-uplift">+100%</output>
      </div>
      <input id="volume-uplift" type="range" min="0" max="200" step="10" value="100" data-uplift-slider>
      <div class="slider-scale"><span>Same volume</span><span>3× original volume</span></div>
    </div>
    <div class="demo-chart" role="group" aria-label="Gross profit comparison">
      <div class="bar-row">
        <div class="bar-label"><span>Full-price baseline</span><small>1 order</small></div>
        <div class="bar-track"><span class="baseline-bar" data-baseline-bar></span></div>
        <strong class="bar-value">£40</strong>
      </div>
      <div class="bar-row">
        <div class="bar-label"><span>Promotion scenario</span><small data-order-count>2 orders</small></div>
        <div class="bar-track"><span class="scenario-bar" data-scenario-bar></span></div>
        <strong class="bar-value" data-scenario-profit>£40</strong>
      </div>
      <p class="demo-status" data-demo-status aria-live="polite">At break-even: both scenarios earn £40 gross profit.</p>
    </div>
    <p class="demo-caveat">Illustrative example only: £100 full price, £60 cost, and a 20% discount. Return rates, fulfilment and other costs are excluded. This is not live market data or a sales forecast.</p>
  </section>

  <section class="portfolio-work" aria-labelledby="portfolio-work-title">
    <p class="section-kicker">Explore the portfolio</p>
    <h2 id="portfolio-work-title">Analysis for real decisions</h2>
    <div class="portfolio-cards">
      <a class="portfolio-card" href="{{ '/tools/breakeven/' | relative_url }}">
        <span class="card-number">01 <span>· TOOL</span></span>
        <h3>Break-even calculator</h3>
        <p>Test how margin, discount depth and returns change the extra sales needed for a promotion to break even.</p>
        <span class="card-action">Open calculator <span aria-hidden="true">↗</span></span>
      </a>
      <a class="portfolio-card" href="{{ '/blog/' | relative_url }}">
        <span class="card-number">02 <span>· WRITING</span></span>
        <h3>Blog</h3>
        <p>Plain-language notes on finance analysis, assumptions and what the numbers mean.</p>
        <span class="card-action">Read the blog <span aria-hidden="true">↗</span></span>
      </a>
      <a class="portfolio-card" href="{{ '/projects/' | relative_url }}">
        <span class="card-number">03 <span>· PROJECTS</span></span>
        <h3>Projects</h3>
        <p>Examples connecting finance data, analytical methods and practical business questions.</p>
        <span class="card-action">View projects <span aria-hidden="true">↗</span></span>
      </a>
    </div>
  </section>
</div>

<script src="{{ '/assets/js/promotion-scenario.js' | relative_url }}" defer></script>
