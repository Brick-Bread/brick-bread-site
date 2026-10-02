# Brick_Bread portfolio

Portfolio at https://brick-bread.me. The GitHub Pages workflow publishes `dist/` on pushes to `main`.

Hand-written static site, no framework and no build step. Each page is a single self-contained HTML file with its CSS and JavaScript inline.

Featured projects: Brickworks Network, Brick-MapProtect and WNotch.

## Edit

- `dist/index.html`: the whole site (content, styles and scripts in one file).
- `dist/404.html`: the not-found page, self-contained in the same style.
- `dist/bricksmp-sunset.png`: the BrickSMP screenshot used in the flagship project.
- `dist/CNAME`: the custom domain (`brick-bread.me`).

No install or build is needed. Edit a file and push to `main`; the workflow deploys `dist/` as-is. To preview locally, open `dist/index.html` in a browser or serve the folder with any static server.

Fonts load from Google Fonts. The theme follows the viewer's system preference and has a manual light/dark toggle. Content stays readable without JavaScript, and reduced-motion settings disable the ember animation, scroll reveals and smooth scrolling.

Contact: brick@brick-bread.me.
