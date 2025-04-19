var yesCount=0;
let noCount=0;
var sentences=
["Hangyaak helti ammu? Khare helu do u like me?",
  "Hangella helbaardu ala ammu, innomme helu do you like me",
  "Aytu bidammu nin helidanga na keltini helu ishta na illa anta.",
  "Ammu saak ammu esht NO click maadthidi I love you ammu, do you?",
  "Ammu nanna padiyoke punya maadirbrk allen ammu?",
  "Ammu hangaayak maadlikati omme helbidu YES anta",
  "This is the last time I am asking DO you love me. And I m disbling the button."
     
];
for(let i=0;i<2;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",(e)=>{
            console.log(e.target.innerHTML);
            var check=e.target.innerHTML;
            if(check==="No")
            {
                checkNo();
            }
            else checkYes();
    });
}

function checkNo(){
    noCount++;
    document.querySelector(".sentence-space").textContent=sentences[noCount];
    document.querySelector("img").setAttribute("src","images/image"+noCount+".gif");
    if(noCount===6){
       var button= document.querySelector("#no-btn");
       console.log(button);
       button.setAttribute("disabled","");
        console.log("5 time is done")

    }


}

function checkYes()
{  
    yesCount++;
    if(noCount!==6){
        document.querySelector(".sentence-space").textContent="Naan enen ankondidu innu mugdilla sumne insvalpa NO ottu";
        document.querySelector("img").setAttribute("src","images/getOut.gif");
    }
    else{
        document.querySelector(".sentence-space").textContent="Good girl and I love you more.";
        document.querySelector("img").setAttribute("src","images/love-you.gif"); 
    }

}