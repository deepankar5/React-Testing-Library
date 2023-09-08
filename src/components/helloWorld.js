import { useState } from "react"

const HelloWorld = () => {
    const [changeText, setChangeText] = useState(false)
    return(
        <div>
            <h1>HelloWorld!</h1>
            <div>
                <p>This is a hello World component</p>
                {changeText ? <p>ChangeText</p> : <p>Not ChangeText</p>}
            </div>
            <button onClick={()=> setChangeText((prevState)=>!prevState)}>ChangeTextButton</button>
        </div>
    )
}

export default HelloWorld