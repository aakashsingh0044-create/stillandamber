document.addEventListener("DOMContentLoaded", function () {
  console.log("JS loaded");

  fetch("header.html")
    .then(response => {
      console.log("Fetch response:", response);
      return response.text();
    })
    .then(data => {
      console.log("Header data received");
      document.getElementById("header").innerHTML = data;
    })
    .catch(error => console.error("FETCH ERROR:", error));
});