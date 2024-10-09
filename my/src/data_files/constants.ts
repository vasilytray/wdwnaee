//import ogImageSrc from "@./img/social.png";
//import ogImageSrc from "/img/social.png";

export const SITE = {
  title: "DokuHost - хостинг для Docker-контейнеров",
  tagline: "Быстрый запуск и легкое масштабирование ваших Проектов",
  description: "DokuHost.ru хостинг Docker-контейнеров, хостинг для разработчиков, быстрый деплой приложений и сервисов в docker-контейнерах",
  description_short: "DokuHost.ru хостинг Docker-контейнеров для быстрого деплоя приложений и сервисов в docker-контейнерах",
  url: "https://docuhost.ru",
  author: "DokuHost.ru",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "ru-RU",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "ru_RU",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Хостинг DokuHost для Docker-контейнеров`,
  description: "Обеспечьте свои проекты быстрым и безопасным деплоем в контейнерах. Почувствуйте разницу благодаря ориентированному на пользователя дизайну и передовым инструментам. Начните исследовать уже сейчас!",
  
};
