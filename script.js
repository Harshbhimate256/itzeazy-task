
// $('.track').change(function(e){
//     updateProgress();
// })

// function updateProgress(){
//     var count = $('.track').length;
//     var length = $('.track').filter(function(){
//         return this.value;
//     }).length;
//     var done = Math.floor(length * (100 / count));
//     $('.meter').width(done);
// }
var currentPg1 = document.querySelector(".formContainer")
var currentPg2 = document.querySelector(".formContainer2")
var changeBtn = document.querySelector('button')
var currPg = 1;
currentPg2.style.display = 'none'
// console.log(changeBtn)
changeBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    // console.log('akdfjlaskd')
    // console.log(currentPg1)
    if(currPg == 1){
        currPg = 2;
        currentPg2.style.display = "";
        currentPg1.style.display = "none";
        changeBtn.innerText = " < Back"
    }
    else{
        currPg = 1;
        currentPg1.style.display = "";
        currentPg2.style.display = "none";
        changeBtn.innerText = " Next >"
    }
})

var select1 = 0;
var select2 = 0;

var inputCount = document.querySelectorAll("#abc")
// console.log(inputCount)
 var child = [...inputCount[0].children, ...inputCount[1].children]


 var filledCount = 0;

 function updateBar(doc){

 }
 var el = document.querySelectorAll('.track')
 el.forEach(doc => {
    $(doc).on('change', (e)=>{
        // console.log(doc)
        if(doc.type == 'text'){
           if(doc.value != ""){
            filledCount++
           } else {
            filledCount--
           }
        }
        if(doc.type == "radio"){
            if(doc.checked){
                filledCount++;
            }
        }  

        if(doc.tagName == "SELECT"){
            // console.log(doc.value)
            if(doc.value != "0"){
                if(doc.name == 'year1'){
                    // console.log("dflkjsadf")
                    if(select1 == 0){
                        filledCount++;
                        select1 = doc.value
                        // console.log("Selected", select1)
                    }
                }

                if(doc.name == 'year2'){
                    // console.log("dflkjsadf")
                    if(select2 == 0){
                        filledCount++;
                        select2 = doc.value
                    }
                }
                
            } else {
                if(doc.name == "year1"){
                    select1 = 0
                } else {
                    select2 = 0
                }
                filledCount--;
            }
        }
        var per = filledCount/child.length;
        var meter = document.querySelector('.meter')
        var meter1 = document.querySelector('.meter1')
        meter.style.width = `${100*per}%`
    })
});




// $(document).ready(function(){
//     $('.track').on('change', function(){
//         updateProgress();
//     });

//     $('.track[type="radio"]').on('click', function(){
//         updateProgress();
//     });

//     function updateProgress(){
//         var count = $('.track').length;
//         var length = $('.track').filter(function(){
//             return this.value;
//         }).length;
//         var done = Math.floor(length * (100 / count));
//         $('.meter').width(done +"%");
//     }
// });
