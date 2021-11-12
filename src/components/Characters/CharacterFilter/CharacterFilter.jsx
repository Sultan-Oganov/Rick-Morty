import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { connect, useSelector } from 'react-redux';
import { filterCharacters, getFilters, getResetFilter } from '../../../redux/reducers/characters-reducer';
import Button from '@mui/material/Button';


const CharacterFilter = ({ filterCharacters, getFilters, getResetFilter, setCurrentPage }) => {
    const filters = useSelector(state => state.characters.filters)
    const currentPage = useSelector(state => state.characters.currentPage);

    const handleChangeSpecies = (event) => {
        setCurrentPage(1);
        getFilters('species', event.target.value);
        filterCharacters(currentPage, event.target.value, filters.status, filters.gender)
    };

    const handleChangeStatus = (event) => {
        setCurrentPage(1);
        getFilters('status', event.target.value);
        filterCharacters(currentPage, filters.species, event.target.value, filters.gender)
    };

    const handleChangeGender = (event) => {
        setCurrentPage(1);
        getFilters('gender', event.target.value);
        filterCharacters(currentPage, filters.species, filters.status, event.target.value)
    };

    const handleReset = () => {
        getResetFilter();
        filterCharacters(currentPage);
    }

    return (
        <div className="character__filter filter">
            <FormControl className="filter__item">
                <InputLabel id="demo-simple-select-label">Species</InputLabel>
                <Select
                    className="filter__select"
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
            <FormControl className="filter__item">
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                    className="filter__select"
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
            <FormControl className="filter__item">
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>

                <Select
                    className="filter__select"
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
                <Button onClick={handleReset}>Reset</Button>
            </FormControl>
        </div>
    );
};
export default connect(null, { filterCharacters, getFilters, getResetFilter })(CharacterFilter);