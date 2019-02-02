import React from 'react'

export function User(props)  {
     return(
         <div className="user">
             <p>User : {props.user}</p> <button onClick={()=>props.steps(props.user)} title="Voir la résolution">Voir résolution</button>
             <button onClick={()=>props.responses(props.user)} disabled={!(props.count && props.count.count!=="0")} title={!(props.count && props.count.count!=="0")?"Aucune réponse":"Voir la réponse"}>Voir réponse</button>
         </div>
     );
 }