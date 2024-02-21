import { CarCard, CustomFilter, HomePage, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchCars } from "@/util";
import Link from "next/link";

export default async function Home({ searchParams }: HomeProps) {

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  })
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Link href={`#home`}>
        <HomePage />
      </Link>
      <div className="mt-12 padding-x padding-y" id="home">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Cars Catalogue</h1>
          <p className="px-2">Explore the cars you like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>
        {isDataEmpty ? (
          <div className="home__error-container">
            <h2 className="text-black text-2xl my-10 font-bold">Sorry, There are no results to show</h2>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        )}
      </div>
    </main>
  );
}
