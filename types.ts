
export enum Language {
  AL = 'AL',
  EN = 'EN',
  IT = 'IT'
}

export interface NavContent {
  about: string;
  faq: string;
  contact: string;
  teachers: string;
  work: string;
}

export interface HeroContent {
  slogan: string;
}

export interface AboutContent {
  title: string;
  description: string;
  structureTitle: string;
  structure: string;
  fashionShowNote: string;
}

export interface TeacherProfile {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface TeachersContent {
  title: string;
  description: string;
  profiles: TeacherProfile[];
}

export interface GalleryItem {
  url: string;
  caption: string;
}

export interface WorkItem {
  title: string;
  coverImage: string;
  caption: string;
}

export interface StudentWorkContent {
  title: string;
  description: string;
  items: WorkItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactContent {
  title: string;
  address: string;
  email: string;
  phone: string;
  instagram: string;
  chatTitle: string;
  chatPlaceholder: string;
}

export interface Translation {
  nav: NavContent;
  hero: HeroContent;
  about: AboutContent;
  teachers: TeachersContent;
  work: StudentWorkContent;
  faq: FAQItem[];
  contact: ContactContent;
}
