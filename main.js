const playList = [{
    'url': 'http://ample-zeno-13.radiojar.com/8wv4d8g4344tv?rj-ttl=4&rj-token=AAABZjEcF45_HN5c3IyI45IaYoj0UcUdRlcsYdoQJGjmJ1ZbFnIVQwhttp://incompetech.com/music/royalty-free/mp3-royaltyfree/Hitman.mp3',
    'thumb': 'data:image/jpeg;base64,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',
    'channelName': 'Radio Today',
    'slogan': 'The 1st & #1 Private Radio Station',
    'frequency': '89.6'
}, {
    'url': 'http://ample-zeno-20.radiojar.com/aqs8z2kn944tv?rj-ttl=5&rj-token=AAABaSY2VTzcF82IE1E_2gEnqO8gS66yVisNw6r8OXKqTqWnQdKQ8Q',
    'thumb': 'data:image/png;base64,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',
    'channelName': 'ABC Radio',
    'slogan': 'FRV BLV (nobodycars remux)',
    'frequency': '89.6'
}, {
    'url': 'http://ample-zeno-08.radiojar.com/umq9q5uuva5tv?rj-ttl=5&rj-token=AAABZiwrUm88lm69tRVB9q_I-fOaELLJkYlJZEweAXQ0wUIxwTBSPg',
    'thumb': 'https://assetsds.cdnedge.bluemix.net/sites/default/files/styles/big_6/public/feature/images/sadhin.jpg?itok=O7m0ZGqh',
    'channelName': 'Radio Shadhin',
    'slogan': 'Relax Company and Cocock',
    'frequency': '92.4'
}, {
    'url': 'http://103.253.47.173:8000/;stream/;',
    'thumb': 'http://ekattor.fm/assets/images/play480.png',
    'channelName': 'Radio 71',
    'slogan': 'Williamina Black',
    'frequency': '98.4'
}, {
    'url': 'http://149.56.195.94:8545/stream?type=http&nocache=17416',
    'thumb': 'http://www.radiobhumi.fm/assets/img/basic/bhumilogo.png',
    'channelName': 'Radio Bhumi',
    'slogan': 'Wall of Fame',
    'frequency': '92.8'
}, {
    'url': 'http://118.179.219.244:8000/;stream',
    'thumb': 'http://dhakafm904.com/assets/images/logo.png',
    'channelName': 'Dhaka FM',
    'slogan': 'Wall of Fame',
    'frequency': '90.4'
}, {
    'url': 'http://103.23.42.189:6020/;stream',
    'thumb': 'http://banglaradio.fm/asset/frontend/images/liveradio/logo.png',
    'channelName': 'Bangla Radio',
    'slogan': 'Wall of Fame',
    'frequency': '95.2'
}, {
    'url': 'http://s3.myradiostream.com:14498/;stream',
    'thumb': 'http://peoplesradio.fm/wp-content/uploads/2019/12/1464080415_pr_logo.png',
    'channelName': 'Peoples Radio',
    'slogan': 'Wall of Fame',
    'frequency': '91.6'
}, {
    'url': 'http://182.160.110.180:1020/;stream',
    'thumb': 'http://radiodhoni.fm/wp-content/uploads/2017/04/Radio-Dhoni-Logo-100-100.png',
    'channelName': 'Radio Aamar',
    'slogan': 'Wall of Fame',
    'frequency': '91.2'
}, {
    'url': 'http://str.radiocapital.fm:8000/stream',
    'thumb': 'http://www.radiocapital.fm/wp-content/uploads/2017/02/capital-FM-Logo-png-1.png',
    'channelName': 'Radio Capital',
    'slogan': 'Wall of Fame',
    'frequency': '94.8'
}, {
    'url': 'http://162.254.149.187:9300/;',
    'thumb': 'https://spicefmbd.com/assets/img/logo-big.png',
    'channelName': 'Spice FM BD',
    'slogan': 'Wall of Fame',
    'frequency': '96.4'
}, {
    'url': 'http://128.199.184.111:11331/stream',
    'thumb': 'http://radiodhol.fm/img/Radio-Dhol-Logo.png',
    'channelName': 'Radio Dhol',
    'slogan': 'Wall of Fame',
    'frequency': '94.0'
}, {
    'url': 'http://45.64.135.88:8000/stream1',
    'thumb': 'http://colours.fm/assets/images/beep.png',
    'channelName': 'Colours FM',
    'slogan': 'Wall of Fame',
    'frequency': '101.6'
}, {
    'url': 'http://118.179.215.45:8000/;stream.mp3',
    'thumb': 'http://www.radioamber.com/media/images/logo.png',
    'channelName': 'Radio Amber',
    'slogan': 'Wall of Fame',
    'frequency': '102.4'
}, {
    'url': 'http://103.118.79.134:8000/',
    'thumb': 'http://radiodinraat.fm/wp-content/uploads/2018/03/Untitled-Up2.gif',
    'channelName': 'Radio Din Raat',
    'slogan': 'Wall of Fame',
    'frequency': '93.6'
}, {
    'url': 'http://23.227.169.206:9300/;stream',
    'thumb': 'http://cityfm96bd.com/assets/images/logo.png',
    'channelName': 'City FM',
    'slogan': 'Wall of Fame',
    'frequency': '96.0'
}];

let selectedMusic = Math.floor(Math.random() * Math.floor(playList.length - 1));
const AudioPlayer = new Audio(playList[selectedMusic].url);
$('document').ready(function () {
    if(window.innerHeight < 650){
        $('.player').css('height','100vh');
    }
    let i = 0;
    playList.forEach(element => {
        $('#ChannelList ul').append('<li onClick="playSelectedRadio(' + i + ')"> <img class = "radio-channel-logo" src="' + element.thumb + '" />' + element.channelName + '</li>');
        i++;
    });
    playMusic();
});

$('#PlayButton').click(() => {
    playMusic();
});

$('#NextMusic').click(() => {
    selectedMusic = selectedMusic < playList.length - 1 ? selectedMusic + 1 : 0;
    playMusic();
});

$('#PreviousMusic').click(() => {
    selectedMusic = selectedMusic > 0 ? selectedMusic - 1 : playList.length - 1;
    playMusic();
});

const playMusic = () => {
    $('.RadioChannelName').html(playList[selectedMusic].channelName);
    $('.Frequency').html(playList[selectedMusic].frequency);
    $('#ChannelList ul li').removeClass('activeRadioChannel');
    $($('#ChannelList ul').children()[selectedMusic]).addClass('activeRadioChannel');
    if(!AudioPlayer.paused){
        AudioPlayer.pause();
        AudioPlayer.currentTime = 0;
        $('#PlayButton i').removeClass('fa-pause');
        $('#PlayButton i').addClass('fa-play');
        $('.player').removeClass('playing');
        $('.player').addClass('paused');
    } else {
        AudioPlayer.src = playList[selectedMusic].url;
        AudioPlayer.play();
        $('#PlayButton i').removeClass('fa-play');
        $('#PlayButton i').addClass('fa-pause');
        $('.cover img').attr('src', playList[selectedMusic].thumb);
        $('.player').removeClass('paused');
        $('.player').addClass('playing');
    }
};

const playSelectedRadio = (chanelNumber) => {
    try{
        AudioPlayer.pause();
        selectedMusic = chanelNumber;
        // AudioPlayer.src = playList[selectedMusic].url;
        playMusic();
    } catch ( err ) { console.log(err) }
}