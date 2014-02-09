$(function(){

    var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
        prop,
        el = document.createElement('div');

    for(var i = 0, l = props.length; i < l; i++) {
        if(typeof el.style[props[i]] !== "undefined") {
            prop = props[i];
            break;
        }
    }

    if(window.location.hash === "#clock") {
        startAnalogClock();
        $('section').fadeOut();
    } else {
        $('#start').click(function() {
            startAnalogClock();
            $('section').fadeOut();
            $('#experiment').fadeIn();
        });
    }

    $("#openBonus").click(function(){
        $("#openBonus").fadeOut();
        $("#start").fadeOut();
        $("#bonusPoints").fadeIn();
    });


    function startAnalogClock() {
        
        var angle = 360/60,
            timerEl = $("#dataEl"),
            hour = (timerEl.attr('data-hours') % 12),
            minute = timerEl.attr('data-minutes'),
            second = timerEl.attr('data-seconds'),
            hourAngle = (360/12) * hour + (360/(12*60)) * minute;
           
            
        if(prop) {
            $('#minute')[0].style[prop] = 'rotate('+angle * minute+'deg)';
            $('#second')[0].style[prop] = 'rotate('+angle * second+'deg)';
            $('#hour')[0].style[prop] = 'rotate('+hourAngle+'deg)';
        }
    }

    
    
});
