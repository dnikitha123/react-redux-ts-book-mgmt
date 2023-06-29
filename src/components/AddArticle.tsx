import * as React from "react";

type Props = {
  saveArticle: (article: IArticle | any) => void;
};

export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
  const [article, setArticle] = React.useState<IArticle | {}>();
  const [isEditing, setIsEditing] = React.useState(false);

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      saveArticle(article as IArticle);
      setIsEditing(false);
    } else {
      saveArticle(article as IArticle);
    }
    setArticle({});
  };

  return (
    <>
      <form onSubmit={addNewArticle} className="Add-article">
        <h1 className="text-center pb-4 pt-2 uppercase text-4xl xl:text-3xl">
          Add New Book
        </h1>

        <input
          type="text"
          id="title"
          placeholder="Title"
          onChange={handleArticleData}
        />
        <input
          type="text"
          id="author"
          placeholder="Author Name"
          onChange={handleArticleData}
        />
        <input
          type="text"
          id="description"
          placeholder="Description"
          onChange={handleArticleData}
        />
        <input
          type="text"
          id="imageURL"
          placeholder="ImageURL"
          onChange={handleArticleData}
        />
        <input
          type="number"
          id="price"
          placeholder="Price"
          onChange={handleArticleData}
        />
        <input
          type="string"
          id="link"
          placeholder="Link/Url"
          onChange={handleArticleData}
        />
        <button type="submit">
          {isEditing ? "Save Changes" : "Add Book"}
        </button>
      </form>
    </>
  );
};
