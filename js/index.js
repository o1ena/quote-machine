var quoteContainer = document.getElementsByClassName('container')[0];
var quoteText = document.getElementById('info');
var tweetBtn = document.getElementById('tweet-quote');
var url = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";
var resp = '';
var myRequest;
var htmlString;

function showQuotes() {
    myRequest = new XMLHttpRequest();
    myRequest.open('GET', url + Math.random());
    myRequest.onload = function() {
        resp = JSON.parse(myRequest.responseText);
        renderHTML(resp);
    }
    myRequest.send();
}

window.addEventListener('load', function() {
    showQuotes();
});

quoteText.addEventListener('click', function() {
    showQuotes();
});

function renderHTML(data) {
    htmlString = '';
    quoteText.innerHTML = '';
    for (var i = 0; i < data.length; i++) {
        htmlString += '<p>' + data[i].content + '</p>' + '<p>' + ' - ' + data[i].title + '</p>';
    }
    quoteText.insertAdjacentHTML('beforeend', htmlString);
}

tweetBtn.addEventListener('click', function() {
    window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + quoteText.childNodes[1].innerHTML + ' ' + quoteText.childNodes[4].innerHTML);
});