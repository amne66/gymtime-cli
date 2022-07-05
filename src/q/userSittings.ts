// import axios from 'axios';
// import { prompt } from 'inquirer';
// import { baseUrl } from '..';
// import { getUserSittings } from '../controllers/getUserSittings';
// import { cityandTypeQ } from './cityandTypeQ';

// export async function userSittings() {

// 	const { sittings } = await prompt({
// 		type: 'list',
// 		name: 'sittings',
// 		message: 'do you want to complete with the same sittings',
// 		choices: ['yes','no'],
// 	});
// 	if (sittings == 'yes'){
//        await getUserSittings();
// 	}else if(sittings == 'no'){
// 		await cityandTypeQ();
// 	}
	
// }