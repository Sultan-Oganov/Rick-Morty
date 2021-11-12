import React from 'react';
import { connect, useSelector } from 'react-redux';
import { getCurrentCharacter } from '../../../redux/reducers/characters-reducer';
import CharacterCard from '../../Characters/CharacterCard/CharacterCard';
import { Grid } from '@material-ui/core';
import CharacterNotFound from '../../Characters/CharacterNotFound/CharacterNotFound';

const EpisodeCharacters = ({ getCurrentCharacter }) => {
    const episodeCharacters = useSelector(state => state.episodes.characterOfEpisode)
    const currentCharacter = useSelector(state => state.characters.currentCharacter);

    return (
        <>
            <h2 className="episodes__subtitle">Characters of this Episode</h2>

            <Grid container className="characters__content">
                {
                    episodeCharacters && episodeCharacters.length > 1 ? episodeCharacters.map((el) => (
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

export default connect(null, { getCurrentCharacter })(EpisodeCharacters);