# Brick_Bread portfolio

Portfolio at https://brick-bread.me. The existing GitHub Pages workflow publishes dist/ on pushes to main.

Featured projects: Brickworks Network and Brick-MapProtect. The approved design uses an immersive Minecraft sunset, glass panels, ambient lighting and animations.

## Edit

- dist/index.html: content, links and metadata.
- dist/script.js: mobile navigation and progressive scroll reveals.
- build/input.css: visual styles, animation and reduced-motion rules.
- build/tailwind.config.cjs: design tokens and utility configuration.
- dist/bricksmp-sunset.png: existing portfolio image, hosted with the site.

Run npm install, then npm run build after changing styles or utility classes. Commit the generated dist/styles.css alongside source changes. Production uses compiled CSS without the Tailwind browser runtime. Fonts and icons use their existing public providers.

Content stays visible without JavaScript. Reduced-motion settings disable animation and smooth scrolling. Mobile navigation closes on selection or Escape.

Copy and project details come from the previous public Brick-Bread portfolios and repositories. The sunset was recovered for the earlier portfolio from the BrickSMP site. Contact: brick@brick-bread.me.
