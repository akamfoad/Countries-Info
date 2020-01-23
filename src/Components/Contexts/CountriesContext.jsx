import React from "react";

const CountriesContext = React.createContext({
  countries: [],
  setCountries: () => {}
});

export default CountriesContext;
