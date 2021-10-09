function main() {

  const number = document.getElementById('number');
  const fact = document.getElementById('fact');
  const factText = document.getElementById('factText');

  // function getFactAjax() {

  //   const numberValue = number.value;

  //   const xhr = new XMLHttpRequest();
  //   xhr.open('GET', 'http://numbersapi.com/'+numberValue);

  //   xhr.onload = function() {
  //     if(this.status == 200 && numberValue != '') {
  //       fact.style.display = 'block';
  //       factText.innerHTML = this.responseText;
  //     }
  //   }

  //   xhr.send();
  // }

  function getFactFetch() {
    const numberValue = number.value;
    
    fetch('http://numbersapi.com/'+numberValue)
      .then(response => response.text())
      .then(data => {
        if(numberValue != '') {
          fact.style.display = 'block';
          factText.innerHTML = data;
        }
      })
      .catch(error => console.log(error));
  }

  // number.addEventListener('input', getFactAjax);
  number.addEventListener('input', getFactFetch);



}

main();