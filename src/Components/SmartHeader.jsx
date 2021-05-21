import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class SmartHeader extends Component {
    render() {
        return (
            <div className="outer">
                
            <div className="header">
                <Link to='/'><h2>by character</h2> </Link>
                <Link to='/byanime'><h2>by anime</h2> </Link>
                <Link to='/music'><h2>anime songs</h2></Link>
            </div>
            </div>
        );
    }
}

export default SmartHeader;