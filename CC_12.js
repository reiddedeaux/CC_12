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