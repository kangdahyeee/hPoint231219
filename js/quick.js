$(function(){
    $(window).scroll(function(){
        var stn = $(document).scrollTop()+95;
        // $(document) 문서객체를 나타냄
        // 문서 맨 위(0)에서부터 스크롤한 거리를 계산하고 95px 더함
        // 스크롤 거리가 100px 이하면 stn값을 100으로 설정
        // 애니메이션을 사용하여 최종 퀵메뉴의 위치를 0.7초동안 이동
        if(stn <= 100) {
            stn = 100;
        }
        $("#quick").stop().animate({top:stn},700); //0.7초
        // 애니메이션의 목표값으로 top 속성을 stn 변수값으로 설정
    });
});