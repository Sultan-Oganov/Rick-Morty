import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';

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


const CharacterCard = ({ el, getCurrentCharacter, currentCharacter }) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Card key={el.id} className="characters__card" sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="250"
                image={el.image}
                alt="charackter"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="characters__descr" >
                    {el.name.length > 16 ? el.name.slice(0, 16) + ' ..' : el.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div" className="characters__descr">
                    {el.species}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    onClick={() => {
                        handleOpen()
                        getCurrentCharacter(el.id)
                    }}
                    size="small"
                >More</Button>
            </CardActions>

            {
                currentCharacter === el.id &&
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} className="modal">
                        <div className="modal__close">
                            <CancelIcon onClick={handleClose} className="modal__close" />
                        </div>

                        <CardMedia
                            component="img"
                            height="250"
                            image={el.image}
                            alt="charackter"
                        />
                        <Typography id="modal-modal-title" className="modal__text modal__text_title" variant="h6" component="h2">
                            Name: {el.name}
                        </Typography>
                        <Typography id="modal-modal-description" className="modal__text modal__text_item">
                            Status: {el.status}
                        </Typography>
                        <Typography id="modal-modal-description" className="modal__text modal__text_item">
                            Species: {el.species}
                        </Typography>
                        <Typography id="modal-modal-description" className="modal__text modal__text_item">
                            Gender: {el.gender}
                        </Typography>
                        <Typography id="modal-modal-description" className="modal__text modal__text_item">
                            Location: {el.location.name}
                        </Typography>
                        <Typography id="modal-modal-description" className="modal__text modal__text_item">
                            Origin: {el.origin.name}
                        </Typography>
                    </Box>
                </Modal>
            }

        </Card>
    );
};

export default CharacterCard;