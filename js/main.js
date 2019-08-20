let counter = 0
$('.switch').click(() => { 
    if (counter % 2 == 0){ 
        $('.switch').attr('class', 'switch off')
        $('body').attr('class', 'dark')
        $('.status').text('Hey, who turned off the lights?')
    } else if (counter % 1 == 0){ 
        $('.switch').attr('class', 'switch on') 
        $('body').attr('class', 'light')
        $('.status').text("It's so bright in here!")
    }
    counter++;
})