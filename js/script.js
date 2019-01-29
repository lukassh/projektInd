function toggleSidebar(){
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementById('main').classList.toggle('wide');
}

document.querySelector('.icon').addEventListener('click', function(e) {
  e.preventDefault();
  toggleSidebar()
});