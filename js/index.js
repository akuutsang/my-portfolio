import newIcon from './dark.js';
import updateTime from './clock.js';
import externalCards from './utils.js';
import { cardDisplay, newButton } from './more.js';

newIcon();
updateTime();
externalCards();
newButton.addEventListener('click', cardDisplay);
