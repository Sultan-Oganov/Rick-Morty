import React from 'react';
import { connect, useSelector } from 'react-redux';
import { getCurrentCharacter, setCurrentPage, filterCharacters } from '../../../redux/reducers/characters-reducer';
import CharacterFilter from '../CharacterFilter/CharacterFilter';
import CharacterNotFound from '../CharacterNotFound/CharacterNotFound';
import CharacterCard from '../CharacterCard/CharacterCard';
import Pagination from '@mui/material/Pagination';
import Spiner from './../../common/Spiner/Spiner';

const CharacterList = ({ getCurrentCharacter, setCurrentPage, filterCharacters, isLoading }) => {
    const characters = useSelector(state => state.characters.characters);
    const currentCharacter = useSelector(state => state.characters.currentCharacter);
    const currentPage = useSelector(state => state.characters.currentPage);
    const totalCharactersCount = useSelector(state => state.characters.totalCharactersCount);
    const pageSize = useSelector(state => state.characters.pageSize);
    let pagesCount = Math.ceil(totalCharactersCount / pageSize);
    const filters = useSelector(state => state.characters.filters);

    const onPageChanged = (pageNumber) => {
        setCurrentPage(pageNumber);
        filterCharacters(pageNumber, filters.species, filters.status, filters.gender);
    }

    const handleChange = (event, value) => {
        onPageChanged(value);
    };

    return (
        <div className="characters__list">
            <CharacterFilter setCurrentPage={setCurrentPage} />

            <div className="characters__content">

                {
                    isLoading
                        ?
                        <Spiner />
                        :
                        <>
                            <Pagination className="characters__pagination" count={pagesCount} defaultPage={currentPage} onChange={handleChange} />

                            <div className="characters__cards">
                                {
                                    characters && characters.length > 1 ? characters.map((el) => (

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
                            </div>

                        </>
                }

            </div>
        </div >
    );
};

export default connect(null, { getCurrentCharacter, filterCharacters, setCurrentPage })(CharacterList);