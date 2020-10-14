

function clicToPlay() {
    var myAudio = document.getElementById("myaudio");
    $(myAudio)[0].play();
    $("#playbutton").hide();
    $(".pause-icon").fadeIn();
}

function clicToPause() {
    var myAudio = document.getElementById("myaudio");
    $(myAudio)[0].pause();
    $("#playbutton").fadeIn();
    $(".pause-icon").hide();
}


slider.oninput = () => {
    document.getElementById("myaudio").volume = ~~(slider.value) * 0.01;

};

var songTitle = document.getElementById('title')

const url = `https://server-26.stream-server.nl:2000/json/stream/HetStamcafe`

window.setInterval(function () {
    axios.get(url)
        .then(({ data }) => {
            let title = {
                nowplaying: data.nowplaying,
                coverart: data.coverart
            }
            console.log(title.coverart)
            console.log(title.nowplaying)

            setTitle(title);


        })
        .catch(e => {
            console.log(e)
        })

    function setTitle(title) {
        songTitle.innerHTML = title.nowplaying;
        if (title.coverart) {
            document.getElementById("myImg").src = title.coverart
        } else
            document.getElementById("myImg").src = './../img/radio-img.png'

    }
}, 1000);
