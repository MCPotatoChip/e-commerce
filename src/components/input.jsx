import {useState} from "react";
export const Input = () => {
    const [inputValue, setInputValue] = useState('');
    const [value,setValue] = useState();

    const handleChange = (e) => {
        setInputValue(e.target.value);
        }
    const change = () =>{
        setValue(inputValue);
    }
    return (
        <div>
            <input type="text" onChange={handleChange} />,
            <button onClick={change}>click</button>
            <p>{value}</p>
            
        </div>

    )
}

