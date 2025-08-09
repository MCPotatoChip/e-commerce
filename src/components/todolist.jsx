import { useState } from "react";

export const TodoList = () => {
  const [newTask, setNewTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (id === task.id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  };
  return (
    <div>
      <div>
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div>
        {todoList.map((task) => (
          <div style={{ backgroundColor: task.completed ? "green" : "white" }}>
            <span>{task.taskName}</span>
            <button onClick={() => completeTask(task.id)}>Complete</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

let todoList = [
  {
    id: 1,
    taskName: "study",
    completed: false,
  },
  {
    id: 2,
    taskName: "study 2",
    completed: false,
  },
];
let arr = [1, 2, 3, 4, 5];
arr.map((item) => item * 2);
arr.filter((item) => item % 2 == 0);
