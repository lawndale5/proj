import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';




function GithubLookupBar() {
    return (  
 
    <Box  sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            
            <Typography  variant="h5" gutterBottom component="div" sx={{ p: 1, pb: 0 }}>
              Github Lookup
            </Typography>

          </Toolbar>

        </AppBar>

      </Box>
 

     );
}
export default GithubLookupBar;
//module.exports=GithubLookup;
