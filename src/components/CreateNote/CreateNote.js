import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote } from '../../actions';
import './index.css';
import axios from 'axios';

class CreateNote extends Component {
    constructor() {
        super();
        this.state = {
            note: {
                title: "",
                body: "",
            }
        }
    }

    handleSave = () => {
        let craftedNote = { ...this.state.note };
        craftedNote['_id'] = Date.now() + craftedNote.title;
        craftedNote.createdAt = Date.now();
        console.log('My Crafted Note is: ', craftedNote);
        this.props.createNote(craftedNote);
        this.props.history.push('/');

        axios
            .post('https://lambdanotessvr.herokuapp.com/api/createnote', this.state)
            .then(response => {
                // localStorage.setItem('jwt', response.data.token);

                console.log('Signing props', this.props);
                this.props.history.push('/notes')
            })
            .catch(err => console.log('Baaaaad to the bone!'));
    }

    handleChange = (e) => {
        let temp =  { ...this.state.note }
        temp[e.target.name] = e.target.value;
        this.setState({ note: temp });
    }

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
                        name="title"
                        value={this.state.note.title} 
                        onChange={this.handleChange}
                    />
                    <textarea 
                        className="create-note-body"
                        placeholder="Note Content"
                        name="body"
                        value={this.state.note.body}
                        onChange={this.handleChange}
                        rows="20" 
                    />
                    <div 
                        className="left-nav-button create-note-button"
                        onClick={this.handleSave}
                    >
                        Save
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {createNote})(CreateNote);