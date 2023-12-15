import { React, useEffect, useReducer, useState } from 'react'
import DefaultLayout from './layouts/DefaultLayout'
import TodoHeader from './components/todos/TodoHeader'
import TodoBody from './components/todos/TodoBody'
//import { TodoContext, TodoDispatchContext } from './contexts/TodoContext'

const dummyTodos = [
  {
    id: 1,
    title: 'React 공부',
    summary: 'React를 공부한다.',
    category: 'TODO',
  },
  {
    id: 2,
    title: '점심 f4',
    summary: '점심을 먹는다.',
    category: 'PROGRESS',
  },
  {
    id: 3,
    title: '커피 마시기',
    summary: '커피를 마신다.',
    category: 'DONE',
  }
]

// const reducer=(todos,action)=>{
//   switch (action.type){
//     case 'ADD':
//       return [...todos,action.newTodo];
//     case 'UPDATE':{
//       const updateTodos=todos.map(todo=>todo.id===updateTodo.id?{...updateTodo}:todo);
//        return setTodos(updateTodos);
//     }
//     case 'DELETE':
//       return ''
//   }
// }

const App = () => {
  const [todos, setTodos] = useState(dummyTodos);
  const [selectedCa,setSelectedCa]=useState("ALL");

  const addTodoHandler = ({ title, summary, category }) => {
    const newTodo = {
      id: self.crypto.randomUUID(),
      title,
      summary,
      category
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  }

  const updateTodoHandler = (updateTodo) => {
    const updatedTodos = todos.map(todo => todo.id === updateTodo.id ? updateTodo : todo);
    setTodos(updatedTodos);
  }

  const deleteTodoHandler=(id)=>{
    const filteredTodos=todos.filter(todo=>todo.id!==id);
    setTodos(filteredTodos);
  }

  const filterTodos=(todos)=>{
    console.log(selectedCa);
   
    return selectedCa==='ALL'?todos:todos.filter(todo=>todo.category===selectedCa)
  }

  const filteredTodos=filterTodos(todos,selectedCa);

  return (
    <DefaultLayout>
      <div>
        <header>
          <div className="flex justify-center">

            <h1 className='py-8 text-red-200 max-w-max animate-bounce text-7xl'>todos</h1>

          </div>
        </header>
        <section>
          {/* <TodoContext.Provider value={todos}> */}
            {/* <TodoDispatchContext.Provider value={dispatch}> */}
          <TodoHeader onAdd={addTodoHandler} category={setSelectedCa}/>
          <TodoBody todos={filteredTodos} onUpdate={updateTodoHandler} onDelete={deleteTodoHandler}/>
          {/* </TodoDispatchContext.Provider> */}
          {/* </TodoContext.Provider> */}
        </section>
        </div>
    </DefaultLayout>
  )
}

export default App