import React from 'react';
import { connect, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EpisodeItem from '../EpisodeItem/EpisodeItem';
import { setCurrentPage, getCurrentEpisode, getCharactersOfEpisode, getFilteredEpisode } from '../../../redux/reducers/episodes-reducer';
import EpisodeFilter from '../EpisodeFilter/EpisodeFilter';
import Pagination from '@mui/material/Pagination';
import Spiner from '../../common/Spiner/Spiner';


const EpisodeList = ({ getCurrentEpisode, setCurrentPage, getCharactersOfEpisode, getFilteredEpisode, isLoading }) => {
    const episodes = useSelector(state => state.episodes.episodes);
    const currentEpisode = useSelector(state => state.episodes.currentEpisode);
    const currentPage = useSelector(state => state.episodes.currentPage);
    const totalEpisodesCount = useSelector(state => state.episodes.totalEpisodesCount);
    const pageSize = useSelector(state => state.episodes.pageSize);
    let pagesCount = Math.ceil(totalEpisodesCount / pageSize);
    const filters = useSelector(state => state.episodes.filters);

    const onPageChanged = (pageNumber) => {
        setCurrentPage(pageNumber);
        getFilteredEpisode(pageNumber, filters.name);
    };

    const handleChange = (event, value) => {
        onPageChanged(value);
    };

    return (
        <div className="episodes__list">
            <EpisodeFilter setCurrentPage={setCurrentPage} />
            <div className="episodes__content">
                {
                    isLoading
                        ?
                        <Spiner />
                        :
                        <>
                            <Pagination className="episodes__pagination" count={pagesCount} defaultPage={currentPage} onChange={handleChange} color="primary" />
                            <TableContainer className="episodes__table" component={Paper}>

                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className="episodes__label">Name</TableCell>
                                            <TableCell className="episodes__label" align="right">Air date</TableCell>
                                            <TableCell className="episodes__label" align="right">Episode</TableCell>
                                            <TableCell className="episodes__label" align="right">Created</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {episodes && episodes.map((el) => (
                                            <EpisodeItem
                                                key={el.id}
                                                el={el}
                                                currentEpisode={currentEpisode}
                                                getCurrentEpisode={getCurrentEpisode}
                                                getCharactersOfEpisode={getCharactersOfEpisode}
                                            />
                                        ))}
                                    </TableBody>
                                </Table>

                            </TableContainer>
                        </>
                }
            </div>
        </ div>
    );
};

export default connect(null, { getCurrentEpisode, setCurrentPage, getCharactersOfEpisode, getFilteredEpisode })(EpisodeList);