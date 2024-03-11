console.log("MAin js is working");

const populate = async(value, currency) => {
    let str =""
    url ="https://api.currencyapi.com/v3/latest?apikey=cur_live_ZI0JgYDRAHlYLGOCWHjIzhJQApIc42HKnoajO0ob&base_currency=" + currency;
    let response = await fetch(url);
    let rJson = await response.json();
    document.querySelector(".result").style.display ="block";
    for (let key of Object.keys(rJson["data"])){
        str +=` <tr>
                 <td>${key}</td>
                 <td>${rJson["data"] [key]["code"] }</td>
                 <td>${Math.round(rJson["data"] [key]["value"] * value)}</td>
                </tr>
                `
        
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = str;
}
const btn = document.querySelector(".btn");
btn.addEventListener("click", (e)=>{
    e.preventDefault()
    const value = parseInt(document.querySelector("input[name='amount']").value);
    const currency =document.querySelector("select[name='Currency1']").value;
    populate(value,currency);
} )

