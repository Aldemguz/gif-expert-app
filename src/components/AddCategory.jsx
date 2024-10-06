import { useState } from "react"

export const AddCategory = ({ onAddCategory }) => {

    const [ inputValue, setInputValue ] = useState('One Punch');
    const onChangeInputValue = ({ target }) => {
        setInputValue(
            () => target?.value
        );
    }

    const submit = (e) => {
        e.preventDefault();


        if (inputValue.trim().length <= 2) return;
        onAddCategory(inputValue);
        setInputValue(
            () => ''
        );
        
    }
    
    return (
            <form onSubmit={submit}>
                <input
                    type="text"
                    placeholder="Buscar gifs"
                    value={inputValue}
                    onChange={onChangeInputValue}
                ></input>
            </form>
    )
}