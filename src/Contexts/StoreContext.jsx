/* eslint-disable react/prop-types */

import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const StoreContext = createContext();
const url = "https://shoes-collections.p.rapidapi.com/shoes";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e85654e83dmshc253a0a61dcba60p1be0cbjsn9043f1f0f938",
    "X-RapidAPI-Host": "shoes-collections.p.rapidapi.com",
  },
};
function StoreProvider({ children }) {
  const [items, setItems] = useState([]);

  useEffect(function () {
    async function fetchItems() {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setItems(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchItems();
  }, []);

  return (
    <StoreContext.Provider value={{ items }}>{children}</StoreContext.Provider>
  );
}

export { StoreProvider, StoreContext };
