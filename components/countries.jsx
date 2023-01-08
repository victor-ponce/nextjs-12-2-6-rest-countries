import Link from "next/link";
import dynamic from "next/dynamic";
const Cart = dynamic(() => import("./cart"));

function Countries({ countries }) {

  return (
    <>
      <div
        style={{ minHeight: "1000px" }}
        className=' containerGrid  px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-8 justify-items-center gap-16  z-30 '
      >
        {countries.map(data => (
          <div key={data.name.common}>
            <Link
              href={`/countries/${
                data.name.common === "Curaçao" ? "Curacao" : data.name.common
              }`}
            >
                  <Cart
                    imgAdd={data.flags.png}
                    countryName={data.name.common}
                    population={new Intl.NumberFormat().format(data.population)}
                    region={data.region}
                    capital={data.capital}
                  />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Countries;
