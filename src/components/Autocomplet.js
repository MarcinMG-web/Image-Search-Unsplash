import React,  { useState, useEffect, useRef } from 'react';


import words from './words'
import styled from 'styled-components'

const Ul = styled.ul `
  /* height: 2.5rem;
  padding: 0 1em;
  outline: none; */
  /* cursor: pointer; */
  /* background: #222;
  border: none;
  color: #fff;
  font-size: 1em; */
  list-style-type:none;
  margin:0;
  padding: 0;
  width: 25 rem;

  ::before {
    content: ''
  }
`;

const Li = styled.li `
  height: 2.5rem;
  width: 25 rem;
  padding: 10px 5px;
  outline: none;
  cursor: pointer;
  background: #222;
  border: none;
  color: #fff;
  font-size: 1em;
  list-style-type:none;


`;


export const Autocomplet = ({
        searchPhotos,
        setSearchPhotos,
        getResultFotos,
        setPhotos,
        setResultFotos,
        setDisplaySearchPhotos
    }) => {
  
    console.log('searchPhotos in autocompleet:', searchPhotos)

   const [items] = useState([...words])
   const [suggestions, setSuggestions] = useState([])
   const [displaySugestion, setDisplaySugestion] = useState(false)
    
   const wrapperRef = useRef(null);
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
                    suggestions.map(item => <Li 
                      key = {item + 1}
                      onClick = {
                          () => sugestionSelected(item)
                        }
                    >{item}</Li>)
                }
                </Ul>
               
              )
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



    const sugestionSelected = (sugestion) => {
        setSearchPhotos(sugestion)

        const clearArrResultFotos = getResultFotos.splice(0, getResultFotos.length)
        setResultFotos(clearArrResultFotos, setPhotos())

        setSuggestions([])
        setDisplaySugestion(false)
        setDisplaySearchPhotos(true)
    }

    return (
        <div>
            {/* Autocomplet input */}
            
            { renderSuggestion  }
          
        </div>
    )
}
