import React from "react";
import Card from "../components/cards";
import sdata from "../components/Sdata";

const Nextflix1 = () =>{
    return(
        <Card
            key={sdata[0].id}
            imgsrc={sdata[0].imgsrc}
            title={sdata[0].title}
            sname={sdata[0].sname}
            links={sdata[0].links} /> 
          
          );
}

export default Nextflix;