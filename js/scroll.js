$("button[data-about]").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
});

$("a[href='#about']").click(function(e) {
    e.preventDefault(); // Prevents the default action (jumping to the section immediately)
    
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow',
        function() {
            history.replaceState({}, document.title, window.location.origin + window.location.pathname + window.location.search);
        }
    );
});




