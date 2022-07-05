import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '..';
import { cityandTypeQ } from '../q/cityandTypeQ';

export async function addComment(gymId:any) {
        const comment : String = await prompt(
            {
                type: 'input',
                name: 'comment',
                message: 'Enter your comment',
            },)
            await axios.post(baseUrl + '/comment',
		    
            {
                gymId: gymId,
                ...comment,
            },
            {
                headers: {
                    token:globalData.token,
                },
            }
        );
        console.log('comment added');
        const { i } = await prompt({
            type: 'number',
            name: 'i',
            message: 'Enter 0 to back or 1 to exit',
        }); 
        if(i === 0){
         await cityandTypeQ()
        } else if(i === 1){
            process.exit(0);
        }

}
