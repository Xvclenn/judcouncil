"use client";

import { useState } from "react";

interface SearchInputProps {
    placeholder?: string;
    onSearch?: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
    placeholder = "Search",
    onSearch,
}) => {
    const [query, setQuery] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && onSearch) {
            onSearch(query);
        }
    };

    return (
        <div className="w-full px-8 py-2 border border-gray-300 rounded-md">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder={placeholder}
                className="w-full focus:outline-none"
            />
        </div>
    );
};

export default SearchInput;
