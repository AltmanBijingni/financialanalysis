# Retail Promotion Check

A static, interactive estimator for checking whether a retail discount can earn the same gross profit as full-price sales. It adjusts the break-even volume uplift for separate full-price and promotional return rates. It does not forecast retail demand or any named company's results.

## Use locally

No package installation or build step is required. Serve the `site` directory so the browser can load the page:

```bash
python3 -m http.server 8000 --directory site
```

Open `http://localhost:8000`.

## Calculation

The estimator calculates expected gross profit per ordered unit:

- Full-price baseline: `margin × (1 − full-price return rate)`
- Promotional order: `(margin − discount) × (1 − promotional return rate)`
- Required uplift: `(baseline profit ÷ promotional profit) − 1`

If the discount is equal to or above the original gross margin, the offer is marked not viable. The separate volume-uplift control compares an editable scenario with the required break-even level.

## Assumptions

Returned stock is assumed recoverable at original cost. Shipping, handling, payment fees, markdowns on returned stock, overhead and capacity constraints are excluded. Results are a simplified planning check; use your own fully loaded costs and margin data before making decisions.

## Publish with GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` deploys the contents of `site/` when changes are pushed to `main`. Set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.
