import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaMapMarkerAlt } from "react-icons/fa";

interface NavigationBarProps {
  marginTop?: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ marginTop }) => {
  const [isLightTheme, setLightTheme] = useState(false);

  const toggleTheme = () => {
    setLightTheme(!isLightTheme);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: marginTop || "0",
      }}
    >
      <div
        className="navigation"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul
          style={{
            display: "flex",
            listStyleType: "none",
          }}
        >
          <li>
            <a
              className="active"
              target="_blank"
              style={{
                margin: "10px 30px",
                color: "##FFFFFF",
                fontSize: "30px",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              target="_blank"
              style={{
                margin: "10px 30px",
                color: "##FFFFFF",
                fontSize: "30px",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              EXPLORE
            </a>
          </li>
          <li>
            <a target="_blank">
              <FaMapMarkerAlt size={40} marginRight="100px" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              style={{
                margin: "10px 30px",
                color: "##FFFFFF",
                fontSize: "30px",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              JOURNAL
            </a>
          </li>
          <li>
            <a
              target="_blank"
              style={{
                margin: "10px 30px",
                color: "##FFFFFF",
                fontSize: "30px",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              <FontAwesomeIcon icon={faSearch} style={{ fontSize: 13 }} />
              SEARCH
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
