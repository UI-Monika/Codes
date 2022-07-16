import React from 'react';
import Nextflix from '../components/Netflix';
import Amazon from './Amazon';


const favSeries = 'netflix';

// const FavS = () =>{
// if( favSeries === "netflix"){
//    return <Nextflix/>;
// }
// else {
//     return <Amazon/>;
// }

// }
const App = () =>{
return(
 <>
 <div className='container'>
    {/* <FavS /> */}
{( favSeries === "netflix") ? <Nextflix/> : <Amazon/> }
</div>
 </>
 );
}

export default App;