import { DELETE_NOTE, EDIT_NOTE, CREATE_NOTE } from '../actions';

const initialState = [
    {
        _id: 'bsdbsjbfvjnvjvwdvnsdva',
        title: 'Letter to Cassandra, Steventon: Saturday (January 9, 1796).',
        body: `<p>In the first place I hope you will live twenty-three years longer. Mr. Tom Lefroy's birthday was yesterday, so that you are very near of an age.</p>
        <p>After this necessary preamble I shall proceed to inform you that we had an exceeding good ball last night, and that I was very much disappointed at not seeing Charles Fowle of the party, as I had previously heard of his being invited. In addition to our set at the Harwoods' ball, we had the Grants, St. Johns, Lady Rivers, her three daughters and a son, Mr. and Miss Heathcote, Mrs. Lefevre, two Mr. Watkins, Mr. J. Portal, Miss Deanes, two Miss Ledgers, and a tall clergyman who came with them, whose name Mary would never have guessed.</p>`,
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
        _id: 'w3d3f3refwdvrv21234rwdvnsdva',
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
];

const notesReducer = (state = initialState, action) => {
    let temp = Array.from(state);
    switch (action.type) {
        case DELETE_NOTE:
            state.forEach((item, index) => {
                if (item._id === action.payload) {
                    temp.splice(index, 1);
                    return;
                }
            });
            return temp;
        case EDIT_NOTE:
            state.forEach((item, index) => {
                if (item._id === action.payload._id) {
                    temp.splice(index, 1);
                    return;
                }
            });
            temp.push(action.payload);
            return temp;
        case CREATE_NOTE:
            temp.push(action.payload);
            return temp;            
        default:
            return state;
    }
}

export default notesReducer;