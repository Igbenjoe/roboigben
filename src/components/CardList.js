import React from 'react';
import Card from './Card';


// const CardList = ({robots}) => {
//     const CardComponent = robots.map((user, i) => {
//         return <Card key={i} username={robots[i].username}id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
//     })
//     return(
//     <div>
//         {CardComponent}
//     </div>
//     );
// }



// export default CardList;


// OR we can return all the items in a new line to make it neater.
// const CardList = ({robots}) => {
//     const CardComponent = robots.map((user, i) => {
//         return <Card 
//         key={i} 
//         username={robots[i].username}
//         id={robots[i].id} 
//         name={robots[i].name} 
//         email={robots[i].email}/>
//     })
//     return(
//     <div>
//         {CardComponent}
//     </div>
//     );
// }
// export default CardList;

// OR again, we can remove the const CardComponent and wrap all in curly braces in the div housing {CardComponent}.
const CardList = ({robots}) => {
    return(
        <div>
            {
                robots.map((user, i) => {
                    return <Card 
                    key={i} 
                    username={robots[i].username}
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}/>
                })
            }
        </div>
    );
}
export default CardList;
