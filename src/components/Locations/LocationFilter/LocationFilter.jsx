import React from 'react';
import './LocationFilter.scss';
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
        <div className="episodeFilter">
            <FormControl fullWidth>
                <TextField
                    id="outlined-basic"
                    label="Location name"
                    value={filters.name}
                    variant="outlined"
                    onChange={handleChangeName}

                />
                <TextField
                    id="outlined-basic"
                    label="Location type"
                    value={filters.type}
                    variant="outlined"
                    onChange={handleChangeType}

                />
                <TextField
                    id="outlined-basic"
                    label="Location dimension"
                    value={filters.dimension}
                    variant="outlined"
                    onChange={handleChangeDimension}
                />
                <Button onClick={handleReset}>Reset</Button>
            </FormControl>
        </div>
    );
};
export default connect(null, { getFilteredLocations, getFilters, getResetFilter, setCurrentPage })(LocationFilter);
