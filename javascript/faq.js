let str = "";
console.log("running");
fetch('data/FAQ.json')
  .then(response => response.json())
  .then(dataArray => {
    let count =0;
    // Loop through each maintainer's data

    dataArray.forEach(data => {
        str +=
        `
        <div class="content">
          <div id="questions">
            <p>
              ${data.question}
            </p>
            <p id="icon">
              <span class="material-symbols-outlined open" id="open${count}" onClick = "showFAQ(${count})">
                expand_more
              </span>
              <span class="close" id="close${count}" onClick = "closeFAQ(${count})">
                x
              </span>
            </p>
          </div>
          <p class="answer" id="answer${count}">
            ${data.answer}
          </p>
        </div>
        `;
        count++;
    });

    // Set the HTML content of the 'card' element
    const card = document.getElementById("faq_box");
    card.innerHTML = str;
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });

  function showFAQ(i) {
    document.getElementById("open"+i).style.display="none";
    document.getElementById("close"+i).style.display="block";
    document.getElementById("answer"+i).style.display="block";



  }
  function closeFAQ(i) {
    document.getElementById("open"+i).style.display="block";
    document.getElementById("close"+i).style.display="none";
    document.getElementById("answer"+i).style.display="none";

  }