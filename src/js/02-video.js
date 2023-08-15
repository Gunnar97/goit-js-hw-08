import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import localStorage from './storage.js';

const iframe = document.querySelector('iframe');
    
const player = new Player(iframe);

// player.setColor('#ff0000');
// player.setVolume(0.75);



function checkTimeForPlay(data) {
   localStorage.save('videoplayer-current-time', data.seconds); 
};

player.on('timeupdate', throttle(checkTimeForPlay, 1000));
player.setCurrentTime(localStorage.load('videoplayer-current-time'));




   