
/*
cuando el component es tan corto se puede usar el oneLiner

const Header = ({course}) => <h1>{course}</h1>
*/
const Header = (props) => {
  return <h1>{props.course}</h1>
}
const Content = (props) => {
  return <p>{props.part} {props.ejercicios}</p>
}
const Total = (props) => {
  return <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}>  </Header>
      <Content part={part1} ejercicios={exercises1}></Content>
      <Content part={part2} ejercicios={exercises2}></Content>
      <Content part={part3} ejercicios={exercises3}></Content>
      <Total e1={exercises1} e2={exercises2} e3={exercises3}></Total>
    </div>
  )
}

export default App