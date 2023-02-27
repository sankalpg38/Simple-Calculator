$("button").on('click',function(){
    var text = $("#screenText").text();
        if($(this).text() ==="C")
         text = "";
        else if($(this).text() ==="=")
        numfn();
        else
        text+=$(this).text();
})
document.addEventListener("keydown", function(event){
    var text = document.querySelector("#screenText");
        if(event.key ==="Backspace")
         text.value = "";
        else if(event.key==="Enter")
        numfn();
        else if((event.key >=0 && event.key<=9)||(event.key==="*" || event.key==="/" || event.key==="-" || event.key==="+")||event.key==="." )
        text.value+=event.key;
})
var sum=0;
let ans=0;
function numfn(){
    var text = document.querySelector("#screenText");
    for(let i = 0; i<text.value.length; i++){
        let j;
        switch(text.value[i]){
    
            case "+":   sum+=(+text.value.substring(0,i));
                        for(j=i+1; j<text.value.length; j++){
                            if(text.value[j]==="*" || text.value[j]==="/" || text.value[j]==="-" || text.value[j]==="+")
                            break;
                        }
                        sum+=(+text.value.substring(i+1, j));
                        ans=sum;
                        sum=0;
                        i=j;
                        break;
            case "-":   sum+=(+text.value.substring(0,i));
                        for(j=i+1; j<text.value.length; j++){
                            if(text.value[j]==="*" || text.value[j]==="/" || text.value[j]==="-" || text.value[j]==="+")
                            break;
                        }
                        sum-=(+text.value.substring(i+1, j));
                        ans=sum;
                        sum=0;
                        i=j;
                        break;
            case "*":   sum+=(+text.value.substring(0,i));
                        
                        for(j=i+1; j<text.value.length; j++){
                            if(text.value[j]==="*" || text.value[j]==="/" || text.value[j]==="-" || text.value[j]==="+")
                            break;
                        }
                        sum*=(+text.value.substring(i+1, j));
                        ans=sum;
                        sum=0;
                        i=j;
                        break;
            case "/":   sum+=(+text.value.substring(0,i));
                        // let j;
                        for(j=i+1; j<text.value.length; j++){
                            if(text.value[j]==="*" || text.value[j]==="/" || text.value[j]==="-" || text.value[j]==="+")
                            break;
                        }
                        sum/=(+text.value.substring(i+1, j));
                        ans=sum;
                        sum=0;
                        i=j;
                        break;
            
        }
    }
    text.value=ans.toString();

}