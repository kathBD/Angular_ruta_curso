import MediaPlayer from "../assets/MediaPlayer"

function Autoplay(){}


Autoplay.prototype.run = function(player){
    player.mute();

    MediaPlayer.play();
}

export default Autoplay