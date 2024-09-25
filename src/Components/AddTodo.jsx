import React, { useState } from 'react'

const AddTodo = ({ onAdd }) => {

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [desc, setdesc] = useState('')

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleDateChange = (e) => {
    setDate(e.target.value)
  }

  const handleDescChange = (e) => {
    setdesc(e.target.value)
  }

  const handleAdd = () => {

    if (!title || !date || !desc) {
      alert('Please fill all fields')
    } else {
      onAdd(title, date, desc)
      setTitle('');
      setDate('');
      setdesc('');

    }
  }

  return (
    <div className="w-[80%] m-auto h-[15vh]  ">

      <div className="flex justify-center items-center space-x-4 h-full ">
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Enter Todo"
          onChange={handleTitleChange}
          className="outline-none px-2 py-2 rounded-md w-[30%] font-bold border border-orange-500"
          required
        />
        <input
          type="date"
          name="date"
          value={date}
          onChange={handleDateChange}
          className="outline-none px-2 py-2 rounded-md font-bold border border-orange-500"
          required
        />
      </div>
      <textarea
        name="description"
        onChange={handleDescChange}
        value={desc}
        className="outline-none px-2 py-1 rounded-md w-[30%] font-bold border border-orange-500 block m-auto my-4"
        placeholder="Enter description"
        required
      />
      <button  onClick={handleAdd} type="submit" className="bg-gradient-to-r from-orange-500 to-red-400 font-bold p-3 w-[10%] rounded-lg m-auto block md:w-auto">
        Add
      </button>

    </div>
  )
}

export default AddTodo
