$( document ).ready( function() {
    $('.tosmodal').addClass('loaded');
    $('.tos-close, .btn').click( function() {
        $('.tosmodal').removeClass('loaded');
    });
});
