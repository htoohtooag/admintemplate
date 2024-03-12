//// javascript area 

// start site setting
const getsitesettings = document.getElementById('sitesettings');
getsitesettings.addEventListener('click',function(){
    document.body.classList.toggle('show-nav');
})
// end site setting


// start navbar 
// start top sidebar 


function dropbtn(e){
    // console.log(e.target);// i tag 
    // console.log(e.target.parentElement);// a tag
    // console.log(e.target.parentElement.nextElementSibling); //div tag
    e.target.parentElement.nextElementSibling.classList.toggle("show");
}



// end top sidebar 
//end navbar


$(document).ready(function(){
    // start left site bar
    $('.sidebarlinks').click(function(){
        $('.sidebarlinks').removeClass('currents');
        $(this).addClass('currents');
    })
    // end left site bar

});

// start gauge area 
var gaugeusers = new JustGage({
    id: "gaugeusers", // the id of the html element
    value: 50,
    min: 0,
    max: 100,
    decimals: 2,
    gaugeWidthScale: 0.6
});

var gaugecustomrs = new JustGage({
    id: "gaugecustomrs", // the id of the html element
    value: 50,
    min: 0,
    max: 100,
    decimals: 2,
    gaugeWidthScale: 0.6
});

var gaugeemployers = new JustGage({
    id: "gaugeemployers", // the id of the html element
    value: 50,
    min: 0,
    max: 100,
    decimals: 2,
    gaugeWidthScale: 0.6
});

var gaugeinvester = new JustGage({
    id: "gaugeinvester", // the id of the html element
    value: 50,
    min: 0,
    max: 100,
    decimals: 2,
    gaugeWidthScale: 0.6
});

// update the value randomly
setInterval(() => {
gaugeusers.refresh(Math.random() * 100);
gaugecustomrs.refresh(Math.random() * 100);
gaugeemployers.refresh(Math.random() * 100);
gaugeinvester.refresh(Math.random() * 100);
}, 5000)
// end gauge area 


// start earning area  
const ctx = document.getElementById('mypieChart');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [12, 19, 3],
      }]
    },
    options: {
    }
  });
// end earing area 

  // start earning overview

  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);

        var options = {
          title: 'Sales Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }
  // end earning overview

  // start footer

  const getyear = document.getElementById('getyear');
  const getfullyear = new Date().getFullYear();
  getyear.textContent = getfullyear;
  
  // end footer

//// javascript area 
