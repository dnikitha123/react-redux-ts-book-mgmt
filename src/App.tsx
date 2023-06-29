import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import "./styles.css";

import { Article } from "./components/Article";
import { AddArticle } from "./components/AddArticle";
import { addArticle, editArticle, removeArticle } from "./store/actionCreators";
import { Dispatch } from "redux";
import CartItemsPage from "./components/CartItemsPage";

const App: React.FC = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  );

  return (
    <main>
      <AddArticle saveArticle={saveArticle} />
      <h1 className=" text-center  font-mono  uppercase text-4xl xl:text-4xl">
        My Books Collection
      </h1>

      {articles.map((article: IArticle) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={(article: IArticle) =>
            dispatch(removeArticle(article))
          }
          editArticle={(editedArticle: IArticle) =>
            dispatch(editArticle(editedArticle))
          }
        />
      ))}

      <CartItemsPage />
    </main>
  );
};

export default App;
