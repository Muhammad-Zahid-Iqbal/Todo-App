import { render } from '@testing-library/react';
import React from 'react'
import { Component } from 'react';
import Todo from './components/todo';

const App = () => {
  return (
    <>
      <Todo/>
    </>
  )
}

// // export default App BoilingVerdict
// function BoilingVerdict(props){
//   if(props.celcius>=100){
//     return <p>The water would boil</p>;
//   }
//   return <p>The water would boil</p>;
// }
// ////////Calculator function Start here/////

// class Calculator extends React.Component{
//   render(){
//   return(
//     <div>
//         <TemperatureInput scale="c"/>
//         <TemperatureInput scale="f"/>
//     </div>
//   )
// }
// }
// ////////Temperature input start here//////

// const scaleNames = {
//   c: 'Celcius',
//   f: 'Fahrenheit'
// };

// class TemperatureInput extends React.Component{
//   constructor(props){
//     super(props);
//     this.handleChange=this.handleChange.bind(this);
//     this.state ={temperature:''};
//   }

//   handleChange(e){
//     this.setState({tempetarure: e.target.value});
//   }


//   render(){
//     // const temperature = this.state.temperature;
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;

//     return(
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input temperature={temperature}  onChange={this.handleChange}/>
//       </fieldset>
//     )
//   }
// }

// function toCelsius(fahrenheit){
//   return(fahrenheit -32)*5/9;
// }
// function toFarenheit(celcius){
//   return(celcius *9/5)+32;
// }

// function tryConvert(temperature, convert){
//   const input = parseFloat(temperature);
//   if(Number.isNaN(input)){
//     return '';
//   }

//   const output = convert(input);
//   const rounded = Math.round(output * 1000)/1000;
//   return rounded;
// }


export default App;