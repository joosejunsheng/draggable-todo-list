import React, {useState} from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';


function TodoList() {

	const [todos, setTodos] = useState([]);

	const handleSubmit = (e) => {

		const newTodos = [...todos, e];
		setTodos(newTodos);
	}

	const completeTodo = (id) => {

		let updatedTodos = todos.map(todo => {
			if(todo.id == id){
				todo.completed = !todo.completed;
			}

			return todo;
		});

		setTodos([...todos]);
	}

	const updateTodo = (id) => {

		let updatedTodoList = todos;
		updatedTodoList.forEach((todo) => {
			console.log(todo);
			if(todo.id == id){
				console.log(todo.text);
				todo.isEditing = true;
			}
		})

		setTodos([...updatedTodoList]);
	}

	const removeTodo = (id) => {
		
		const removeArrWithId = [...todos].filter(todo => todo.id != id);

		setTodos(removeArrWithId);
	}

	const updateTodoSequence = (todoList) => {
		console.log('USAUDOASJ');
		setTodos([...todoList]);
	}

	return (

		<div>
			<TodoForm onSub={handleSubmit}/>
			<div>
				<TodoItem todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} editTodo={updateTodo} updateTodoSequence={updateTodoSequence}/>
			</div>
		</div>

	)
}


export default TodoList;