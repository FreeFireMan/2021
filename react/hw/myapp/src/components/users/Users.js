import {useEffect, useState} from 'react';
import User from '../user/User';
import '../users/Users.css';

export default function Users() {
    
    const [users, setUsers] = useState([]);
    const [singleUser, setSingleUser] = useState()

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
    .then(value=> value.json())
    .then(value=> {
        setUsers([...value]);
        });
    },[]);
    
const search = (id)=>{
    let findedUser = users.find(value=>value.id===id);
    console.log(findedUser);
    setSingleUser(findedUser)
};

    return (
        <div className={'wrap'}>

            <div className={'users-box'}>
            {users.map(value=> <User key={value.id} item={value} search={search}/>)}
            </div>
        
            <div className={'user-description-box'}>
            { singleUser&& <h2>{singleUser.id}-{singleUser.username}</h2>


            }

            </div>

        </div>
    )
}
