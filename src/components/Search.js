import React,  { useState, useRef } from 'react';
import {getAllPhotoByName} from '../services/service'

import { Images } from './Images'

export const Search = () => {

    const [searchPhotos, setSearchPhotos] = useState('')
    const [getResultFotos, setResultFotos] = useState([])

    const formRef = useRef();

    const handleChange = (e) => {
        setSearchPhotos(e.target.value)
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log('serchFoto:', searchPhotos)

        const setPhotos = async () =>{

            const getPhotos = await getAllPhotoByName(searchPhotos)
            console.log('getPhotos', getPhotos)
            setResultFotos(getPhotos)
        }
        setPhotos()
        formRef.current.reset();
    }
    console.log('result', getResultFotos)

    return (
        <div>
            {/* Search input:
            <br/> */}
            <form onSubmit = {handleSubmit} ref = {formRef} >
                <input 
                    name = 'photo'
                    onChange = {handleChange}
                />

                <button 
                    type='submit' 
                >
                    search
                </button>
            
            </form>           
            
{/*             
               {
                   getResultFotos.map(picture =>
                   <img 
                        src = {picture.urls.small}
                        alt = {picture.alt_description}
                        key = {picture.id}
                    />)
               } */}
                
                <Images getResultFotos={getResultFotos} searchPhotos={searchPhotos}/>
            

        </div>
    )
}
