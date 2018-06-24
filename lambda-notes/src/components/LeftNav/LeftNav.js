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
                    <div className="left-nav-button">View Your Notes</div>
                    <div className="left-nav-button">+ Create New Note</div>
                </div>
            </div>
        )
    }
}

export default LeftNav;