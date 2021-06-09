import {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Carousel from './corosel';
import ErrorBoundary from './errorBoundary';
import ThemeContext from './theamcontext';
import Modal from './modal';

class Details extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         loading:true
    //     };
    // }                         we can remove this and add below line using babel transform and babelrc

      state={loading:true ,showModal:false}

        async componentDidMount(){
                const res=await fetch(
                    `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
                );
                const json =await res.json();
                // this.setState({loading:false,name:json.pets[0].name})
            
                this.setState(
                Object.assign(
                    {loading:false,},
                    json.pets[0]
                )
            );
    }
    
    toggleModal = () => this.setState({showModal:!this.state.showModal})
    adopt = () => (window.location = "http://bit.ly/pet-adopt");
    
    render(){

      // const value =this.context;
      // console.log("value",value)
      // anotherway -->reading contexttype in class components

        if(this.state.loading){
            return<h2>loading....</h2>
        }
        const { animal, breed, city,images, state,description, name}= this.state;
       
        // throw new Error("lol it break");

        return(
            <div className="details">
                <Carousel images={images}/>
              <h1>{name}</h1>
              <h2>{`${animal} - ${breed} - ${city} , ${state}`}</h2> 
              {/* template string */}
              <ThemeContext.Consumer>
                {
                  ([theme])=>(
                    <button onClick={this.toggleModal}
                    style={{backgroundColor:theme}}>Adopt {name}</button>  
                    // returns a React node
                  )
                }
              </ThemeContext.Consumer> 
              {/* for class components we use ThemeContext.Consumer to pass theme */}
              <p>{description}</p>
              {
              this.state.showModal?(
                <Modal>
                  <div>
                    <h1>
                      would you like to adopt {name}
                    </h1>
                      <div className="buttons">
                        <button onClick={this.adopt}>Yes</button>
                        <button onClick={this.toggleModal}>No</button>
                       </div>
                  </div>
                </Modal>
              ):null}
            </div>
        );
    }
}

// Details.contextType = ThemeContext;
// anotherway -->reading contexttype in class components

const DetailsWithRouter = withRouter(Details);

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DetailsWithRouter {...props} />
    </ErrorBoundary>
  );
}

// by using with router all the route info is passed to detail component and we can fetch this.props.match from it