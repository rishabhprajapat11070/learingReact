import { memo, useState } from 'react';

const App = () => {
const [Title,SetTitile] = useState('')
const [description,SetDiscription] = useState('')
const [task,Settask] = useState([])

function SubmitNote(e){
  e.preventDefault()
 const CopyTask = [...task]
 CopyTask.push({title:Title,dis:description})
 Settask(CopyTask)

  SetTitile('')
  SetDiscription('')
 
// const copyTask = [...task]
}

// delete the note
function deleteNote(e){
  const Task = [...task]
  Task.splice(e,1)
  Settask(Task)
  // console.log(Task)
}
  return (
    <div>
      {/* this is a input  */}
      <form onSubmit={(e)=>{
        SubmitNote(e)

      }}>
      <div className='flex flex-col gap-1 '>
        <input type="text" 
        value={Title}
        placeholder='Enter the Title' 
        className='m-2 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200' 
        onChange={(e)=>{
            SetTitile(e.target.value)
 
        }}  />
        <input type="text" 
        placeholder='Enter the descrition' 
        value={description}
        className='m-2 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
         onChange={(e)=>{
            SetDiscription(e.target.value)
            
        }}  />
        <button type='submit' className='m-2 rounded-lg bg-green-400 px-5 py-2 text-white transition active'>Add to list</button>
      </div>
      </form>
   
      {/* this is a cards */}
      <div className='p-2 flex flex-wrap gap-1 '>
      {task.map((e,index)=>{
        return (

          <div 
          key={index} 
          className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-6 shadow-md">
          <h2 
          className="text-xl font-bold text-gray-900 ">
          {e.title}
          </h2>

          <p 
          className="mt-2 text-gray-600">
          {e.dis}
          </p>
          <div className='flex items-center justify-center'>

          {/* this the delete button  */}
          </div>
          <button className='bg-red-500 text-white px-4 py-2 rounded' onClick={()=>{deleteNote(index)}}>delete</button>
        </div>
        
        )
      })}

      </div>
      
    </div>   
  );
};


export default memo(App);