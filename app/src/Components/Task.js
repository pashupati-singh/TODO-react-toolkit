import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducers/todoRedicer";
import './TODO.css';

const Task = () => {
    const dispatch = useDispatch();
    const inputRef = useRef(null);
  
    function addNewTask() {
      const task = inputRef.current.value.trim();
      if (task !== "") {
        dispatch(addTodo(task));
        inputRef.current.value = "";
      }
    }
  
    return (
      <div className="todo-form-container">
        <div className="add-task">
          <input
            type="text"
            placeholder="Add task here..."
            ref={inputRef}
            className="taskInput"
          />
          <button onClick={addNewTask}>Add task</button>
        </div>
      </div>
    );
  };
  
  export default Task;