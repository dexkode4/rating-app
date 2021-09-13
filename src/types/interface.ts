export interface IProduct {
  title: string;
  reviews: IReview[];
  img?: string;
  id: string
}

export interface IReview {
  description: string;
  rating: number;
}
