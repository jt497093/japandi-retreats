# Japandi Lounge – 3-Day Silent Retreat (GitHub Pages)

Static multi-page site you can deploy on **GitHub Pages**.

## Pages
- `index.html` – Home / offer
- `gallery.html` – Photos
- `dates.html` – Workshop dates (editable)
- `contact.html` – WhatsApp + email inquiry

## Edit workshop dates
Open `assets/js/dates.js` and change the `WORKSHOPS` array.

## Replace photos
Swap files in `assets/img/` (keep the same filenames) to update the visuals.

## Deploy on GitHub Pages
1. Create a new GitHub repo (e.g. `silent-retreat`).
2. Upload these files to the repo root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment** choose:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or `master`) / `/root`
5. Save. Your site will appear at `https://<username>.github.io/<repo>/`.

## Notes
- The contact form uses `mailto:` (works everywhere). If you want a real form, plug in a service like Formspree or Netlify Forms.
