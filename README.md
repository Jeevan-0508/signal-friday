# SIGNAL//FRIDAY

Local-only LinkedIn content intelligence demo. This is intentionally separate from the Germany Job Search app so the existing Supabase-backed tracker remains unchanged.

## Run locally

From the repository root, with Node.js installed:

```bash
npm run dev
```

Then open the repository root at `http://localhost:5173/`.

The dashboard is a local static workspace. Select a topic, inspect its evidence, switch between hooks/approaches/final post, review the QC checklist, and use **EXPORT PACKAGE** to download a local JSON package. The approval button only marks the package ready for your manual review; it never publishes to LinkedIn.

The dashboard is buildless HTML/CSS/JavaScript. It does not connect to LinkedIn, publish posts, scrape LinkedIn, store credentials, or claim that a scheduler is active. The Export Package button creates a local JSON package only.

## Evidence model

The demo includes primary-source links for the European Commission AI Act pages, NIST AI RMF, ISO/IEC 42001 and a public GitHub portfolio project. Every project reference is labelled as independent prototype or public portfolio work; it is not described as a production deployment.

## Current limitations

- Research ingestion is represented by a verified demo dataset; no unattended weekly job is claimed.
- LinkedIn metrics are intentionally empty until actual metrics are imported.
- The local approval marker is only a dashboard state. It never publishes.
