import * as actionTypes from "./actionTypes";

const initialState: ArticleState = {
  articles: [
    {
      id: 1,
      title: "Man's Search for Meaning",
      author: "Viktor Frankl",
      description:
        "Man's Search for Meaning is a 1946 book by Viktor Frankl chronicling his experiences as a prisoner in Nazi concentration camps during World War II",
      imageURL:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRsAQwDW2xB3wcl-bOixjnnqbplzD_f47Ft7xEnmpii_5hWXa2b",
      price: 2000,
      link: "https://en.wikipedia.org/wiki/Man%27s_Search_for_Meaning",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description:
        "To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful",
      imageURL:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRO7Te2MLyEC2TPkOt7Ghh_SpYdEyuYUsznDwdc-0qhy-Ju4v0I",
      price: 5000,
      link: "https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird",
    },
  ],
  cartItems: [],
};

const reducer = (
  state: ArticleState = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      const newArticle: IArticle = {
        id: Math.random(), // not really unique but it's just an example
        title: action.article.title,
        author: action.article.author,
        description: action.article.description,
        imageURL: action.article.imageURL,
        price: Number(action.article.price),
        link: action.article.link,
      };
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      };

    case actionTypes.REMOVE_ARTICLE:
      const updatedArticles: IArticle[] = state.articles.filter(
        (article) => article.id !== action.article.id
      );
      return {
        ...state,
        articles: updatedArticles,
      };

    case actionTypes.EDIT_ARTICLE:
      const updatedIndex = state.articles.findIndex(
        (article) => article.id === action.article.id
      );
      if (updatedIndex === -1) {
        return state;
      }
      const updatedArticlesCopy = [...state.articles];
      updatedArticlesCopy[updatedIndex] = {
        ...updatedArticlesCopy[updatedIndex],
        title: action.article.title,
        author: action.article.author,
        description: action.article.description,
        imageURL: action.article.imageURL,
        price: Number(action.article.price),
        link: action.article.link,
      };
      return {
        ...state,
        articles: updatedArticlesCopy,
      };

    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.article],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (article: { id: number }) => article.id !== action.article.id
        ),
      };
  }
  return state;
};

export default reducer;
