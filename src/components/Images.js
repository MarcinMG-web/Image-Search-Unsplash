import React from 'react'
import { ModalWindow } from './ModalWindow';

import styled from 'styled-components'

const Img = styled.img `
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const WrapperImages = styled.section `
    max-width: 70rem;
    margin: 4rem auto;
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(3, 1fr); 
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows:300px;
`;

const SearchPhotos = styled.div `
   font-family: sans-serif;
   font-size: 35px;
   color: white;
   display: flex;
   flex-direction:row;

`;

export const Images = ({
        getResultFotos,
        searchPhotos,
        displaySearchPhotos
    }) => {

        // console.log('searchPhotos', searchPhotos)
    return (
        <div>
           
            { displaySearchPhotos && <SearchPhotos> {searchPhotos} </SearchPhotos> }

            {/* images */}
                <>
                    <WrapperImages >
                        {getResultFotos.map(picture =>
                            <Img 
                                src = {picture.urls.small}
                                alt = {picture.alt_description}
                                key = {picture.id}
                                    
                                />
                            )}
                    </WrapperImages>
                 </> 
        </div>
    )
}
