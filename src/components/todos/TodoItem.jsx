import React, { useState } from 'react'
import { TODO_CATEGORY_ICON } from '@/constants/icon'
import IconButton from '@/components/ui/buttons/IconButton'
import Modal from '../ui/Modal'
import { createPortal } from 'react-dom'
import TodoForm from './TodoForm'

// rafce

const TodoItem = ({ todo,onUpdate,onDelete }) => {
  const { title, summary, category } = todo;
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () =>setOpen(false);

  return (
    <li className="flex gap-4 justify-between my-4 py-4 px-4 border-[1px] bg-gray-700 rounded-md shadow-xl">
      <div>
        <span className="text-lg font-medium text-gray-300">{TODO_CATEGORY_ICON[category]}</span>
        <div>
          <h2 data-test="title" className="mb-0 text-lg font-bold text-gray-100 uppercase">{title}</h2>
          <p className="mt-2 text-base text-gray-200">{summary}</p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <IconButton icon={'✏️'} onClick={openModal} />
        <IconButton textColor='text-red-300' icon={'🗑'} onClick={()=>onDelete(todo.id)}/></div>
        {open&&createPortal(<Modal onClose={closeModal}>
      <TodoForm onAddOrUpdate={onUpdate} onClose={closeModal} todo={todo}>Update Todo</TodoForm> 
      {/* update todo는 childre으로 들어간다 */}
      </Modal>,document.body)}

      
    </li>
  )
}

export default TodoItem