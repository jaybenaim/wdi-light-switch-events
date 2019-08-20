let counter = 0
$('.switch').click(() => { 
    if (counter % 2 == 0){ 
        $('.switch').attr('class', 'switch off light')
    } else if (counter % 1 == 0){ 
        $('.switch').attr('class', 'switch on dark') 
    }
    counter++;
})