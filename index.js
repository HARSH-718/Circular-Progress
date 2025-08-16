let number=document.getElementById("number");
let counter=0;
setInterval(() => {
    if(counter==90){
        clearInterval()
    }else{counter +=1;
    number.innerHTML=counter+"%"}
    
},15);


let css=document.getElementById("css-number");
let count=0;
setInterval(() => {
    if(count==85){
        clearInterval()
    }else{count +=1;
    css.innerHTML=count+"%"}
    
},12);


let js=document.getElementById("js-number");
let counte=0;
setInterval(() => {
    if(counte==80){
        clearInterval()
    }else{counte +=1;
    js.innerHTML=counte+"%"}
    
},12);