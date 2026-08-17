# FlorBee portfolio

This is a fast, static website ready for GitHub Pages.

## Update your details

Open `content.js`. This is the only file needed for updating your email, LinkedIn URL, and sample work. Each project has a `url` field where you can paste a Google Drive, Notion, GitHub, live-demo, or other work link. Set `image` to a local file path or an image URL when you have a project screenshot.

To change a project image, find its `image: ""` value in `content.js` and paste the direct image link between the quotation marks. For example: `image: "https://your-image-link.jpg"`. To point the About Me and Blog buttons to your Systeme.io site, replace `https://YOUR-SYSTEME-IO-WEBSITE-URL` in `content.js` with your real Systeme.io URL.

The logo file is saved as `assets/florbee-logo.jpg`. Replace that file (keeping the same filename) to use an updated logo without changing the site.

## Publish with GitHub Pages

Push these files to a GitHub repository, then open **Settings → Pages**, choose **Deploy from a branch**, and select your main branch and the root folder.
