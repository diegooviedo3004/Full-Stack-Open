import React, { useState, useEffect } from 'react'
import { Input, Person, Header, Button } from './components/Utils'
import personService from './services/person'

const App = () => {

    const [persons, setPersons] = useState([])

    useEffect(() => {
        personService.getAll().then(initialPeople => setPersons(initialPeople))
    }, [])

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

        personService.create(newPerson).then(returnedPerson => {
            setPersons(persons.concat(returnedPerson));
            setNewName('');
            setNewNumber('');
        })

    }

    const handleDelete = (id) => {
        const personToDelete = persons.find(person => person.id === id)
        const ans = window.confirm(`Delete ${personToDelete.name} ?`)

        if (!ans) return;

        personService.deletePerson(id)
            .then((res) => {
                setPersons(persons.filter(p => p.id !== id))

            }).catch(error => {
                alert(
                    `${personToDelete.name} was already deleted from server`
                )
                setPersons(persons.filter(p => p.id !== id))
            })
    }


    const personsToShow = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))


    return (
        <div>
            <Header text={"Phonebook"} />
            <Input text={"filter shown with"} value={filter} handleChange={handleFilterChange} />
            <Header text={"Add a new"} />
            <form onSubmit={handleSubmit}>
                <Input text={"name"} value={newName} handleChange={handleChangeName} />
                <Input text={"number"} value={newNumber} handleChange={handleNumberChange} />
                <Button type="submit" text="add" />
            </form>
            <Header text={"Numbers"} />
            {personsToShow.map((person) => (
                <Person key={person.name} handler={() => handleDelete(person.id)} name={person.name} number={person.number} />
            ))}

        </div>
    )
}

export default App