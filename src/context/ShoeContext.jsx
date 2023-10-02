import React, { createContext, useState, useEffect } from "react";

import { addShoe, updateShoe, deleteShoe, getAllShoes } from '../api/api';

export const ShoeContext = createContext();

export const ShoeProvider = ({ children }) => {
  const [shoes, setShoes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchShoes = async () => {
    const shoesData = await getAllShoes();
    setShoes(shoesData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchShoes();
  }, []);

  const addNewShoe = async (shoe) => {
    const newShoe = await addShoe(shoe);
    setShoes(prevShoes => ([...prevShoes, newShoe]));
  };

  const editShoe = async (shoeData) => {
    const updatedShoe = await updateShoe(shoeData, shoeData.id);
    setShoes((prevShoes) =>
      prevShoes.map((shoe) => (shoe.id === shoeData.id ? updatedShoe : shoe))
    );
  };

  const removeShoe = (id) => {
    deleteShoe(id);
    setShoes((prevShoes) =>
      prevShoes.filter((shoe) => (shoe.id !== id))
    );
  };

  return (
    <ShoeContext.Provider
      value={{
        shoes,
        isLoading,
        addNewShoe,
        editShoe,
        removeShoe
      }}>
      {children}
    </ShoeContext.Provider>
  );
};
