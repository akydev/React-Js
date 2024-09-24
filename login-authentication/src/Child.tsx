import React from 'react';

function Child(props:any){
    console.log("This is called again.");

    return (
        <div>
            Child
        </div>
    )
};

export default React.memo(Child, (pre, current)=>{
    return pre.d.lenght == current.d.length;
});
