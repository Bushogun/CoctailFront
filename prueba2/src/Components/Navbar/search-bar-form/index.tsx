import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiSearch } from "react-icons/fi";
import { RootState } from "../../../redux/store";
import { setSearchQuery } from "../../../redux/features/productSlice";
import drinkData from "../../../hooks/drinkData";

export const SearchBarForm = () => {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.productReducer.searchQuery);
  const [searchTerm, setSearchTerm] = useState(query);

  drinkData();

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
      className="form-container"
      onSubmit={handleSearch}
    >
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          name="search"
          placeholder="Buscar productos"
          value={searchTerm}
          onChange={handleInputChange}
          required={true}
          alt="search product"
        />

        <div className={"input-group-append"}>
          <button className={"btn btn-search"} type="submit">
            <FiSearch />
          </button>
        </div>
      </div>
    </form>
  );
};