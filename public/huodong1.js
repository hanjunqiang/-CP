var isClose = false;
(function () {
    init();
    bindEvent();
    var swiper = new Swiper(".swiper-container", {pagination: ".swiper-pagination", paginationClickable: true, loop: true, direction: "vertical", onSlideChangeEnd: onSlider})
})();
function onSlider(swiper) {
    var dataP = parseInt($(".swiper-slide-active").attr("dataP"));
    if (dataP > 1) {
        var prePage = dataP - 1;
        $(".page" + prePage + "wrap").hide()
    } else {
        var prePage = dataP + 1;
        $(".page" + prePage + "wrap").hide()
    }
    $(".page" + dataP + "wrap").show()
};

function init(){
    $('#page2btn').attr('href',config.page2);
    $('#page3btn').attr('href',config.page3);
    $('#page4btn').attr('href',config.page4);
    $('#page5btn').attr('href',config.page5);
    $('#page6btn').attr('href',config.page6);
    $('#page7btn').attr('href',config.page7);
}

function bindEvent(){
    $('#audio_btn').bind('click',function(){
        if(isClose === false){
            $('#audio_btn').removeClass('play_yinfu');
            $('#audio_btn').addClass('off');
            $('#yinfu').removeClass('rotate');
            document.getElementById('media').pause();
            isClose = true;
        }else{
            $('#audio_btn').addClass('play_yinfu');
            $('#audio_btn').removeClass('off');
            $('#yinfu').addClass('rotate');
            document.getElementById('media').play();
            isClose = false;
        }

    })
}