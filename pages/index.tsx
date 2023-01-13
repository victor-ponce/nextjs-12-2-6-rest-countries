import Countries from "../components/countries";
import SearchBox from "../components/searchBox";
import React, { useState } from 'react';
import { useRouter} from "next/router";
import Head from "next/head";

export default function Home({ data }) {
  //console.log(data);
  let countriesData = data;

  const [country] = useState(countriesData);
  const [searchField, setSearchField] = useState("");
  const [region, setRegion] = useState("");
  const router = useRouter();
  router.query.q;
  router.query.region;

  // Search and searchByReagion  Function >>
  const filterCountries = country.filter(
    (country: { name: { common: string; }; region: string; }) =>
    searchField
      ? country.name.common
          .toLowerCase()
          .includes(searchField.toLocaleLowerCase())
      : country.region.toLowerCase().includes(region.toLocaleLowerCase())
  );

  const onSearchChange= (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    // Update the q query parameter
    const q = `${e.target.value}`;
    router.push({
      query: {
        q,
        region
      }
    })
    setSearchField(e.target.value);
  };

  const onRegionChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    // Update the region query parameter
    const region = `${e.target.value}`;
    router.push({
      query: {
        region,
      }
    })
    setRegion(e.target.value);
  };

  return (
    <div className="dark:bg-very-dark-blue">
      <Head>
      <title>NextJs-rest-countries-api</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className=" scroll-smooth ">
        <SearchBox
          /*apiData={data}*/
          search={onSearchChange}
          searchByRegion={onRegionChange}
        />
        <Countries countries={filterCountries} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  const data = await res.json();

  return {
    props: { data }
  };
}


