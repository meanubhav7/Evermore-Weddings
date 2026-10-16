import { Story, Testimonial, InstagramPost, PackageOffer, ClientGalleryItem } from "./types";

export const siteConfig = {
  name: "Aurelia Vance",
  title: "Wedding & Elopement Photographer",
  location: "San Francisco & Worldwide",
  instagram: "@aurelia.vance.photo",
  email: "hello@aureliavance.com",
  phone: "+1 (415) 890-4421",
  bio: "Aurelia is an editorial wedding and elopement photographer based in California whose signature style blends candid intimacy with cinematic, magazine-worthy storytelling. Experienced in destination celebrations and quiet mountaintop elopements, she travels worldwide to document honest love stories.",
  copyright: `© ${new Date().getFullYear()} by Aurelia Vance Photography. All rights reserved.`,
};

export const navLinks = [
  { name: "About", href: "/about" },
  { name: "Recent Work", href: "/recent-work" },
  { name: "Offerings", href: "/offerings" },
  { name: "Contact", href: "/contact" },
  { name: "Client Galleries", href: "/client-galleries" },
];

export const featuredStories: Story[] = [
  {
    id: "charming-garden-ceremony",
    title: "Charming Garden Ceremony",
    subtitle: "Sonoma Valley Estate",
    description:
      "A sun-dappled afternoon under ancient olive trees, cascading floral arches, and heartfelt vows celebrated with sparkling wine and laughter.",
    mainImage: {
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=85&w=1200",
      alt: "Joyful bride and groom smiling under flower petals",
      width: 1200,
      height: 1500,
    },
    secondaryImage: {
      src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=85&w=1000",
      alt: "Close-up of hands with custom diamond wedding rings",
      width: 1000,
      height: 667,
    },
    link: "/recent-work#garden",
  },
  {
    id: "elegant-beach-reception",
    title: "Elegant Beach Reception",
    subtitle: "Big Sur Coastal Bluffs",
    description:
      "Wild ocean mist sweeping over sea cliffs, an effortless silk slip dress, and a majestic windswept embrace between horses along the golden shore.",
    mainImage: {
      src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=85&w=1200",
      alt: "Bride in silk gown standing beside white and brown horses in open field",
      width: 1200,
      height: 1500,
    },
    secondaryImage: {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=85&w=1200",
      alt: "Couple walking through an expansive mountain valley landscape",
      width: 1200,
      height: 800,
    },
    link: "/recent-work#beach",
  },
  {
    id: "rustic-barn-wedding",
    title: "Rustic Barn Wedding",
    subtitle: "Hudson Valley Wilderness",
    description:
      "An intimate retreat surrounded by pine forests, handcrafted timber tables, and joyful strolls along twilight woodland paths.",
    mainImage: {
      src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=85&w=1400",
      alt: "Bride and groom walking hand in hand along a serene forest path",
      width: 1400,
      height: 933,
    },
    secondaryImage: {
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=85&w=1000",
      alt: "Intimate portrait of couple laughing together",
      width: 1000,
      height: 1000,
    },
    link: "/recent-work#barn",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "“We had the most incredible experience with Aurelia. Her artistic vision, quiet attentiveness, and ability to capture authentic emotion took our breath away. Our photos feel like timeless stills from a classic film.”",
    author: "Anna & Mark Reed",
    location: "Sonoma Valley, California",
    image:
      "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&q=85&w=1200",
  },
  {
    id: "2",
    quote:
      "“Looking through our wedding gallery brought everyone to tears. Aurelia didn’t just photograph how our day looked—she captured how deeply it felt. Every stolen glance, gentle tear, and joyful laugh is preserved forever.”",
    author: "Elena & Julian Vance",
    location: "Positano, Amalfi Coast",
    image:
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&q=85&w=1200",
  },
  {
    id: "3",
    quote:
      "“Aurelia made being photographed feel as natural as taking a walk together. She seamlessly blended into our celebration and produced images that belong in Vogue. We could not have chosen a better artist.”",
    author: "Sophia & Liam Davis",
    location: "Aspen Mountain Resort, Colorado",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=1200",
  },
];

