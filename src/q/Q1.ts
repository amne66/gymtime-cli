import { prompt } from "inquirer";
import { Q2 } from "./Q2";

export async function Q1() {
	const { q1Answer } = await prompt({
		type: 'list',
		name: 'q1Answer',
		message: 'to continue press enter',
		choices: [''],
	});
    await Q2();
}