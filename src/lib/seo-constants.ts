// Shared SEO constants for schema.org structured data

export const MC_MYSTERIOUS_SOCIAL_PROFILES = [
  "https://www.instagram.com/mcmysterious",
  "https://www.youtube.com/@mcmysterious",
  "https://soundcloud.com/mcmysterious",
  "https://www.tiktok.com/@mcmysterious",
  "https://www.mixcloud.com/mcmysterious/",
  "https://MysteriousEnterprise.com",
];

export const MC_MYSTERIOUS_PERSON_SCHEMA = {
  "@type": "Person" as const,
  name: "MC Mysterious",
  sameAs: MC_MYSTERIOUS_SOCIAL_PROFILES,
};

export const CRYPTIC_STORE_PUBLISHER_SCHEMA = {
  "@type": "Organization" as const,
  name: "Cryptic Store",
  sameAs: MC_MYSTERIOUS_SOCIAL_PROFILES,
};
