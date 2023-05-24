import {Component} from "react";
import MyErrorMessage from "./errorMessage/ErrorMesage";

export class ErrorBoundery extends Component {
    state = {
        error: false
    }
    static getDerivedStateFromError() {
        return { error: true };
    }
    ComponentDidCatch(error, errorInfo) {
        console.log(errorInfo)
    }

    render(){
        return this.state.error ? <MyErrorMessage/>:this.props.children;
    }
}
export default ErrorBoundery

