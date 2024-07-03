    import axios from "axios";
    import {FormEvent, useEffect, useState} from "react";
    import {todo} from "./App.tsx";

    {/* -ein Form
        * - inputfeld
        * callback function für action "post"*/}
type TodoFormProps = {add:(description:string) => void}
      export default function TodoForm(props:Readonly<TodoFormProps>){
      const [description, setDescription] = useState<string>("")

          function handleSubmit(event:FormEvent<HTMLFormElement>){
              event.preventDefault()
              alert("A description was submitted " + description )
              console.log("Description" + description)
              setDescription("")
              props.add(description)

          }

            return (
                <>
                    <form onSubmit={handleSubmit}>
                <label>
                Description:
                  <input type={"text"} value ={description} onChange = {(e =>setDescription(e.target.value))}/>
                </label>
                <button> Click!</button>
                    </form>

                </>

            )
        }