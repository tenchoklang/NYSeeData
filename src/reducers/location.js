const defaultState = {
    lat: 40.756882039785374,
    lon: -73.95310404977607
}


const locationReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'SET_LOCATION':
            return action.payload;
        default:
            return state;
    }
}

export default locationReducer;