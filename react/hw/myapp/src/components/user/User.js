export default function User({item}){


    return(
        <div>
           <h1>{item.id} - {item.name} - {item.age}</h1>
            <div>
                <b>city: {item.address.city} </b><br></br>
                street: {item.address.street}<br></br>
                numberOfRoom#: - {item.address.number}<br></br>
            </div>
            
            
        </div>

    )
}