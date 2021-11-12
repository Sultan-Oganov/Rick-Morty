import React, { useEffect } from 'react';
import '../styles/Locations/Locations.scss';
import { connect } from 'react-redux';
import LocataionList from '../components/Locations/LocationList/LocationList';
import { getAllLocations, setCurrentPage, getResetFilter } from './../redux/reducers/locations-reducer';

const Locations = ({ getAllLocations, isLoading, setCurrentPage, getResetFilter }) => {

    useEffect(() => {
        getAllLocations();
        return (() => {
            setCurrentPage(1);
            getResetFilter();
        });
    }, []);

    return (
        <div className="locations">
            <h1 className="locations__title title">Locations</h1>
            <LocataionList isLoading={isLoading} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.locations.isLoading
    };
};

export default connect(mapStateToProps, { getAllLocations, setCurrentPage, getResetFilter })(Locations);