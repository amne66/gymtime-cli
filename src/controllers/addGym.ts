import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';
import { addGymQ } from '../q/addGymQ';


export async function addGym() {
	
	const gym = addGymQ;
	await axios.post(baseUrl + '/gym',
		{
           ... gym,
		},
	
	);

	console.log(`gym ${gym.name}, has been added ✅`);
}