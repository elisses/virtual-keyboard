import 'bootstrap';
import '../css/style.scss';
import changeBackgroundBody from './changeBackgroundBody';
import getapiImage from './imageApi';
import getLocation from './getLocation'
import setWeather from './setWeather'
import htmlWeather from './htmlWeather'
import htmlLocal from './htmlLocal';
import temperature from './temperature'
import getVoice from './getVoice'
const body = document.querySelector('body');
htmlLocal(body);
htmlWeather(body);
getapiImage(body);
changeBackgroundBody(body);
getLocation(body);
setWeather();
temperature();
getVoice(body);