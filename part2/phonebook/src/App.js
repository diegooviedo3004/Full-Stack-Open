import React, { useState } from 'react'
import {Input, Person, Header, Button} from './components/Utils'

const App = () => {

    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const handleChangeName = (event) => {
        const value = event.target.value;
        setNewName(value);
    }

    const handleNumberChange = (event) => {
        const value = event.target.value;
        setNewNumber(value);
    }

    const handleFilterChange = (event) => {
        const value = event.target.value;
        setFilter(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPerson = {
            name: newName,
            number: newNumber
        }
        const found = persons.some(obj => obj.name === newPerson.name);
        if (found) {
            alert(`${newPerson.name} is already added to phonebook`)
            return;
        }
        setPersons(persons.concat(newPerson));
        setNewName('');
        setNewNumber('');
    }

    const personsToShow = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase())) 


    return (
        <div>
            <Header text={"Phonebook"} />
            <Input text={"filter shown with"} value={filter} handleChange={handleFilterChange}/>
            <Header text={"Add a new"} />
            <form onSubmit={handleSubmit}>
                <Input text={"name"} value={newName} handleChange={handleChangeName} />
                <Input text={"number"} value={newNumber} handleChange={handleNumberChange} />
                <Button type="submit" text="add" />
            </form>
            <Header text={"Numbers"} />
            {personsToShow.map((person) => (
                <Person key={person.name} name={person.name} number={person.number} />
            ))}

        </div>
    )
}

export default App