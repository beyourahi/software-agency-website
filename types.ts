export interface Brands {
  brands: string[];
}

export interface Member {
  id: string;
  name: string;
  socialId: string;
  link: string;
}

export interface Members {
  members: Member[];
}

export interface Work {
  sentence1: string;
  brand: string;
  sentence2: string;
  link: string;
  image: string;
}

export interface Works {
  works: Work[];
}

export interface HomePageProps {
  members: Member[];
  works: Work[];
  brands: string[];
}

