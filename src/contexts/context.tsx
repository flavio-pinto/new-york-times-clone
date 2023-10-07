import { ReactNode, createContext } from "react"

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
  | "realestate"

export interface AppContextType {
  sections: SectionType[]
  formatSectionName: (section: SectionType) => string
}

const AppContext = createContext<AppContextType | null>(null)

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
  ]

  const formatSectionName = (section: SectionType): string => {
    switch (section) {
      case "us":
        return "U.S."
      case "nyregion":
        return "N.Y"
      case "t-magazine":
        return "magazine"
      case "realestate":
        return "real estate"
      default:
        return section
    }
  }

  return (
    <AppContext.Provider value={{ sections, formatSectionName }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
