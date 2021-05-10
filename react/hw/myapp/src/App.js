
import {useState} from 'react';

import Users from './components/users/Users';


function App() {

	let [counter, setCounter] = useState(0);
	const addCounter=()=>{
		
		setCounter(++counter);
		console.log(counter)
	};

	const minusCounter=()=>{
		
		setCounter(--counter);
		console.log(counter)
	};
  
  return (
    
      <div>
		 
		 
		 <div> counter is {counter}
<button onClick={minusCounter}>----</button>
<button onClick={addCounter}>++++</button>
		</div>

		<div>
				<Users/>
		</div>



	  </div>


	 
    
  );
  }
export default App;
