import React from 'react'

export const ModalWindow = ({src,alt,key}) => {
    console.log(src, alt, key)
    return (
        <div>
            <img 
                src = {src}
                alt = {alt}
                key = {key}
            />
        </div>
    )
}
