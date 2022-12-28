import Countries from "../components/countries";
import SearchBox from "../components/searchBox";
import React, { useState } from "react";
import Head from "next/head";

export default function Home({ data }) {
  console.log(data);
  let countriesData = data;

  const [country] = useState(countriesData);
  const [searchField, setSearchField] = useState("");
  const [region, setRegion] = useState("");

  // Search and searchByReagion  Function >>
  const filterCountries = country.filter((country: { name: { common: string; }; region: string; }) =>
    searchField
      ? country.name.common
          .toLowerCase()
          .includes(searchField.toLocaleLowerCase())
      : country.region.toLowerCase().includes(region.toLocaleLowerCase())
  );
  // for Smooth scroll

  return (
    <div className="dark:bg-red-200">
      <Head>
        <title>UtkWorld </title>
      </Head>
      <main className=" scroll-smooth ">
        <SearchBox
          /*apiData={data}*/
          search={(e: { target: { value: React.SetStateAction<string>; }; }) => setSearchField(e.target.value)}
          searchByRegion={(e: { target: { value: React.SetStateAction<string>; }; }) => setRegion(e.target.value)}
        />
        <Countries countries={filterCountries} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  const data = await res.json();

  return {
    props: { data }
  };
}


