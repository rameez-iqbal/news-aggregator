import React from "react";

const Filters = ({ filters, setFilters, query, setQuery }) => {
  const handleCategoryChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: e.target.value,
    }));
  };

  const handleSourceChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      source: e.target.value,
    }));
  };

  const handleSorting = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      sortBy: e.target.value,
    }));
  };

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="mb-4 p-4 flex-wrap md:flex-nowrap rounded-sm shadow-sm flex gap-4 items-center w-full">
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search for news..."
        className="h-10 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
      />

        <select
          value={filters.category}
          onChange={handleCategoryChange}
          class="h-10 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
        >
          <option selected="">Select Category</option>
          <option value="all">All</option>
          <option value="technology">Technology</option>
          <option value="health">Health</option>
          <option value="sport">Sport</option>
        </select>

        <select
          value={filters.source}
          onChange={handleSourceChange}
          class="h-10 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
        >
          <option selected="">Select Source</option>
          <option value="all">All</option>
          <option value="CNN">CNN</option>
          <option value="BBC">BBC</option>
        </select>

        <select
          value={filters.sortBy}
          onChange={handleSorting}
          class="h-10 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
        >
          <option selected="">Select Sorting</option>
          <option value="relevancy">Relevancy</option>
          <option value="popularity">Popularity</option>
          <option value="publishedAt">Published Date</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>

    </div>
  );
};

export default Filters;
