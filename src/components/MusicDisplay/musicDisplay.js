import React,{useState} from 'react';
import {Box, Typography, Grid} from '@mui/material';
import useStyle from './music';
import objectCollection from '../objectCollection';
import 'react-h5-audio-player/lib/styles.css';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'; 

const Music = (props) => {
    const classes = useStyle();
    const [showAll, setShowAll] = useState(false);
    const [songData, setSongData] = useState(objectCollection.playList)

    const handleMusic = (id) => {
        props.setPlayMusic(true)
        props.setSongId(id)
    }
    const handleShowAll = () => {

    }
    const data = objectCollection.playList.filter(pilot  => pilot.id  < 4);

    console.log('Data',data);
    return(
        <>
            <Box className={classes.colorTheme}>   
                <Box className={classes.focusSong}>
                    <Typography variant='h5'>Focus</Typography>
                    <Typography variant='h6' onClick={handleShowAll()}>
                        SHOW ALL
                    </Typography>
                    <Typography variant='h6' onClick={handleShowAll()}>
                        HIDE ALL
                    </Typography>
                </Box>
                <Grid container className={classes.musicList}>
                {songData.map((item,index) => 
                    <>
                        <Grid item xs={2} key={index}>
                            <Box className={classes.card}>
                                <img src={item.image}/>
                                <Typography variant='h2'>{item.title}</Typography>
                                <Typography variant='h3'>{item.description}</Typography>
                                <Box className={classes.playIconMainBox}>
                                    <PlayArrowRoundedIcon onClick={() => handleMusic(item.id)} className={classes.playIcon}/>
                                </Box>
                            </Box>
                        </Grid>
                    </>
                )}
                </Grid>
            </Box>
        </>
    )
}

export default Music;