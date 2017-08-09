$.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1', // The URL to the API. You can get this in the API page of the API you intend to consume
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) { console.dir((data.source)); },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "WR0hcUcz0WmshDgQg9WBLOgM5Q1gp1Scbayjsn6ErtQJYqfhvL"); // Enter here your Mashape key
    },
    success: function (data){
        $('.main').prepend("<h3>"+data.quote+"<br /><br />"+data.author+"</h3>")
    }
});
console.log("Hello! I'm Stephen!");
var subtitles= ["Future Neurosurgeon","Young Coder","Co-President of Neighborhood Block Assoc.","Co-founder of The Rusty and River Fields Foundation", "Tennis Player","Lifelong Learner"]
var count = 0;

$(document).ready(function (){
    changeSubtitle();
});

function changeSubtitle() {
    setInterval(function () {
        if (count < subtitles.length - 1) {
            $("#subtitle").html(subtitles[count]);
            count++;
        } else {
            $("#subtitle").html(subtitles[subtitles.length - 1]);
            count = 0;
        }
    }, 1500);
}
