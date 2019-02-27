import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {

    render() {
        return(
            <nav>
                <Link to="/" >Mac</Link>
                <Link to="/ipad" onClick={e => {this.props.deviceTypeClick(e, "ipadData")} }>iPad</Link>
                <Link to="/iphone" onClick={e => {this.props.deviceTypeClick(e, "iphoneData")} }>iPhone</Link>
                <Link to="/watch" onClick={e => {this.props.deviceTypeClick(e, "watchData")} }>Watch</Link>
                <Link to="/tv" onClick={e => {this.props.deviceTypeClick(e, "tvData")} }>TV</Link>
                <Link to="/music" onClick={e => {this.props.deviceTypeClick(e, "musicData")} }>Music</Link>
            </nav>
        );
    }
}