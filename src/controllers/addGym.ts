import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';


export async function addGym() {
	const gym = await prompt([
		{
			type: 'input',
			name: 'name',
			message: 'Enter gym name  ',
		},
		{
			type: 'input',
			name: 'rating',
			message: 'Enter gym rating ',
		},
        {
			type: 'input',
			name: 'gymInfo',
			message: 'Enter gym information',
		},
        {
			type: 'input',
			name: 'gymType',
			message: 'Enter gym type female/ male ',
		},
        {
			type: 'input',
			name: 'twitter',
			message: 'Enter gym twitter account',
		},
        {
			type: 'input',
			name: 'websiteLink',
			message: 'Enter gym website Link',
		},
        {
			type: 'input',
			name: 'phoneNumber',
			message: 'Enter gym number',
		},
        {
			type: 'input',
			name: 'price',
			message: 'Enter gym price',
		},
        {
			type: 'input',
			name: 'city',
			message: 'Enter gym city',
		},
		{
			type: 'input',
			name: 'branch',
			message: 'Enter gym branches',
		},
	])

	await axios.post(baseUrl + '/gym',
		{
           ... gym,
		},
	
	);

	console.log(`gym ${gym.name}, has been added ✅`);
}