import axios from "axios";
import { prompt } from "inquirer";
import { baseUrl, globalData } from "..";
import { getGyms } from "../controllers/getGyms";
import { searchGym } from "../controllers/searchGym";
export async function cityandTypeQ() {
try{
const { c, gymType} = await prompt([
    {
        type: 'list',
        name: 'c',
        message: 'Please choose a city, sorry for that we only serve these cities now😢',
        choices: [
        'Riyadh',
        'Dammam',
        'Jeddah',],
    },
    {
        type: 'list',
        name: 'gymType',
        message: 'are you looking for female or male gyms? ',
        choices: ['female','male'],
    },
]);
if(globalData.token !== ''){
await axios.patch(baseUrl + `/user`, 		    
{
    city: c,
    gender:gymType
},
{
    headers: {
        token:globalData.token,
    },
}
);}
const { action} = await prompt({
    type: 'list',
    name: 'action',
    message: 'please choose between view all gyms or search',
    choices: ['view','search'],
});
if (action === 'view') {
 await getGyms(c,gymType);
 }
 if (action === 'search') {
    await searchGym();
 } 
}catch(error){
    console.log(error); }}