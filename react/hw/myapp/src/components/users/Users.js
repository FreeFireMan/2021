export default function Users() {
    
    const [users, setUsers] = useState([]);

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(value=> value.json())
    .then(value=> {
        setUsers([...value]);
    });
    
    return (
        <div>
            {users.map(value=> <div>{value.name}</div>)}
        </div>
    )
}
