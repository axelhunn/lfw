export const mock = {
  sections: [
    { id: "landing", label: "Landing", title: "Landing" },
    { id: "story", label: "Story", title: "Story & Media" },
    { id: "identity", label: "Identity", title: "Identity & Proof" },
    { id: "care", label: "Care", title: "Care & Repair" },
    { id: "circular", label: "Circular", title: "Circular Services" },
    {
      id: "co-create",
      label: "Co-create",
      title: "Co-create (3D Configurator)",
    },
    { id: "community", label: "Community", title: "Community & Rewards" },
  ],

  landingHero: {
    description: "Digital Product Passport",
    title: "Signature Sculpt Dress",
    ctaLabel: "View passport",
  },

  about: {
    title: "About",
    body: "Since its inception in 2005, Roksanda has evolved an unmistakable woman-centred design aesthetic within the luxury fashion market. This mobile passport is a prototype showing the end-to-end flow you’ll see at London Fashion Week.",
  },

  identity: {
    text: {
      title: "Identity",
      description: "Core product identifiers",
    },
    qr: {
      title: "Identity QR",
      description: "Scan to open this passport",
    },
    details: {
      brand: "Roksanda",
      model: "Signature Sculpt Dress",
      productName: "Signature Sculpt Dress",
      sku: "ROK-SS24-001",
      color: "Ivory",
      size: "UK 8",
      material: "Silk blend",
      countryOfOrigin: "United Kingdom",
      onChainId: "0x8f1c…d2a9",
    },
    owner: {
      label: "Owner",
      name: "Owner 01",
    },
  },

  chain: {
    text: {
      title: "Chain of custody",
      description: "Ownership & transfer log",
    },
    events: [
      {
        title: "Item created",
        detail: "Factory QC complete",
        date: "2024-08-12",
      },
      {
        title: "Shipped to boutique",
        detail: "Batch #SS24-07",
        date: "2024-09-14",
      },
      {
        title: "Received in store",
        detail: "New Bond Street",
        date: "2024-09-18",
      },
      { title: "Purchased", detail: "Passport activated", date: "2025-02-16" },
    ],
  },

  tools: {
    title: "Associated tools",
    description: "Verification & actions",
    items: {
      warrantyCheck: "Warranty check",
      antiCounterfeit: "Anti-counterfeit verify",
      sendPassport: "Send passport",
    },
  },

  story: {
    text: {
      title: "Story & Media",
      description: "Owner moments and media",
    },
    stamps: {
      title: "Owner stamps & moments",
      description: "Recent activity",
      items: [
        {
          meta: "2025-02-14 • Owner 01",
          title: "Wore to LFW Day 2 — ‘Sculpt’ show.",
          detail: "Incredible movement.",
        },
        {
          meta: "2025-03-10 • Editorial",
          title: "Vogue shoot — minor steam on hem, no marks.",
        },
        {
          meta: "2025-04-02 • Roksanda Studio",
          title: "Zip slider replaced as goodwill repair.",
        },
      ],
    },
    addStamp: {
      title: "Add your stamp",
      description: "Create a new moment",
      latest: {
        meta: "2025-02-14 • Owner 01",
        title: "Wore to LFW Day 2 — ‘Sculpt’ show.",
        detail: "Incredible movement.",
      },
      noteLabel: "Add a short note",
      notePlaceholder: "e.g., Wore this to LFW day 2 — magical.",
      disclaimer: "Your stamp becomes part of the item's story.",
      cta: "Add stamp",
    },
  },

  care: {
    serviceability: {
      title: "Serviceability view",
      description: "Exploded garment overview",
      caption: "Parts mapping enables targeted repair and reduces turnaround.",
    },
    materials: {
      title: "Materials",
      description: "Composition & sourcing",
      items: [
        { name: "Recycled Polyester", percent: "62%" },
        { name: "Organic Cotton", percent: "28%" },
        { name: "Elastane", percent: "10%" },
      ],
      region: "Factory region: EU (PT)",
      cta: "Book a repair",
    },
    guide: {
      title: "Care guide",
      description: "Best practices",
      items: [
        "Dry clean recommended",
        "Wash cold if needed",
        "Do not tumble dry",
      ],
      tip: "Tip: Wash cold can reduce impact by ~27% and extend life.",
    },
  },

  proof: {
    title: "Proof",
    description: "Authenticity & provenance",
    authenticityLabel: "Authenticity:",
    authenticityValue: "Verified",
    boundMessage: "NFC tag and passport bound to this physical item.",
    onChainLabel: "On-chain proof:",
    onChainId: "0x8f1c…d2a9",
    showQrLabel: "Show QR",
    continueLabel: "Continue",
  },
} as const;
