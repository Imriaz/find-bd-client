import React from "react";
import { FaSortDown } from "react-icons/fa";
import RentDropDown from "../RentDropDown";

const SearchTool = () => {
  const [rentDropdown, setRentDropdown] = React.useState<boolean>(false);

  const searchField = [
    "Enter Location",
    "Residential",
    "Beds & Baths",
    "Area",
    "Price",
    "Find",
  ];
  return (
    <>
      <div className="search-tool-container">
        <div
          className="search-field search-tool-dropdown"
          onClick={() => {
            setRentDropdown(!rentDropdown);
          }}
        >
          <span>Rent</span>
          <span style={{ transform: rentDropdown ? "scaleY(-1)" : "" }}>
            <FaSortDown size={24} />
          </span>
          {rentDropdown && <RentDropDown />}
        </div>
        {searchField.map((field, index) => {
          return (
            <div
              key={index}
              className={
                index == searchField.length - 1
                  ? "search-field find"
                  : "search-field"
              }
              style={{ gridColumn: index == 0 ? "2/4" : "" }}
            >
              {field}
            </div>
          );
        })}

        <div className="reset-tool">Reset Search</div>
      </div>
    </>
  );
};

export default SearchTool;
