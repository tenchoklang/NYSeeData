const nypdDataReducerDefaultState = [];

const nypdDataReducer = (state = nypdDataReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_DATA':
            //state of no use at this moment 
            //array object of news articles
            return [...action.payload];
        default:
            return state;
    }
}

export default nypdDataReducer;