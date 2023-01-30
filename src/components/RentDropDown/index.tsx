import { FaSortDown } from "react-icons/fa";

const RentDropDown = () => {
  return (
    <>
      <span
        style={{
          position: "absolute",
          right: "12px",
          top: "48px",
          transform: "scaleY(-1)",
          zIndex: "1",
        }}
      >
        <FaSortDown fill="white" size={28} />
      </span>

      <div className="rent-dropdown">
        <span>Purpose</span>
        <div className="buy-rent">
          <span>Buy</span>
          <span
            style={{
              backgroundColor: "rgba(95, 158, 160, 0.253)",
              color: "darkcyan",
            }}
          >
            Rent
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
          }}
        >
          <button className="buy-rent-button" style={{ color: "darkcyan" }}>
            RESET
          </button>
          <button
            className="buy-rent-button"
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
