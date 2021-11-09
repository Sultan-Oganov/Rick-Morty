import React from 'react';
import './CharacterNotFound.scss';
import Typography from '@mui/material/Typography';

const CharacterNotFound = ({ message }) => {
    return (
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {message}
        </Typography>
    );
};

export default CharacterNotFound;