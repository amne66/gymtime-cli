import { Q1 } from "./q/Q1";

export const baseUrl = 'http://127.0.0.1:3000';
export const globalData: any = {
	token: '',
};
async function start() {
	/// Display welcome message
	console.log();
	console.log();
	console.log('Welcome to Gym Time  🏋️');
	console.log();
	console.log();
	console.log();
	console.log();
	console.log();
	console.log("Healthy life Happy life 💃🏼");
	console.log();
	console.log();
	await Q1();
}


start();
