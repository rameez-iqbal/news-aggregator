import React, { useState, useEffect, useCallback } from "react";
import {
  fetchNewsAPIArticles,
  fetchGuardianArticles,
  fetchNYTArticles,
} from "../apiService";
import Card from "./Card";
import Filters from "./FilterHeader";

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("latest news");
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    category: "all",
    source: "all",
    sortBy: "",
  });

  // Use useCallback to memoize the searchArticles function
  const searchArticles = useCallback(async () => {
    setLoading(true);
    try {
      const newsAPIResults = await fetchNewsAPIArticles(query, filters);
      const guardianResults = await fetchGuardianArticles(query, filters);
      const nytResults = await fetchNYTArticles(query, filters);

      setArticles([...newsAPIResults, ...guardianResults, ...nytResults]);
    } catch (error) {
      console.error("Error occurred while fetching articles", error);
    } finally {
      setLoading(false);
    }
  }, [query, filters]);

  // useEffect will now only run when query or filters change
  useEffect(() => {
    searchArticles();
  }, [searchArticles]);

  return (
    <div>
      <Filters
        filters={filters}
        setFilters={setFilters}
        query={query}
        setQuery={setQuery}
      />
      {loading ? (
        <div className="bg-white rounded-lg shadow-md p-4 animate-pulse h-1/2 m-auto">
          <div className="w-2/3 h-4 bg-gray-300 rounded mb-2"></div>
          <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
          <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
          <div className="w-1/2 h-8 bg-gray-300 rounded"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 mb-5 px-3 md:px-0">
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <Card key={index} article={article} />
            ))
          ) : (
            <div className="text-center text-gray-700">No articles found.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsFeed;
