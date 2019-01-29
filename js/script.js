function toggleSidebar(){
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementById('main').classList.toggle('wide');
}

document.querySelector('.icon').addEventListener('click', function(e) {
  e.preventDefault();
  toggleSidebar()
});



var details = document.getElementsByTagName('#details'); 
var links = document.getElementsByTagName('#links'); 
var banners = document.getElementsByTagName('#banners'); 
var personal-data = document.getElementsByTagName('#personal-data'); 
var payout = document.getElementsByTagName('#payout'); 
var postback = document.getElementsByTagName('#postback'); 
var main = document.getElementsByTagName('#general-search'); 

details.addEventListener('click', function() {
	choise.preventDefault();
	menuSidebar();
});

function menuSidebar(choise){
	
	choise.classList.toggle('active-cell');
}