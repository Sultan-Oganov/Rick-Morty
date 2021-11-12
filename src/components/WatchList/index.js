import React from 'react';
import { useSelector, connect } from 'react-redux';
import { deleteEpisode, changeStatus } from '../../redux/reducers/watchList-reducer';
import WatchEpisodeItem from './WatchEpisodeItem/WatchEpisodeItem';

const WatchList = ({ deleteEpisode, changeStatus }) => {
    const watchEpisodeList = useSelector(state => state.watchList.episodeList);

    return (
        <div className="watchlist">
            {
                watchEpisodeList && watchEpisodeList != null &&
                watchEpisodeList.map(el => {
                    return (
                        <WatchEpisodeItem
                            key={el.id}
                            el={el}
                            watchEpisodeList={watchEpisodeList}
                            deleteEpisode={deleteEpisode}
                            changeStatus={changeStatus}
                        />
                    )
                })
            }
        </div>
    );
};

export default connect(null, { deleteEpisode, changeStatus })(WatchList);