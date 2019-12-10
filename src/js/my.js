import $ from 'jquery';
document.addEventListener('DOMContentLoaded', function(){
    // ... code here
    document.addEventListener("click", function (e) {
        alert(e.target);
    });

const Hls = window.Hls;
get_video();
    $('video').on('click', function (e) {
        if (this.paused) {
            get_video(true);
        }
        else {
            this.pause();
        }
        e.preventDefault();
    });

Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function(){
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
});

function get_video(play) {
    var video = document.getElementById('video');
    if(Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource('https://cam.tks-net.ru/nag.omny_m54e_2812-41e047cbf6/index.m3u8?token=2.hhDjiAi8ABoABZjald7mRq532Ihap4CYLwo_mB9Vgx71ij13');
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED,function() {
            if (play) {
                video.play();
            }
        });
    }
        // hls.js is not supported on platforms that do not have Media Source Extensions (MSE) enabled.
        // When the browser has built-in HLS support (check using `canPlayType`), we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video element through the `src` property.
        // This is using the built-in support of the plain video element, without using hls.js.
        // Note: it would be more normal to wait on the 'canplay' event below however on Safari (where you are most likely to find built-in HLS support) the video.src URL must be on the user-driven
    // white-list before a 'canplay' event will be emitted; the last video event that can be reliably listened-for when the URL is not on the white-list is 'loadedmetadata'.
    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = 'https://cam.tks-net.ru/nag.omny_m54e_2812-41e047cbf6/index.m3u8?token=2.hhDjiAi8ABoABZjald7mRq532Ihap4CYLwo_mB9Vgx71ij13';
        video.addEventListener('loadedmetadata',function() {
            if (play) {
                video.play();
            }
        });
    }
}

});