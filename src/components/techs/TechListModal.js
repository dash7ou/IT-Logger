import React, { useState, useEffect } from 'react';
import TechItem from "./TechItem";

const TechListModal = () => {
    const [ techs , setTeches ] = useState([]);
    const [ loading , setLoding ] = useState(false);


    useEffect(()=>{
        getTechs();
        // eslint-disable-next-line
    }, [])
    const getTechs = async ()=>{
        setLoding(true);
        const res = await fetch("/techs");
        const data = await res.json();


        setTeches(data);
        setLoding(false)
    }

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4> Technician List </h4>
                <ul className="collection">
                    {!loading &&  techs.map(tech=>(
                        <TechItem key={tech.id} tech={tech} />
                    ))}
                </ul>
            </div>
        </div>
    )
}


export { TechListModal as default }