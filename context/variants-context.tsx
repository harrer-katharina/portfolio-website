"use client";

import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useContext,
} from "react";

type Variants = "DEFAULT" | "PROJECT" | "BUTTON" | "TEXT";

interface ContextProps {
  variant: Variants;
  setVariant: Dispatch<SetStateAction<Variants>>;
}

const Context = createContext<ContextProps>({
  variant: "DEFAULT",
  setVariant: () => {},
});

export default function VariantProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState<Variants>("DEFAULT");

  return (
    <Context.Provider value={{ variant, setVariant }}>
      {children}
    </Context.Provider>
  );
}

export function useVariants() {
  const { setVariant, variant } = useContext(Context);

  return { variant, setVariant };
}
