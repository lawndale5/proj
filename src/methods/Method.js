

const fetch = require("cross-fetch");

async function fetchData(uname,repo) {
console.log('https://api.github.com/repos/'+uname+'/'+repo+'/commits');
/*const headers = {
    //'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  //  "Accept": "application/vnd.github.v3+json",
  };*/
    const response = await fetch('https://api.github.com/repos/'+uname+'/'+repo+'/commits');
   const data = await response.json();
  
//recent commits (at least 25)
return data.splice(0, 25);
}
module.exports=fetchData;
