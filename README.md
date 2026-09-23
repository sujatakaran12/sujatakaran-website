# sujatakaran.com

Source code for [sujatakaran.com](https://sujatakaran.com), the personal site of Sujata Karan: analytics, AI strategy and marketing measurement.

The site is plain HTML and CSS with no framework or build step, hosted on GitHub Pages with a custom domain.

## What's on the site

| Page | Path | What it is |
| --- | --- | --- |
| Home | [`/`](https://sujatakaran.com/) | Profile, how I help, selected work, skills, the AI & Automation Lab and contact |
| Resume | [`/resume.html`](https://sujatakaran.com/resume.html) | Full resume |
| Insights | [`/insights/`](https://sujatakaran.com/insights/) | Articles, starting with [AI Has an Attribution Problem](https://sujatakaran.com/insights/ai-attribution-problem) |
| Pipeline Health & Forecast Accuracy | [`/pipeline-forecast/`](https://sujatakaran.com/pipeline-forecast/) | Sales analytics case study: weekly pipeline snapshots, coverage and slippage in SQL, and a backtest of three forecast methods in Python. Code: [pipeline-health-forecast](https://github.com/sujatakaran12/pipeline-health-forecast) |
| Campaign QA Agent | [`/agent-demo.html`](https://sujatakaran.com/agent-demo.html) | Walkthrough of an n8n workflow that checks campaign data and explains issues with an LLM |
| Unified Marketing Measurement Dashboard | [`/unifiedmarketingdashboard/`](https://sujatakaran.com/unifiedmarketingdashboard/) | Interactive demo linking brand, journey, channel and commercial outcomes |

## Repository structure

```
.
├── index.html                    Home page
├── resume.html                   Full resume
├── agent-demo.html               Campaign QA Agent walkthrough
├── insights/
│   ├── index.html                Insights listing
│   └── ai-attribution-problem.html
├── pipeline-forecast/
│   ├── index.html                Case study page
│   ├── dashboard.png
│   └── forecast-error.png
├── unifiedmarketingdashboard/
│   └── index.html                Interactive dashboard demo
├── mobile.css, mobile-nav.js     Shared mobile styles and navigation
├── *.png, *.jpg                  Logo, portrait and preview images
└── CNAME                         Custom domain for GitHub Pages
```

## Running it locally

No install needed. From the repository folder:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Publishing

Any push to the `main` branch goes live on sujatakaran.com through GitHub Pages, usually within a minute or two.

```bash
git add .
git commit -m "Describe the change"
git push
```

## Analytics and privacy

The site uses Google Tag Manager, GA4 and Microsoft Clarity. They are blocked until a visitor gives consent through Cookiebot, with Google Consent Mode set to denied by default.

## Contact

[sujata@sujatakaran.com](mailto:sujata@sujatakaran.com) · [LinkedIn](https://www.linkedin.com/in/sujata-karan/)

© 2026 Sujata Karan. All rights reserved. The code and content in this repository are shared for viewing; please ask before reusing the text, images or design.
