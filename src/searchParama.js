import { useState ,useEffect,useContext} from 'react';
import Result from './Results';
import useBreedList from './useBreesList';
import {Link} from "react-router-dom";
import ThemeContext from './theamcontext';


const Animals =["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () =>{
    const [location,setLocation] = useState("");
    const [animal,setAnimal] = useState("");
    const [breed,setBreed] = useState("");
    const [pets,setPets] = useState([]);
    const [breeds] = useBreedList(animal);
    const [theme,setTheme] = useContext(ThemeContext)

    useEffect(()=>{
        requestPets();
    },[]) //eslint-disable-line react-hooks/exhaustive-deps


    //square braces tells when shd we rerun,if norting then it runs everytime after render
    //it becomes infinite loop,so put [] to tell run only once,[animal] update whenever animal updates

    async function requestPets(){
        const res= await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        )
        const json = await res.json();

        setPets(json.pets);
        
    }
    return(
        <div className="search-params">
            <form onSubmit={e=>{
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">location
                <input 
                id="location" 
                onChange={e=>setLocation(e.target.value)} 
                value={location} 
                placeholder="Location"/>
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                      id="animal" 
                      value={animal}
                      onChange={(e)=>setAnimal(e.target.value)}
                      onBlur={(e)=>setAnimal(e.target.value)}
                      >
                       <option/>
                     {/* value="1"
                    disabled>please select animal
                      </option> */}
                       {
                       Animals.map((animal)=>{
                            return <option value={animal} key={animal}>
                                {animal}
                            </option>
    
                       })
                       }   
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                      id="breed" 
                      value={breed}
                      onChange={(e)=>setBreed(e.target.value)}
                      onBlur={(e)=>setBreed(e.target.value)}
                      >
                       <option />
                      {/* value="1"
                      disabled>please select breed</option> */}
                       {
                       breeds.map((breed)=>{
                            return <option value={breed} key={breed}>
                                {breed}
                            </option>
    
                       })
                       }   
                    </select>
                </label>
                <label htmlFor="theme">
                    Theme
                    <select
                    value={theme}
                    onChange={e=>setTheme(e.target.value)}
                    onBlur={e=>setTheme(e.target.value)}>
                         <option value="peru">Peru</option>
                            <option value="darkblue">Dark Blue</option>
                            <option value="chartreuse">Chartreuse</option>
                            <option value="mediumorchid">Medium Orchid</option>
                    </select>
                </label>
                <button style={{backgroundColor:theme}}>Submit</button>
            </form>
          <Result pets={pets}/>
          <Link to='/login'>
          <button>Login</button>
          </Link>
        </div>
    );
};

export default SearchParams;