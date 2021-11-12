import React from 'react';
import Typography from '@mui/material/Typography';

const CharacterNotFound = ({ message }) => {
    return (
        <Typography className="characters__notfound" id="modal-modal-description" sx={{ mt: 2 }}>
            {message}
        </Typography>
    );
};

export default CharacterNotFound;