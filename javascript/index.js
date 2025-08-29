
// heart icon e click korle 1 kore barbe ter functionality 
let count = 0;
const favIcon = document.getElementsByClassName("favIcon");
const wishlist = document.getElementById("wishlistCount");

for( const fav of favIcon){

    fav.addEventListener("click", function(){
    count++;
    wishlist.textContent = count;
});

}

// call icon e click korle ekta alert show korbe and 20 ta kore coin minus hobe and history te name ,number ,time show korbe 
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
        alert(`Calling ${title[i]} at ${number[i]}`);
        console.log(`Calling ${title[i]} at ${number[i]}`);

        coins -= 20;
        coinBalance.textContent = coins;


        if(coins < 20){
            alert("not have sufficient coin to make a call")
        }

        

        const callerDiv = document.createElement("div");

        callerDiv.innerHTML = `
              <div class="m-[20px] bg-gray-300 p-4 rounded-[10px]">
                <h4 class="font-bold">${title[i]}</h4>
                <span class="">${number[i]}</span>
              </div>

            `;
callHistory.append(callerDiv);




    });
}

const btnClear = document.getElementById("clear-btn").addEventListener("click",function(){

    callHistory.innerText = "";
    coins = 100;
    coinBalance.textContent = coins;
})


// copy btn e click korle copycount e 1 kore barbe 

const copyCount = document.getElementById("copy-count");

const btnCopyS = document.getElementsByClassName("btn-copy");
let copy = 0;
for( const btnCopy of btnCopyS){

    btnCopy.addEventListener("click", function(){

        


    copy++;
    copyCount.textContent = copy;
});

}






 





