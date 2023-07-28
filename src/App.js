import React from 'react';

const Header = (props) =>{
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) =>{
  const part1 =  props.parts[0]
  const part2 =  props.parts[1]
  const part3 =  props.parts[2]
  
  return (
    <div>
      <p>
        {part1.name} {part1.exercises}
      </p>
      <p>
        {part2.name} {part2.exercises}
      </p>
      <p>
        {part3.name} {part3.exercises}
      </p>
    
    </div>
    
  )
 
}

const Total = (props) =>{

  const totalExercises = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises 


  return (
    <div>
      <p>Total number of exercises are :{totalExercises} </p>
    </div>
  )
}


const App = () => {
  // const-definitions
  const course = "Half Stack Application Development"

  const parts =[
    {name:'Fundamentals of React', exercises: 10},
    {name:'Using props to pass data',exercises: 7},
    {name:'State of a component',exercises: 14}
  ]

  return (
    <div>

      <Header course = {course} />
      <Content parts= {parts} />
      <Total parts= {parts} />



    </div>
  )
}

export default App
