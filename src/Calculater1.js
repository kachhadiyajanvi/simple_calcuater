import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Calculater1() {
    let [display, setDisplay] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                setDisplay(eval(display).toString());
            } catch (error) {
                setDisplay('Error');
            }
        } else {
            setDisplay((prevDisplay) => prevDisplay + value);
        }

    };
    const handleclear = () => {
        setDisplay('');
    }
    const handleclean = () => {
        setDisplay(display.substring(0, display.length - 1));
    }

    return (
        <div className="App">
            <h1>Standard Calculater</h1>
            <div class="main_div">
                <div class="text">
                    <input type="text" name="" value={display} ></input>
                </div>

                <div class="btn">
                    <input type="button" name="" value={"%"} onClick={() => handleButtonClick('%')}></input>
                    <input type="button" name="" value={"CE"} onClick={() => handleclean()}></input>
                    <input type="button" name="" value={"C"} onClick={() => handleclear()}></input>
                    <input type="button" name="" value={"/"} onClick={() => handleButtonClick('/')}></input>
                </div>
                <div class="btn">
                    <input type="button" name="" value={"7"} class="h7" onClick={() => handleButtonClick('7')}></input>
                    <input type="button" name="" value={"8"} onClick={() => handleButtonClick('8')}></input>
                    <input type="button" name="" value={"9"} onClick={() => handleButtonClick('9')}></input>
                    <input type="button" name="" value={"*"} onClick={() => handleButtonClick('*')}></input>
                </div>
                <div class="btn">
                    <input type="button" name="" value={"4"} onClick={() => handleButtonClick('4')}></input>
                    <input type="button" name="" value={"5"} onClick={() => handleButtonClick('5')}></input>
                    <input type="button" name="" value={"6"} onClick={() => handleButtonClick('6')} ></input>
                    <input type="button" name="" value={"-"} onClick={() => handleButtonClick('-')} ></input>
                </div>
                <div class="btn">
                    <input type="button" name="" value={"1"} onClick={() => handleButtonClick('1')}></input>
                    <input type="button" name="" value={"2"} onClick={() => handleButtonClick('2')}></input>
                    <input type="button" name="" value={"3"} onClick={() => handleButtonClick('3')}></input>
                    <input type="button" name="" value={"+"} onClick={() => handleButtonClick('+')}></input>
                </div>
                <div class="btn">
                    <input type="button" name="" value={"00"} onClick={() => handleButtonClick('00')}></input>
                    <input type="button" name="" value={"0"} onClick={() => handleButtonClick('0')}></input>
                    <input type="button" name="" value={"."} onClick={() => handleButtonClick('.')}></input>
                    <input type="button" name="" value={"="} onClick={() => handleButtonClick('=')}></input>
                </div>
            </div>

        </div>
    );
}

export default Calculater1;
