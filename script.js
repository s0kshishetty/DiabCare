// Future JS logic can go here
document.addEventListener("DOMContentLoaded", () => {
 // Display greeting
  const greetingDiv = document.getElementById("greeting");
  const name = localStorage.getItem("username"); // get the stored name
  if (name && greetingDiv) {
    greetingDiv.textContent = `Hello, ${name}!`;
  }





  const form = document.getElementById("symptomForm");
  const resultDiv = document.getElementById("result");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const symptoms = document.querySelectorAll('input[name="symptom"]:checked');
      const count = symptoms.length;

      let message = "";
      let imgSrc = "";

      if (count === 0 || count===1) {
        message = "✅ All good! Keep maintaining a healthy lifestyle.";
        imgSrc = "green.png"; // add green Among Us image in same folder
      } else if (count <= 3) {
        message = "⚠️ You have some symptoms. Take precautions!";
        imgSrc = "yellow.png"; // add yellow Among Us image in same folder
      } else {
        message = "🚨 Go to doctor immediately and take a blood test!";
        imgSrc = "red.png"; // add red Among Us image in same folder
      }

      resultDiv.innerHTML = `
        <div class="result-box">
          <img src="${imgSrc}" alt="Among Us" class="amongus">
          <p>${message}</p>
        </div>
      `;
    });
  }




});

