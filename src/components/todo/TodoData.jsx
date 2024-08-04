const TodoData = (props) => {
    const { name, age, data, todoList } = props;

    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                return (
                    <div key={index} className="todo-item">
                        <div >{item.name}</div>
                        <button>Delete</button>
                    </div>
                )
            })}
        </div>
    );
}

export default TodoData;