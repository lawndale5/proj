

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function GithubLookupSearch() {
  
    return (  
      <Box 
      component="form"
      sx={{
    
        '& .MuiTextField-root': { m: 1, width: '25ch' ,},
        '& .MuiButton-root': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
        <div>
        <form  autoComplete="off">
            <TextField
        
              required
              id="userName"
              label="User Name"

            />

            <TextField
                    
              required
              id="repoName"
              label="Repo Name"

            />  
            <Button variant="outlined" type="submit" size="large" >
                  Search
            </Button> 
        </form>
        </div>
    </Box>
     );
}
export default GithubLookupSearch;
//module.exports=GithubLookup;
