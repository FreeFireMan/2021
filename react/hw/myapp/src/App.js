import User from "./components/user/User";
import {useState} from 'react';




function App() {
	let [users, setUsers]= useState([
		{name: 'vasya', age: 31, status: false},
		{name: 'petya', age: 30, status: true},
		{name: 'kolya', age: 29, status: true},
		{name: 'olya', age: 28, status: false},
		{name: 'max', age: 30, status: true},
		{name: 'anya', age: 31, status: false},
		{name: 'oleg', age: 28, status: false},
		{name: 'andrey', age: 29, status: true},
		{name: 'masha', age: 30, status: true},
		{name: 'olya', age: 31, status: false},
		{name: 'max', age: 31, status: true}
	]);

	let [counter, setCounter] = useState(0);
	const addCounter=()=>{
		
		setCounter(++counter);
		console.log(counter)
	};

	const deleteUser =()=>{
		users.pop();
		console.log(users);
		setUsers([...users])
		
	};

  
  return (
    <div> 
      <div>
		  counter is {counter}
<button onClick={addCounter}>++++</button>


	  </div>
	  
	  
	  <div>{

users.map((user,index)=>
<User 
      key={index}
      age={user.age}
      status={user.status}
      name={user.name}
      

/>


)
    }
	<button onClick={deleteUser}>delete user</button>
	</div>
    </div>
  );
}

export default App;
