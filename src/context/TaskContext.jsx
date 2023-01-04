import {createContext,useState,useEffect} from 'react'
import {tasks as data} from '../task'


export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data);
      }, [])

    function createTask(task) {
        setTasks([...tasks, {
          title: task.title,
          id: tasks.length,
          description: task.description 
        }]);
      }
    
      function deleteTask(taskid){
        setTasks(tasks.filter(task => task.id !== taskid))
      }
    


  return (
    <TaskContext.Provider value={{
        tasks,
        createTask,
        deleteTask}}>
    {props.children}
    </TaskContext.Provider>
  )
}