import React from 'react';
import './CharacterFilter.scss';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { connect, useSelector } from 'react-redux';
import { filterCharacters, getFilters, getResetFilter } from '../../../redux/reducers/characters-reducer';
import Button from '@mui/material/Button';


const CharacterFilter = ({ filterCharacters, getFilters, getResetFilter }) => {
    const filters = useSelector(state => state.characters.filters)
    const currentPage = useSelector(state => state.characters.currentPage);

    const handleChangeSpecies = (event) => {
        getFilters('species', event.target.value);
    };

    const handleChangeStatus = (event) => {
        getFilters('status', event.target.value);
    };

    const handleChangeGender = (event) => {
        getFilters('gender', event.target.value);
    };

    const handleReset = () => {
        getResetFilter()
        filterCharacters(currentPage)
    }

    const applyFilter = () => {
        filterCharacters(currentPage, filters.species, filters.status, filters.gender)
    }

    return (
        <div className="characterFilter">
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Species</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filters.species}
                    label="Species"
                    onChange={handleChangeSpecies}
                >
                    <MenuItem value={'human'}>Human</MenuItem>
                    <MenuItem value={'alien'}>Alien</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filters.status}
                    label="status"
                    onChange={handleChangeStatus}
                >
                    <MenuItem value={'alive'}>Alive</MenuItem>
                    <MenuItem value={'dead'}>Dead</MenuItem>
                    <MenuItem value={'unknown'}>unknown</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filters.gender}
                    label="gender"
                    onChange={handleChangeGender}
                >
                    <MenuItem value={'male'}>Male</MenuItem>
                    <MenuItem value={'female'}>Female</MenuItem>
                    <MenuItem value={'genderless'}>Genderless</MenuItem>
                    <MenuItem value={'unknown'}>unknown</MenuItem>

                </Select>
                <Button onClick={applyFilter}>Apply Filter</Button>
                <Button onClick={handleReset}>Reset</Button>
            </FormControl>
        </div>
    );
};
export default connect(null, { filterCharacters, getFilters, getResetFilter })(CharacterFilter);