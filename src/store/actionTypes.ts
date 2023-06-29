export const ADD_ARTICLE = "ADD_ARTICLE";
export const REMOVE_ARTICLE = "REMOVE_ARTICLE";
export const EDIT_ARTICLE = "EDIT_ARTICLE";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: IArticle;
}

interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: IArticle;
}

export type CartActionTypes = AddToCartAction | RemoveFromCartAction;
