const Person = ({ name, number, handler }) => <>{name} {number} <button onClick={handler}>delete</button><br /></>

const Header = ({ text }) => <h2>{text}</h2>

const Button = ({ text, type }) => {
    return (
        <div>
            <button type={type}>{text}</button>
        </div>
    )
}

const Input = ({ text, value, handleChange }) => {
    return (
        <div>
            {text}: <input value={value} onChange={handleChange} />
        </div>
    )
}

export { Input, Person, Header, Button };