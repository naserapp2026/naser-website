# naser-website

The public website for **ناصر (Naser)**, a law office management desktop
application: its homepage, privacy policy and terms of service.

These pages exist so the application's Google OAuth consent screen can point at
a published homepage, privacy policy and terms of service, as Google requires
of an app in Production.

## What is here

| File | Served at |
|---|---|
| `index.html` | `/` — homepage |
| `privacy.html` | `/privacy.html` — privacy policy |
| `terms.html` | `/terms.html` — terms of service |
| `styles.css` | the single stylesheet |
| `lang.js` | the Arabic/English switch |

Arabic is the default, right-to-left; English is a click away and the choice is
remembered. There is no build step, no framework, and no external request — no
CDN and no hosted web font — so a visitor to the privacy policy is not reported
to a third party by the page that describes their privacy.

## What is not here

**No application source code, no credentials, no data.** The application itself
lives in a separate private repository. Nothing in this repository is secret,
and nothing in it should ever become secret.

## Publishing

GitHub Pages, deploying from the `main` branch at the repository root.
