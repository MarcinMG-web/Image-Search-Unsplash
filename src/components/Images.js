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
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 300px;
 `;

export const Images = ({getResultFotos, searchPhotos}) => {

    return (
        <div>
            <br />
            {searchPhotos}

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
