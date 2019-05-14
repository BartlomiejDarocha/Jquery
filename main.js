var nextFunction = function () {
    var inputs =$('.labelContainer').find('input');
    var inputChecked = $('.labelContainer').find('input:checked');
    var nextInput = $('.labelContainer').find('input:checked ~ input:nth(0)');
    if(typeof nextInput.attr('id') === 'undefined') {
        console.log('executed if');
        nextInput = inputs.first();
        nextInput.prop("checked", true);
        inputChecked.prop("checked", false);
    } else {
        inputChecked.prop("checked", false);    
        nextInput.prop("checked", true);
    }
}
var trickiOne  = function (){
    if($(this).next().hasClass('buttonNext')){
        console.log('dobry guzik');
        console.log($(this).next().nextAll('div').last().find('p').text());
        $(this).next().nextAll('div').last().find('p').css('background', 'red');
    }
}



$(document).ready(function() {
    $(document).on("click", ".buttonNext", nextFunction);
    $(document).on("click", 'button', trickiOne);
});