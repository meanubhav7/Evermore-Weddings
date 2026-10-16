export interface Story {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  mainImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  secondaryImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  link: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  image: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  alt: string;
  likes: string;
  tag: string;
}

export interface PackageOffer {
  id: string;
  title: string;
  tagline: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface ClientGalleryItem {
  id: string;
  names: string;
  date: string;
  location: string;
  image: string;
  photoCount: number;
}
