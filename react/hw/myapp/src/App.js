import User from "./components/user/User";

let users = [
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
];


function App() {
  
  return (
    <div> 
      {

users.map((user,index)=>
<User 
      key={index}
      age={user.age}
      status={user.status}
      name={user.name}
      

/>


)
    }
    </div>
  );
}

export default App;
