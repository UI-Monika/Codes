import React from "react";
import Card from "../components/cards";
import sdata from "../components/Sdata";

const Amazon = () =>{
    return(
        <Card
            key={sdata[1].id}
            imgsrc={sdata[1].imgsrc}
            title={sdata[1].title}
            sname={sdata[1].sname}
            links={sdata[1].links} /> 
          
          );
}

export default Amazon;