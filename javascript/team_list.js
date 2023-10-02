let str = "";
console.log("running");
fetch('data/Maintainers.json')
  .then(response => response.json())
  .then(dataArray => {
    // Loop through each maintainer's data
    dataArray.forEach(maintainer => {
        str +=
        `
        <div class="card_main">
          <img src="https://robohash.org/${maintainer.name}" alt="Icon" id="profile_img">
          <p>
            ${maintainer.name}
          </p>
          <div id="social">
            <a href="${maintainer.linkedin}" target="_blank">
              <img src="images/logo/linkedin.png" alt="Linkedin">
            </a>
            <a href="${maintainer.github}" target="_blank">
              <img src="images/logo/github.png" alt="GitHub">
            </a>
          </div>
        </div>
        `;
    });

    // Set the HTML content of the 'card' element
    const card = document.getElementById("cards_maintianer");
    card.innerHTML = str;
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });


  let str2 = "";
  console.log("running");
  fetch('data/Contributors.json')
    .then(response => response.json())
    .then(dataArray => {
      // Loop through each contributor's data
      dataArray.forEach(contributor => {
          str2 +=
          `
          <div class="card_main">
            <img src="https://robohash.org/${contributor.name}" alt="Icon" id="profile_img">
            <p>
              ${contributor.name}
            </p>
            <div id="social">
              <a href="${contributor.linkedin}" target="_blank">
                <img src="images/logo/linkedin.png" alt="Linkedin">
              </a>
              <a href="${contributor.github}" target="_blank">
                <img src="images/logo/github.png" alt="GitHub">
              </a>
            </div>
          </div>
          `;
      });
  
      // Set the HTML content of the 'card' element
      const card = document.getElementById("cards_contributor");
      card.innerHTML = str2;
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });
  