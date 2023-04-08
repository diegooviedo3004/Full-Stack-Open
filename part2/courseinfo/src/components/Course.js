import React from "react"
import Content from "./Content"

const Header = ({ text }) => <h1>{text}</h1>
const Total = ({ sum }) => <strong>total of {sum} exercises</strong>

const Course = ({ course }) => {
    return (
        <>
            <Header text={course.name} />
            <Content parts={course.parts} />
            <Total sum={course.parts.reduce((sum, part) => sum + part.exercises, 0)} />
        </>
    )
}

export default Course;
