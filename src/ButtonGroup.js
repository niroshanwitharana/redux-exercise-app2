import React from 'react'
import { store } from './store';
import { setTechnology } from "./actions";

export default function ButtonGroup({technologies}) {
    function dispatchBtnAction(e){
        const tech= e.target.dataset.tech
        store.dispatch(setTechnology(tech));
    }
    return (
        <div>
            {technologies.map((tec, i)=>(
                <button
                data-tech={tec}
                key={`btn-${i}`}
                className="hello-btn"
                onClick={dispatchBtnAction}
                >
                    {tec}
                </button>
            ))}
        </div>
    )
}
