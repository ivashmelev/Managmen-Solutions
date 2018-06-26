array_img=[
    "build/img/jefferson-santos-450403-unsplash.png",
    "build/img/Facebook-Post-1.png",
    "build/img/left-arrow.png",
    "build/img/menu (1).png",
    "build/img/right-arrow.png",
    "build/img/Vector Smart Object1.png"
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
    });

    $(".slide-preview").mouseenter(function(){
        width=$(this).css("width");
        height=$(this).css("height");
        top=$(this).css("top");
        left=$(this).css("left");
        position={"top":$(".slide-preview").css("margin-top"), "left":$(".slide-preview").css("margin-left")};
        console.log(position);
        $(".slider-text").css({"display":"block", "width":width, "height":height, "margin-top":position["top"], "margin-left":position["left"]});
    });
    
    $(".slider-text").mouseleave(function(){
            $(".slider-text").css("display", "none");
            $(".label").css("display", "block");
    });

    $("[class='line line-li']>li").click(function(){
        label_text=$(".label").text($(this).text());
        index=$(this).index("li");
        $('#number').text(index+1);
        switch(index){
            case index:
            // console.log(array_img.length);
                if(index+1>array_img.length){
                    $(".slide-preview").attr("src", array_img[0]);
                    $(".slide-active").attr("src", array_img[1]);
                    console.log(index);
                    
                }
                else{
                    console.log(index);
                    $(".slide-active").attr("src", array_img[index]);
                    $(".slide-preview").attr("src", array_img[index+1]);
                }
            break;
        }
    });
    $('.right').click(function(){
        console.log($(this));
        $(".slide-active").attr("src", array_img[index-1]);
    });

    
    

});