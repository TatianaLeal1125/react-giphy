import React from 'react';
import Features from './Features';

function Gif(props){
    return (
        <div className="container">
            <div className="row text-center">
                { props.data.map((gif,i)=>{
                    return <Features {...gif} key={gif.username+i} />
                })}
            </div>
        </div>
    );         
}

export default Gif;