import React from "react";
import "./index.css";
import PropTypes from "prop-types";

export function FirstApp({ titre, soustitre, prenom }) {
  return (
    <>
      <h1 data-testid="test-titre">{titre}</h1>
      <h3>{soustitre}</h3>
      <h3>{soustitre}</h3>
      <p>{prenom}</p>
    </>
  );
}

FirstApp.propTypes = {
  titre: PropTypes.string.isRequired,
  soustitre: PropTypes.string,
};

FirstApp.defaultProps = {
  prenom: "Robert",
  soustitre: "The subtitle",
};
