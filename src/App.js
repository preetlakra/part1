const Hello = (props) => {
  // here i write functions


  return (
    // here i call the functions 
    <div>
      
      <p>Hello {props.name},  You are {props.age} years old. </p>
    </div>
  )
}


//Main Component
const App = () => {
  

  return (
    <div>

      <h1>Greetings !</h1>

      <Hello name="Preet Lakra" age='30' />
      
    
      
    </div>
  )
}

export default App