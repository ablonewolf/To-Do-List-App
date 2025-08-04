import React, {useState} from 'react';

export const NewToDoForm: React.FC<{
	addToDo: Function;
	setShowAddNewTodoForm: Function;
}> = (props) => {
	const [taskName, setTaskName] = useState('');
	const [assignee, setAssignee] = useState('');

	const submitToDo = () => {
		if (taskName !== '' && assignee !== '') {
			props.addToDo(taskName, assignee);
			setTaskName('');
			setAssignee('');
			props.setShowAddNewTodoForm(false);
		}
	};

	return (
		<div className='mt-5'>
			<form>
				<div className='mb-3'>
					<label className='form-label'>Task Name</label>
					<textarea
						onChange={(e) => setTaskName(e.target.value)}
						className='form-control'
						rows={2}
						value={taskName}
						required
					/>
				</div>
				<div>
					<label className='form-label'>Assigned To:</label>
					<input
						onChange={(e) => setAssignee(e.target.value)}
						className='form-control'
						value={assignee}
						required
					/>
				</div>
				<button
					type='button'
					className='btn btn-primary mt-3'
					onClick={submitToDo}>
					Add Todo Item
				</button>
			</form>
		</div>
	);
};
