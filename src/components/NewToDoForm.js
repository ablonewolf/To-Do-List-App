import React, { useState } from 'react';

function NewToDoForm(props) {
  const [taskName, setTaskName] = useState('');
  const [assignee, setAssignee] = useState('');

  const taskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const assigneeChange = (event) => {
    setAssignee(event.target.value);
  };

  const submitToDo = () => {
    if (taskName !== '' && assignee !== '') {
      props.addTodo(taskName, assignee);
      setTaskName('');
      setAssignee('');
    }
  };

  return (
    <div className='mt-5'>
      <form>
        <div className='mb-3'>
          <label className='form-label'>Task Name</label>
          <input
            onChange={taskNameChange}
            type='text'
            className='form-control'
            value={taskName}
            required
          />
        </div>
        <div>
          <label className='form-label'>Assigned To:</label>
          <textarea
            onChange={assigneeChange}
            className='form-control'
            rows={2}
            value={assignee}
            required></textarea>
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
}

export default NewToDoForm;
