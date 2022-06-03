import React, {useState} from 'react';


function TodoItem({todos, completeTodo, removeTodo, editTodo, updateTodoSequence}){

	let draggingIndex;

	const dragStart = (e, index) => {
		draggingIndex = index;
		console.log(index);
	}

	const dragDrop = (e, index) => {
		e.preventDefault();

		let fromIndex = draggingIndex;
		let toIndex = index;

		console.log('from : ' + draggingIndex);
		console.log('to : ' + index);

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
		console.log('drag over');
	}

	console.log(todos);
	return (
		<div onDragOver={(index) => dragOver(index)}>
			{
				todos.map((todo, index) => (
					<div draggable onDragStart = {(e) => dragStart(e, index)} onDrop = {(e) => dragDrop(e, index)} key={todo.id}>
						{todo.isEditing && <div>Editing</div>}
						{!todo.isEditing && <div>{todo.id} - {todo.text} <span onClick={() => removeTodo(todo.id)}>x</span> <span onClick={() => editTodo(todo.id)}>edit</span></div>}
					</div>
				))
			}
		</div>
	);

}

export default TodoItem;