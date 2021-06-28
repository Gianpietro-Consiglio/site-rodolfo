$('.seta1').click(function(){
    // aplica animacao
    $('body, html').animate({
        scrollTop: 0
    },2000);
});

$('.roll').click(function(){
    //posição vertical do item clicado
    var id = $(this).attr('href');
    var destino = $(id).offset().top;
    $('html, body').animate({
        scrollTop: destino,
    });
});