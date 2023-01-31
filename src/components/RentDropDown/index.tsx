import React from "react";
import { FaSortDown } from "react-icons/fa";

type RentDropDownProps = {
  purpose: string;
  setPurpose: React.Dispatch<React.SetStateAction<string>>;
  setRentDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
};

const RentDropDown = ({
  purpose,
  setPurpose,
  setRentDropdown,
  status,
  setStatus,
}: RentDropDownProps) => {
  const handlePurpose = (purpose: string) => {
    setPurpose(purpose);
  };

  return (
    <>
      <span className="rent-dropdown__header">
        <FaSortDown fill="white" size={28} />
      </span>

      <div className="rent-dropdown__body">
        <span>Purpose</span>
        <div className="rent-dropdown__body__main">
          <span
            className={
              purpose === "Buy" ? "rent-dropdown__body__main__selected" : ""
            }
            onClick={() => handlePurpose("Buy")}
          >
            Buy
          </span>
          <span
            className={
              purpose === "Rent" ? "rent-dropdown__body__main__selected" : ""
            }
            onClick={() => handlePurpose("Rent")}
          >
            Rent
          </span>
        </div>

        {purpose === "Buy" && (
          <div className="rent-dropdown__completion">
            <p>Completion Status</p>
            <div className="rent-dropdown__completion__status">
              <span
                className={
                  status === "All"
                    ? "rent-dropdown__completion__status__selected"
                    : "rent-dropdown__completion__status__default"
                }
                onClick={() => {
                  setStatus("All");
                }}
              >
                All
              </span>
              <span
                className={
                  status === "Ready"
                    ? "rent-dropdown__completion__status__selected"
                    : "rent-dropdown__completion__status__default"
                }
                onClick={() => {
                  setStatus("Ready");
                }}
              >
                Ready
              </span>
            </div>
            <div className="rent-dropdown__completion__status">
              <span
                className={
                  status === "Under Construction"
                    ? "rent-dropdown__completion__status__selected"
                    : "rent-dropdown__completion__status__default"
                }
                onClick={() => {
                  setStatus("Under Construction");
                }}
              >
                Under Construction
              </span>
            </div>
          </div>
        )}

        <div className="rent-dropdown__body__action">
          <button
            className="rent-dropdown__body__action__button"
            style={{ color: "darkcyan" }}
            onClick={() => {
              setPurpose("Rent");
              setStatus("All");
            }}
          >
            RESET
          </button>
          <button
            className="rent-dropdown__body__action__button"
            style={{ backgroundColor: "darkcyan", color: "white" }}
            onClick={() => {
              setRentDropdown(false);
            }}
          >
            DONE
          </button>
        </div>
      </div>
    </>
  );
};

export default RentDropDown;
