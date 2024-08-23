import React, { useState } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi"; //

interface SearchResult {
  id: string;
  name: string;
}

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.get<{ items: SearchResult[] }>(
        `https://api.example.com/search?q=${query}`
      );
      setResults(response.data.items);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  console.log(handleSearch);
  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full p-1 pl-10 border border-gray-300 bg-transparent rounded-full"
        />
        <button
          type="submit"
          className="absolute left-2 top-1/2 transform -translate-y-1/2"
        >
          <FiSearch className="text-gray-500" />
        </button>
      </form>
      <div className="mt-4">
        {results.map((result) => (
          <div key={result.id} className="p-2 border-b border-gray-200">
            {result.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
