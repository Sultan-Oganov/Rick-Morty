import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllEpisodes } from './../redux/reducers/episodes-reducer';


const Episodes = ({ getAllEpisodes, isLoading }) => {

    useEffect(() => {
        getAllEpisodes()
    }, [])

    if (isLoading) {
        return <h1>LOADING...</h1>
    }

    return (
        <div>
            <h1>Episodes</h1>

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.episodes.isLoading
    }
}

export default connect(mapStateToProps, { getAllEpisodes })(Episodes);