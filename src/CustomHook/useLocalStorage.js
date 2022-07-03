import React, {useState, useEffect} from 'react';

export const useLocalStorage = () => {

	const [todoList, setTodoList] = useState(
		JSON.parse(localStorage.getItem('todoList')) || []
	)

	useEffect(() => {
		localStorage.setItem('todoList', JSON.stringify(todoList));
	}, [todoList]);

	return [todoList, setTodoList];
}