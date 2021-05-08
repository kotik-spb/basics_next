import {useRouter} from 'next/router';
import MainContainer from '../../components/MainContainer';
import styles from '../../styles/User.module.scss'

export default function User({user}) {

  const {query} = useRouter();

  return (
    <MainContainer keywords={[`${user.name}`]}>
      <div className={styles.user}>
        <h1>Пользователь с id {query.id}</h1>
        <p>Имя: {user.name}</p>
        <p>Маил: {user.email}</p>
      </div>
    </MainContainer>
  )
}

export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json()

  return {
    props: {user}, // will be passed to the page component as props
  }
}