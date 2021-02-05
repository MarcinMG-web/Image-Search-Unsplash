import React from 'react'
import { ModalWindow } from './ModalWindow';

export const Images = ({getResultFotos, searchPhotos}) => {


    return (
        <div>
            {/* images */}
            {searchPhotos}
            <br />
            <br />

                <div style = {{width: '75vw',height: '100vh', display: 'flex', flexDirection: 'column'}}>
                    {   getResultFotos.map(picture =>
                            <img 
                                src = {picture.urls.small}
                                alt = {picture.alt_description}
                                key = {picture.id}
                               
                            />)
                    }
                 </div>
                    
        </div>
    )
}
