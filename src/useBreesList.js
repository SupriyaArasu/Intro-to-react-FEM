import {useState , useEffect} from 'react';
 const localCache={};

 export default function useBreedList(animal){
     const [breedList,setBreadList] = useState([]);
     const [status,setStatus] = useState('unloaded');

     useEffect(()=>{
        if(!animal){
            setBreadList([]);
        }else if(localCache[animal]){
            setBreadList(localCache[animal]);
        }else{
            requestBreadList();
        }
        async function requestBreadList(){
           setBreadList([]);
           setStatus('loading');

           const res = await fetch(
            `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
          );
          const json = await res.json();
          localCache[animal] = json.breeds || [];
           setBreadList(localCache[animal]);
           setStatus("loaded");
        }
     },[animal]);
     return [breedList,status];
 }