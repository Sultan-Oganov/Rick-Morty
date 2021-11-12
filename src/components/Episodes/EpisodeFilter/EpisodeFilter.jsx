import React from 'react';
import { connect, useSelector } from 'react-redux';
import FormControl from '@mui/material/FormControl';
import { getFilteredEpisode, getFilters } from '../../../redux/reducers/episodes-reducer';
import { TextField } from '@mui/material';

const EpisodeFilter = ({ getFilteredEpisode, getFilters, setCurrentPage }) => {
    const filters = useSelector(state => state.episodes.filters)
    const currentPage = useSelector(state => state.episodes.currentPage);

    const handleChangeName = (event) => {
        setCurrentPage(1);
        getFilters('name', event.target.value);
        getFilteredEpisode(currentPage, event.target.value);
    };

    return (
        <div className="episode__filter filter">
            <FormControl className="filter__item">
                <TextField
                    id="outlined-basic"
                    label="Episode name"
                    value={filters.name}
                    variant="outlined"
                    onChange={handleChangeName}
                    className="filter__input"
                />
            </FormControl>
        </div>
    );
};
export default connect(null, { getFilteredEpisode, getFilters, })(EpisodeFilter);