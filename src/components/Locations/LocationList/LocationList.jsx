import React from 'react';
import './LocationList.scss'
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

const LocationList = ({ getCurrentLocation, setCurrentPage, getCharactersOfLocation, getFilteredLocations }) => {
    const locations = useSelector(state => state.locations.locations);
    const currentLocation = useSelector(state => state.locations.currentLocation);
    const currentPage = useSelector(state => state.locations.currentPage);
    const totalLocationsCount = useSelector(state => state.locations.totalLocationsCount);
    const pageSize = useSelector(state => state.locations.pageSize);
    let pagesCount = Math.ceil(totalLocationsCount / pageSize);
    const filters = useSelector(state => state.locations.filters);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    const onPageChanged = (pageNumber) => {
        setCurrentPage(pageNumber);
        getFilteredLocations(pageNumber, filters.name,);
    };

    return (
        <div>
            <LocationFilter setCurrentPage={setCurrentPage} />
            <TableContainer component={Paper}>
                <div className="locations__pagination">
                    {
                        pages.map(page => {
                            return (
                                <span
                                    key={page}
                                    className={currentPage === page ? 'locations__pagination-selectedPage' : ''}
                                    onClick={() => onPageChanged(page)}>
                                    {page}
                                </span>
                            )
                        })
                    }
                </div>

                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="right">Dimension</TableCell>
                            <TableCell align="right">Created</TableCell>
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
        </div>
    );
};


export default connect(null, { getCurrentLocation, setCurrentPage, getCharactersOfLocation, getFilteredLocations })(LocationList);