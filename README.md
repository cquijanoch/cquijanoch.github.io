# cquijanoch.github.io (v2)

Zero-build, two-page academic & developer homepage.

## How to Install in Your Repo
1. Keep your existing `files/` and `image/` folders.
2. Delete the old template folders (`css/`, `js/`, `fonts/`, `scss/`) and old root CSS files (`index.css`, `publication.css`).
3. Copy all files from this archive into the root of `cquijanoch.github.io`.
4. Commit and push to `main`.

## How to Edit Content
- **Timeline & Publications:** Edit `data/site-data.js`. Both `index.html` and `publications.html` read from it automatically.
- **Paper Animations:** Drop your `.gif` (or looping `.mp4` / `.webm`) into `image/paper/` and update the `media` path in `data/site-data.js`.
- **Google Scholar Link:** Update the Google Scholar URL in `index.html` with your exact Scholar profile ID.
- **Old URL Compatibility:** `publication.html` automatically redirects visitors to `publications.html`.
