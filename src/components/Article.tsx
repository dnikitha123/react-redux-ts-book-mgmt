import * as React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addToCart, editArticle, removeArticle } from "../store/actionCreators";

type Props = {
  article: IArticle;
  removeArticle: (article: IArticle) => void;
  editArticle: (editedArticle: IArticle) => void;
};

export const Article: React.FC<Props> = ({ article }) => {
  const dispatch: Dispatch<any> = useDispatch();
  const [isEditing, setIsEditing] = React.useState(false);
  const [editedArticle, setEditedArticle] = React.useState({
    title: article.title,
    author: article.author,
    description: article.description,
    imageURL: article.imageURL,
    price: Number(article.price),
    link: article.link,
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedArticle({ ...editedArticle, title: e.target.value });
  };

  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedArticle({ ...editedArticle, author: e.target.value });
  };

  const handleDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedArticle({ ...editedArticle, description: e.target.value });
  };

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedArticle({ ...editedArticle, imageURL: e.target.value });
  };

  const handlePriceChange = (e: { target: { value: any } }) => {
    setEditedArticle({ ...editedArticle, price: e.target.value });
  };

  const handleLinkChange = (e: { target: { value: any } }) => {
    setEditedArticle({ ...editedArticle, link: e.target.value });
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(editArticle({ ...article, ...editedArticle }));
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    dispatch(removeArticle(article));
  };

  const addToCartHandler = (article: IArticle) => {
    dispatch(addToCart(article));
  };

  return (
    <div>
      <span className=" bg-slate-500  text-green-200 flex justify-center font-extrabold">
        This Book is Writen By {article.author}
      </span>
      {!isEditing ? (
        <>
          <div className=" pt-2 pb-2 bg-purple-100">
            <div id="card" className="">
              <div className="container w-100 lg:w-3/5 mx-auto flex flex-col">
                <a className="hover:bg-orange-100" href={article.link}>
                  <div
                    v-for="card in cards"
                    className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2"
                  >
                    <div className="h-64 w-auto md:w-1/2">
                      <img
                        className="inset-0 h-full w-full md:h-auto md:w-48 object-cover object-center"
                        src={article.imageURL}
                        alt=""
                      />
                    </div>
                    <div className="w-full py-8 mr-6 text-gray-800 flex flex-col justify-around">
                      <h3 className="font-semibold text-lg leading-tight truncate">
                        {article.title}
                      </h3>
                      <p className="mt-2">{article.description}</p>
                      <p className="text-s text-gray-700  tracking-wide font-bold ">
                        Price: Rs: {article.price}
                      </p>
                      <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold">
                        {article.author} &bull;
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className=" flex justify-center mt-4 ">
              <button
                onClick={handleEditClick}
                className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Edit
              </button>
              <button
                onClick={handleDeleteClick}
                type="button"
                className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Delete
              </button>
              <button
                type="button"
                onClick={() => addToCartHandler(article)}
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </>
      ) : (
        <form onSubmit={handleEditSubmit} className="ml-16 mr-16">
          <div className="grid gap-6 mb-6 md:grid-cols-2 pt-4">
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title :
              </label>
              <input
                value={editedArticle.title}
                onChange={handleTitleChange}
                type="text"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="author"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Author :
              </label>
              <input
                value={editedArticle.author}
                onChange={handleAuthorChange}
                type="text"
                id="author"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <input
                value={editedArticle.description}
                onChange={handleDescChange}
                type="text"
                id="description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="imageURL"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Image URL :
              </label>
              <input
                value={editedArticle.imageURL}
                onChange={handleImgChange}
                type="text"
                id="imageURL"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price :
              </label>
              <input
                value={editedArticle.price}
                onChange={handlePriceChange}
                type="number"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="link"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Link :
              </label>
              <input
                value={editedArticle.link}
                onChange={handleLinkChange}
                type="text"
                id="link"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>

          <div className="  flex justify-center ">
            <button
              type="submit"
              className=" text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
