import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';
import { updateGymQ } from '../q/updateGymQ';

export async function updateGym(gyms:any) {
    
	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to update',
		filter: (val) => +val,
	});
	const gym = gyms[index];

	const newGym = updateGymQ(gym);

	await axios.patch(baseUrl + `/gym/${gym.id}`, newGym);

	console.log('gym has been updated ✅');
}