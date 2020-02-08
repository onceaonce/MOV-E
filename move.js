$(document).ready(function(){
    $('.right').click(function(){
        $('#box').css(
         { left:"+=120px" }
        );
    });
    $('.left').click(function(){
        $('#box').css(
         { left:"-=120px" }
        );
    });
    $('.down').click(function(){
        $('#box').css(
         { top:"+=120px" }
        );
    });
    $('.up').click(function(){
        $('#box').css(
         { top:"-=120px" }
        );
    });
});

$(document).keydown(function(e){
    //console.log(e.which};
        var key = e.which;
    /** left */
        var left_keys=[65,37];
    if(left_keys.includes(key)) {
        $(".left").click();
    }
    var up_keys=[87,38];
    if(up_keys.includes(key)) {
        $(".up").click();
    }
    var right_keys=[68,39];
    if(right_keys.includes(key)) {
        $(".right").click();
    }
    var down_keys=[83,40];
    if(down_keys.includes(key)) {
        $(".down").click();
    }
});

