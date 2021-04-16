import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = "";
const background = <img 
                    className='background'
                    alt='ocean'
                    src='/images/ocean.jpg'
                    />

const images = [];
/* Loop over the imported animals object and push all the animals 
  inside the images array */
for (const animal in animals){
  images.push(
      /* aria-label can't be use in JSX, we need to use camelCase instead, className need to be used because class is a reserver JS keyword*/
    <img
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      ariaLabel={animal}
      role='button'
    />
    )
}

// Multiple line variable, parenthesis need to be used. 
const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    {background}
    <div className="animals">
      {/* Display the array of images */}
      {images}
    </div>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById('root'));
