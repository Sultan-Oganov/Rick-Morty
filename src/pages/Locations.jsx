import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LocataionList from '../components/Locations/LocationList/LocationList';
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
            <LocataionList />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.locations.isLoading
    }
}

export default connect(mapStateToProps, { getAllLocations })(Locations);