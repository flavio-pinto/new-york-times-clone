import styles from './MainDate.module.css'

const MainDate: React.FC = () => {
  const date = new Date().toLocaleDateString("en-En", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })


  return (
    <p className={`${styles.mainDate} d-lg-none`}>{date}</p>
  )
}

export default MainDate