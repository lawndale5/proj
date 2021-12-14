

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import fetchData  from '../methods/Method';
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import DataTable from 'react-data-table-component';

function GithubLookupSearch() {


  const {handleSubmit, control } =useForm();
  const [result, setResult] = useState();
  const columns = [
    {
        name: 'Author',

        selector: 'name',
        //sortable: true,
        //right: true,
       wrap: true,
    },
    {
        name: 'SHA',

        selector: 'sha',
        //sortable: true,
        //right: true,
       wrap: true,
    },
    {
      name: 'Message',

      selector: 'message',
      //sortable: true,
      //right: true,
     wrap: true,
    },
];
  const onSubmit= async(values) => {
    console.log("name "+values.userName);
    console.log("repo "+values.repoName);
    
    const data =await fetchData(values.userName,values.repoName);
    console.log("data: "+JSON.stringify(data));
    console.log("length "+data.length);
    setResult(data);
  };


    return (  
      <Box 
      component="form"
      sx={{
    
        '& .MuiTextField-root': { m: 2, width: '25ch' ,},
        '& .MuiButton-root': { m: 3, width: '25ch' },
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
              error={error ? true : false}
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
              error={error ? true : false}
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
        {result &&  <DataTable
            columns={columns}
            data={result}
        />}
    </Box>
     );
}
export default GithubLookupSearch;
//module.exports=GithubLookup;
