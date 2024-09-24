import React, { useState } from "react";
import { IReadmore } from "./interface/IReadmore";

export default function ReadMore(props:IReadmore){

    const[isReadMore, setReadMore] = useState(true);

    const p = React.useMemo(()=>{
        console.log("D");

        return props.props.slice(0,20).concat('...Readmore!');
    },[props.props])

    return (
        <div onClick={()=>{
            setReadMore(!isReadMore);
        }}>

            {isReadMore? p: props.props}

        </div>
    )
}
