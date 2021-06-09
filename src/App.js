import ReactDOM from "react-dom";
import {StrictMode, useState} from 'react';
import Details from './details';
import Login from './login';
import SearchParams from './searchParama';
import { BrowserRouter as Router,Route,Switch,Link } from "react-router-dom";
import ThemeContext from "./theamcontext";

const App =()=>{
  const themeHook = useState("darkblue");

  return(
    <ThemeContext.Provider value={themeHook}>
      {/* context uses propdrilling, we can pass props from parent to child 
      --> Providers can be nested to override values deeper within the tree.*/}
    <div>
        <Router>
          <header>
          <Link to="/">
          <h1 id="my-element">Adopt me!</h1>
          </Link>
          </header>
        <Switch>
        <Route path="/details/:id"> 
         {/* Route matches all paths like /,/details from path ie left to right
        to stop this behaviour and make it match the single path use switch  */}
           <Details />
          {/* <Details theme={themeHook}/> 
          themeHook can be passed to children components of details */}
        </Route>
        <Route path='/login'>
            <Login/>
        </Route>
        <Route path='/'>
            <SearchParams/>
        </Route>
        </Switch>
      </Router>
    </div>
  </ThemeContext.Provider>
  )
}

// const App = () => {
//   return React.createElement("div", {}, [
//     //array is optional,we can remove it also
//     React.createElement(
//       "h1",
//       { id: "my-element", className: "kkk" },
//       "Adopt Me!"
//     ),
//     React.createElement(Pet, {
//       name: "lunaaaa",
//       animal: "dog",
//       breed: "havanese",
//     }),
//     React.createElement(Pet, {
//       name: "petter",
//       animal: "dog",
//       breed: "labourdog",
//     }),
//     React.createElement(Pet, { name: "jonny", animal: "dog", breed: "pug" }),
//     ...[1, 2, 3, 4].map((item) => React.createElement("h2", {}, item)), //"..." is used to say this array must be concatinated with parent array
//   ]);
// };

ReactDOM.render(<StrictMode><App/></StrictMode>, document.getElementById("root"));
//strict is for highliting potential problems in app
// it do not render ui , it activates check and warnings for its decendants
//checks indev mode only,do not impact production build