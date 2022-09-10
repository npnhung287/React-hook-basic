
const Todo = (props) => {
    let { todos, title, handleDeleteTodo } = props
    return (
        <div className='todos-container'>
            <div className="title">
                {title}
            </div>
            <hr />
            {
                todos.map((todo, index) => {
                    return (
                        <div key={todo.id}>
                            <div className='todo-child' >
                                {todo.id} - {todo.title} <span onClick={() => handleDeleteTodo(todo.id)}>x</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Todo;