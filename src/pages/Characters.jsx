import React, { useEffect } from 'react';
import '../styles/Characters/Characters.scss'
import { connect } from 'react-redux';
import { getAllCharacters, setCurrentPage, getResetFilter } from '../redux/reducers/characters-reducer';
import CharacterList from '../components/Characters/CharacterList/CharacterList';

const Characters = ({ getAllCharacters, setCurrentPage, getResetFilter, isLoading }) => {

    useEffect(() => {
        getAllCharacters();
        return (() => {
            setCurrentPage(1);
            getResetFilter();
        })
    }, []);

    return (
        <>{
            <div className="characters">
                <h1 className="characters__title title">Characters</h1>
                <CharacterList isLoading={isLoading} />
            </div>
        }
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.characters.isLoading
    }
}

export default connect(mapStateToProps, { getAllCharacters, getResetFilter, setCurrentPage })(Characters);