console.log('this is a news website');
// 4c37f951df2b41fb85c6790f4af98929

const generalBtn = document.getElementById('general');
const sportsBtn = document.getElementById('sports');
const businessBtn = document.getElementById('business');
const technologyBtn = document.getElementById('technology');
const entertainmentBtn = document.getElementById('entertainment');
const searchBtn = document.getElementById('searchBtn');

const newsQuery = document.getElementById('newsQuery');         // input tag ki id

const newstype = document.getElementById('newstype');
const newsdetails = document.getElementById('newsdetails');

// array
var newsDataArr = [];

// apis
const API_KEY = '4c37f951df2b41fb85c6790f4af98929';
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";


window.onload = function(){
  newstype.innerHTML = '<h4>Headlines</h4>';
  fetchHeadlines();
};


generalBtn.addEventListener('click', function(){
  newstype.innerHTML = '<h4>General News</h4>';
  fetchGeneralNews();

});
sportsBtn.addEventListener('click', function(){
  newstype.innerHTML = '<h4>Sports News</h4>';
  fetchSportsNews();
});
businessBtn.addEventListener('click', function(){
  newstype.innerHTML = '<h4>Business News</h4>';
  fetchBusinessNews();

});
technologyBtn.addEventListener('click', function(){
  newstype.innerHTML = '<h4>Technology News</h4>';
  fetchTechnologyNews();

});
entertainmentBtn.addEventListener('click', function(){
  newstype.innerHTML = '<h4>Entertainment News</h4>';
  fetchEntertainmentNews();

});
searchBtn.addEventListener('click', function(){
  newstype.innerHTML = '<h4>Headlines</h4>';
  fetchQueryNews();

});


const fetchHeadlines = async()=>{
  const response = await fetch(HEADLINES_NEWS + API_KEY);
  newsDataArr = [];
  if(response.status >=200 && response.status<300){
    const myJSON = await response.json();
    newsDataArr = myJSON.articles;
  }
  else{
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = '<h5>No Data Found.</h5>'
    return;
  }

  displayNews();
}
const fetchGeneralNews = async()=>{
  const response = await fetch(GENERAL_NEWS + API_KEY);
  newsDataArr = [];
  if(response.status >=200 && response.status<300){
    const myJSON = await response.json();
    newsDataArr = myJSON.articles;
  }
  else{
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = '<h5>No Data Found.</h5>'
    return;
  }

  displayNews();
}
const fetchSportsNews = async()=>{
  const response = await fetch(SPORTS_NEWS + API_KEY);
  newsDataArr=[];
  if(response.status >=200 && response.status<300){
    const myJSON = await response.json();
    newsDataArr = myJSON.articles;
  }
  else{
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = '<h5>No Data Found.</h5>'
    return;
  }

  displayNews();
}
const fetchBusinessNews = async()=>{
  const response = await fetch(BUSINESS_NEWS + API_KEY);
  newsDataArr=[];
  if(response.status >=200 && response.status<300){
    const myJSON = await response.json();
    newsDataArr = myJSON.articles;
  }
  else{
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = '<h5>No Data Found.</h5>'
    return;
  }

  displayNews();
}
const fetchTechnologyNews = async()=>{
  const response = await fetch(TECHNOLOGY_NEWS + API_KEY);
  newsDataArr=[];
  if(response.status >=200 && response.status<300){
    const myJSON = await response.json();
    newsDataArr = myJSON.articles;
  }
  else{
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = '<h5>No Data Found.</h5>'
    return;
  }

  displayNews();
}
const fetchEntertainmentNews = async()=>{
  const response = await fetch(ENTERTAINMENT_NEWS + API_KEY);
  newsDataArr=[];
  if(response.status >=200 && response.status<300){
    const myJSON = await response.json();
    newsDataArr = myJSON.articles;
  }
  else{
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = '<h5>No Data Found.</h5>'
    return;
  }

  displayNews();
}
const fetchQueryNews = async()=>{

  if(newsQuery.value ==null)
    return;

  const response = await fetch(SEARCH_NEWS +encodeURIComponent(newsQuery.value) +"&apikey="+API_KEY);
  newsDataArr=[];
  if(response.status >=200 && response.status<300){
    const myJSON = await response.json();
    newsDataArr = myJSON.articles;
  }
  else{
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = '<h5>No Data Found.</h5>'
    return;
  }

  displayNews();
}

function displayNews(){

    newsdetails.innerHTML = '';

    // if(newsDataArr.length ==0){
    //   newsdetails.innerHTML = '<h5>No Data Found...</h5>';
    //   return;
    // }

    newsDataArr.forEach(news => {

      var date = news.publishedAt.split('T');

      var col = document.createElement('div');
      col.className = 'col-sm-12 col-md-4 col-lg-3 p-2 card';

      var card = document.createElement('div');
      card.className = 'p-2';

      var image = document.createElement('img');
      image.setAttribute('height','matchparent');
      image.setAttribute('width' , '100%');
      image.src = news.urlToImage;

      var cardbody = document.createElement('div');

      var newsHeading = document.createElement('h5');
      newsHeading.className = 'card-title';
      newsHeading.innerHTML = news.title;

      var dateHeading = document.createElement('h6');
      dateHeading.className = 'text-primary';
      dateHeading.innerHTML = date[0];

      var discription = document.createElement('p');
      discription.className='text-muted';
      discription.innerHTML = news.description;

      var link = document.createElement('a');
      link.className = 'btn btn-dark';
      link.setAttribute('target', "_blank");
      link.href = news.url;
      link.innerHTML = 'read more';

      cardbody.appendChild(newsHeading);
      cardbody.appendChild(dateHeading);
      cardbody.appendChild(discription);
      cardbody.appendChild(link);

      card.appendChild(image);
      card.appendChild(cardbody);

      col.appendChild(card);

      newsdetails.appendChild(col);
      
    });
}
