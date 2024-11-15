export interface Map {
  name: string;
  description: string;
  thumbnail: string;
  images: string[];
}

export const maps: Map[] = [
  {
    name: "Abyss",
    description: "Dont fall off the edge !",
    thumbnail: "/assets/maps/abyss-thumbnail.webp",
    images: [
      "/assets/maps/abyss-full.webp",
      "/assets/maps/Abyss_minimap.webp",
    ],
  },
  {
    name: "Ascent",
    description: "An open playground for small wars of position and attrition",
    thumbnail: "/assets/maps/ascent-thumbnail.webp",
    images: [
      "/assets/maps/ascent-full.webp",
      "/assets/maps/Ascent_minimap.webp",
    ],
  },
  {
    name: "Bind",
    description: "Two sites. No middle. Teleporters.",
    thumbnail: "/assets/maps/bind-thumbnail.webp",
    images: [
      "/assets/maps/bind-full.webp",
      "/assets/maps/Bind_minimap.webp",
    ],
  },
  {
    name: "Breeze",
    description: "Take in the sights of historic ruins or seaside caves on this tropical paradise.",
    thumbnail: "/assets/maps/breeze-thumbnail.webp",
    images: [
      "/assets/maps/breeze-full.webp",
      "/assets/maps/Breeze_minimap.webp",
    ],
  },
  {
    name: "Fracture",
    description: "A top secret research facility split apart by a failed radianite experiment.",
    thumbnail: "/assets/maps/fracture-thumbnail.webp",
    images: [
      "/assets/maps/fracture-full.webp",
      "/assets/maps/Fracture_minimap.webp",
    ],
  },
  {
    name: "Haven",
    description: "Three sites. Long rotations. Intense mind games.",
    thumbnail: "/assets/maps/haven-thumbnail.webp",
    images: [
      "/assets/maps/haven-full.webp",
      "/assets/maps/Haven_minimap.webp",
    ],
  },
  {
    name: "Icebox",
    description: "Your next battleground is a secret Kingdom excavation site overtaken by the arctic.",
    thumbnail: "/assets/maps/icebox-thumbnail.webp",
    images: [
      "/assets/maps/icebox-full.webp",
      "/assets/maps/Icebox_minimap.webp",
    ],
  },
  {
    name: "Lotus",
    description: "A mysterious structure housing an astral conduit radiates with ancient power.",
    thumbnail: "/assets/maps/lotus-thumbnail.webp",
    images: [
      "/assets/maps/lotus-full.webp",
      "/assets/maps/Lotus_minimap.webp",
    ],
  },
  {
    name: "Pearl",
    description: "Attackers push down into the Defenders on this two-site map set in a vibrant, underwater city.",
    thumbnail: "/assets/maps/pearl-thumbnail.webp",
    images: [
      "/assets/maps/pearl-full.webp",
      "/assets/maps/Pearl_minimap.webp",
    ],
  },
  {
    name: "Split",
    description: "Elevated sites, rope ascenders, and a focus on vertical gameplay",
    thumbnail: "/assets/maps/split-thumbnail.webp",
    images: [
      "/assets/maps/split-full.webp",
      "/assets/maps/Split_minimap.webp",
    ],
  },
  {
    name: "Sunset",
    description: "Stop at your favorite food truck then fight across the city in this traditional three lane map.",
    thumbnail: "/assets/maps/sunset-thumbnail.webp",
    images: [
      "/assets/maps/sunset-full.webp",
      "/assets/maps/Sunset_minimap.webp",
    ],
  },
];