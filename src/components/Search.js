import React,  { useState, useEffect, useRef } from 'react';
import { getAllPhotoByName } from '../services/service'

import InfiniteScroll from 'react-infinite-scroll-component';
import { Images } from './Images'

import words from './words'
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
  width: 25rem;
  margin-top: 1em;
  outline: none;
  text-indent: 1em;
  font-size: 1em;
  box-sizing: border-box;

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

const Ul = styled.ul `
  list-style-type:none;
`;

const Li = styled.li `
  height: 2.5rem;
  padding: 10px 5px;
  outline: none;
  cursor: pointer;
  background: #222;
  border: none;
  color: #fff;
  font-size: 1em;
  list-style-type:none;
  max-width: 30rem;
  margin-left:auto;
  margin-right:auto;
`;

export const Search = () => {

    const [searchPhotos, setSearchPhotos] = useState('')
    const [getResultFotos, setResultFotos] = useState([])
    const [page, setPage] = useState(0)

    const [displaySearchPhotos, setDisplaySearchPhotos] = useState(false)

    const wrapperRef = useRef(null);
    const [items] = useState([...words])
  
    const [suggestions, setSuggestions] = useState([])
    const [displaySugestion, setDisplaySugestion] = useState(false)

    useEffect(() => {
        setPhotos();
    }, [])
  
    const setPhotos = async () => {
  
        const getPhotos = await getAllPhotoByName(page,searchPhotos)
        setResultFotos([...getResultFotos, ...getPhotos])
        setPage(page + 1);
      }

      useEffect(() => {
          window.addEventListener("mousedown", handleClickOutside);
          return () => {
            window.removeEventListener("mousedown", handleClickOutside);
          };
      });
    
      const handleClickOutside = event => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
          setDisplaySugestion(false);
        }
      };


    const handleChange = (e) => {
        setSearchPhotos(e.target.value)

        const value = searchPhotos.toLowerCase()

        if(value.length > 0){
          const regex = new RegExp(`^${value}`)
          
          setSuggestions(items.sort().filter(v => regex.test(v)))
          setDisplaySugestion(true)
        } 

      }


    const renderSuggestion = () => {
      if (suggestions.length === 0) {
        return displaySugestion && 
              <Ul>
                   <Li>Brak</Li>
              </Ul>
      }
      
      return (
        displaySugestion &&
                <Ul>
                {
                    suggestions.map(item => 
                    <Li 
                      key = {item + 1}
                      onClick = {
                            () => sugestionSelected(item)
                      }
                    >{item}</Li>)
                }
                </Ul>
               
              )
  }
  
  const sugestionSelected = (sugestion) => {
      setSearchPhotos(sugestion)

      const clearArrResultFotos = getResultFotos.splice(0, getResultFotos.length)
      setResultFotos(clearArrResultFotos, setPhotos())

      setSuggestions([])
      setDisplaySugestion(false)
      setDisplaySearchPhotos(true)
  }

  const handleSubmit = (e) => {

        e.preventDefault();
        const clearArrResultFotos = getResultFotos.splice(0, getResultFotos.length)
        setResultFotos(clearArrResultFotos, setPhotos())
        
        if (displaySearchPhotos === false){

            setDisplaySearchPhotos(!displaySearchPhotos)
        }
        setDisplaySugestion(false)
    }


    return (
        <Header>
                       
            <H1>Unsplash</H1>
                <p>The internet’s source of freely usable images.</p>
                <p>Powered by creators everywhere.</p>


            <form onSubmit = { handleSubmit } ref = { wrapperRef } autoComplete = "off" >
                <Input 
                    name = 'photo'
                    onChange = {handleChange}
                    placeholder = 'Search ...'
                    value = {searchPhotos}
                />

                <Button 
                    type='submit' 
                >
                    Search
                </Button>

              {renderSuggestion()}
               
           
            </form>           
            
            <InfiniteScroll
                dataLength = {getResultFotos.length}
                next={setPhotos}
                hasMore={true}
                endMessage={
                      <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                      </p>
  }               >
                    <Images getResultFotos={getResultFotos} searchPhotos={searchPhotos}
                    displaySearchPhotos = {displaySearchPhotos}/>
                    
            </InfiniteScroll>
        </Header>
    )
}
