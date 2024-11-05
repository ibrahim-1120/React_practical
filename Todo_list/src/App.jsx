import Title from "./TodoList/Title"
// import Items from "./TodoList/Items"
import AddTodo from "./TodoList/AddTodo"
import TodoItem from "./TodoList/TodoItem"
import { useState } from "react"
import { TodoItemcontex } from "./Store/Todo_item_store"


function App() {

  let [List, Setlist] = useState([])

  const AddButtonClickHandle = (Todoname, tododate) => {

    let CurrentTodo = [...List, { name: Todoname, date: tododate }]
    Setlist(CurrentTodo)
  }

  const removeButtonClickData = (Todoname) => {
    const currentlist = List.filter(Element => Element.name != Todoname)
    Setlist(currentlist)

  }



  return (
    <center>
      <TodoItemcontex.Provider value={[List]}>

        <Title></Title>
        <AddTodo OnAddButtonClick={AddButtonClickHandle}></AddTodo>
        <TodoItem onRemoveClick={removeButtonClickData}></TodoItem>
      </TodoItemcontex.Provider>
    </center >


  )
}

export default App
