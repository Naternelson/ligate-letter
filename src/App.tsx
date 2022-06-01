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
            
            <Box component={"img"} src="https://lh3.googleusercontent.com/P8JWGowlCXDupvfmHkLFRC-qluaUIbzT11OHKyuzM0nlWrpXBQFXqzWez7HdQ_IV7KjfiQ5PcvJF9cvZHSTCZGZl4edlNx92UkhhmcKImAD1tOIxfXiq-yKWisLuAd8HM-jd_Sv_uEvt2Wnqi9sQxj-BRTX2rqUKgVIW_OZdfRvf98NmdbY05z-nyjAN-gljPOxI_svLI1Sy2AG9KLyg1gri6WapNFHX4VajoRgQRp-RebunTykoTd4xJ9lNc_RjzvfG80XGApoip6ITaaIxevfZDyLBjlBf2DtrjBzk2lIuqA-Mraf25wlJIAcshhDYETtnH9-GmIKys9tBzQZ_egWIGkOD-RGT0lC3eowW8J9AliBDTDozUMaJ19l-PyzQNvBqo2Zas0_aTfOJrP-JMiNrBqlT6Fdq_ps6Thh7rpJcv3_XMxVP0ZFkdtk7KE8Q467zTQj8cEk8bO_qk3-_pZayjXnz-inHRAypOLJD6wMnsOVNDsup7Nw-I3lfdq493rA7NPwwXcnoNem7Gk9733DQP2LBpA1iUqd13f0G-JyflNXAss-OKA5MdEQNGw5fkG4tewtyBB8CjsbDF_yrsqrvKXQx9446j8Ey5Xy8zQNbC3gOcDAYiXaytmxLbMuYnJrTOCYyK51sEvsfx9rnLXOlIRNZYh47rnurFYk0TqblL51svALrU2wULgRGPjjVZglF7UidON50ur-JqzdVM_HSqUyiEHGlzpvgoBcCZKM0Rg2v55OebJ6e5xb2_A=w600-h350-no?authuser=0" sx={{maxWidth: '100%', height: 'auto', zIndex: 100}}/>
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
              <Typography variant="body1" sx={{color:'1D3B59'}}>To present the concept of the app, give a demonstration of its use, assess the viability, and usefulness of its features, and receive feedback.</Typography>
            </Box>
          </Box>
          <Box width={"300px"}>
            <Box component="img" src="https://lh3.googleusercontent.com/umGcLBTRDJJm73pPeDafnbL9uEdXSa5lueVoCzat-8GGQHNu8JRIlOD3egTSPuLkXdWs_ie2_o5xWzyqw2HMEAZ2MfxAYIEGFSyywSh4hEVJbu_CVUW8LqQhbXIcb83nu9_qZQGElA3dLz6ydzsIkdbFTBC_BFDf6XEZiqYfr77SXCkMzZGqwakibCVGpdiKrgwR7ikVecDI2C79LtGhhT2rfvuLORPvdffRudGt1BBMbZe390N5oEMdSUJansiCn4aT1_Gzpg2haTCq_Czwzl2opcp_K6sfqAiXAezwlyavxTQHuf0IOP5jYZ3p1ZfvVs1NbjizFtK2FcIrg3CEhch_bOl2X6cWoDUre-Mu5WNAvuL2js7YPQ99Y0-zwSzxKE3ZMWLtSLMm8uW9MHe3NMzmNXiSPi2j479gK79FtDuN7BSRczVnufvOb5s6gpQu-MdGFM_Ed7I4lU93hjkNkQl8Ly9iyFZgA_rN5bOERGJQSGlebrvUxqIefUKZBPPd0Y7WweaSziYXWbHM32p5hGAIIdg59RqrHABmAxqBF8NG9nfSscHfcYaItCjgQfQcZ0oJctDbmcVOrzKKjBs28oLS4piE-fIkJukh_7qcbUnvIGIoDZdlyIHMZG4m_AqLB9h0eobJ9_qZaAS1FtZlrSs-SNR5bFFdMklbqHynASe3H-6Y-MjHMVR-0XRnak8Q3AqiW-JG771PhLss0MR6r_c379iujg_I9v4abO1l9GLwbEGGngarO86NDRxCmQ=w660-h854-no?authuser=0" sx={{maxWidth: '100%', height: 'auto'}}/>
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