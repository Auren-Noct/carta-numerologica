import { createContext, useContext, type ReactNode } from "react";
import type { Datos } from "../types/types";

type CalculosContextType = Datos | null;

export const CalculosContext = createContext<CalculosContextType>(null);

type CalculosProviderProps = {
  children: ReactNode;
  value: CalculosContextType;
};

export const CalculosProvider = ({
  children,
  value,
}: CalculosProviderProps) => {
  return (
    <CalculosContext.Provider value={value}>
      {children}
    </CalculosContext.Provider>
  );
};

export const useCalculos = () => {
  const context = useContext(CalculosContext);
  if (context === undefined) {
    throw new Error("useCalculos debe ser usado dentro de un CalculosProvider");
  }
  return context;
};
