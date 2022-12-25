import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navigation from '../components/navigation'
import Main from '../components/main'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  return (
    <>
      <div className="App">
        <Head >
          <Navigation></Navigation>
        </Head> 
         {props.countries.length ? <Main countries={props.countries}></Main> : <div></div>} 
      </div>
    </>
  )
}
export async function getStaticProps() {


  const res = await fetch('https://restcountries.com/v3.1/all')
  const countries = await res.json()

  return {
    props: {
      countries: countries
    },
    revalidate: 10
  } 
  
}
