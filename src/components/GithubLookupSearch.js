

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import fetchData  from '../methods/Method';
import { Controller, useForm } from "react-hook-form";

function GithubLookupSearch() {


  const {handleSubmit, control } =useForm();


  const onSubmit= async(values) => {
    console.log(values.userName);
    console.log(values.repoName);
    
    const data =await fetchData(values.userName,values.repoName);
    console.log("data: "+JSON.stringify(data));
    console.log("length "+data.length);
  };


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
          <Controller
          name="userName"
          rules={{ required: 'User Name required' ,validate: value => !!value.trim() || 'User Name no whitespaces'}}
          control={control}
          render={({ field, fieldState: { error }}) => (
            <TextField
              error={error}
              helperText={error ? error.message : null}
              required
             // id="userName"
              label="User Name"
              {...field} 
            />
          )}
          />
          <Controller
          name="repoName"
          rules={{ required: 'Repo Name required' ,validate: value => !!value.trim() || 'Repo Name no whitespaces'}}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              error={error}
              helperText={error ? error.message : null}
              required
             // id="repoName"
              label="Repo Name"

              {...field} 
              />
            )}
            /> 
            <Button variant="outlined" type="submit" size="large" onClick={handleSubmit(onSubmit)}>
                  Search
            </Button> 
        </form>
        </div>
    </Box>
     );
}
export default GithubLookupSearch;
//module.exports=GithubLookup;
