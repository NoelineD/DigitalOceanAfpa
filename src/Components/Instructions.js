import React, { Component} from 'React';
import logo from './logo.svg';

export default class Instructions extends Component{
    render(){
        return (
            <div class="instructions">
            <img alt="logo" src={logo}/>
            <p>Cliquez sur emoji</p>
            </div>
            )

    }
}