// Task 1 Created Reveneue Metric Card
const dashboardId = document.getElementById("dashboard"); // ID
const dashboardQuery = document.querySelector("#dashboard"); // querySelector

const revenueCard = document.createElement("div"); // created a div element
//setting the attributes
revenueCard.setAttribute("Class", "metric-card"); // class attributes
revenueCard.setAttribute("id", "revenue-card"); // id attributes
//populate the card
revenueCard.innerHTML = `
<h3> Revenue </h3>
<p> $0 </p>
`;
//append the new card
dashboardId.appendChild(revenueCard);
//Task 2 Updated Metric Cards via Array Conversion
const metricCards = document.querySelectorAll(".metric-card"); // Select all elements under metric card
const metricCardsArray = [...metricCards];// Convert to an array
metricCardsArray.forEach(card=> {
    card.innerText += "- Updated"; //Add text to metric cards
    card.style.backgroundColor = `green`; //Change background color to green
}
)
const inventorylist = document.getElementById("inventoryList");
//
function addInventoryItem(productName) {
    const newItem = document.createElement("li");

    newItem.setAttribute("class", "product-item");
    newItem.innerHTML = `${productName}`;
    inventorylist.appendChild(newItem);
    newItem.addEventListener("click", (event)=>{
        inventorylist.appendChild(newItem);
    inventorylist.removeChild(newItem)
    })

}