import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { RiSearch2Line } from "react-icons/ri";

const SearchForm: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const searchFormRef = useRef(null);

  // Function to handle clicking outside the search form
  const handleClickOutside = (event: MouseEvent) => {
    if (searchFormRef.current && !(searchFormRef.current as HTMLDivElement).contains(event.target as Node)) {
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Redirect to search results page or handle search logic here
    if (searchQuery.trim() !== "") {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="relative" ref={searchFormRef}>
      <button
        type="button"
        className="mt-3 mr-3 text-accent focus:outline-none"
        onClick={toggleSearch}
      >
        <RiSearch2Line className="md:w-6 w-7 md:h-6 h-7" />
      </button>
      
      {isSearchOpen && (
        <form className="absolute md:right-0 right-[-26px] md:mt-8 mt-[14px] flex items-center bg-white shadow-md rounded-lg overflow-hidden" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nhập từ khóa..."
            className="py-2 px-4 border border-gray-300 rounded-l-lg focus:outline-none focus:border-primary flex-1"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-accent focus:outline-primary">
            Search
          </button>
        </form>
      )}
    </div>
  );
};

export default SearchForm;
