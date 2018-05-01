$(document).ready(function(){
  var target = Math.floor(Math.random() * 100 + 20);
  $("#target").html(target);
  console.log(target);

  var gem1 = Math.floor(Math.random() * 11 + 1);
  var gem2 = Math.floor(Math.random() * 11 + 1);
  var gem3 = Math.floor(Math.random() * 11 + 1);
  var gem4 = Math.floor(Math.random() * 11 + 1);

  var total = 0;
  var wins = 0;
  var losses = 0;

  $("#winsNumber").html(wins);
  $("#lossesNumber").html(losses);
  $("#totalScore").html(total);

  function reset(){
    target=Math.floor(Math.random() * 100 + 20);
    console.log(target);
    $("#target").html(target);
    gem1 = Math.floor(Math.random() * 11 + 1);
    gem2 = Math.floor(Math.random() * 11 + 1);
    gem3 = Math.floor(Math.random() * 11 + 1);
    gem4 = Math.floor(Math.random() * 11 + 1);
    total = 0;
    $("totalScore").html(total);
  }  
  
  function lose(){
    alert("You went over!");
      losses++;
        $("#lossesNumber").html(losses);
          reset();
  }  

  function win(){
    alert("You got it!");
      wins++;
        $("#winsNumber").html(wins);
          reset();
  }        

  $("#picOne").on("click",function(){
    total += gem1;
    console.log("new total " + total);
    $("#totalScore").html(total);
    if(total === target){
      win();
    } else if(total > target){
      lose();
    }
  })        
 
  $("#picTwo").on("click",function(){
    total += gem2;
    console.log("new total " + total);
    $("#totalScore").html(total);
    if(total === target){
      win();
    } else if(total > target){
      lose();
    }
  })       

  $("#picThree").on("click",function(){
    total += gem3;
    console.log("new total " + total);
    $("#totalScore").html(total);
    if(total === target){
      win();
    } else if(total > target){
      lose();
    }
  })

  $("#picFour").on("click",function(){
    total += gem4;
    console.log("new total " + total);
    $("#totalScore").html(total);
    if(total === target){
      win();
    } else if(total > target){
      lose();
    }
  })
  

  


})  
