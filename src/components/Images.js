import React from 'react';

import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';

import styled from 'styled-components';

const Img = styled.img`
  margin-bottom: 1rem;
  display: flex;
  flex: 100%;
  margin-top: 1rem;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const WrapperImages = styled.section`
  column-count: 3;

  @media (min-width: 768px) {
    .form {
      grid-template-columns: auto 1fr auto;
      grid-gap: 1rem;
      align-items: center;
    }
    .input {
      margin-bottom: 0;
    }
  }

  @media only screen and (max-width: 600px) {
    .card-list {
      column-count: 1;
    }
  }
`;

const SearchPhotos = styled.div`
  font-family: sans-serif;
  font-size: 35px;
  color: white;
  display: flex;
  flex-direction: row;
`;

export const Images = ({
  getResultFotos,
  searchPhotos,
  displaySearchPhotos,
}) => {
  return (
    <div>
      {displaySearchPhotos && <SearchPhotos> {searchPhotos} </SearchPhotos>}

      <WrapperImages>
        <SimpleReactLightbox>
          <SRLWrapper>
            {getResultFotos.map((picture) => (
              <Img
                src={picture.urls.small}
                alt={`User name: ${picture.user.name}
                        Location: ${picture.user.location}`}
                key={picture.id}
              />
            ))}
          </SRLWrapper>
        </SimpleReactLightbox>
      </WrapperImages>
    </div>
  );
};
