function quoteloop(){
    $.ajax({
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1', // The URL to the API. You can get this in the API page of the API you intend to consume
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {}, // Additional parameters here
        dataType: 'json',
        error: function(err) { alert(err); },
        beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "WR0hcUcz0WmshDgQg9WBLOgM5Q1gp1Scbayjsn6ErtQJYqfhvL"); // Enter here your Mashape key
        },
        success: function (data){
            $('.main').prepend("<h3 id='subtitle'>"+data.quote+"<br /><br />"+data.author+"</h3>")
        }
    })
}
console.log("Hello! I'm Stephen!");
$(document).ready(function (){
    time();
    setup();
});
function setup(){
    $('.name').slideUp(0);
    $('.name').slideDown('slow');
    $('#shot').fadeIn('slow');
}
function time(){
    setInterval(function() {
        quoteloop()
        $('#subtitle').remove();
    },2000)
}
