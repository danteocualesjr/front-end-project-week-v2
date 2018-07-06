import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class LeftNav extends Component {
    render() {
        return (
            <div className="left-nav-container">
                <div>
                    <h1 className="left-nav-header">DoWrite</h1>
                </div>
                <div className="left-nav-buttons-container">
                    <Link to="/" className="button-link">
                        <div className="left-nav-button">View Your Notes</div>
                    </Link>
                    <Link to="/create" className="button-link">
                        <div className="left-nav-button">+ Write New Note</div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default LeftNav;