// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: process.env.BASE_URL ? process.env.BASE_URL : "/",
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "23清陵祭 - 横浜国立大学大学祭" },
        {
          property: "keywords",
          content:
            "清陵祭,横浜国立大学,大学祭,文化祭,横国,清涼祭,せいりょうさい,2024",
        },
        // {property: 'og:image', content: 'localhost:3000/favicon.ico'},
        // {property: 'og:image:width', content: '1200'},
        // {property: 'og:image:height', content: '630'},
      ],
    },
  },
});
