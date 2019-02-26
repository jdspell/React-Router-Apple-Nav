import React, {Component} from 'react';

export default class SubNav extends Component {

    render() {
        return(
            <div className="sub-nav">
                {this.props.devicesData["macData"].map((device, index) => {
                    return(
                    <div className="devices" key={index} >
                        <img src={device.icon} alt={device.name} />
                        <p>{device.name}</p>
                    </div>
                    );
                })}
            </div>
        );
    }
}