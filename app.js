$(document).ready(function() {
    console.log($)
    const $div = $('<div>')
    // console.log($div)
    $('body').append( $div )
    // console.log($('body'))
    $div.addClass('meat')

    const $h3 = $('<h3>').text('Ostrich')
    $div.append($h3)

    const $newDiv = $('<div>')
    $newDiv.addClass('dairy')
    const $newh3 = $('<h3>').text('Soy Milk')
    $('body').append($newDiv)
    $newDiv.append($newh3)

    const $divs = $('div')
    console.log($divs)
    // $divs.hide()
    const $meat = $('.meat')
    // $meat.hide()

    const $img = $('<img>', {src: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', alt: 'cheese'})
    $('body').prepend($img)

    console.log($divs.eq(2).children())
    $divs.eq(2).children().text('Kohlrabi')

    $('body').css("border", "1em solid red")
})