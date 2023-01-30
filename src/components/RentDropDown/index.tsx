import { FaSortDown } from "react-icons/fa";

const RentDropDown = () => {
  return (
    <>
      <span className="rent-dropdown__header">
        <FaSortDown fill="white" size={28} />
      </span>

      <div className="rent-dropdown__body">
        <span>Purpose</span>
        <div className="rent-dropdown__body__main">
          <span>Buy</span>
          <span className="rent-dropdown__body__main__selected">Rent</span>
        </div>

        <div className="rent-dropdown__body__action">
          <button
            className="rent-dropdown__body__action__button"
            style={{ color: "darkcyan" }}
          >
            RESET
          </button>
          <button
            className="rent-dropdown__body__action__button"
            style={{ backgroundColor: "darkcyan", color: "white" }}
          >
            DONE
          </button>
        </div>
      </div>
    </>
  );
};

export default RentDropDown;
