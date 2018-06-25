import React, { Component } from 'react';
import './index.css';

class LeftNav extends Component {
    render() {
        return (
            <div className="left-nav-container">
                <div>
                    <h1 className="left-nav-header">Lambda Notes</h1>
                </div>
                <div className="left-nav-buttons-container">
                    <a href="#" className="button-link">
                        <div className="left-nav-button">View Your Notes</div>
                    </a>
                    <a href="#" className="button-link">
                        <div className="left-nav-button">+ Create New Note</div>
                    </a>
                </div>
            </div>
        )
    }
}

export default LeftNav;