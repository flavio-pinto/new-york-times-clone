import styles from './Header.module.css'
/* type Props = {} */

const Header = (/* props: Props */) => {
  return (
    <header className="d-flex justify-content-start align-items-center">
      <div>Placeholder</div>
      <h1 className={`${styles.h1}`}>The New York Times</h1>
      <div>Placeholder</div>
    </header>
  )
}

export default Header