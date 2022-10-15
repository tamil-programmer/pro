

var loader = document.getElementById("loader")

window.addEventListener("load",vanish)

function vanish(){
  loader.classList.add("vanish")
}




  function getbar() {
  var element = document.getElementById("bar");
  element.classList.add("bar_ani");

  document.getElementById("bar").style.display="block";
}




function bargo() {
  var element = document.getElementById("bar");
  element.classList.add("bar_go");
  setTimeout(myF, 1000);
}



function myF(params) {
  document.getElementById("bar").style.display="none";
  var element = document.getElementById("bar");
  element.classList.remove("bar_go");
}









    function o() {
      var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
      var yValues = [55, 49, 44, 24, 15];
      var barColors = [
        "#c91d47",
        "#00aba9",
        "#2b5797",
        "#e8c3b9",
        "#1e7145"
      ];

      new Chart("myChart", {
        type: "doughnut",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: yValues
          }]
        },
        options: {
          title: {
            display: true,
            text: "World Wide Wine Production 2018"
          }
        }
      });
    }
    o()

    function start() {

    }



    function commit() {
      
    
    var str = '<?php echo "new" ?>'
  Swal.fire(
    'Good job!',
    'You clicked the button!',
    'success'
  )

}
