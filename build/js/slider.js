array_img=[
    "build/img/jefferson-santos-450403-unsplash.png",
    "build/img/Facebook-Post-1.png",
    "build/img/left-arrow.png",
    "build/img/menu (1).png",
    "build/img/right-arrow.png",
    "build/img/Vector Smart Object1.png"
]

array_label=[
    "Разработка",
    "Маркетинговые исследования",
    "Дизайн",
    "Проведение ICO",
    "Контент",
    "Digital-Маркетинг"
]


// $(".slide-active").css("width");
$(document).ready(function(){
    $(".slide-active").mouseenter(function(){
        width=$(this).css("width");
        height=$(this).css("height");
        top=$(this).css("top");
        left=$(this).css("left");
        position={"top":$(".slide-active").css("margin-top"), "left":$(".slide-active").css("margin-left")};
        console.log(position);
        $(".slider-text").css({"display":"block", "width":width, "height":height, "margin-top":position["top"], "margin-left":position["left"]});
        $(".label").css("display", "none");
        $('.slider-text h1').text($('.label').text());
        $('.slider-text p').text($('.undertext').text());
    });

    $(".slide-preview").mouseenter(function(){
        width=$(this).css("width");
        height=$(this).css("height");
        top=$(this).css("top");
        left=$(this).css("left");
        position={"top":$(".slide-preview").css("margin-top"), "left":$(".slide-preview").css("margin-left")};
        console.log(position);
        $(".slider-text").css({"display":"block", "width":width, "height":height, "margin-top":position["top"], "margin-left":position["left"]});
        $('.slider-text h1').text($('.label').text());
        $('.slider-text p').text($('.undertext').text());
    });
    
    $(".slider-text").mouseleave(function(){
            $(".slider-text").css("display", "none");
            $(".label").css("display", "block");
    });

    // $('.line').click(function(){
    //     if($("[class='line']").hasClass('line line-li')){
    //         $(this).removeClass("line-li");
    //     }
    //     $(this).addClass("line line-li");
    // });

    $("[class='line']>li").click(function(){
        // $("[class='line line-li']").addClass("line line-li");
        label_text=$(".label").text($(this).text());
        index=$(this).index("li");
        hover_index=index+1;
        $('.line.line-li').removeClass("line-li");
        $('.line:nth-child('+hover_index+')').addClass("line line-li");
        $('#number').text(index+1);
        switch(index){
            case index:
                if(index>=array_img.length-1){
                    $(".slide-preview").attr("src", array_img[0]);
                    $(".slide-active").attr("src", array_img[index]);
                }
                else{
                    $(".slide-active").attr("src", array_img[index]);
                    $(".slide-preview").attr("src", array_img[index+1]);
                }
            break;
        }
    });
    $('.right').click(function(){
        number=$('#number').text();
        $('.label').text()
        i=Number(number);
        i_prew=Number(number);
        i_label=Number(number);
        $(".slide-active").attr("src", array_img[i++]);
        $(".slide-preview").attr("src", array_img[i_prew+1]);
        $('.label').text(array_label[i_label++]);
        $('.line.line-li').removeClass("line-li");
        $('.line:nth-child('+i+')').addClass("line line-li");

        // for(j=0; j<array_img.length; j++){
        //     if($('.line:nth-child('+i+')').hasClass("line line-li")){
        //         $('.line:nth-child('+i+')').removeClass("line-li");
        //     }
        // }
        if(i==array_img.length){
            // i=
            $(".slide-preview").attr("src", array_img[0]);
            $('.label').text(array_label[array_label.length-1]);
            $('.line.line-li').removeClass("line-li");
            $('.line:nth-child('+i+')').addClass("line line-li");
        }

        str=String(i);
        $('#number').text(str);
        if (i>array_img.length){
            $('#number').text(1);
            $(".slide-active").attr("src", array_img[0]);
            $(".slide-preview").attr("src", array_img[1]);
            $('.label').text(array_label[0]);
            $('.line.line-li').removeClass("line-li");
            $('.line:nth-child('+i+')').addClass("line line-li");
        }
    });

    $('.left').click(function(){
        number=$('#number').text();
        i=Number(number);
        i_prew=Number(number);
        i_label=Number(number);
        $('.slide-active').attr("src", array_img[--i-1]);
        $('.slide-preview').attr("src", array_img[i_prew-1]);
        $('.label').text(array_label[--i_label-1]);
        $('.line.line-li').removeClass("line-li");
        $('.line:nth-child('+i+')').addClass("line line-li");
        console.log(i);
        str=String(i);
        $('#number').text(str);
        if(i<=0){
            i=array_img.length;
            $('.slide-active').attr("src", array_img[i-1]);
            $('.slide-preview').attr("src", array_img[0]);
            $('.label').text(array_label[array_label.length-1]);
            $('.line.line-li').removeClass("line-li");
            $('.line:nth-child('+i+')').addClass("line line-li");
            str=String(i);
            $('#number').text(str);
        }
    });

    

    $('.line a').focus(function(){
        index_a=$(this).index();
        $('.line.line-a').removeClass("line-a");
        $('.line:nth-child('+index_a+')').addClass("line line-a");
        console.log($(this));
    });
    

});