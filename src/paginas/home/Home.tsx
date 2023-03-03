import React from 'react';
import './Home.css';
import { Box } from '@mui/material';
import { Grid, Typography, Button } from '@material-ui/core';
import { constants } from 'buffer';

function Home() {
    return (
        <>
        <Grid container direction='row' justifyContent='center' alignItems='center' style={{ backgroundColor: "silver" }}>
            <Grid>
                <Box p={2}>
                    <Box display="flex" justifyContent="center">
                        <h1>Esse é meu Titulo</h1>
                    </Box>
                    <img src="https://imgur.com/tl9D4L8.png" alt="imagem inicial" className="img" />                    
                </Box>
            </Grid>
            </Grid>
        </>
    );
}

export default Home;