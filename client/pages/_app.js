import Head from 'next/head'
import { createClient, Provider } from 'urql'
import '../styles/tailwind.css'

const client = createClient({
  url: 'http://localhost:4000/graphql',
})

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider value={client}>
      <Head>
        <title>Startup Acquisitions</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
