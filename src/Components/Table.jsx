import React from 'react';

const Table = ({ todos, onDelete, onDone }) => {
  return (
    <div className='bg-transparent mt-40 mx-20'>
      <div className='overflow-x-auto px-5'>
        <table className='table border border-orange-500 text-white w-full text-center'>
          <thead>
            <tr className='text-orange-500 font-bold text-lg'>
              <th className='text-center'>Index</th> 
              <th className='text-center'>Title</th>
              <th className='text-center'>Description</th>
              <th className='text-center'>Date</th>
              <th className='text-center'>Status</th>
              <th className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center text-2xl font-bold text-white">No todos available</td>
              </tr>
            ) : (
              todos.map((todo, index) => (
                <tr key={todo.id}>
                  <td className='text-center'>{index + 1}</td>
                  <td className='text-center'>{todo.title}</td>
                  <td className='text-center'>{todo.desc}</td>
                  <td className='text-center'>{todo.date}</td>
                  <td className='text-center'>{todo.completed ? "Completed" : "Pending"}</td>
                  <td className='flex justify-center gap-3'>
                    <button className='bg-red-500 px-2 py-1 rounded' onClick={() => onDelete(todo.id)}>Delete</button>
                    <button className='bg-green-500 px-2 py-1 rounded' onClick={() => onDone(todo.id)}>Done</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
