import React, { useState } from 'react'

const Person = ({ name, number }) => <>{name} {number}<br /></>

const App = () => {

    const [persons, setPersons] = useState([
        { name: '' , number: ''}
    ])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleChangeName = (event) => {
        const value = event.target.value;
        setNewName(value);
    }

    const handleNumberChange = (event) => {
        const value = event.target.value;
        setNewNumber(value);
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

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    name: <input value={newName} onChange={handleChangeName} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNumberChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((person) => (
                <Person key={person.name} name={person.name} number={person.number} />
            ))}

        </div>
    )
}

export default App