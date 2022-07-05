import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';

export async function deleteGym(gyms:any) {

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to delete ❌',
		filter: (val) => +val,
	});
	const gym = gyms[index];
	await axios.delete(baseUrl + `/gym/${gym.id}`);
	console.log(`Contact for ${gym.name} has been deleted ✅`);
}