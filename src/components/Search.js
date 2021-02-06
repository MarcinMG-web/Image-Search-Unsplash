import React,  { useState, useEffect } from 'react';
import { getAllPhotoByName } from '../services/service'

import InfiniteScroll from 'react-infinite-scroll-component';
import { Images } from './Images'

import styled from 'styled-components'

const Header = styled.header `
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`;

const H1 = styled.h1 `
  font-family: 'Oswald', sans-serif;
  margin-bottom: 1em;
`;

const Input = styled.input`
  height: 2.5rem;
  width: 50rem;
  margin-top: 1em;
  outline: none;
  text-indent: 1em;
  font-size: 1em;

  ::placeholder {
    font-size: .8em;
  }
`;

const Button = styled.button`
  height: 2.5rem;
  padding: 0 1em;
  outline: none;
  cursor: pointer;
  background: #222;
  border: none;
  color: #fff;
  font-size: 1em;
`;

export const Search = () => {

    const [searchPhotos, setSearchPhotos] = useState('')
    const [getResultFotos, setResultFotos] = useState([])
    const [page, setPage] = useState(0)

    const [displaySearchPhotos, setDisplaySearchPhotos] = useState(false)

    const handleChange = (e) => {
        setSearchPhotos(e.target.value)
    }

    useEffect(() => {
        setPhotos();
    }, [])

    const setPhotos = async () => {

        const getPhotos = await getAllPhotoByName(page,searchPhotos)
        setResultFotos([...getResultFotos, ...getPhotos])
        setPage(page + 1);

    }

    const handleSubmit = (e) => {

        e.preventDefault();
        const clearArrResultFotos = getResultFotos.splice(0, getResultFotos.length)
        setResultFotos(clearArrResultFotos, setPhotos())
        
        if (displaySearchPhotos === false){

            setDisplaySearchPhotos(!displaySearchPhotos)
        }
    }

    return (
        <Header>

            {/* Search input: */}
            
            <H1>Unsplash</H1>
                <p>The internet’s source of freely usable images.</p>
                <p>Powered by creators everywhere.</p>


            <form onSubmit = {handleSubmit}  >
                <Input 
                    name = 'photo'
                    onChange = {handleChange}
                    placeholder = 'Search ...'
                />

                <Button 
                    type='submit' 
                >
                    Search
                </Button>
            
            </form>           
            
            <InfiniteScroll
                dataLength = {getResultFotos.length}
                next={setPhotos}
                hasMore={true}
                >
                    <Images getResultFotos={getResultFotos} searchPhotos={searchPhotos}
                    displaySearchPhotos = {displaySearchPhotos}/ >
                    
            </InfiniteScroll>
        </Header>
    )
}
