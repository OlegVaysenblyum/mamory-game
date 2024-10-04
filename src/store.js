import { createStore } from 'redux';

const initialState = {
    tiles: [],
    selectedTiles: [],
    matchedTiles: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIALIZE_TILES':
            return { ...state, tiles: action.payload };
        case 'SELECT_TILE':
            return { ...state, selectedTiles: [...state.selectedTiles, action.payload] };
        case 'MATCH_TILES':
            return {
                ...state,
                matchedTiles: [...state.matchedTiles, ...action.payload],
                selectedTiles: []
            };
        case 'RESET_SELECTION':
            return { ...state, selectedTiles: [] };
        default:
            return state;
    }
};

const store = createStore(reducer);
export default store;