export const instagramPosts: InstagramPost[] = [
  {
    id: "ig-1",
    image:
      "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&q=85&w=800",
    alt: "Ethereal baby's breath floral bouquet held by hands",
    likes: "1,240",
    tag: "floral details",
  },
  {
    id: "ig-2",
    image:
      "https://images.unsplash.com/photo-1519225429980-715cb0215aed?auto=format&fit=crop&q=85&w=800",
    alt: "Newlyweds walking up stone steps to a historic coastal chapel",
    likes: "2,190",
    tag: "architecture & vows",
  },
  {
    id: "ig-3",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=85&w=800",
    alt: "Couple embracing in a vast mountain meadow with alpine peaks",
    likes: "3,405",
    tag: "mountain elopement",
  },
  {
    id: "ig-4",
    image:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=85&w=800",
    alt: "Rustic beach wedding altar with white drapery and vintage wine barrels",
    likes: "1,882",
    tag: "seaside ceremony",
  },
  {
    id: "ig-5",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=85&w=800",
    alt: "Minimalist silhouette of couple on coastal dunes at dusk",
    likes: "2,840",
    tag: "ocean solitude",
  },
  {
    id: "ig-6",
    image:
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=85&w=800",
    alt: "Candlelit reception table setting with artisan ceramics and crystal",
    likes: "1,495",
    tag: "tablescape styling",
  },
  {
    id: "ig-7",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=800",
    alt: "Intimate veil moment with warm golden sunset glow",
    likes: "4,120",
    tag: "golden hour",
  },
];

export const packagesData: PackageOffer[] = [
  {
    id: "wedding-packages",
    title: "WEDDING PACKAGES",
    tagline: "Comprehensive full-day storytelling for weddings of every scale.",
    price: "$3,800",
    features: [
      "Comprehensive day-of coverage (8 to 10 hours)",
      "High-resolution, professionally color-graded images",
      "Private password-protected digital client gallery",
      "Full personal printing & publication rights",
      "Complimentary venue walkthrough & timeline planning",
      "Second photographer included for complete angles",
      "Sneak-peek highlight preview within 72 hours",
    ],
    recommended: true,
  },
  {
    id: "elopement-packages",
    title: "ELOPEMENT PACKAGES",
    tagline: "Crafted for intimate ceremonies and untamed destination adventures.",
    price: "$1,500",
    features: [
      "3 to 5 hours of dedicated intentional coverage",
      "Professional artistic curation and color grading",
      "Personalized online viewing & downloading gallery",
      "Full rights to print and share your photographs",
      "Location scouting & permit guidance assistance",
      "High-resolution digital delivery in 3 weeks",
    ],
  },
  {
    id: "couple-photoshoots",
    title: "COUPLE PHOTOSHOOTS",
    tagline: "Romantic engagements, anniversaries, and editorial love sessions.",
    price: "$600",
    features: [
      "60 to 90 minutes of relaxed guided coverage",
      "Curated collection of 60+ edited images",
      "Personalized online gallery with print store",
      "Full printing & download rights",
      "Styling guide & location selection assistance",
    ],
  },
];

export const clientGalleriesData: ClientGalleryItem[] = [
  {
    id: "naomi-eddie",
    names: "Naomi & Eddie",
    date: "June 28th, 2024",
    location: "Napa Valley, California",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=85&w=1000",
    photoCount: 420,
  },
  {
    id: "irin-nick",
    names: "Irin & Nick",
    date: "August 14th, 2024",
    location: "Big Sur Coastline",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=85&w=1000",
    photoCount: 385,
  },
  {
    id: "rita-guy",
    names: "Rita & Guy",
    date: "September 22nd, 2024",
    location: "Hudson Valley, New York",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=85&w=1000",
    photoCount: 510,
  },
  {
    id: "clara-samuel",
    names: "Clara & Samuel",
    date: "October 5th, 2024",
    location: "Villa Balbianello, Lake Como",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=1000",
    photoCount: 640,
  },
  {
    id: "hannah-david",
    names: "Hannah & David",
    date: "November 12th, 2024",
    location: "Aspen Pine Grove, Colorado",
    image:
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=85&w=1000",
    photoCount: 390,
  },
  {
    id: "maya-jonathan",
    names: "Maya & Jonathan",
    date: "December 30th, 2024",
    location: "Joshua Tree National Park",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=85&w=1000",
    photoCount: 460,
  },
];
