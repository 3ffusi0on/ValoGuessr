export interface MapImageData {
  url: string;
  points: number;
}

export interface Map {
  name: string;
  description: string;
  thumbnail: string;
  fullscreen: string;
  images: MapImageData[];
}

export const maps: Map[] = [
  {
    name: "Abyss",
    description: "Dont fall off the edge !",
    thumbnail: "/assets/maps/abyss-thumbnail.webp",
    fullscreen: "/assets/maps/abyss-full.webp",
    images: [
      { url: "/assets/maps/abyss/02a19a23-e521-4742-883f-2c2973c81ab9.png", points: 100 },
      { url: "/assets/maps/abyss/47a11925-19dd-4c54-b956-ac0821ef3e80.png", points: 200 },
      { url: "/assets/maps/abyss/fa6f4a5b-064a-4ae9-90ca-05fddb624b02.png", points: 150 },
      { url: "/assets/maps/abyss/131258d7-690c-43d0-9211-7fb765a370c6.png", points: 250 },
      { url: "/assets/maps/abyss/60ada75e-c85f-4d51-a15e-5f513cd055ab.png", points: 300 },
      { url: "/assets/maps/abyss/c86a8fb9-32e0-49fe-a547-4482145114d7.png", points: 350 },
      { url: "/assets/maps/abyss/2863c1e8-57ab-4904-af0a-1638b2c623de.png", points: 400 },
      { url: "/assets/maps/abyss/9c52df28-4be8-49df-8025-73eb82ccd51a.png", points: 450 },
      { url: "/assets/maps/abyss/e02ca9be-e4f7-4ba6-a94b-565ad2e1efe5.png", points: 500 },
      { url: "/assets/maps/abyss/4748d36c-dfa4-4bb5-9a98-240e1e5ec355.png", points: 550 },
      { url: "/assets/maps/abyss/a8b70f8c-f1d4-47dd-9417-9166fd46cfa2.png", points: 600 },
      { url: "/assets/maps/abyss/f53c57b8-5341-47d2-9365-bbdd244fb9e6.png", points: 650 },
      { url: "/assets/maps/abyss/Abyss_minimap.webp", points: 700 }
    ],
  },
  {
    name: "Ascent",
    description: "An open playground for small wars of position and attrition",
    thumbnail: "/assets/maps/ascent-thumbnail.webp",
    fullscreen: "/assets/maps/ascent-full.webp",
    images: [
      { url: "/assets/maps/ascent/0b522786-cea9-450d-9c04-7555430e5e17.png", points: 100 },
      { url: "/assets/maps/ascent/59d31391-614c-4ba2-a4cf-083c6668fc8e.png", points: 200 },
      { url: "/assets/maps/ascent/f14be6a1-edfc-4299-a523-5a516ba89ce1.png", points: 150 },
      { url: "/assets/maps/ascent/4595497e-c6ba-4868-8ff2-98abf3e3461c.png", points: 250 },
      { url: "/assets/maps/ascent/86b591c5-fd11-4e7e-96d4-6c529ed15469.png", points: 300 },
      { url: "/assets/maps/ascent/f5e6a90d-036b-4f8a-aeaa-e857bce81eca.png", points: 350 },
      { url: "/assets/maps/ascent/4668fc02-a4cf-4944-876e-2677d4e98bc6.png", points: 400 },
      { url: "/assets/maps/ascent/a0262fc2-c768-4199-9a37-b14020ae0c75.png", points: 450 },
      { url: "/assets/maps/ascent/fe88ea75-1d3d-48f2-b93f-24c58783b9ce.png", points: 500 },
      { url: "/assets/maps/ascent/493a0c09-5cec-4d85-8171-0be0a9b1872c.png", points: 550 },
      { url: "/assets/maps/ascent/59907e38-e1b5-4470-99e1-442ca3c4812a.png", points: 600 },
      { url: "/assets/maps/ascent/eadcda21-4921-4191-9d08-c5d02a3f93c2.png", points: 650 },
      { url: "/assets/maps/ascent/Ascent_minimap.webp", points: 700 }
    ],
  },
  {
    name: "Bind",
    description: "Two sites. No middle. Teleporters.",
    thumbnail: "/assets/maps/bind-thumbnail.webp",
    fullscreen: "/assets/maps/bind-full.webp",
    images: [
      { url: "/assets/maps/bind/Bind_minimap.webp", points: 900 }
    ],
  },
  {
    name: "Breeze",
    description: "Take in the sights of historic ruins or seaside caves on this tropical paradise.",
    thumbnail: "/assets/maps/breeze-thumbnail.webp",
    fullscreen: "/assets/maps/breeze-full.webp",
    images: [
      { url: "/assets/maps/breeze/Breeze_minimap.webp", points: 700 }
    ],
  },
  {
    name: "Fracture",
    description: "A top secret research facility split apart by a failed radianite experiment.",
    thumbnail: "/assets/maps/fracture-thumbnail.webp",
    fullscreen: "/assets/maps/fracture-full.webp",
    images: [
      { url: "/assets/maps/fracture/Fracture_minimap.webp", points: 850 }
    ],
  },
  {
    name: "Haven",
    description: "Three sites. Long rotations. Intense mind games.",
    thumbnail: "/assets/maps/haven-thumbnail.webp",
    fullscreen: "/assets/maps/haven-full.webp",
    images: [
      { url: "/assets/maps/haven/Haven_minimap.webp", points: 950 }
    ],
  },
  {
    name: "Icebox",
    description: "Your next battleground is a secret Kingdom excavation site overtaken by the arctic.",
    thumbnail: "/assets/maps/icebox-thumbnail.webp",
    fullscreen: "/assets/maps/icebox-full.webp",
    images: [
      { url: "/assets/maps/icebox/Icebox_minimap.webp", points: 1000 }
    ],
  },
  {
    name: "Lotus",
    description: "A mysterious structure housing an astral conduit radiates with ancient power.",
    thumbnail: "/assets/maps/lotus-thumbnail.webp",
    fullscreen: "/assets/maps/lotus-full.webp",
    images: [
      { url: "/assets/maps/lotus/Lotus_minimap.webp", points: 750 }
    ],
  },
  {
    name: "Pearl",
    description: "Attackers push down into the Defenders on this two-site map set in a vibrant, underwater city.",
    thumbnail: "/assets/maps/pearl-thumbnail.webp",
    fullscreen: "/assets/maps/pearl-full.webp",
    images: [
      { url: "/assets/maps/pearl/Pearl_minimap.webp", points: 800 }
    ],
  },
  {
    name: "Split",
    description: "Elevated sites, rope ascenders, and a focus on vertical gameplay",
    thumbnail: "/assets/maps/split-thumbnail.webp",
    fullscreen: "/assets/maps/split-full.webp",
    images: [
      { url: "/assets/maps/split/Split_minimap.webp", points: 900 }
    ],
  },
  {
    name: "Sunset",
    description: "Stop at your favorite food truck then fight across the city in this traditional three lane map.",
    thumbnail: "/assets/maps/sunset-thumbnail.webp",
    fullscreen: "/assets/maps/sunset-full.webp",
    images: [
      { url: "/assets/maps/sunset/Sunset_minimap.webp", points: 850 }
    ],
  },
];