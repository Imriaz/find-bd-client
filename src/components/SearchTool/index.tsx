import React from "react";
import { FaSortDown } from "react-icons/fa";
import RentDropDown from "../RentDropDown";

const SearchTool = () => {
  const [rentDropdown, setRentDropdown] = React.useState<boolean>(false);
  const [purpose, setPurpose] = React.useState<string>("Rent");
  const [status, setStatus] = React.useState<string>("All");

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
        <div className="search-field search-tool-dropdown">
          <span
            onClick={() => {
              setRentDropdown(!rentDropdown);
            }}
          >
            {purpose}
          </span>
          <span
            style={{ transform: rentDropdown ? "scaleY(-1)" : "" }}
            onClick={() => {
              setRentDropdown(!rentDropdown);
            }}
          >
            <FaSortDown size={24} />
          </span>
          {rentDropdown && (
            <RentDropDown
              purpose={purpose}
              setPurpose={setPurpose}
              setRentDropdown={setRentDropdown}
              status={status}
              setStatus={setStatus}
            />
          )}
        </div>
        {searchField.map((field, index) => {
          return (
            <div
              key={index}
              className={
                index === searchField.length - 1
                  ? "search-field find"
                  : "search-field"
              }
              style={{ gridColumn: index === 0 ? "2/4" : "" }}
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
