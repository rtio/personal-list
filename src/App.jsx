import { useState } from 'react'
import { ListBulletIcon } from '@heroicons/react/24/solid'

const tasksList = [
  {
    id: 1,
    description: 'Learn React',
    completed: false,
  },
  {
    id: 2,
    description: 'Learn Firebase',
    completed: true,
  },
  {
    id: 3,
    description: 'Learn Tailwind',
    completed: false,
  },
];

function App() {
  const [myTodoList, setMyTodoList] = useState(tasksList);
  const doneStyle = 'flex-none rounded-full p-1 text-green-400 bg-green-400/10';
  const todoStyle = 'flex-none rounded-full p-1 text-gray-500 bg-gray-100/10';

  function removeItem(id) {
    const newList = myTodoList.filter(task => task.id !== id);
    setMyTodoList(newList);
  }

  const listItems = myTodoList.map(task => (
      <li key={task.id} className="relative flex items-center space-x-4 py-4">
        <div className="min-w-0 flex-auto">
          <div className="flex items-center gap-x-3">
            <div className={ task.completed ? doneStyle : todoStyle }>
              <div className="h-2 w-2 rounded-full bg-current"></div>
            </div>
            <h2 className="min-w-0 text-sm font-semibold leading-6 text-white">
              <a href="#" className="flex gap-x-2">
                <span className="truncate">{ task.description }</span>
              </a>
            </h2>
          </div>
        </div>
        <a onClick={(e) => removeItem(task.id)} className="rounded-full flex-none py-1 px-2 text-xs font-medium ring-1 ring-inset text-indigo-400 bg-indigo-400/10 ring-indigo-400/30">Remove</a>
      </li>
  ));

  return (
    <div className="min-h-screen pt-8 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 p-8 bg-gray-800 rounded-lg mt-3 border border-gray-900 drop-shadow-xl">
        <h1 className="text-sky-400 mb-3">My personal list</h1>
        <div>
          <label htmlFor="new-task" className="block text-sm font-medium leading-6 text-gray-100">Task</label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <ListBulletIcon className='h-6 text-indigo-400' />
            </div>
            <input type="text" name="new-task" id="new-task"
              className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Enter your task" />
          </div>
        </div>
        <ul role="list" className="divide-y divide-white/5">
          { listItems }
        </ul>
      </div>
    </div>
  )
}

export default App
