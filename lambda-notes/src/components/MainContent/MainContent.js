import React, { Component } from 'react';
import './index.css';
import NotesList from '../NotesList/NotesList';

class MainContent extends Component {
    render() {
        return (
            <div className="main-content-container">
                <NotesList />
            </div>
        );
    }
}

export default MainContent;