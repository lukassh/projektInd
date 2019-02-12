//Hide sidebar 
var toggleIcon = document.getElementById('icon');
toggleIcon.addEventListener('click', function() {
  toggleSidebar();
});

function toggleSidebar(){
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementById('main').classList.toggle('wide');
}
/*
document.querySelector('#icon').addEventListener('click', function(e) {
  e.preventDefault();
  toggleSidebar()
});
*/
// Graph 

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3
        datasets: [{
            // 4
            label: "Signups",
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
            // 7
            hidden: true,
        }]
    },
});

// Modal funciones
var openModalMessenger = document.getElementById('openModalMessenger');
openModalMessenger.addEventListener('click', function() {
  openModal('#modalMessage');
})

var openModalLogin = document.getElementById('openModalLogin');
openModalLogin.addEventListener('click', function() {
  openModal('#modalLogin');
})

var openModalQuit = document.getElementById('openModalQuit');
openModalQuit.addEventListener('click', function() {
  openModal('#modalQuit');
})

var openMobileMessenger = document.getElementById('openModalMobMessenger');
openMobileMessenger.addEventListener('click', function() {
  openModal('#modalMessage');
})

var openMobileLogin = document.getElementById('openModalMobLogin');
openMobileLogin.addEventListener('click', function() {
  openModal('#modalLogin');
})

var openMobileQuit = document.getElementById('openModalMobQuit');
openMobileQuit.addEventListener('click', function() {
  openModal('#modalQuit');
})

function closeModal() {
  document.getElementById('overlay').classList.remove('show')
};


function closeModal() {
  document.getElementById('overlay').classList.remove('show')
};

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    closeModal()
  })
});

document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal()
  }
});

document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal()
  }
});

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay').classList.add('show')
  document.querySelector(modal).classList.add('show')
};


// Nav Sidebar
// Get container element
var btnContainer = document.getElementById("navSidebar");

// Get all buttons 
var btns = btnContainer.getElementsByClassName("navChoise");



for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.querySelector(".activenav");
    current.classList.remove("activenav");
    this.classList.add("activenav");
    document.querySelector(".sectionsWindow.sectActive").classList.remove('sectActive');
    var newSlide = this.children[0].getAttribute('href')
    document.querySelector(newSlide).classList.add('sectActive')
  });
};


// Range 
var track = document.getElementById('ranger');


function status(valueAkt){
  var value = valueAkt;
  var valueMax = track.getAttribute('max');
  var valueMin = track.getAttribute('min');
  var progressProcent =  ( value / valueMax ) * 100 ;
  console.log(progressProcent);
  var progressBar = document.querySelector('.progress-value');
  progressBar.style = ('width: ' + progressProcent + '%');  
  var result = document.getElementById('resultRange');
  resultRange.innerHTML = value;
};

track.addEventListener('click', function() {
  status(track.value);
}) 
