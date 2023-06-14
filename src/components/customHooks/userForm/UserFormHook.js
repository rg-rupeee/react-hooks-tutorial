import useInput from './hooks/useInput';

function UserFormHook() {
  const [firstName, bindFirstName, resetFirstName] = useInput('');
  const [lastName, bindLastName, resetLastName] = useInput('');

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>FirstName</label>
          <input {...bindFirstName} type='text'></input>
        </div>
        <div>
          <label>LastName</label>
          <input {...bindLastName} type='text'></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
export default UserFormHook;
