# AI Scientist — website assets

Monochrome only: white on dark, black on light. Nothing here is coloured.

## Which file where

| Use | File |
|---|---|
| Favicon (all browsers) | `favicon.ico` + `icon.svg` (follows the browser's light/dark theme) |
| iOS home screen | `apple-touch-icon.png` |
| Link previews | `og-image.png`, or a specific one from `banners/` |
| Site header, wide | `lockup-horizontal/lockup-{white,black}.svg` |
| Site header, tight | `lockup-horizontal-plain/…` (no subtitle — better under ~180 px wide) |
| Hero / centred | `lockup-stacked/…` |
| Text without the mark | `wordmark/…` |
| Icon alone (nav, badge, bullet) | `mark/mark-{white,black}.svg` |
| Icon that follows CSS colour | `mark/mark-currentcolor.svg` or inline `mark-inline.svg` |
| Avatar, app tile | `mark/mark-on-black-*.png` |
| Anything needing a baked black background | `on-black/` (every variant, black rectangle included) |

## White-on-black vs white-on-transparent

`*-white.*` files are **white artwork on transparency** — they vanish on a white page and are meant to sit on your own dark background. The `on-black/` folder has the same variants with a **black rectangle baked in**, for slides, posts, docs, or anywhere you cannot control the background.

## Notes

- **SVGs with text reference DIN Next**, which visitors will not have. Use the PNGs (`-1x`, `-2x`) for anything with type on a public page; the SVGs are for your own editing.
- The mark-only SVGs are self-contained — no font, no external anything.
- `mark-currentcolor.svg` / `mark-inline.svg` take the colour of surrounding text, so they flip automatically in dark mode. If you inline more than one copy on a page, give the internal ids unique prefixes.
- `head.html` has the favicon and Open Graph tags with Liquid paths.
- Clear space: a quarter of the mark's width on all sides. Minimum size: 20 px for the mark, 120 px wide for the horizontal lockup with subtitle.
