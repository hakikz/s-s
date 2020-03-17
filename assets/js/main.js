$(document).ready(function(){
    $(".img-area").css('filter', 'blur(0px)', 'z-index', '2');
    $(".load-icon").css('display', 'none', 'z-index', '1');
    $('.gallery-thumb img').on("click", function(){
        var src = $(this).data('src');
        $(".img-area").css('filter', 'blur(8px)', 'z-index', '2');
        $(".load-icon").css('display', 'block', 'z-index', '3');
        // $(".img-area").attr('src', 'assets/images/loading.gif');
        setTimeout(function() {
            $(".img-area").css('filter', 'blur(0px)', 'z-index', '3').attr('src', src);
            $(".load-icon").css('display', 'none', 'z-index', '2');
        }, 1000);
    });
});