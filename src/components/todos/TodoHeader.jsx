import React, { useState } from 'react'
import TodoFilter from './TodoFilter'
import Modal from '../ui/Modal'
import {createPortal} from 'react-dom'
import TodoForm from './TodoForm'

const TodoHeader = ({onAdd,category,onFilter}) => {
  const [isOpen,open]=useState(false);
  const openModal=()=>open(true);
  const closeModal=()=>{open(false)};
  return (
    <div className="flex items-center justify-between mb-2" id="task-control">
    <button
     className="px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
            data-cy="add-todo-button" onClick={openModal}>Add Todo
    </button>
    {isOpen&&createPortal(<Modal onClose={closeModal}>
      <TodoForm onClose={closeModal} onAddOrUpdate={onAdd} todo={''}>New Todo</TodoForm>
      </Modal>,document.body)}
    <TodoFilter category={category} onFilter={onFilter}/>
    </div>
  )
}

export default TodoHeader