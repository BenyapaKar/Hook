// import React from "react";
// class Hello extends React.Component {
//     state = {msg: "Hi World!"}

//     onClick = () => {
//         if (this.state.msg === "Hi World!"){
//             this.setState({msg: "Hello Starnger"})
//         }else{
//             this.setState({msg: "Hi World!"})
//         }
//     }

//     render(){
//         return(
//             <>
//                 <h1>{this.state.msg}</h1>
//                 <button onClick={this.onClick}>click me</button>
//             </>
//         );
//     }
// }

// Hook

import React, { useState } from "react";
function Hello ({initimsg="Hi World!"}) {
    
    const [msg,setMsg] = useState(initimsg);

    const onClick = () => {
        if (msg === "Hi World!"){
            setMsg("Hello Starnger")
        }else{
            setMsg("Hi World!")
        }
    }

    return(
                <>
                    <h1>{this.state.msg}</h1>
                    <button onClick={()=>onClick()}>click me</button>
                </>
        );

}

export default Hello;