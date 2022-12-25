//import { NextPage } from "next";
import { Fragment } from "react";
import CountryDetail from "../../components/countryDetail";
import Navigation from "../../components/navigation";
import Head from "next/head";

const MeetupDetails = (props) => {
  return (
    <Fragment>
      <Head >
          <Navigation></Navigation>
        </Head> 
      <CountryDetail
        selectedCountry={props.selectedCountry}
      />
    </Fragment>
  );
};

export async function getStaticPaths() {

    const res = await fetch('https://restcountries.com/v3.1/all')
    const countries = await res.json()

  return {
    fallback: false,
    paths: countries.map((country) => ({
      params: { countryCca3: country.cca3.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const countryCca3 = context.params.countryCca3.toString();

  const res = await fetch('https://restcountries.com/v3.1/all')
  const countries = await res.json()
  const selectedCountry = countries.filter((country)=> {
    return country.cca3 === countryCca3;
  })

  return {
    props: {
      selectedCountry
    },
  };
}

export default MeetupDetails;
