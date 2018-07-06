import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './index.css';

const mapStateToProps = (state) => {
    return {
        notesArray: state
    }
}

class NotesList extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    componentWillMount() {
        let reversed = Array.from(this.props.notesArray).reverse();
        this.setState({ notesArray: reversed }); 
    }

    generateNotes = (what, where) => {
        return (
            <Link to={`/note/${what._id}`} className="unstyled-link" key={what._id}>
                <div className="note">
                    <div>
                        <h4>{what.title}</h4>
                        <hr></hr>
                        <p>{what.body}</p>
                    </div>
                </div>
            </Link>
        )
    }

    render() {
        console.log('Props inside NotesList:', this.props);
        return (
            <div className="notes-list-container">
                <div><h3 className="content-header">Good day, Miss Austen!</h3></div>
                <div><h3 className="content-header">Your Notes:</h3></div>
                <div className="notes-list">
                    {this.state.notesArray.map(this.generateNotes)}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, {/* Actions Here */})(NotesList);