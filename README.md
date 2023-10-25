# Carnaval Radio Frontend

This is the frontend of Carnaval-Radio.nl, built with Next.JS

[![Netlify Status](https://api.netlify.com/api/v1/badges/2ee00722-68c7-4cbf-a9d9-813ae8882cf2/deploy-status)](https://app.netlify.com/sites/carnaval-radio/deploys)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Backlog (TODO):
- ~~The player still has the refresh issue, when going to sponsoren and then to home, but also going to a working page and then going to 'Over ons' for example (carnaval-radio.netlify.app)~~
- Bug: There is a bug in the menu, the menu is not loading the latest state of what I have configured in Strapi for some reason
- Bug: Sponsoren display doesn't look very nice, they should be a bit bigger, always centered and same height
    - In slider
    - On sponsor page
- Bug/Feature: Articles are not sorted on any date. When the Date field is filled it should use that as the date, if it's not filled it should use publishedAt. On the combination of those two fields it should order all the custom news descending
- Sponsors should be ordered based on the sponsors types it's order. So sponsors from type Prins should display first and Nar last.
- Heavy caching issue on sponsors page, sometimes it shows latests, but sometimes it goes back to using old version. This could be due to vercel, cloudflare or next configuration
- ~~When a song has no image configured (e.g the image is nocover.png) it should display a randomly colored block with the initials of the artist in it~~
    - The color should be selected from a preconfigured hard-coded list of colors
    - ~~E.g Frans Theunisz should be FT, Big Benny should be BB, Kelly van de Lump should be KL, Beppie should be B. Spik en Span should be SS~~
    - ~~The code should be in a way that it uses the same code for every place where the recent song image is shown~~
    - ~~This technique is often used for account avatars, there might be a library for it even~~
    - ~~Other rules, for example nocover.png and artist is Carnaval-Radio.nl should come first~~
    - ~~Nice to have: the same artist should always have the same color (this can be done by not making it not fully random but by using the artist initials in the random function)~~
- UI issues with menu items
- ~~The website sometimes seem to crash and then you have to wait very long for that everything is loaded~~
- ~~The sidebar player is not yet working~~
- ~~Not all news articles are equal in height, they should be per row I think, at least the first 3~~
- ~~The differentation in color between the player and the rest of the site is not good enough, perhaps we need more contrast there~~
- Make sidebar SEO friendly and just use links for items
- ~~Add correct page titles to every page~~
- Add google analytics (example: Bundeling)
- ~~Re-use components where applicable~~
    - ~~Recent songs components, is exactly the same, except for displaying 10 or 4 songs. Not acceptable to duplicate code~~
- ~~Sponsoren do not auto play, which gives more attention to the first sponsors then the others, they should get equal attention. Loading randomly an other tab each time would also work.~~
- ~~Sliders/Banners from the CMS should autoplay~~
- ~~The news from Limburg24 is not yet loaded~~
- Social media integration needs to be included
    - ~~Overview of latest intagram posts~~
    - ~~Overview of latest facebook posts~~
    - ~~Preferably mixed in between each other~~
    - Somewhere on the website it should be possible to chat via facebook integration
    - A like and follow button needs to be added
- Twitch integration, on certain moments, it should be possible to replace the slider with Twitch
- Using theme colors does not work
