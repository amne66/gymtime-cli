import { prompt } from "inquirer";
export async function addGymQ() {
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
		},])
return gym;}
