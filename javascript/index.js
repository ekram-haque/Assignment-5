
// heart icon functionality here 
let count = 0;
const favIcon = document.getElementsByClassName("favIcon");
const wishlist = document.getElementById("wishlistCount");

for( const fav of favIcon){

    fav.addEventListener("click", function(){
    count++;
    wishlist.textContent = count;
});

}

//call icon functionality here  
const cardTitles = document.getElementsByClassName("card-title");

let title = [];
let number = [];

for( const cardTitle of cardTitles ){

     title.push (cardTitle.innerHTML);
    
}

const cardNumbers = document.getElementsByClassName("card-number");
for( const cardNumber of cardNumbers ){

      number.push  (cardNumber.innerHTML);
      
    
}

const cardCalls = document.getElementsByClassName("call-number");
const coinBalance = document.getElementById("coin-balance");
coins = 100;

const callHistory = document.getElementById("call-history");




for(let i = 0; i < cardCalls.length; i++){
    cardCalls[i].addEventListener("click", function(){
        

        coinBalance.textContent = coins;

        if(coins >= 20){
            
            alert(`Calling ${title[i]} at ${number[i]}`);
            coins -= 20;
            const callerDiv = document.createElement("div");
              const currentTime = new Date().toLocaleTimeString();


        callerDiv.innerHTML = `
             <div class="flex items-center justify-between m-[20px] bg-gray-200 p-4 rounded-[10px]">

                    <div >
                        <h4 class="font-bold">${title[i]}</h4>
                        <span class="">${number[i]}</span> 
                    </div>
               
              
                    <div class="font-mono text-sm text-gray-600">
                        ${currentTime} 
                    </div>
            </div>
            `;
callHistory.append(callerDiv);
        }else{

            alert("not have sufficient coin to make a call")
        
        }

        

        




    });
}

//button clean or history clean functionality here
const btnClear = document.getElementById("clear-btn").addEventListener("click",function(){

    callHistory.innerText = "";
    coins = 100;
    coinBalance.textContent = coins;
})




const copyCount = document.getElementById("copy-count");

const btnCopyS = document.getElementsByClassName("btn-copy");
let copy = 0;

for( const btnCopy of btnCopyS){

   
    
    btnCopy.addEventListener("click", function(){
        
        for(let i = 0;i<number.length;i++){

                 navigator.clipboard.writeText(number[i])
                .then(() => {
             alert("Copied to clipboard!");
            console.log("Copied Number:", number[i]); 

        })
        .catch(err => {
            console.error("Copy failed:", err);
        });
        }

   
    copy++;
    copyCount.textContent = copy;
});

}






 





