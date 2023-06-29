interface IArticle {
  id: number;
  title: string;
  author: string;
  description: string;
  imageURL: string;
  price: number;
  link: string;
}

type ArticleState = {
  cartItems: IArticle[];
  articles: IArticle[];
};

type ArticleAction = {
  payload: any;
  type: string;
  article: IArticle;
};

type DispatchType = (args: ArticleAction) => ArticleAction;
