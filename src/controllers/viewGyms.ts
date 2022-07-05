import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';
import { adminQ } from '../q/adminQ';
import { deleteGym } from './deleteGym';
import { updateGym } from './updateGym';
export async function viewGyms() {
    try{
    const { city, gymType } = await prompt([
        {
            type: 'list',
            name: 'city',
            message: 'Please choose a city',
            choices: [
            'Riyadh',
            'Dammam',
            'Jeddah',],
        },
        {
            type: 'list',
            name: 'gymType',
            message: 'female/male gyms? ',
            choices: ['female','male'],
        },
    ]);
	const { data: gyms } = await axios.get(baseUrl + `/gyms/${city}/${gymType}`);
	const formattedGyms = gyms.map((c: any) => ({name:c.name}));
	console.table(formattedGyms);
    const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to view more details',
		filter: (val) => +val,
	});
	const gym = gyms[index];
	 const dgym = await axios.get(baseUrl + `/gyms/details/${gym.id}`);
     console.log(dgym.data);
     const { i } = await prompt({
		type: 'number',
		name: 'i',
		message: 'Enter 1 to back or 0 to delete or 2 to update',
	}); 
    if(i === 1){
    adminQ();
    }else if(i === 0){
    deleteGym(gyms);
    }else if(i === 2){
    updateGym(gyms);
    }
}catch(error){
console.log(error);
}}