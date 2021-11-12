import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { createNewEpisode } from './../../../redux/reducers/watchList-reducer';

const WatchListAction = ({ createNewEpisode }) => {
    const watchEpisodeList = useSelector(state => state.watchList.episodeList);

    const [num, setNum] = useState('');

    const handleNum = (n) => {
        setNum(n);
    }

    return (
        <form className="watchlist__form" onSubmit={(event) => {
            createNewEpisode(event, num, watchEpisodeList);
            setNum('');
        }}>
            <input className="watchlist__input" type="number" value={num} onChange={(event) => handleNum(event.target.value)} placeholder="episode number" />
            <button className="watchlist__btn-add">Add</button>
        </form>
    );
};

export default connect(null, { createNewEpisode })(WatchListAction);