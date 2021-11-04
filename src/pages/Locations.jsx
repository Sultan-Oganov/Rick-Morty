import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllLocations } from './../redux/reducers/locations-reducer';


const Locations = ({ getAllLocations, isLoading }) => {

    useEffect(() => {
        getAllLocations()
    }, [])

    if (isLoading) {
        return <h1>LOADING...</h1>
    }

    return (
        <div>
            <h1>Locations</h1>

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.locations.isLoading
    }
}

export default connect(mapStateToProps, { getAllLocations })(Locations);