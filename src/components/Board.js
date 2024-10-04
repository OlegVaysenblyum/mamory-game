import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tile from './Tile';
import { initializeTiles } from '../utils';

const Board = () => {
    const dispatch = useDispatch();
    const tiles = useSelector(state => state.tiles);
    const selectedTiles = useSelector(state => state.selectedTiles);
    const matchedTiles = useSelector(state => state.matchedTiles);

    useEffect(() => {
        const initialTiles = initializeTiles();
        dispatch({ type: 'INITIALIZE_TILES', payload: initialTiles });
    }, [dispatch]);

    const handleTileClick = (tile) => {
        if (selectedTiles.length < 2 && !selectedTiles.includes(tile) && !matchedTiles.includes(tile)) {
            dispatch({ type: 'SELECT_TILE', payload: tile });
            if (selectedTiles.length === 1 && selectedTiles[0].color === tile.color) {
                dispatch({ type: 'MATCH_TILES', payload: [selectedTiles[0], tile] });
            } else if (selectedTiles.length === 1) {
                setTimeout(() => {
                    dispatch({ type: 'RESET_SELECTION' });
                }, 1000);
            }
        }
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '220px' }}>
            {tiles.map(tile => (
                <Tile
                    key={tile.id}
                    color={tile.color}
                    onClick={() => handleTileClick(tile)}
                    isFlipped={selectedTiles.includes(tile) || matchedTiles.includes(tile)}
                />
            ))}
        </div>
    );
};

export default Board;
