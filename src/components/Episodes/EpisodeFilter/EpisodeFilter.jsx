import React from 'react';
import './EpisodeFilter.scss';
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
        <div className="episodeFilter">
            <FormControl fullWidth>
                <TextField
                    id="outlined-basic"
                    label="Episode name"
                    value={filters.name}
                    variant="outlined"
                    onChange={handleChangeName}

                />
            </FormControl>
        </div>
    );
};
export default connect(null, { getFilteredEpisode, getFilters, })(EpisodeFilter);