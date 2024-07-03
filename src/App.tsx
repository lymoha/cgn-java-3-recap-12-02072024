
    import './App.css'
    import axios from "axios";
    import {Simulate} from "react-dom/test-utils";
    import error = Simulate.error;
    import {useEffect, useState} from "react";
    import TodoForm from './TodoForm';
    export type todo = {
      id:string,
      description: string,
      status:string
    }

    function App() {
      const [todo,setTodo] = useState<todo[]>([])

      function callData(){
        axios.get("/api/todo")
            .then(response => setTodo(response.data))
            .catch(error => console.log(error))
      }

      console.log(todo)

        function addTodo(description:string){
            axios.post("/api/todo",{description:description,status:"OPEN"})
                .then(response =>setTodo(response.data))
                .catch(error => console.log(error))
        }

      useEffect(() => {
          document.title = "recap-12-axios-(02-03).07.2024";
        callData()

      },[])
      return (
        <>
           <TodoForm add={addTodo}/>
        </>
      )
    }

    export default App
