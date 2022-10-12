import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';

function hello() {
    alert ('hello')
}
hello();

function App() {
    console.log("App rendering")
    return (
        <div>
            <Title />
            <Rating />
            <Accordion />
            <Rating />
        </div>
    );
}

function Title () {
    console.log("Title rendering")
    return(
        <>
            This is App component
        </>
    )
}

function Rating() {
    console.log("Rating rendering")
    return (
        <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    );
}

function Star() {
    console.log("Star rendering")
    return (
        <div>
            star
        </div>
    )
}


export default App;
