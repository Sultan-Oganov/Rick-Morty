import React from 'react';
import { connect, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LocationItem from '../LocationItem/LocationItem';
import LocationFilter from '../LocationFilter/LocationFilter';
import { getCharactersOfLocation, getCurrentLocation, getFilteredLocations, setCurrentPage } from '../../../redux/reducers/locations-reducer';
import Pagination from '@mui/material/Pagination';
import Spiner from '../../common/Spiner/Spiner';

const LocationList = ({ getCurrentLocation, setCurrentPage, getCharactersOfLocation, getFilteredLocations, isLoading }) => {
    const locations = useSelector(state => state.locations.locations);
    const currentLocation = useSelector(state => state.locations.currentLocation);
    const currentPage = useSelector(state => state.locations.currentPage);
    const totalLocationsCount = useSelector(state => state.locations.totalLocationsCount);
    const pageSize = useSelector(state => state.locations.pageSize);
    let pagesCount = Math.ceil(totalLocationsCount / pageSize);
    const filters = useSelector(state => state.locations.filters);

    const onPageChanged = (pageNumber) => {
        setCurrentPage(pageNumber);
        getFilteredLocations(pageNumber, filters.name,);
    };

    const handleChange = (event, value) => {
        onPageChanged(value);
    };

    return (
        <div className="locations__list">
            <LocationFilter setCurrentPage={setCurrentPage} />
            <div className="locations__content">
                {
                    isLoading ?
                        <Spiner />
                        :
                        <>
                            <Pagination className="locations__pagination" count={pagesCount} defaultPage={currentPage} onChange={handleChange} color="primary" />

                            <TableContainer className="locations__table" component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className="locations__label">Name</TableCell>
                                            <TableCell className="locations__label" align="right">Type</TableCell>
                                            <TableCell className="locations__label" align="right">Dimension</TableCell>
                                            <TableCell className="locations__label" align="right">Created</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {locations && locations.map((el) => (
                                            <LocationItem
                                                key={el.id}
                                                el={el}
                                                currentLocation={currentLocation}
                                                getCurrentLocation={getCurrentLocation}
                                                getCharactersOfLocation={getCharactersOfLocation}
                                            />
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </>
                }
            </div>

        </div>
    );
};


export default connect(null, { getCurrentLocation, setCurrentPage, getCharactersOfLocation, getFilteredLocations })(LocationList);