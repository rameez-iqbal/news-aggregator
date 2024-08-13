import React from "react";
const Card = ({ article }) => {
  const imageUrl =
    article.urlToImage ||
    article.fields?.thumbnail ||
    article.multimedia?.[0]?.url ||
    "/new.jpeg";

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
      <a href={article.url || article.webUrl || article.web_url}>
      <img
          className="rounded-t-lg h-56 w-full"
          src={imageUrl}
          alt={article.title || 'News image'}
        />
      </a>
      <div className="p-5">
        <a href={article.url || article.webUrl || article.web_url}>
          <h5 className="mb-2 text-lg font-bold tracking-tight">
            {article.title || article.webTitle || article.headline.main}
          </h5>
        </a>
        <p className="mb-3 font-normal">
          {article.description || article.snippet || article.abstract}
        </p>
        <a
          href={article.url || article.webUrl || article.web_url}
          className="inline-flex text-black items-center px-3 py-2 text-sm font-normal text-center hover:text-green-700  border border-gray-300 rounded-lg"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
export default Card;
