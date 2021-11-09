import React from 'react';
import { connect, useSelector } from 'react-redux';
import './CharacterList.scss';
import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import { getCurrentCharacter, setCurrentPage, filterCharacters } from '../../../redux/reducers/characters-reducer';
import CharacterFilter from '../CharacterFilter/CharacterFilter';
import CharacterNotFound from '../CharacterNotFound/CharacterNotFound';
import CharacterCard from '../CharacterCard/CharacterCard';

const CharacterList = ({ getCurrentCharacter, setCurrentPage, filterCharacters }) => {
    const characters = useSelector(state => state.characters.characters);
    const currentCharacter = useSelector(state => state.characters.currentCharacter);
    const currentPage = useSelector(state => state.characters.currentPage);
    const totalCharactersCount = useSelector(state => state.characters.totalCharactersCount);
    const pageSize = useSelector(state => state.characters.pageSize);
    let pagesCount = Math.ceil(totalCharactersCount / pageSize);
    const filters = useSelector(state => state.characters.filters)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    const onPageChanged = (pageNumber) => {
        setCurrentPage(pageNumber)
        filterCharacters(pageNumber, filters.species, filters.status, filters.gender)
    }

    return (
        <div className="characters">
            <Box sx={{ flexGrow: 1 }}>

                <CharacterFilter />

                <Grid container className="characters__content">

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

                    {characters && characters.length > 1 ? characters.map((el) => (

                        <CharacterCard
                            key={el.id}
                            el={el}
                            getCurrentCharacter={getCurrentCharacter}
                            currentCharacter={currentCharacter}
                        />
                    ))
                        :
                        <CharacterNotFound message={characters[0]} />
                    }
                </Grid>
            </Box>
        </div >
    );
};

export default connect(null, { getCurrentCharacter, filterCharacters, setCurrentPage })(CharacterList);