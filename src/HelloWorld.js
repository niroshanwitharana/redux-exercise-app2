import React from 'react'

const HelloWorld = ({tech}) => {
    console.log(tech);
    return (
        <div>
            Hello {tech} !!
        </div>
    )
}
export default HelloWorld;