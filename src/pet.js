import React from "react";
import {Link} from "react-router-dom";

// const Pet = (props) => {
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, props.name),
//       React.createElement("h1", {}, props.breed),
//       React.createElement("h1", {}, props.animal),
//     ]);
//   };

  const Pet = ({name,animal,breed,image,location,id}) =>{
    
    let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
    if (image.length) {
      hero = image[0];
    }

    return(
          <Link to={`/details/${id}`} className="pet">
            <div className="image-container">
            <img src={hero} alt={name} />
            </div>
            <div className="info">
                <h1>{name}</h1>
                <h2>{`${animal} — ${breed} — ${location}`}</h2>
            </div>
          </Link>
      )
  }
  export default Pet;