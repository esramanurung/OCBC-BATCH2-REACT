import React from 'react';

const Button = (props) =>  {
    return(
        <button>{props.name}</button>
    )
}

export default Button

//Cara Ke-2
// export default function(props){
//     return(
//         <button>{props.name}</button>
//     )
// }