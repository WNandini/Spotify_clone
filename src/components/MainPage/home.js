import React,{useState} from "react";
import { Container,Grid, Box } from '@mui/material';
import Sidebar from "../Sidebar/sidebar";
import Header from "../Header/header";
import Music from "../MusicDisplay/musicDisplay";
import AudioPlayer from 'react-h5-audio-player';
import objectCollection from '../objectCollection';
import './home.css';

const HomePage = () => {
    const [playMusic, setPlayMusic] = useState(false);
    const [songId, setSongId] = useState(0);
    console.log(songId);
    return(
        <Container maxWidth="false" className='screenMainDiv'>
            <Grid container className="mainContent">
                <Grid item lg={3.5}>
                    <Sidebar/>
                </Grid>
                <Grid item lg={8.5} sm={12}>
                    <Header/>
                    <Music setPlayMusic={setPlayMusic} setSongId={setSongId}/>
                </Grid>
            </Grid>
            {objectCollection.playList.map((item,index) => 
                { return item.id === songId && playMusic ? 
                    <AudioPlayer
                        key={index}
                        autoPlay
                        src={item.mp3}
                        onPlay={e => console.log("onPlay")}
                        className="audioPlayer"
                    /> : null
                }    
            )}
        </Container>
    )
}

export default HomePage;