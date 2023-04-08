import React, { useState } from 'react'

const Person = ({ name }) => <>{name}<br /></>

const App = () => {

    const [persons, setPersons] = useState([
        { name: '' }
    ])

    const [newName, setNewName] = useState('')

    const handleChangeName = (event) => {
        const value = event.target.value;
        setNewName(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPerson = {
            name: newName
        }
        setPersons(persons.concat(newPerson));
        setNewName('');
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    name: <input value={newName} onChange={handleChangeName} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((person) => (
                <Person key={person.name} name={person.name} />
            ))}
        </div>
    )
}

export default App