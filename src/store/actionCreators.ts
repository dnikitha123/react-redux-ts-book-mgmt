import * as actionTypes from "./actionTypes";

export function addArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.ADD_ARTICLE,
    article,
    payload: undefined,
  };

  return simulateHttpRequest(action);
}

export function removeArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.REMOVE_ARTICLE,
    article,
    payload: undefined,
  };
  return simulateHttpRequest(action);
}

export function editArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.EDIT_ARTICLE,
    article,
    payload: undefined,
  };

  return simulateHttpRequest(action);
}

export function addToCart(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.ADD_TO_CART,
    article,
    payload: undefined,
  };

  return simulateHttpRequest(action);
}

export function removeCartItem(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.REMOVE_FROM_CART,
    article,
    payload: undefined,
  };
  return action;
}

export function simulateHttpRequest(action: ArticleAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
