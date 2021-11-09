import React from 'react';
import './LocationCharcters.scss'
import { connect, useSelector } from 'react-redux';
import { getCurrentCharacter } from '../../../redux/reducers/characters-reducer';
import CharacterCard from '../../Characters/CharacterCard/CharacterCard';
import { Grid } from '@material-ui/core';
import CharacterNotFound from '../../Characters/CharacterNotFound/CharacterNotFound';

const LocationCharcters = ({ getCurrentCharacter }) => {
    const locationCharacters = useSelector(state => state.locations.characterOfLocation);
    const currentCharacter = useSelector(state => state.characters.currentCharacter);

    return (
        <>
            <h2>Characters of this Locations</h2>

            <Grid container className="locations__content">
                {
                    locationCharacters && locationCharacters.length > 1 ? locationCharacters.map((el) => (
                        <CharacterCard
                            key={el.id}
                            el={el}
                            getCurrentCharacter={getCurrentCharacter}
                            currentCharacter={currentCharacter}
                        />
                    ))
                        :
                        <CharacterNotFound message={"Not Found"} />
                }
            </Grid>
        </>
    );
};

export default connect(null, { getCurrentCharacter })(LocationCharcters);