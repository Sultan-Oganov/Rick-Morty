import React from 'react';

const WatchEpisodeItem = ({ el, watchEpisodeList, deleteEpisode, changeStatus }) => {
    return (
        <div className="watchlist__item">
            <input
                type="checkbox"
                value={el.status}
                checked={el.status}
                onChange={() => changeStatus(el.id, watchEpisodeList)}
                className="watchlist__checkbox"
            />
            <h4 className="watchlist__name">{el.episode} - {el.status ? 'episode viewed' : 'episode not viewed'}</h4>
            <button className="watchlist__btn-dlt" onClick={() => deleteEpisode(el.id, watchEpisodeList)}>Delete</button>
        </div>
    );
};

export default WatchEpisodeItem;