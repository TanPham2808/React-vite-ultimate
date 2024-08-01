const TodoNew = (props) => {

    // Lấy function ra
    const { addNewTodo } = props;

    // Thực thi function
    addNewTodo("X.Tan");

    return (
        <div className="todo-new">
            <input type="text" />
            <button>Add</button>
        </div>
    );
}

export default TodoNew;