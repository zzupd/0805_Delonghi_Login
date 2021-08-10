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


    // 이메일/멤버십 번호 멀티탭 구현 시작
    $("#multiTabArea button").click(function(){

        // 1. 버튼 모두 초기상태로 만듬
        $("#multiTabArea button").css({
            "color": "#666",
            "border": "1px solid #aaa"
        });
        // 2. 클릭한 버튼(this)의 스타일 적용
        $(this).css({
            "color": "#3289e8",
            "border": "1px solid #3289e8",
            "border-bottom-color": "#fff"
        });

        // 3. 클릭하지 않은 버튼의 스타일 적용        
        var txt = $(this).text();
        var cssAttr;
        var placeholderTxt;
        if (txt == "이메일") {
            cssAttr = "border-left";
            placeholderTxt = "E-mail";
        } else {
            cssAttr = "border-right";
            placeholderTxt = "Membership Number";
        }

        $(this).siblings("button").css({
            cssAttr: "none",
            "border-bottom": "1px solid #3289e8"
        });


        // 사용자 아이디(이메일, 멤버십 번호) placeholder 적용
        // attr 메서드는 html 요소의 속성을 참조하는 기능
        // JS에서 참조한다는 말은 값을 입력, 조회, 수정, 삭제 한다는 것을 의미함
        $("#userID").attr("placeholder", placeholderTxt);
        


    });
    // 이메일/멤버십 번호 멀티탭 구현 끝

    // if(조건식) {
    //     조건식이 맞으면 실행
    // }

//   border-left: none;
//   border-bottom: 1px solid #3289e8;

});