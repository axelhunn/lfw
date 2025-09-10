export const mock = {
  home: {
    label: "Home",
    title: "Home",
  },

  hero: {
    verifiedLabel: "This product is verified.",
    title: "6 Arm Puffer",
    uid: "6AP-24-SS-88798",
    image: "/figma2/home-hero.png",
    badge: "/figma2/verified-badge.png",
  },

  about: {
    title: "ABOUT YAKU",
    body: "YAKU is a London-based label founded in 2023 by designer Yaku Stapleton, a graduate of Leeds Beckett and Central Saint Martins. Rooted in Afrofuturism and fantasy world-building, the brand reimagines members of Stapleton’s family as characters in a limitless universe inspired by RPG games and natural history. Each season is a chapter in an unfolding story, the ImPossible Family Reunion in RPG Space, a narrative exploring themes of identity, hope, and time.",
  },

  discover: {
    label: "Discover",
    title: "Discover the product",
    image: "/figma2/identity-passport-7f9186.png",
  },

  story: {
    title: "Product story",
    video: {
      av1: "/videos/story-av1.mp4",
      webm: "/videos/story.webm",
      h264: "/videos/story.mp4",
    },
  },

  identity: {
    label: "Identity",
    title: "Product identity",
    details: {
      brand: "Yaku",
      category: "Jacket",
      model: "6 Arm Puffer",
      uid: "6AP-24-SS-88798",
      productCode: "88978",
      color: "Reflective Pink",
      size: "UK 8",
    },
  },

  community: {
    label: "Community",
    title: "Yaku community",
    blurb:
      "Your YAKU hub for benefits and co-creation. Track benefits, unlock access, and co-create the next chapter with YAKU.",
  },
} as const;
