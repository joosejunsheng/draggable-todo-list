import React, {useState, useEffect} from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import {useLocalStorage} from '../CustomHook/useLocalStorage';


function TodoList() {

	const [todos, setTodos] = useState([]);
	const [todoList, setTodoList] = useLocalStorage();

	useEffect(() => {
		setTodos(todoList);
	},[]);

	useEffect(() => {
		setTodoList(todos);
	},[todos]);

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
			if(todo.id == id){
				todo.isEditing = true;
			}
		})

		setTodos([...updatedTodoList]);
	}

	const cancelUpdateTodo = (id) => {

		let updatedTodoList = todos;
		updatedTodoList.forEach((todo) => {
			if(todo.id == id){
				todo.isEditing = false;
			}
		})

		setTodos([...updatedTodoList]);
	}

	const removeTodo = (id) => {
		
		const removeArrWithId = [...todos].filter(todo => todo.id != id);

		setTodos(removeArrWithId);
	}

	const updateTodoSequence = (todoList) => {
		setTodos([...todoList]);
	}

	const finishEditTodo = (todoId, todoText) => {
		todos.forEach((todo) => {
			if(todo.id == todoId){

				if(todo.text != todoText){
					todo.text = todoText;
				}
				todo.isEditing = false;
			}
		})

		setTodos([...todos]);
	}

	return (

		<div>
			<TodoForm onSub={handleSubmit}/>
			<div>
				<TodoItem todos={todos}
					completeTodo={completeTodo}
					removeTodo={removeTodo}
					editTodo={updateTodo}
					cancelEditTodo={cancelUpdateTodo}
					finishEditTodo={finishEditTodo}
					updateTodoSequence={updateTodoSequence}/>
			</div>
		</div>

	)
}


export default TodoList;