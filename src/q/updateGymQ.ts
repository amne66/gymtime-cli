import { prompt } from "inquirer";
export async function updateGymQ(gym:any) {
const newGym = await prompt([
    {
        type: 'input',
        name: 'name',
        message: `Enter new name or press enter to keep it as (${gym.name})`,
        filter: (val) => {
            if (val.trim() === '') return gym.name;
            return val;
        },
    },
    {
        type: 'input',
        name: 'rating',
        message: `Enter new rating or press enter to keep it as (${gym.rating})`,
        filter: (val) => {
            if (val.trim() === '') return gym.rating;
            return val;
        },
    },
    {
        type: 'input',
        name: 'gymInfo',
        message: `Enter new gymInfo or press enter to keep it as (${gym.gymInfo})`,
        filter: (val) => {
            if (val.trim() === '') return gym.gymInfo;
            return val;
        },
    },
    {
        type: 'input',
        name: 'gymType',
        message: `Enter new gymType or press enter to keep it as (${gym.gymType})`,
        filter: (val) => {
            if (val.trim() === '') return gym.gymType;
            return val;
        },
    },
    {
        type: 'input',
        name: 'twitter',
        message: `Enter new twitter or press enter to keep it as (${gym.twitter})`,
        filter: (val) => {
            if (val.trim() === '') return gym.twitter;
            return val;
        },
    },
    {
        type: 'input',
        name: 'websiteLink',
        message: `Enter new website Link or press enter to keep it as (${gym.websiteLink})`,
        filter: (val) => {
            if (val.trim() === '') return gym.websiteLink;
            return val;
        },
    },
    {
        type: 'input',
        name: 'phoneNumber',
        message: `Enter new number or press enter to keep it as (${gym.phoneNumber})`,
        filter: (val) => {
            if (val.trim() === '') return gym.phoneNumber;
            return val;
        },
    },
    {
        type: 'input',
        name: 'price',
        message: `Enter new price or press enter to keep it as (${gym.price})`,
        filter: (val) => {
            if (val.trim() === '') return gym.price;
            return val;
        },
    },
    {
        type: 'input',
        name: 'city',
        message: `Enter new city or press enter to keep it as (${gym.city})`,
        filter: (val) => {
            if (val.trim() === '') return gym.city;
            return val;
        },
    },
    {
        type: 'input',
        name: 'branch',
        message: `Enter new branch or press enter to keep it as (${gym.branch})`,
        filter: (val) => {
            if (val.trim() === '') return gym.branch;
            return val;
        },
    },
]);
return newGym;
}