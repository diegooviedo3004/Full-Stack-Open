import React from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Part = ({ name, exercises }) => <p>{name} {exercises}</p>

const Total = ({ sum }) => <strong>total of {sum} exercises</strong>

const Content = ({ parts }) => {
    return (
        <>
            {parts.map((part) => (
                <Part key={part.id} exercises={part.exercises} name={part.name} />
            ))}
        </>
    )
}

const Course = ({ course }) => {
    return (
        <>
            <Header text={course.name} />
            <Content parts={course.parts} />
            <Total sum={course.parts.reduce((sum, part) => sum + part.exercises, 0)} />
        </>
    )
}


const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1,
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2,
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3,
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4,
                },
            ],
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1,
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2,
                },
            ],
        },
    ]

    return (
        <>
            {courses.map((course) => (
                <Course course={course} />
            ))}
        </>
    )

}

export default App