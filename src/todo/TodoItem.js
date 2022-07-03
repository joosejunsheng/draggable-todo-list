import React, {useState} from 'react';


function TodoItem({todos, completeTodo, removeTodo, editTodo, cancelEditTodo, finishEditTodo, updateTodoSequence}){

	const [editedTodoText, setEditedTodoText] = useState({});

	let draggingIndex;

	const dragStart = (e, index) => {
		draggingIndex = index;
	}

	const dragDrop = (e, index) => {
		e.preventDefault();

		let fromIndex = draggingIndex;
		let toIndex = index;

		let todoList = todos;

		let temp = todoList[fromIndex];
		
		if(fromIndex > toIndex){
			while(fromIndex > toIndex){
				todoList[fromIndex] = todoList[fromIndex - 1];
				fromIndex--;
			}
		} else if(fromIndex < toIndex){
			while(fromIndex < toIndex){
				todoList[fromIndex] = todoList[fromIndex + 1];
				fromIndex++;
			}
		}

		todoList[toIndex] = temp;

		updateTodoSequence(todoList);

	}

	const dragOver = (e, index) => {
		e.preventDefault();
	}

	const finishEdit = (todoId) => {
		if(typeof editedTodoText[todoId] == 'undefined'){
			cancelEditTodo(todoId);
			return;
		}

		finishEditTodo(todoId, editedTodoText[todoId]);
	}

	const editingTodo = (e, todoId) => {
		setEditedTodoText({[todoId] : e.target.value});
	}

	return (
		<div onDragOver={(index) => dragOver(index)}>
			{
				todos.map((todo, index) => (
					<div draggable onDragStart = {(e) => dragStart(e, index)} onDrop = {(e) => dragDrop(e, index)} key={todo.id}>
						{todo.isEditing && <div><input type="text" onChange={(e) => editingTodo(e, todo.id)}/><div onClick={() => cancelEditTodo(todo.id)}>Cancel Edit</div><div onClick={() => finishEdit(todo.id)}>Finish Edit</div></div>}
						{!todo.isEditing && <div>{todo.id} - {todo.text} <span onClick={() => removeTodo(todo.id)}>x</span> <span onClick={() => editTodo(todo.id)}>edit</span></div>}
					</div>
				))
			}
		</div>
	);

}

export default TodoItem;