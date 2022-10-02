import {useState} from "react";

export default function useFormValidation(validationFunc) {
    const [input, setInput] = useState('');
    const [toggle, setToggle] = useState(false);

    const isValid = toggle ? validationFunc(input) : true 

    const handleChange = ((e) => {
        const value = e.target.value
        setInput(value)
        setToggle(false)
    })

    const onBlurInput = (() => {
        setToggle(true)
    })


    return {
        onBlurInput,
        isValid,
        handleChange,
        input
    }

}