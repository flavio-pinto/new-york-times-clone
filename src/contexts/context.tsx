import { ReactNode, createContext } from "react";

// Definisci il tipo per le sezioni
export type SectionType =
  | "home"
  | "world"
  | "us"
  | "politics"
  | "nyregion"
  | "business"
  | "opinion"
  | "science"
  | "arts"
  | "books"
  | "style"
  | "food"
  | "travel"
  | "t-magazine"
  | "realestate";

// Definisci il tipo per il contesto
export interface AppContextType {
  sections: SectionType[];
  formatSectionName: (section: SectionType) => string;
}

// Crea il contesto
const AppContext = createContext<AppContextType | null>(null);

// Definisci il provider del contesto
const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const sections: SectionType[] = [
    "home",
    "world",
    "us",
    "politics",
    "nyregion",
    "business",
    "opinion",
    "science",
    "arts",
    "books",
    "style",
    "food",
    "travel",
    "t-magazine",
    "realestate",
  ];

  const formatSectionName = (section: SectionType): string => {
    switch (section) {
      case "us":
        return "U.S.";
      case "nyregion":
        return "N.Y";
      case "t-magazine":
        return "magazine";
      case "realestate":
        return "real estate";
      default:
        return section;
    }
  };

  return (
    <AppContext.Provider value={{ sections, formatSectionName }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
