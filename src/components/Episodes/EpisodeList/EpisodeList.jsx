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

const EpisodeList = ({ getCurrentEpisode, setCurrentPage, getCharactersOfEpisode, getFilteredEpisode }) => {
    const episodes = useSelector(state => state.episodes.episodes);
    const currentEpisode = useSelector(state => state.episodes.currentEpisode);
    const currentPage = useSelector(state => state.episodes.currentPage);
    const totalEpisodesCount = useSelector(state => state.episodes.totalEpisodesCount);
    const pageSize = useSelector(state => state.episodes.pageSize);
    let pagesCount = Math.ceil(totalEpisodesCount / pageSize);
    const filters = useSelector(state => state.episodes.filters);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    const onPageChanged = (pageNumber) => {
        setCurrentPage(pageNumber);
        getFilteredEpisode(pageNumber, filters.name);
    };

    return (
        <div>
            <EpisodeFilter setCurrentPage={setCurrentPage} />
            <TableContainer component={Paper}>
                <div className="characters__pagination">
                    {
                        pages.map(page => {
                            return (
                                <span
                                    key={page}
                                    className={currentPage === page ? 'characters__pagination-selectedPage' : ''}
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
                            <TableCell align="right">Air date</TableCell>
                            <TableCell align="right">Episode</TableCell>
                            <TableCell align="right">Created</TableCell>
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



        </div >
    );
};

export default connect(null, { getCurrentEpisode, setCurrentPage, getCharactersOfEpisode, getFilteredEpisode })(EpisodeList);