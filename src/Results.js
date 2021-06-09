import Pet from './pet';

const Result = ({pets}) =>{
  return(
      <div className="search">
          {
              !pets.length?
              (<h2>no pets found</h2>):
              (
                pets.map((pet)=>(
                    <Pet name={pet.name}
                     animal={pet.animal} 
                     breed={pet.breed} 
                     key={pet.id}
                     image={pet.images}
                     location={`${pet.city}, ${pet.state}`}
                     id={pet.id}/>

                    //  <Pet
                    //  {..pet}
                    //  key={pet.id}/> 
                    
                    
                    //  we can use this instead
                    //we are using spread operator which spreads the object
                ))
              )
          }
    </div>
  )
}

export default Result;