let bulbState = false;



function ChangeBulbState() {
    
    let element = document.getElementById("Bulb");
    console.log(element);
    if(!bulbState)
    {
        element.setAttribute("src","https://i.postimg.cc/6QyTynzr/bulb-on.png") ;
        bulbState=true;
    }
    else
    {
        element.setAttribute("src","https://i.postimg.cc/KjK1wL3c/bulb-off.png") ;
        bulbState=false;
    }
    
  }
  document.getElementById("ChangeButton").addEventListener("click", changeBulbState);