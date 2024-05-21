import React, { useState, useEffect } from 'react';

function App() {
    const [one, setOne] = useState('');
    const [two, setTwo] = useState('');
    const [calculations, setCalculations] = useState([]);

    useEffect(() => {
        const storedCalculations = JSON.parse(localStorage.getItem('calculations')) || [];
        setCalculations(storedCalculations);
    }, []);

    const firstInput = (event) => {
        setOne(event.target.value);
    };

    const scoInput = (event) => {
        setTwo(event.target.value);
    };

    const plus = () => {
        const result = parseInt(one) + parseInt(two);
        setCalculations([...calculations, `${one} + ${two} = ${result}`]);
        localStorage.setItem('calculations', JSON.stringify([...calculations, `${one} + ${two} = ${result}`]));
    };

    const minus = () => {
        const result = parseInt(one) - parseInt(two);
        setCalculations([...calculations, `${one} - ${two} = ${result}`]);
        localStorage.setItem('calculations', JSON.stringify([...calculations, `${one} - ${two} = ${result}`]));
    };

    const multi = () => {
        const result = parseInt(one) * parseInt(two);
        setCalculations([...calculations, `${one} * ${two} = ${result}`]);
        localStorage.setItem('calculations', JSON.stringify([...calculations, `${one} * ${two} = ${result}`]));
    };

    const divide = () => {
        const result = parseInt(one) % parseInt(two);
        setCalculations([...calculations, `${one} / ${two} = ${result}`]);
        localStorage.setItem('calculations', JSON.stringify([...calculations, `${one} / ${two} = ${result}`]));
    };

    return (
        <div>
            <h1>계산기</h1>
            <input type="number" onChange={firstInput} />
            <input type="number" onChange={scoInput} />
            <button onClick={plus}>더하기</button>
            <button onClick={minus}>빼기</button>
            <button onClick={multi}>곱하기</button>
            <button onClick={divide}>나누기</button>
            <br />
            <h2>계산 기록</h2>
            <ul>
                {calculations.map((calculation, index) => (
                    <li key={index}>{calculation}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
