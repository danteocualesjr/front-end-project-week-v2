import React, { Component } from 'react';
import './index.css';

class CreateNote extends Component {
    render() {
        return (
            <div className="create-note-container">
                <div className="create-note-top-content">
                    <h3 className="content-header">
                        Create New Note:
                    </h3>
                </div>
                <div className="create-note-form">
                    <input 
                        type="text" 
                        className="create-note-title"
                        placeholder="Note Title" 
                    />
                    <textarea 
                        className="create-note-body"
                        placeholder="Note Content"
                        rows="20" 
                    />
                    <a href="#" className="button-link">
                        <div className="left-nav-button create-note-button">Save</div>
                    </a>
                </div>
            </div>
        );
    }
}

export default CreateNote;