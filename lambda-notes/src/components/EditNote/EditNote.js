import React, { Component } from 'react';
import './index.css';

class EditNote extends Component {
    render() {
        return (
            <div className="edit-note-container">
                <div className="edit-note-top-content">
                    <h3 className="content-header">
                        Edit Note:
                    </h3>
                </div>
                <div className="edit-note-form">
                    <input 
                        type="text" 
                        className="edit-note-title"
                        placeholder="Note Title" 
                    />
                    <textarea 
                        className="edit-note-body"
                        placeholder="Note Content"
                        rows="20" 
                    />
                    <a href="#" className="button-link">
                        <div className="left-nav-button create-note-button">Update</div>
                    </a>
                </div>
            </div>
        );
    }
}

export default EditNote;