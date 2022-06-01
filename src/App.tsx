import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Divider, Paper, PaperProps, Typography } from '@mui/material';

function App() {
  const pProps:PaperProps = {
    elevation: 3,
    sx: {mx:'auto', width: 8 * 72, borderRadius: 0,pb:2}
  }
  return (
    <div className="App">
      <Paper {...pProps}>
        <Box sx={{pt:5}}>
          <Typography variant="h3" sx={{color: '1D3B59'}}>Webapp Presentation</Typography>
          <Typography variant="h1" sx={{color: '#FF9800', lineHeight:1}}>LIGATE</Typography>
          <Typography variant="caption" sx={{color: 'grey.500', lineHeight:1}}>by Nate Nelson</Typography>
        </Box>
        <Divider/>
        <Box>
          <Typography variant={"h5"} sx={{color: 'grey.600', letterSpacing: '1.5px'}}>Tying together the stakes in Zion</Typography>
        </Box>
        <Box sx={{ml:3, mt:3, width: '66%', textAlign: 'left'}}>
          <Typography align="left" variant={"body1"} sx={{color: 'grey.800'}}>We are excited to present to you a new web-tool to share valuable member information across different stakes.</Typography>
          <Box component={"ul"} sx={{color: 'grey.800'}}>
            <Box component={"li"}>Track member staus in other stakes</Box>
            <Box component={"li"}>Easily communicate with other stake leaders</Box>
            <Box component={"li"}>Printable reports</Box>
            <Box component={"li"}>Anytime anywhere secure access</Box>
          </Box>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'row0', px: 2, position: 'relative', zIndex: 1}}>
          <Box width="300px">
            <Box component={"img"} src="/Laptop-screenshot.png" sx={{maxWidth: '100%', height: 'auto', zIndex: 100}}/>
          </Box>
          <Box sx={{textAlign: 'center', mt:3}} flex={1}>
            <Box sx={{border: 3, borderColor: '#FF9800', m:3, color: '#FF9800', fontSize: "1rem", fontWeight: 'bold'}}>
              <Typography sx={{fontSize: "1rem", fontWeight: 'bold'}}>{"Date: TBD"}</Typography>
              <Typography sx={{fontSize: ".75rem"}}>via Zoom</Typography>
            </Box>
            
          </Box>
        </Box>
        <Box position="relative" top={"-50px"} height="100px" sx={{bgcolor: '#FF9800', zIndex: 0}}>
        </Box>
        <Box display="flex" flexDirection="row" position="relative" sx={{zIndex:1}}>
          <Box display="flex" flexDirection="column" width='50%'>
            <Box sx={{p:5, textAlign:'left'}}>
              <Typography variant="h2" sx={{color:'1D3B59'}}>Purpose</Typography>
              <Typography variant="body1" sx={{color:'1D3B59'}}>To present the concept of the app, give a demonstration of its use, access the viability, and usefulness of its features, and receive feedback.</Typography>
            </Box>
          </Box>
          <Box width={"300px"}>
            <Box component="img" src="/report-stack.png" sx={{maxWidth: '100%', height: 'auto'}}/>
          </Box>
        </Box>
        <Box position="relative" top={"-50px"} height="50px" sx={{bgcolor: '#FF9800', zIndex: 0}}></Box>
        <Box sx={{p:5, textAlign:'left'}}>
              <Typography variant="h2" align='center' sx={{color:'1D3B59'}}>How To Prepare</Typography>
              <Typography variant="body1" sx={{color:'1D3B59'}}>Questions to consider</Typography>
              <Box component="ol">
                <ListItem message="What problems do you face as a stake?"/>
                <ListItem message="What things do you communicate with other stakes about?"/>
                <ListItem message="What problems do you face in communicating with other stakes?"/>
                <ListItem message="What tools would be helpful in inter-stake communication?" secondaryMessage='(i.e. outside your stake)'/>
                <ListItem message="What tools would be helpful in intra-stake communication?"secondaryMessage='(i.e. within your stake) '/>
                <ListItem message="What would prevent you from adopting a new application?"/>
              </Box>
            </Box>
        <Box>
          <Typography sx={{color: 'grey.500', fontSize: ".5rem"}}>Hosted by the Ogden YSA 2nd Stake</Typography>
        </Box>
      </Paper>
    </div>
  );
}

export default App;

interface ListItemProps{
  message: string,
  secondaryMessage?: string
}
function ListItem(props:ListItemProps){
  const {message, secondaryMessage} = props
  return (
    <Box component="li">
      <Typography>{message}</Typography>
      <Typography component="span" sx={{color: 'grey.500'}}>{secondaryMessage}</Typography>
    </Box>
  )
}