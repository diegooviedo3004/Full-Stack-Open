import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const SearchBar = ({ value, handler }) => {
    return (
        <>
            find countries
            <input value={value} onChange={handler} />
            <br />
        </>
    )
}

const Languages = ({languages}) => {

    const languagesArr = Object.values(languages);

    return (
        <ul>
            {languagesArr.map((lan) => (
                <li key={lan}>{lan}</li>
            ))}
        </ul>
    )
}

const Country = ({data}) => {
    return (
        <>
            <h1>{data.name.common}</h1>
            capital {data.capital[0]} <br />
            population {data.population}
            <Languages languages={data.languages}/>
            <img src={data.flags.png} alt={`Flag of ${data.name.common}`} width="150"/>
        </>
    )
}

const Content = ({ countries }) => {

    const totalCountries = countries.length;

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
        return (
            <Country data={countries[0]}/>
        )
    }

    return (
        <ul>
            {countries.map((country) => (
                <li key={country.name.official}>{country.name.common}</li>
            ))}
        </ul>
    )
}

const App = () => {
    const [name, setName] = useState("");
    const [countries, setCountries] = useState([]);

    const handleChangeName = (e) => {
        setName(e.target.value);
        if (name == "") {
            return
        }
        axios.get(`https://restcountries.com/v3.1/name/${name}`)
            .then((response) => {
                setCountries(response.data);
            })

    }

    return (
        <>
            <SearchBar value={name} handler={handleChangeName} />
            {name !== "" ? (
                <Content countries={countries} />
            ) : (
                <>Type for countries information.</>
            )}
        </>
    )
}

export default App