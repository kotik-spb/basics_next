import Head from "next/head";
import A from "./A";


const MainContainer = ({children, keywords}) => {
  return (
    <>
      <Head>
        <meta keywords={`kotik, nextjs, ${ keywords ? keywords.join(',') : ''}`}></meta>
        <title>Главная страница</title>
      </Head>
      <div className='navbar'>
        <A text='Главная' href="/" />
        <A text='Пользователи' href="/users" />
      </div>
      <div>
        {children}
      </div>
      <style jsx>
          {`
            .navbar {
              background: orange;
              padding: 15px;
              margin: 0;
            }
          `}
        </style>
    </>
  )
}

export default MainContainer
