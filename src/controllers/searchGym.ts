import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';
import { cityandTypeQ } from '../q/cityandTypeQ';

export async function searchGym() {
	const query = await prompt(
		{
			type: 'input',
			name: 'name',
			message: 'Enter gym name to search',
		},
	);

	const { data: gyms } = await axios.get(baseUrl + '/gym', {
		params: query,
	});
	const formattedgym = gyms.map((c: any) => ({ name: c.name}));
	console.table(formattedgym);

    const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to view more details',
		filter: (val) => +val,
	});
	const gym = gyms[index];
	 const dgym = await axios.get(baseUrl + `/gym/details/${gym.id}`);
     console.log(dgym.data);

    const { back } = await prompt({
		type: 'number',
		name: 'back',
		message: 'Enter 0 to back',
	}); 
    if(back === 0){
     await cityandTypeQ();    }
}