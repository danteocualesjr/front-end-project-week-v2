import { DELETE_NOTE, EDIT_NOTE, CREATE_NOTE } from '../actions';

const initialState = [
    {
        _id: 'bsdbsjbfvjnvjvwdvnsdva',
        title: 'Letter to Cassandra, Steventon: Saturday (January 9, 1796).',
        body: `In the first place I hope you will live twenty-three years longer. Mr. Tom Lefroy's birthday was yesterday, so that you are very near of an age. After this necessary preamble I shall proceed to inform you that we had an exceeding good ball last night, and that I was very much disappointed at not seeing Charles Fowle of the party, as I had previously heard of his being invited. In addition to our set at the Harwoods' ball, we had the Grants, St. Johns, Lady Rivers, her three daughters and a son, Mr. and Miss Heathcote, Mrs. Lefevre, two Mr. Watkins, Mr. J. Portal, Miss Deanes, two Miss Ledgers, and a tall clergyman who came with them, whose name Mary would never have guessed.`,
        createdAt: 1529884185034,
    },
    {
        _id: 'bsdbdfgndfvsrwdvnsdva',
        title: 'Letter to Cassandra, Steventon: Thursday (January 16, 1796)',
        body: `I have just received yours and Mary's letter, and I thank you both, though their contents might have been more agreeable. I do not at all expect to see you on Tuesday, since matters have fallen out so pleasantly; and if you are not able to return till after that day, it will hardly be possible for us to send for you before Saturday, though for my own part I care so little about the ball that it would be no sacrifice to me to give it up for the sake of seeing you two days earlier. We are extremely sorry for poor Eliza's illness. I trust, however, that she has continued to recover since you wrote, and that you will none of you be the worse for your attendance on her. What a good-for-nothing fellow Charles is to bespeak the stockings! I hope he will be too hot all the rest of his life for it!`,
        createdAt: 1529884185101,
    },
    {
        _id: '3223vghegetgndfvsrwdvnsdva',
        title: 'Letter to Cassandra, Cork Street: Tuesday morn (August, 1796)',
        body: `My Dear Cassandra,

        Here I am once more in this scene of dissipation and vice, and I begin already to find my morals corrupted. We reached Staines yesterday, I do not (know) when, without suffering so much from the heat as I had hoped to do. We set off again this morning at seven o'clock, and had a very pleasant drive, as the morning was cloudy and perfectly cool. I came all the way in the chaise from Hertford Bridge.`,
        createdAt: 1529884185201,
    },
    {
        _id: '3223vghegetbefv21234rwdvnsdva',
        title: 'Letter to Cassandra, Rowling: Thursday (September 1, 1796)',
        body: `My Dearest Cassandra,

        The letter which I have this moment received from you has diverted me beyond moderation. I could die of laughter at it, as they used to say at school. You are indeed the finest comic writer of the present age.
        
        Since I wrote last, we have been very near returning to Steventon so early as next week. Such, for a day or two, was our dear brother Henry's scheme, but at present matters are restored, not to what they were, for my absence seems likely to be lengthened still farther. I am sorry for it, but what can I do?`,
        createdAt: 1529884185201,
    },
    {
        _id: 'w3d3f3refwdvrv21234rwdvnsdva',
        title: 'Letter to Cassandra, Rowling: Monday (September 5, 1796)',
        body: `My Dear Cassandra,

        I shall be extremely anxious to hear the event of your ball, and shall hope to receive so long and minute an account of every particular that I shall be tired of reading it. Let me know how many, besides their fourteen selves and Mr. and Mrs. Wright, Michael will contrive to place about their coach, and how many of the gentlemen, musicians, and waiters, he will have persuaded to come in their shooting-jackets. I hope John Lovett's accident will not prevent his attending the ball, as you will otherwise be obliged to dance with Mr. Tincton the whole evening. Let me know how J. Harwood deports himself without the Miss Biggs, and which of the Marys will carry the day with my brother James.`,
        createdAt: 1529884185301,
    },
    {
        _id: 'wdfrefwdvrv21234rwdvnsdva',
        title: 'Letter to Cassandra, Rowling: Thursday (September 15, 1796)',
        body: `My Dear Cassandra,

        We have been very gay since I wrote last; dining at Nackington, returning by moonlight, and everything quite in style, not to mention Mr. Claringbould's funeral which we saw go by on Sunday.
        
        I believe I told you in a former letter that Edward had some idea of taking the name of Clarmgbould; but that scheme is over, though it would be a very eligible as well as a very pleasant plan, would anyone advance him money enough to begin on. We rather expected Mr. Milles to have done so on Tuesday; but to our great surprise nothing was said on the subject, and unless it is in your power to assist your brother with five or six hundred pounds, he must entirely give up the idea.`,
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