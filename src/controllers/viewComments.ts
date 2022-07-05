import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';
import { cityandTypeQ } from '../q/cityandTypeQ';

export async function viewComments(gym:any) {

	const{data: comments} = await axios.get(baseUrl + `/gym/reviews/${gym}`);
	const formattedGyms = comments.map((c: any) => ({comment:c.comment}));
	console.table(formattedGyms);
	console.log(comments.data);
	const { i } = await prompt({
		type: 'number',
		name: 'i',
		message: 'Enter 0 to back or 1 to exit',
	}); 
    if(i === 0){
     await cityandTypeQ()
    } else if(i === 1){
		process.exit(0);
	}}