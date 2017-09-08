import React, { Component } from 'react';
import './Shape.css';
import '../font-awesome/css/font-awesome.min.css';

export default class Shape extends Component {

    render() {

        return(
            <div className='shape'>
                <i className={this.props.type === this.props.inFocus ? this.props.type + ' blue' : this.props.type} aria-hidden="true" onClick={ (event) => this.props.clickFunction(event.target.className) }></i>
            </div>
        )
    }
}