export interface Map {
  name: string;
  description: string;
  imageUrl: string;
  thumbnail: string;
}

export const maps: Map[] = [
  {
    name: "Ascent",
    description: "An open playground for small wars of position and attrition",
    imageUrl: "https://images.unsplash.com/photo-1624628639856-100bf817fd35?q=80&w=1920&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1624628639856-100bf817fd35?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Bind",
    description: "Two sites. No middle. Teleporters.",
    imageUrl: "https://images.unsplash.com/photo-1627856014754-2907e2355b76?q=80&w=1920&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1627856014754-2907e2355b76?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Haven",
    description: "Three sites. Long rotations. Intense mind games.",
    imageUrl: "https://images.unsplash.com/photo-1636955779321-819753cd1741?q=80&w=1920&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1636955779321-819753cd1741?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Split",
    description: "Elevated sites, rope ascenders, and a focus on vertical gameplay",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1920&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400&auto=format&fit=crop",
  }
];