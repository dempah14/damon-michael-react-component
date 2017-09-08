import React, { Component } from 'react';
import './Shape.css';
import '../font-awesome/css/font-awesome.min.css';

export default class Shape extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isActive: false
        }
    }

    componentWillMount() {
        var isTrue = false;
        this.props.type === this.props.inFocus ? isTrue = true : isTrue = false;

        this.setState({ isActive: isTrue });
    }

    render() {

        return(
            <div className='shape'>
                <i className={this.state.isActive ? this.props.type + ' blue' : this.props.type} aria-hidden="true" onClick={ (event) => this.props.clickFunction(event.target.className) }></i>
            </div>
        )
    }
}