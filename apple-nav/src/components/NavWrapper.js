import React, {Component} from 'react';
import Nav from './Nav';
import SubNav from './SubNav';

export default class NavWrapper extends Component {
    constructor(props){
        super(props);
        this.state = {
            ...this.props,
            device: ''
        }
    }


    render() {
        return(
            <div className="nav-wrapper">
                <Nav />
                <SubNav devicesData={this.state.devicesData}/>
            </div>
        );
    }
}