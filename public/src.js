const burger = $('#burger');
const menu = $('#menu');

burger.on('click', function(){
    if (menu.attr('class').includes('hidden')){
        menu.removeClass('hidden');
    } else {
        menu.addClass('hidden');
    }
});