import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {

    render() {
        return(
            <nav>
                <Link to="/" >Mac</Link>
                {/* <Link to="/" onClick={} >iPad</Link>
                <Link to="/" onClick={} >iPhone</Link>
                <Link to="/" onClick={} >Watch</Link>
                <Link to="/" onClick={} >TV</Link>
                <Link to="/" onClick={} >Music</Link>
                <Link to="/" onClick={} >Support</Link> */}
            </nav>
        );
    }
}