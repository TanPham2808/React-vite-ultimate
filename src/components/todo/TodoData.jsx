const TodoData = (props) => {
    console.log(">>>> check props:", props)
    // Props là 1 object
    // {
    //     name = "TanPham";
    //     age = 25;
    //     data = {
    //       address: "233 Hoang Hoa Tham",
    //       country: "Viet Nam"
    //     }
    // }
    const { name, age, data, todoList } = props;
    console.log(">>>> Check props: ", todoList)
    return (
        <div className='todo-data'>
            <div>My name is {name}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
            <div>
                {JSON.stringify(todoList)}
            </div>
        </div>
    );
}

export default TodoData;