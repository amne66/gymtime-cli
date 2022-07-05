import { prompt } from "inquirer";
import { addComment } from "../controllers/addCommment";
import { getGyms } from "../controllers/getGyms";
import { login } from "../controllers/login";
import { searchGym } from "../controllers/searchGym";
import { adminQ } from "./adminQ";
import { cityandTypeQ } from "./cityandTypeQ";
export async function Q2() {
const { q2Answer } = await prompt({
    type: 'list',
    name: 'q2Answer',
    message:'login or continue as guest',
    choices: ['Login', 'Guest'],
});
   if (q2Answer === 'Guest') {
      await cityandTypeQ();

}
else if (q2Answer === 'Login') {
await login();     
}
}