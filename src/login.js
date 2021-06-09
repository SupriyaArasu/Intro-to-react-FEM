import { useState,useEffect } from "react"

const Login=()=>{
    const [username,setUsername] = useState("name");
    const [designation,setDesignation] = useState("");
    const [password,setPassword] = useState("");
    

    useEffect(()=>{
        reqDesignation();
    },[]) ;

    async function reqDesignation(){
        const res= await fetch(
            `http://dummy.restapiexample.com/api/v1/employees`
        )
        const json = await res.json();
         console.log("json",json.data)
        setDesignation(json.data);
        
    }
    
 
    return(
        <div>
            <form className="search-params"> 
                <label>UserName
                <input
                onChange={(e)=>setUsername(e.target.value)}
                value={username.toLocaleUpperCase()}>
                </input>
                </label>
                <label>Password
                <input
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password.toLocaleUpperCase()}>
                </input>
                </label>
                <label htmlFor="designation">designation
                    <select
                    value={designation}
                    onChange={e=>setDesignation(e.target.value)}
                    onBlur={e=>setDesignation(e.target.value)}>

                        <option/>
                      {/* { designation.map((designation)=>{
                            return <option value={designation.employee_name} key={designation.id}>
                                {designation.employee_name}
                            </option>
    
                       })} */}
                    </select>
                </label>
            </form>
        </div>
    )

}

export default Login;