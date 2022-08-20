//variables 
const alertBanner = document.getElementById("alert");
const trafficCanvasHourly = document.getElementById("traffic-chart1");
const trafficCanvasDaily = document.getElementById("traffic-chart2");
const trafficCanvasWeekly = document.getElementById("traffic-chart3");
const trafficCanvasMonthly = document.getElementById("traffic-chart4");
const dailyCanvas = document.getElementById("daily-chart");
const mobileCanvas = document.getElementById("mobile-chart");
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");
const trafficNav = document.querySelector(".traffic-nav");

// trafficChartHourly();
// trafficChartDaily();
trafficChartWeekly();
// trafficChartMonthly();
    
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
        if (element.innerHTML === "Weekly") {
        }
        else if (element.innerHTML === "Daily") {
        }

        else if (element.innerHTML === "Weekly") {
        }
        else if (element.innerHTML === "Monthly") {
        }
    });





//     else if (chartTime === "daily"){
//         const labelValues = ["S", "M", "T", "W", "T", "F", "S"];
//         const dataValues = [75, 115, 175, 125, 225, 200, 100];


// }




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