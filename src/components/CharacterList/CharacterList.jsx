import React from 'react';
import { connect, useSelector } from 'react-redux';
import './CharacterList.scss';
import { Grid } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { getCurrentCharackter } from '../../redux/reducers/charackters-reducer';

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

const CharacterList = ({ getCurrentCharackter }) => {
    const charackters = useSelector(state => state.charackters.charackters.results)
    const currentCharackter = useSelector(state => state.charackters.currentCharackter)


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="charackters">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container className="charackters__content">
                    {charackters && charackters.map((el) => (

                        <Card key={el.id} className="charackters__item" sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="250"
                                image={el.image}
                                alt="charackter"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {el.name.length > 16 ? el.name.slice(0, 16) : el.name}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    onClick={() => {
                                        handleOpen()
                                        getCurrentCharackter(el.id)
                                    }}
                                    size="small"
                                >More</Button>
                            </CardActions>

                            {
                                currentCharackter == el.id &&
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                            Name: {el.name}
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            Status: {el.status}
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            Species: {el.species}
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            Gender: {el.gender}
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            Location: {el.location.name}
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            Origin: {el.origin.name}
                                        </Typography>
                                    </Box>
                                </Modal>
                            }

                        </Card>
                    ))}
                </Grid>
            </Box>
        </div >
    );
};

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, { getCurrentCharackter })(CharacterList);