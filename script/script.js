$(function(){

    $(".mainLi").mouseover(function(){
        $(this).children("ul").stop().show();
        $("#subMenuBG").stop().show();
    });
    $(".mainLi").mouseout(function(){
        $(this).children("ul").stop().hide();
        $("#subMenuBG").stop().hide();
    });

    // GNB 서브메뉴 표시하지 않음 시작
    // 해당 CSS에서 display: none과 display: flex가 
    // 동시에 적용되어야 하므로 CSS, jQuery에서
    // 각각 구현하여 코드꼬임 현상 방지 => CSS에서
    // 함께 구현하지 말것
    $(".subMenu").css({"display": "none"});
    // GNB 서브메뉴 표시하지 않음 끝

    // 헤더 영역  Lnb메뉴 하이라이트 효과
    $("#headerLnb a").mouseover(function(){
        $(this).siblings("span").css({"visibility": "visible"});
    });
    $("#headerLnb a").mouseout(function(){
        $(this).siblings("span").css({"visibility": "hidden"});
    });

});