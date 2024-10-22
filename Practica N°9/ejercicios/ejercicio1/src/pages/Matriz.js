import React, { useState } from 'react';

function Matriz() {
    const [matrix, setMatrix] = useState([]);
    const [result, setResult] = useState('');

    const generateMatrix = size => {
        let newMatrix = [];
        for (let i = 0; i < size; i++) {
            newMatrix[i] = [];
            for (let j = 0; j < size; j++) {
                newMatrix[i][j] = Math.floor(Math.random() * 10);
            }
        }
        return newMatrix;
    };

    const checkIfPerfect = matrix => {
        const size = matrix.length;
        let sums = new Array(2 * size + 2).fill(0);
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                sums[i] += matrix[i][j];
                sums[size + j] += matrix[j][i];
                if (i === j) sums[2 * size] += matrix[i][j];
                if (i + j === size - 1) sums[2 * size + 1] += matrix[i][j];
            }
        }
        return sums.every(x => x === sums[0]);
    };

    const handleGenerate = () => {
        const size = 3; // Define the size of the matrix
        const newMatrix = generateMatrix(size);
        setMatrix(newMatrix);
        const isPerfect = checkIfPerfect(newMatrix);
        setResult(isPerfect ? "La matriz es perfecta." : "La matriz no es perfecta.");
    };

    return (
        <div>
            <h1>Generador de Matriz Perfecta</h1>
            <button onClick={handleGenerate}>Generar Matriz</button>
            <div>
                <table>
                    <tbody>
                        {matrix.map((row, index) => (
                            <tr key={index}>
                                {row.map((item, idx) => (
                                    <td key={idx}>{item}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p>{result}</p>
        </div>
    );
}

export default Matriz;
