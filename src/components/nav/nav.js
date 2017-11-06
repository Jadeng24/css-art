import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
export default class Nav extends Component {

    render() {
        return (
            <div className='Nav'>
                <div  className='navContent'>
                <Link to='/'>Home</Link>
                <Link to='/art1'>Art 1</Link>
                <Link to='/art2'>Art 2</Link>
                <Link to='/art3'>Art 3</Link>
                </div>
                <div className='navContent'>
                    CSS ART
                </div>
                <div className='navContent'>
                    
                </div>
            </div>
        )
    }

}
