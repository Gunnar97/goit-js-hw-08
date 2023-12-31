import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import storage from './storage.js';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setColor('#ff0000');
player.setVolume(0.75);
player.setQuality('720p');


function checkTimeForPlay(data) {
   storage.save('videoplayer-current-time', data.seconds); 
};

player.on('timeupdate', throttle(checkTimeForPlay, 1000));
let checkTime = storage.load('videoplayer-current-time')
if (checkTime) {
   player.setCurrentTime(checkTime);
};





   