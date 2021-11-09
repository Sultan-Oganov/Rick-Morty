import React, { useState } from 'react';
import './LocationItem.scss';
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

const LocationItem = ({ el, currentLocation, getCurrentLocation, getCharactersOfLocation }) => {

    let [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const getCharacterOfLocation = (characters) => {
        let arr = [];
        arr = characters.map(el => el.slice(42));
        let args = ''
        arr.forEach(el => args += el + ',')
        getCharactersOfLocation(args)
    };

    return (
        <>
            <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={() => {
                    handleOpen()
                    getCurrentLocation(el.id)
                }}
            >
                <TableCell component="th" scope="row">
                    {el.name}
                </TableCell>
                <TableCell align="right">{el.type}</TableCell>
                <TableCell align="right">{el.dimension}</TableCell>
                <TableCell align="right">{new Date(el.created).toLocaleTimeString()}, {new Date(el.created).toLocaleDateString()}</TableCell>
            </TableRow >
            {
                currentLocation === el.id
                    ?
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >

                        <Box sx={style}>
                            <CancelIcon onClick={() => {
                                handleClose()
                            }} className="modal__close" />

                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Name: {el.name}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Type: {el.type}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Dimension: {el.dimension}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Created: {new Date(el.created).toLocaleTimeString()}, {new Date(el.created).toLocaleDateString()}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Characters of this episode:
                                <Link
                                    onClick={() => {
                                        getCharacterOfLocation(el.residents)
                                        handleClose()
                                    }}
                                    to="/locations/characters"
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

export default LocationItem;