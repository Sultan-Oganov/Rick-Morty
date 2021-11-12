import React, { useEffect } from 'react';
import '../styles/WatchList/WatchList.scss';
import { connect } from 'react-redux';
import WatchList from '../components/WatchList';
import WatchListAction from '../components/WatchList/WatchListAction/WatchListAction';
import { getEpisodeList } from '../redux/reducers/watchList-reducer';
import Spiner from './../components/common/Spiner/Spiner';

const MyWatchList = ({ getEpisodeList, isLoading }) => {

    useEffect(() => {
        getEpisodeList()
    }, [])

    if (isLoading) {
        return <Spiner />
    }

    return (
        <div className="mywatchlist">
            <h1 className="mywatchlist__title title">My Watch List</h1>
            <h2 className="mywatchlist__subtitle">add the episode you want to watch later</h2>
            <WatchListAction />
            <WatchList />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.watchList.isLoading
    }
}

export default connect(mapStateToProps, { getEpisodeList })(MyWatchList);