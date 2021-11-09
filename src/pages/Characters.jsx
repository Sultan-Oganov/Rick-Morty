import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllCharacters, setCurrentPage, getResetFilter } from '../redux/reducers/characters-reducer';
import CharacterList from '../components/Characters/CharacterList/CharacterList';


const Characters = ({ getAllCharacters, setCurrentPage, getResetFilter, isLoading }) => {

    useEffect(() => {
        getAllCharacters()
        return () => {
            setCurrentPage(1)
            getResetFilter()
        }
    }, [])

    if (isLoading) {
        return <h1>LOADING...</h1>
    }

    return (
        <div>
            <h1>Characters</h1>
            <CharacterList />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.characters.isLoading
    }
}

export default connect(mapStateToProps, { getAllCharacters, getResetFilter, setCurrentPage })(Characters);