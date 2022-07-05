import { prompt } from 'inquirer';
import { addGym } from '../controllers/addGym';
import { updateGym } from '../controllers/updateGym';
import { viewGyms } from '../controllers/viewGyms';

export async function adminQ() {
    console.log("Hi admin Amani");
    console.log("")

	const { adminQAnswer } = await prompt({
        type: 'list',
		name: 'adminQAnswer',
		message: 'Please choose an action',
		choices: 
        ['1- View gyms',
        '2- Add new gym ',
        '3- Update gym information',
        '4- Delete gym',
        '5- Quit app '],
        filter: (val) => +val[0],

	});

    switch (adminQAnswer) {
		case 1:
        viewGyms();
        break;

		case 2:
        addGym();
        break;

		case 3:
        viewGyms();
        break;

		case 4:
            viewGyms();
			break;

		case 5:
			process.exit(0);

		default:
			break;
	}
    
}
