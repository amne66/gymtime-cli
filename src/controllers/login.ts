import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '..';
import { adminQ } from '../q/adminQ';
import { cityandTypeQ } from '../q/cityandTypeQ';

export async function login() {
	try{
	const info = await prompt([
		{
			type: 'input',
			name: 'email',
			message: 'Enter your email 👤',
			filter: (val) => val.toLowerCase(),
		},
		{
			type: 'input',
			name: 'password',
			message: 'Enter your password 🔑 ',
		},
	]);
	if (info.email == 'amne' && info.password == '123') {
       adminQ();	
	 }
    else{
	  const res =await axios.post(baseUrl + '/login',
		{
           ...info
		},);
        if(res.data){
        globalData.token=res.data.token
		const loginType = res.data.type
		if(loginType === 'SignUp'){
		await cityandTypeQ();
		}else if(loginType === 'SignIn'){
        await cityandTypeQ();
		}
		}else{
			console.log('wrong password');	
		process.exit(0);
		}
}
}catch(error){
	console.log(error);
	}
}