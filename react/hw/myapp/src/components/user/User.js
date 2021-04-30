export default function User(props){
let {age, status, name} = props;

    return(
        <div>
            <p>{name} {status.toString()}</p>
            <div><b>{age}</b></div>
            


            
            
        </div>

    )
}