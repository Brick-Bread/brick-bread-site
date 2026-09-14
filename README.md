# Brick_Bread portfolio

Static portfolio for https://brick-bread.me, hosted with GitHub Pages. No build step, package installation or JavaScript required.

## Edit

- `dist/index.html`: biography, project descriptions, links and contact information.
- `dist/styles.css`: colours, typography, layout and responsive behaviour.
- `dist/brick-facade.jpg`: temporary stock hero photo; replace with your image and update its alt text and credit in index.html.
- Favicon: inline SVG in the HTML head. Replace with your logo when ready.

## Publish

Enable GitHub Pages with GitHub Actions as the source. Every push to `main` publishes `dist/` using `.github/workflows/pages.yml`. Set the custom domain to `brick-bread.me` and enable HTTPS once GitHub provisions the certificate. `dist/CNAME` records the intended domain.

## Sources

Copy was drawn from the public GitHub profile and repositories for [Brick-Bread](https://github.com/Brick-Bread), and the previous [personal website](https://github.com/Brick-Bread/Brick-Bread.github.io) and [portfolio](https://github.com/Brick-Bread/portfolio), reviewed 14 September 2026. Forked projects are not presented as original work. No private infrastructure details are included. Email comes from the previous public personal website.

Stock photo by Gowtham AGM on [Unsplash](https://unsplash.com/es/fotos/un-edificio-de-ladrillo-rojo-con-dos-ventanas-a-cada-lado-5xrXgL6HyZA), under the [Unsplash License](https://unsplash.com/license). This is decorative photography, not a screenshot of a project. Fonts are DM Sans and Space Grotesk served by Google Fonts, with system fallbacks.
