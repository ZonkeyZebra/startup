let options = {
    method: 'GET',
    headers: { 'x-api-key': 'kM5BCf98Wlqmvnu8rP78Lg==YvmeShBekEHJfG4F' }
  }
  
  let url = 'https://api.api-ninjas.com/v1/randomimage?category=food'
  
  
  // fetch(url,options)
  //       .then(res => res.json()) // parse response as JSON
  //       .then(data => {
  //         console.log(data)
  //       })
  //       .catch(err => {
  //           console.log(`error ${err}`)
  //       });

  fetch(url, options)
  .then((x) => x.json())
  .then((response) => {
    document.querySelector("img").textContent = JSON.stringify(
      response,
      null,
      "  "
    );
  });