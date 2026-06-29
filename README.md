# Casmircodes | Web Design Hub

A responsive education landing page built with HTML, CSS, and vanilla JavaScript, designed for online course promotion.

## Project Overview

This repository contains a static marketing website for a training platform. It demonstrates a polished hero section, animated content cards, course listings, a toggleable login/signup panel, and search filtering for courses.

## What’s included

- `index.html` — main website landing page
- `style.css` — site styling and responsive layout
- `js/script.js` — interactivity for search, form toggling, navbar behavior, and UI patterns
- `course.html` — alternate course page for extended content
- `image/` — image assets used in the layout
- `README.md` — project guide and usage notes

## Key Features

- responsive navigation with hamburger menu for mobile
- hero section with login/signup panel selection
- course search that filters visible course cards
- social login icons in the login panel
- premium course cards with pricing and CTA buttons
- testimonials, service cards, and footer links
- light/dark mode toggle
- back-to-top button

## Project Structure

- `navbar` — responsive site navigation and search
- `content` — hero messaging and course discovery
- `form-stack` — login/signup card switcher
- `courses-grid` — course card layout for promotions
- `why-grid`, `stories-grid`, `service-cards`, `design-cards` — additional site sections
- `footer` — contact info, quick links, and social icons

## Getting Started

### Open in browser

The easiest way is to open `index.html` directly in your browser.

### Run a local server

If you want a better local preview, run a simple HTTP server.

#### Python

```bash
cd "c:\Users\HP\OneDrive\Desktop\online course site"
python -m http.server 8000
```

Then visit `http://localhost:8000`.

#### VS Code Live Server

If you use VS Code, install the Live Server extension and open the folder. Click **Go Live** to preview automatically.

## Usage Notes

- The search bar only filters course card text inside the `#courses` section.
- Clicking **Sign up here** or **Log in** toggles between the login and signup cards.
- Social login icons are setup for front-end click behavior; you can extend them with actual OAuth providers.
- The page is designed to work on both desktop and mobile screen sizes.

## Customization Guide

### Change branding

- Edit the page title in `index.html`.
- Update the `.logo h1` and `.logo span` in the navbar.
- Change the footer brand text in the footer section.

### Update colors and typography

- Edit `style.css` for background gradients, button colors, and text styles.
- Modify the font family import from Google Fonts if desired.

### Add or replace images

- Place new image files in the `image/` folder.
- Update the `src` attributes in the HTML card elements.

### Improve social login

- Add real OAuth support in `js/script.js`.
- Use provider SDKs or a backend service for secure authentication.

## Logo and Branding

This project currently uses text-based branding in the navbar and footer. If you want a custom logo file, add the asset to `image/` and update the logo markup in `index.html`.

## Browser Support

This site works in modern evergreen browsers:
- Chrome
- Firefox
- Edge
- Safari

## Recommended Improvements

- add server-side authentication for login flows
- validate inputs for login/signup forms
- add real course detail pages
- implement course filtering with categories or tags
- replace placeholder images with brand-specific visuals

## License

This project is provided as-is for demonstration and learning purposes.
