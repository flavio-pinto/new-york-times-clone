import ListGroup from "react-bootstrap/ListGroup"
import { useGlobalContext } from "../../contexts/globalContext"
import SearchBar from "../SearchBar/SearchBar"
import styles from "./DropDownMenu.module.css"
import { AppContextType, SectionType } from "../../contexts/context"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

type Props = {
  isMenuOpen: boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  headerRef: React.RefObject<HTMLDivElement>
}

const DropDownMenu: React.FC<Props> = (props: Props) => {
  const context = useGlobalContext()
  const [topPosition, setTopPosition] = useState<number | null>(null)

  useEffect(() => {
    const headerElement = props.headerRef.current
    const headerHeight: number | undefined = headerElement?.clientHeight

    if (headerHeight !== undefined) {
      setTopPosition(headerHeight)
    }
  }, [props.headerRef])

  useEffect(() => {
    if (props.isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [props.isMenuOpen])

  if (!context) {
    return null
  }

  const { sections, formatSectionName }: AppContextType = context

  return (
    <div className={`${styles.DropDownMenu} py-4`} style={{ top: topPosition ? `${topPosition}px` : 0 }}>
      <SearchBar setIsMenuOpen={props.setIsMenuOpen} classes={`${styles.searchBarDropDown} d-flex`} />
      <h3 className={styles.dropdownNewsTitle}>News</h3>
      <ListGroup as="ul" className={styles.dropdownList}>
        {sections.map((section: SectionType, i: number) => {
          return (
            <ListGroup.Item as="li" className={styles.dropdownListItem} key={i}>
              <NavLink
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "gray" : "black",
                  }
                }}
                to={section === "home" ? "/" : `section/${section}`}
                onClick={() => props.setIsMenuOpen(false)}
              >
                {formatSectionName(section)}
              </NavLink>
            </ListGroup.Item>
          )
        })}
      </ListGroup>
    </div>
  )
}

export default DropDownMenu