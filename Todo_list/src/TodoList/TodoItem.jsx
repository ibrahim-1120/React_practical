import { useContext } from "react"
import Items from "./Items"
import { TodoItemcontex } from "../Store/Todo_item_store"

const TodoItem = ({ onRemoveClick }) => {

    const Todo = useContext(TodoItemcontex)
    return <>
        {Todo.map(element => <Items keys={element.name} Todoname={element.name} Tododate={element.date} onRemoveClick={onRemoveClick}></Items>)}


    </>
}
export default TodoItem
