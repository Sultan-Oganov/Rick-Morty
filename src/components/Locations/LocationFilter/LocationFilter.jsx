import React from 'react';
import { connect, useSelector } from 'react-redux';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
import { getFilteredLocations, getFilters, getResetFilter, setCurrentPage } from '../../../redux/reducers/locations-reducer';
import Button from '@mui/material/Button';

const LocationFilter = ({ getFilteredLocations, getFilters, setCurrentPage, getResetFilter }) => {
    const filters = useSelector(state => state.locations.filters)
    const currentPage = useSelector(state => state.locations.currentPage);

    const handleChangeName = (event) => {
        setCurrentPage(1);
        getFilters('name', event.target.value);
        getFilteredLocations(currentPage, event.target.value, filters.type, filters.dimension);
    };

    const handleChangeType = (event) => {
        setCurrentPage(1);
        getFilters('type', event.target.value);
        getFilteredLocations(currentPage, filters.name, event.target.value, filters.dimension)
    };

    const handleChangeDimension = (event) => {
        setCurrentPage(1);
        getFilters('dimension', event.target.value);
        getFilteredLocations(currentPage, filters.name, filters.type, event.target.value)
    };

    const handleReset = () => {
        getResetFilter();
        getFilteredLocations(currentPage);
    }

    return (
        <div className="locations__filter">
            <div className="filter__item">
                <TextField
                    id="outlined-basic"
                    label="Location name"
                    value={filters.name}
                    variant="outlined"
                    onChange={handleChangeName}
                    className="filter__input"
                />
            </div>
            <div className="filter__item">
                <TextField
                    id="outlined-basic"
                    label="Location type"
                    value={filters.type}
                    variant="outlined"
                    onChange={handleChangeType}
                    className="filter__input"
                />
            </div>
            <div className="filter__item">
                <TextField
                    id="outlined-basic"
                    label="Location dimension"
                    value={filters.dimension}
                    variant="outlined"
                    onChange={handleChangeDimension}
                    className="filter__input"
                />
                <Button onClick={handleReset}>Reset</Button>
            </div>
        </div>
    );
};
export default connect(null, { getFilteredLocations, getFilters, getResetFilter, setCurrentPage })(LocationFilter);
