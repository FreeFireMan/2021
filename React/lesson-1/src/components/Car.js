



function Car(props) {
    let {model,description,power,xxx}= props;
    console.log(props);
    return (
        <div>
            <h2>{model}</h2>
            <p>{description}</p>
            <p>{power}</p>
            <p>{xxx||'xxxxxxxxx'}</p>
        </div>
    );
}

export default Car;