import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class NotesList extends Component {
    constructor() {
        super()
        this.state = {
            notesArray: [
                {
                    _id: 'bsdbsjbfvjnvjvwdvnsdva',
                    title: 'First Note',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero volutpat sed cras ornare arcu dui. Egestas congue quisque egestas diam in arcu. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Nam at lectus urna duis convallis convallis. Mauris pellentesque pulvinar pellentesque habitant. Diam maecenas sed enim ut sem viverra aliquet eget. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Aliquet enim tortor at auctor urna nunc id cursus. Mattis nunc sed blandit libero volutpat. Non enim praesent elementum facilisis leo vel fringilla. Consectetur a erat nam at lectus urna duis convallis convallis. Posuere ac ut consequat semper viverra nam libero justo laoreet. Auctor augue mauris augue neque.',
                    createdAt: 1529884185034,
                },
                {
                    _id: 'bsdbdfgndfvsrwdvnsdva',
                    title: 'Second Note',
                    body: 'Wutttt sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero volutpat sed cras ornare arcu dui. Egestas congue quisque egestas diam in arcu. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Nam at lectus urna duis convallis convallis. Mauris pellentesque pulvinar pellentesque habitant. Diam maecenas sed enim ut sem viverra aliquet eget. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Aliquet enim tortor at auctor urna nunc id cursus. Mattis nunc sed blandit libero volutpat. Non enim praesent elementum facilisis leo vel fringilla. Consectetur a erat nam at lectus urna duis convallis convallis. Posuere ac ut consequat semper viverra nam libero justo laoreet. Auctor augue mauris augue neque.',
                    createdAt: 1529884185101,
                },
                {
                    _id: '3223vghegetgndfvsrwdvnsdva',
                    title: 'Third Note',
                    body: 'Hooooo? sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero volutpat sed cras ornare arcu dui. Egestas congue quisque egestas diam in arcu. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Nam at lectus urna duis convallis convallis. Mauris pellentesque pulvinar pellentesque habitant. Diam maecenas sed enim ut sem viverra aliquet eget. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Aliquet enim tortor at auctor urna nunc id cursus. Mattis nunc sed blandit libero volutpat. Non enim praesent elementum facilisis leo vel fringilla. Consectetur a erat nam at lectus urna duis convallis convallis. Posuere ac ut consequat semper viverra nam libero justo laoreet. Auctor augue mauris augue neque.',
                    createdAt: 1529884185201,
                },
                {
                    _id: '3223vghegetbefv21234rwdvnsdva',
                    title: 'Fourth Note',
                    body: 'Ahhh hahaha? sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero volutpat sed cras ornare arcu dui. Egestas congue quisque egestas diam in arcu. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Nam at lectus urna duis convallis convallis. Mauris pellentesque pulvinar pellentesque habitant. Diam maecenas sed enim ut sem viverra aliquet eget. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Aliquet enim tortor at auctor urna nunc id cursus. Mattis nunc sed blandit libero volutpat. Non enim praesent elementum facilisis leo vel fringilla. Consectetur a erat nam at lectus urna duis convallis convallis. Posuere ac ut consequat semper viverra nam libero justo laoreet. Auctor augue mauris augue neque.',
                    createdAt: 1529884185201,
                },
                {
                    _id: 'wdfrefwdvrv21234rwdvnsdva',
                    title: 'Fifth Note',
                    body: 'Fooo barrrr fooo sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero volutpat sed cras ornare arcu dui. Egestas congue quisque egestas diam in arcu. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Nam at lectus urna duis convallis convallis. Mauris pellentesque pulvinar pellentesque habitant. Diam maecenas sed enim ut sem viverra aliquet eget. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Aliquet enim tortor at auctor urna nunc id cursus. Mattis nunc sed blandit libero volutpat. Non enim praesent elementum facilisis leo vel fringilla. Consectetur a erat nam at lectus urna duis convallis convallis. Posuere ac ut consequat semper viverra nam libero justo laoreet. Auctor augue mauris augue neque.',
                    createdAt: 1529884185301,
                },
                {
                    _id: 'wdfrefwdvrv21234rwdvnsdva',
                    title: 'Sixth Note',
                    body: 'Barrr barrr harhar sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero volutpat sed cras ornare arcu dui. Egestas congue quisque egestas diam in arcu. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Nam at lectus urna duis convallis convallis. Mauris pellentesque pulvinar pellentesque habitant. Diam maecenas sed enim ut sem viverra aliquet eget. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Aliquet enim tortor at auctor urna nunc id cursus. Mattis nunc sed blandit libero volutpat. Non enim praesent elementum facilisis leo vel fringilla. Consectetur a erat nam at lectus urna duis convallis convallis. Posuere ac ut consequat semper viverra nam libero justo laoreet. Auctor augue mauris augue neque.',
                    createdAt: 1529884185333,
                },
            ]
        }
    }

    generateNotes = (what, where) => {
        return (
            <Link to={"/note/${what._id}"} className="unstyled-link" key={what._id}>
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
        return (
            <div className="notes-list-container">
                <div><h3 className="content-header">Your Notes:</h3></div>
                <div className="notes-list">
                    {this.state.notesArray.map(this.generateNotes)}
                </div>
            </div>
        );
    }
}

export default NotesList;