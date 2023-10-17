import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FiSearch } from "react-icons/fi";
import { RootState } from "../../redux/store";
import { setSearchQuery } from "../../redux/features/productSlice";
import { useAppDispatch } from "../../redux/hooks";
import { apiSearchByName } from "../../api";
import drinkData from "../../hooks/drinkData";

const SearchBarForm = () => {
  const dispatch = useAppDispatch();
  const query = useSelector((state: RootState) => state.productReducer.searchQuery);

  drinkData(apiSearchByName+query);

  const [searchTerm, setSearchTerm] = useState(query);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      dispatch(setSearchQuery(searchTerm));
    }
  };

  return (
    <form
    aria-label="form-search"
    className="container"
    onSubmit={handleSearch}
  >
    <div className="flex">
      <input
        type="text"
        className="form-input h-7 px-4 text-base leading-6 text-gray-700 bg-white bg-clip-padding-box transition border border-gray-300"
        name="search"
        placeholder="Buscar productos"
        value={searchTerm}
        onChange={handleInputChange}
        required={true}
        alt="search product"
      />
  
      <div className="flex items-stretch">
        <button
          className="btn btn-search flex items-center justify-center px-1 text-base font-medium leading-6 text-gray-800 bg-white border border-gray-300"
          type="submit"
        >
          <FiSearch className="w-6 h-6" />
        </button>
      </div>
    </div>
  </form>
  );
};

export default SearchBarForm;