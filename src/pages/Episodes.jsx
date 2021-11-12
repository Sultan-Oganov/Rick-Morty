import React, { useEffect } from 'react';
import '../styles/Episodes/Episodes.scss'
import { connect } from 'react-redux';
import EpisodeList from '../components/Episodes/EpisodeList/EpisodeList';
import { getAllEpisodes, setCurrentPage } from './../redux/reducers/episodes-reducer';

const Episodes = ({ getAllEpisodes, isLoading, setCurrentPage }) => {

    useEffect(() => {
        getAllEpisodes();
        return (() => setCurrentPage(1));
    }, []);

    return (
        <div className="episodes">
            <h1 className="episodes__title title">Episodes</h1>
            <EpisodeList isLoading={isLoading} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.episodes.isLoading
    }
}

export default connect(mapStateToProps, { getAllEpisodes, setCurrentPage })(Episodes);