//splash
var SplashScreen = document.querySelector('.splash_screen');
SplashScreen.addEventListener('click', ()=>{
    SplashScreen.style.opacity = 0;
    //appear
    var appear = document.getElementById("exist");
    appear.style.display= "block";
    //appear
    setTimeout(()=>{
        SplashScreen.classList.add('hidden')
      },610)
})

//splash

//popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

//table generate
function generate(){
    var num_data = document.getElementById("data_number").value;
    var res_data = document.getElementById("result");
    res_data.innerHTML = "";
    
    for (i = 1; i <= 10; i++) {
        result = res_data.innerHTML += num_data + " X " + i + " = " + num_data*i + "<br>";
        console.log(result);
        res_data.innerHTML = result;
    }
}