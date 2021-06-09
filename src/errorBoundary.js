// mostly took this from react docs

import {Component } from 'react';
import { Link ,Redirect} from 'react-router-dom';

class ErrorBoundary extends Component{
   state = {hasError:false}

    static getDerivedStateFromError(){
            return {hasError:true,redirect:false}
    }

    componentDidCatch(error,info){
        // I log this Sentry, Azure Monitor,New Relic,TrackJS
        console.error("ErrorBoundary caught an error",error,info);
        setTimeout(() => this.setState({ redirect: true }), 5000);

    }

    render(){
        if (this.state.redirect) {
            return <Redirect to="/" />;
          } else if(this.state.hasError){
            return(
                <h2>This listing has an error.<Link to="/">Click here</Link> to go back to the home page or wait few seconds</h2>
            )
        }
        return this.props.children;
    }
}
export default ErrorBoundary;

// this is an higher order component which adds functionality but not ui to the parent