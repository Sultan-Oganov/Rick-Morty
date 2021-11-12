import React, { useState, useEffect } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const EpisodeItem = ({ el, currentEpisode, getCurrentEpisode, getCharactersOfEpisode }) => {

    let [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const getCharacterOfEpisode = (characters) => {
        let arr = [];
        arr = characters.map(el => el.slice(42));
        let args = ''
        arr.forEach(el => args += el + ',')
        getCharactersOfEpisode(args)
    };

    return (
        <>
            <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={() => {
                    handleOpen()
                    getCurrentEpisode(el.id)
                }}
            >
                <TableCell component="th" scope="row">
                    {el.name}
                </TableCell>
                <TableCell align="right">{el.air_date}</TableCell>
                <TableCell align="right">{el.episode}</TableCell>
                <TableCell align="right">{new Date(el.created).toLocaleTimeString()}, {new Date(el.created).toLocaleDateString()}</TableCell>
            </TableRow >
            {
                currentEpisode === el.id
                    ?
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >

                        <Box sx={style} className="modal">
                            <div className="modal__close">
                                <CancelIcon onClick={handleClose} />
                            </div>

                            <Typography className="modal__text modal__text_title" id="modal-modal-title" variant="h6" component="h2">
                                Name: {el.name}
                            </Typography>
                            <Typography className="modal__text modal__text_item" id="modal-modal-description" sx={{ mt: 2 }}>
                                Air date: {el.air_date}
                            </Typography>
                            <Typography className="modal__text modal__text_item" id="modal-modal-description" sx={{ mt: 2 }}>
                                Episode: {el.episode}
                            </Typography>
                            <Typography className="modal__text modal__text_item" id="modal-modal-description" sx={{ mt: 2 }}>
                                Created: {new Date(el.created).toLocaleTimeString()}, {new Date(el.created).toLocaleDateString()}
                            </Typography>
                            <Typography className="modal__text modal__text_item" id="modal-modal-description" sx={{ mt: 2 }}>
                                Characters of this episode:
                                <Link
                                    className="modal__link"
                                    onClick={() => {
                                        getCharacterOfEpisode(el.characters)
                                        handleClose()
                                    }}
                                    to="/episodes/characters"
                                >View
                                </Link>

                            </Typography>
                        </Box>

                    </Modal>
                    :
                    null
            }

        </>
    );
};

export default EpisodeItem;