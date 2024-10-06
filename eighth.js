$(document).ready(function(){
    $(".grid-item").each(function(){
        var itemtitle= $(".grid-item-title");

        $(this).on("mouseenter",function(){
            if($(this).data("title")){
                itemtitle.html("<span>"+$(this).data("title")+"</span>");
                itemtitle.addClass("visible");
            }
        });
    })
});