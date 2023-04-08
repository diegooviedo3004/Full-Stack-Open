import React from "react";

const Part = ({ name, exercises }) => <p>{name} {exercises}</p>

const Content = ({ parts }) => {
    return (
        <>
            {parts.map((part) => (
                <Part key={part.id} exercises={part.exercises} name={part.name} />
            ))}
        </>
    )
}

export default Content;