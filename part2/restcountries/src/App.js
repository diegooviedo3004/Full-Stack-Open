import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY

const SearchBar = ({ value, handler }) => {
    return (
        <>
            find countries
            <input value={value} onChange={handler} />
            <br />
        </>
    )
}

const Languages = ({ languages }) => {

    const languagesArr = Object.values(languages);

    return (
        <>
            <h3>languages</h3>
            <ul>
                {languagesArr.map((lan) => (
                    <li key={lan}>{lan}</li>
                ))}
            </ul></>
    )
}

const Weather = ({ city }) => {

    const [weather, setWeather] = useState([]);


    useEffect(() => {

        fetch(`http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`)
        .then((res) => {
            console.log(res)
        })
        
    }, [])


    return (
        <>
            <h2>Weather in {city}</h2>
        </>
    )
}

const Country = ({ data }) => {
    return (
        <>
            <h1>{data.name.common}</h1>
            capital {data.capital[0]} <br />
            population {data.population}
            <Languages languages={data.languages} />
            <img src={data.flags.png} alt={`Flag of ${data.name.common}`} width="300" />
        </>
    )
}

const Content = ({ countries, setSelectedCountry, selectedCountry }) => {

    const totalCountries = countries.length;

    const handleSelectCountry = (country) => {
        setSelectedCountry(country);
    }

    if (selectedCountry) {
        return (
            <>
                <Country data={selectedCountry} />
                <Weather city={selectedCountry.capital[0]} />
            </>
        )
    }

    if (totalCountries === 0) {
        return (
            <>No results for the given country name.</>
        )
    }

    if (totalCountries > 10) {
        return (
            <>Too many matches, specify another filter.</>
        )
    }

    if (totalCountries === 1) {
        const country = countries[0];
        return (
            <>
                <Country data={country} /> <br />
                <Weather city={country.capital[0]} />
            </>
        )
    }

    return (
        <ul>
            {countries.map((country) => (
                <li key={country.name.official}>{country.name.common}
                    <button onClick={() => handleSelectCountry(country)}>show</button>
                </li>
            ))}
        </ul>
    )
}

const App = () => {
    const [name, setName] = useState("");
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleChangeName = (e) => {
        setName(e.target.value);
        setSelectedCountry(null);
        if (name == "") {
            return
        }
        axios.get(`https://restcountries.com/v3.1/name/${name}`)
            .then((response) => {
                setCountries(response.data);
            }).catch((error) => {
                setCountries([])
            });

    }

    return (
        <>
            <SearchBar value={name} handler={handleChangeName} />
            {name !== "" ? (
                <Content countries={countries} setSelectedCountry={setSelectedCountry} selectedCountry={selectedCountry} />
            ) : (
                <>Type for countries information.</>
            )}
        </>
    )
}

export default App