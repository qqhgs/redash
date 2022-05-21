import styles from './styles.module.scss'

interface Props {
  title: string
  description?: string
}
const Home = ({ title, description }: Props) => {
  return (
    <>
      <header>
        <h1 className={styles.title}>
          {title}
          <span className={styles.dot}>.</span>
        </h1>
        <p>{description}</p>
      </header>
    </>
  )
}

export default Home
