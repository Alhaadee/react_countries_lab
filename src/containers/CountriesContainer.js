import { useState, useEffect } from "react";

import CountriesList from "../components/CountriesList";
import VisitedCountriesList from "../components/VisitedCountriesList";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const fetchCountries = async () => {
        // console.log("Getting some country data");
        const response = await fetch("https://restcountries.com/v3.1/all")
        const jsonData = await response.json();
        const countryNames= jsonData.map((country)=>country.name.official)
        setCountries(countryNames)
        console.log(countries);
        // fetch data from the RESTCountries API
        // set the countries state to the result of the API call
        // pass it down to relevant components
    }

    const addVisited = (countryName) => {
        const updatedVisitedCountries = [...visitedCountries,countryName]
        setVisitedCountries(updatedVisitedCountries)
    }

    useEffect(() => {
        fetchCountries();
    }, [])


    return(
        <>
            <h1>I'm a country container!</h1>
            <CountriesList countryNames={countries} onClick={addVisited}/>
            <VisitedCountriesList visitedCountries={visitedCountries}/>
        </>
    );
}

export default CountriesContainer;