import React, {useState} from 'react';

function TodoForm(props) {

	const [input, setInput] = useState('');

	const handleChange = (e) => {
		setInput(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

 		props.onSub({
 			id: Math.floor(Math.random() * 100000),
 			text: input,
 			isEditing: false,
 			completed: false
 		})

		setInput('');
	}

	return(

		<form className='todo-form' onSubmit={handleSubmit}>
			<input type='text' placeholder='Add a todo task' value={input} onChange={handleChange} name='todo-task' className='todo-input'/>
			<button className='todo-button'>Add task</button>
		</form>

	)

}


export default TodoForm;