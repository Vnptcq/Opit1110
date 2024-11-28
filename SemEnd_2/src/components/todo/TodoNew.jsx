const TodoNew = (props)=>{
    const {name,age} = props
    return (
        <div className="todo-new">
            <div>My Name is {name} ,i am {age} years ago</div>
            <input type="text"/>
            <button>Add </button>
        </div>
    )
}
export default TodoNew