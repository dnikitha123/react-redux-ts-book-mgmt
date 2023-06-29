import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCartItem } from "../store/actionCreators";

const CartItemsPage: React.FC = () => {
  const cartItems: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.cartItems
  );
  const dispatch = useDispatch();

  const removeFromCart = (article: IArticle) => {
    dispatch(removeCartItem(article));
  };

  return (
    <div>
      <div className="mt-4 text-center text-black-400 text-4xl font-semibold dark:text-white">
        Cart Items
      </div>
      {cartItems.map((article: IArticle) => (
        <div key={article.id}>
          <a
            href={article.link}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={article.imageURL}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {article.title}
              </div>
              <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {article.author}
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {article.description}
              </p>
              <div className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                Price: {article.price}
              </div>
            </div>
          </a>
          <button
            className=" mt-2  text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            onClick={() => removeFromCart(article)}
          >
            Remove from Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartItemsPage;
