import { useState } from "react";

const TodoNew = (props) => {

    // useState hook
    // const valueInput = "Tan Pham Xuan";
    const [valueInput, setValueInput] = useState("TP");

    // Lấy function ra
    const { addNewTodo } = props;


    const handleOnChange = (name) => {
        setValueInput(name);
    }

    const handleOnClick = () => {
        // Thực thi function của thằng cha truyền vào
        addNewTodo(valueInput);
    }

    return (
        <div className="todo-new">
            <input
                type="text"
                onChange={(event) => { handleOnChange(event.target.value) }}
            />
            <button onClick={handleOnClick}>Add</button>
            <div>My name is {valueInput}</div>
        </div>
    );
}

export default TodoNew;