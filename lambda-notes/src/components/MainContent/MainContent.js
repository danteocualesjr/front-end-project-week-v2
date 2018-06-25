import React, { Component } from 'react';
import './index.css';
import NotesList from '../NotesList/NotesList';
import NoteView from '../NoteView/NoteView';

class MainContent extends Component {
    render() {
        return (
            <div className="main-content-container">
                <NoteView />
            </div>
        );
    }
}

export default MainContent;