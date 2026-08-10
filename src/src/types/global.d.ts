export interface Product {
  productId: string;
  title: string;
  description: string;
  pageUrl: string;
  gitHubSrc: string;
  technologyUsed: Array<string>;
  from: string;
  imgSrc: string | null;
}

export interface CareerAchievement {
  achievementId: number;
  genre: string;
  productId?: string | null;
  title?: string;
  description?: string | null;
  from?: string | null;
  to?: string | null;
  responsibility?: string | null;
  teamSize?: string | number | null;
  technologyUsed?: string[];
  scopeOfWork?: string | null;
  pageUrl?: string | null;
  gitHubSrc?: string | null;
}

export interface Career {
  careerId: number;
  jobIcon: string;
  company: string;
  position: string;
  department: string;
  responsibilities: string;
  achievements: CareerAchievement[];
  startDate: string;
  endDate: string;
}
