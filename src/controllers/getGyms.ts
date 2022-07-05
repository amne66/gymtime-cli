import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '..';
import { Q2 } from '../q/Q2';
import { addComment } from './addCommment';
import { viewComments } from './viewComments';

export async function getGyms(city: any, gymType: any) {
    try{
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
		message: 'Enter 0 to back or 1 to view comments or 2 to add comment',
	}); 
    if(i === 0){
        Q2();
    } else if(i === 1){
		await viewComments(gym.id);
    }else if(i===2 && globalData.token !== ''){
        await addComment(gym.id);
    }else if(i===2 && globalData.token === ''){
        console.log('you should login to add a comment');     
    }
}catch(error){
console.log(error);
}
}