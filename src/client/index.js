import { submitHandlerForAylien } from './js/submitHandlerForAylien';
import { checkURL } from './js/checkURL';

import './styles/main.scss';
import './styles/base.scss';
import './styles/navigationBar.scss';
import './styles/form.scss';
import './styles/outcome.scss';
import './styles/footer.scss';

console.log(process.env.application_id, "helosdx", process.env.application_key);


export {
    submitHandlerForAylien,
    checkURL
}