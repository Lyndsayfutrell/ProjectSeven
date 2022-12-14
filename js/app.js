//variables 
const alertBanner = document.getElementById("alert");
const trafficCanvas = document.getElementById("traffic-chart");
const dailyCanvas = document.getElementById("daily-chart");
const mobileCanvas = document.getElementById("mobile-chart");
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");
const trafficNav = document.querySelector(".traffic-nav");
const buttonSave = document.getElementById("save");
const buttonCancel = document.getElementById("cancel");
const timeZone = document.getElementById("timezone");
const search = document.getElementById("userField");
const members = ["Victoria Chambers","Dale Byrd","Dawn Wood","Dan Oliver"]
const alerts = document.getElementById("alerts");
const dropdown = document.getElementById("dropdown");
let local = window.localStorage.getItem("val");
let local2 = [window.localStorage.getItem("check0"), window.localStorage.getItem("check1")];
let checkBox = document.getElementsByClassName('box').length;




// JSON.parse(window.localStorage.getItem('timezone',timeZone));   

// Alert
alertBanner.innerHTML = 
`<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>`

alertBanner.addEventListener('click', (e) => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none"
    }
});

//Traffic Chart
trafficNav.addEventListener('click', function (e) {

        const element = e.target;
        const li = document.getElementsByClassName("traffic-nav-link");
        for (i = 0; i < li.length; i++) {
            li[i].classList.remove("active");
        }
        element.classList.add("active");
        if (element.innerHTML === "Hourly") {
            let newLabels = ["0-3","4-7","8-11","12-15","16-19","20-23"];
            let newData = [5, 20, 100, 325, 400, 150];
            updateChart(trafficChart, newData, newLabels);
        }
        else if (element.innerHTML === "Daily") {
            let newLabels = ["S", "M", "T", "W", "T", "F", "S"];
            let newData = [75, 115, 175, 125, 225, 200, 100];
            updateChart(trafficChart, newData, newLabels);
        }

        else if (element.innerHTML === "Weekly") {
            let newLabels = ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
            "4-10", "11-17", "18-24", "25-31"];
            let newData = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
                2500];
            updateChart(trafficChart, newData, newLabels);
        }
        else if (element.innerHTML === "Monthly") {
            let newLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            let newData = [50000, 20000, 30000, 40000, 70000, 15000, 50000, 32000, 25000, 40000, 12000, 35000];
            updateChart(trafficChart, newData, newLabels);
            
        }
    });


    let trafficData = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
        2500],
        backgroundColor: 'rgba(96, 111, 73, .3)',
        borderWidth: 1,
        }]
    };
    
        let trafficOptions = {
            backgroundColor: 'rgba(96, 111, 73, .5)',
            fill: true,
            aspectRatio: 2.5,
            animation: {
            duration: 0
            },
            scales: {
            y: {
            beginAtZero: true
            }
            },
            plugins: {
            legend: {
            display: false
            }
            }
            };
        
        let trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: trafficData,
            options: trafficOptions
            });
    
                
                
        function updateChart (chart,newData, newLabels) {

            chart.data.labels = newLabels;
            chart.data.datasets[0].data = newData;
            chart.update();

        } 

//Daily Chart

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#606F49',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
    });

//Pie Chart

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#a6b98b',
            '#606F49',
            '#DCEBCA'
        ]
    }]
 };


const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position: 'right',
            labels: {
            boxWidth: 20,
            fontStyle: 'bold'
             }
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

// Search feature

send.addEventListener('click', () => {

    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
        alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});




// Search autocomplete

search.addEventListener('click', () => {
    autocomplete(search,members)
});


function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }

  //Notification drop down

  alerts.addEventListener('click', (e) => {
    dropdown.classList.toggle("active");
    alerts.classList.add("hide");

});

//Local storage

buttonSave.addEventListener('click', () => {
    const select = timeZone.options[timeZone.selectedIndex].value
    // window.localStorage.setItem('timezone', JSON.stringify(timeZone));
    window.localStorage.setItem("val",select);
    save();

 
 });
 
 cancel.addEventListener('click', () => {
     window.localStorage.clear();
 
 });

 if (local) {
    timeZone.value = local;
    
 }

 function save() {	
    for(let i = 0; i < checkBox; i++){
        const check = document.getElementById("check" + String(i));
        let local2 = window.localStorage.setItem("check" + String(i), check.checked);
        };	
    }
  
  //for loading
  for(let i = 0; i <= checkBox; i++){
    if(local2[i] === 'true' ){
      var checked = JSON.parse(localStorage.getItem("check" + String(i)));
      document.getElementById("check" + String(i)).checked = checked;
    }
  }