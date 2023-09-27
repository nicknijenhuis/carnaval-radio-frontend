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
- The website sometimes seem to crash and then you have to wait very long for that everything is loaded
- ~~The sidebar player is not yet working~~
- Using theme colors does not work
- ~~Not all news articles are equal in height, they should be per row I think, at least the first 3~~
- ~~The differentation in color between the player and the rest of the site is not good enough, perhaps we need more contrast there~~
- Add correct page titles to every page
- Add google analytics (example: Bundeling)
- Re-use components where applicable
    - Recent songs components, is exactly the same, except for displaying 10 or 4 songs. Not acceptable to duplicate code
- Sponsoren do not auto play, which gives more attention to the first sponsors then the others, they should get equal attention. Loading randomly an other tab each time would also work.
- The news from Limburg24 is not yet loaded
- Social media integration needs to be included
    - Overview of latest intagram posts
    - Overview of latest facebook posts
    - Preferably mixed in between each other
    - Somewhere on the website it should be possible to chat via facebook integration
    - A like and follow button needs to be added
- Twitch integration, on certain moments, it should be possible to replace the slider with Twitch