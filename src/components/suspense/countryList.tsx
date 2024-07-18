import { getCountryList } from "../../services/api";
import { ICountry } from "../../interface/app";

const resource = getCountryList()
export const CountryList = () => {
  const countries:ICountry[] | undefined = resource.read()

  return (
    <ul>
      {countries.map((country) => (
        <li className="flex gap-4 my-2" key={country.name.common}>
          <div className="flex w-36 items-center justify-center">
            <img
              src={country.flags.png}
              className="h-10"
              alt={country.name.common}
            />
          </div>
          {country.name.common}
        </li>
      ))}
    </ul>
  );
};
