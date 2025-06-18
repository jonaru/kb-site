import { createContext, useContext, useState } from "react";

export const SelectedProductContext = createContext([], function () {});

export const useSelectedProduct = () => {
  return useContext(SelectedProductContext);
};
