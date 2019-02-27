import React, {Component} from 'react';
import Nav from './Nav';
import SubNav from './SubNav';

export default class NavWrapper extends Component {
    constructor(props){
        super(props);
        this.state = {
            ...this.props,
            device: 'macData'
        }
    }

    deviceTypeClick = (e, deviceType) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            device: deviceType
        });
    }


    render() {
        const deviceData = this.state.devicesData[this.state.device];
        return(
            <div className="nav-wrapper">
                <Nav deviceTypeClick={this.deviceTypeClick} />
                <SubNav device={this.state.device} deviceTypeData={deviceData}/>
            </div>
        );
    }
}