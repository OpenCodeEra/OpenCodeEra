console.log("running");
fetch('data/FAQ.json')
  .then(response => response.json())
  .then(dataArray => {
    const faqBox = document.getElementById("faq_box");

    dataArray.forEach((data, index) => {
      const contentDiv = document.createElement("div");
      contentDiv.classList.add("content");

      const questionsDiv = document.createElement("div");
      questionsDiv.id = "questions";

      const questionP = document.createElement("p");
      questionP.textContent = data.question;

      const iconP = document.createElement("p");
      iconP.id = "icon";

      const openSpan = document.createElement("span");
      openSpan.classList.add("material-symbols-outlined", "open");
      openSpan.id = `open${index}`;
      openSpan.textContent = "expand_more";
      openSpan.addEventListener("click", () => showFAQ(index));

      const closeSpan = document.createElement("span");
      closeSpan.classList.add("close");
      closeSpan.id = `close${index}`;
      closeSpan.textContent = "x";
      closeSpan.style.display = "none";
      closeSpan.addEventListener("click", () => closeFAQ(index));

      iconP.appendChild(openSpan);
      iconP.appendChild(closeSpan);

      questionsDiv.appendChild(questionP);
      questionsDiv.appendChild(iconP);

      const answerP = document.createElement("p");
      answerP.classList.add("answer");
      answerP.id = `answer${index}`;
      answerP.textContent = data.answer;
      answerP.style.display = "none";

      contentDiv.appendChild(questionsDiv);
      contentDiv.appendChild(answerP);

      faqBox.appendChild(contentDiv);
    });
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });

function showFAQ(index) {
  const openSpan = document.getElementById(`open${index}`);
  const closeSpan = document.getElementById(`close${index}`);
  const answerP = document.getElementById(`answer${index}`);

  openSpan.style.display = "none";
  closeSpan.style.display = "block";
  answerP.style.display = "block";
}

function closeFAQ(index) {
  const openSpan = document.getElementById(`open${index}`);
  const closeSpan = document.getElementById(`close${index}`);
  const answerP = document.getElementById(`answer${index}`);

  openSpan.style.display = "block";
  closeSpan.style.display = "none";
  answerP.style.display = "none";
}