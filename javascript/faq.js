fetch("./data/FAQ.json")
  .then((response) => response.json())
  .then((dataArray) => {
    let str = "";
    dataArray.forEach((data, index) => {
      str += `
        <details>
          <summary class="question">${data.question}</summary>
          <p>${data.answer}</p>
        </details>
      `;
    });

    const faqBox = document.getElementById("faq_box");
    faqBox.innerHTML = str;
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
