function checkVowels() {
    let inputText = document.getElementById('inputText').value;
    let resultDiv = document.getElementById('result');
    let errorDiv = document.getElementById('error');
    resultDiv.textContent = '';
    errorDiv.textContent = '';

    if (!inputText) {
      errorDiv.textContent = 'Error : Enter some text.';
      return;
    }

    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;//by default show 0 

    for (let i = 0; i < inputText.length; i++) {
      if (vowels.includes(inputText[i])) {
        count++;
        document.getElementById('btn').style.display = "inline";
        document.getElementById('check').style.display = "none";
      }
    }

    resultDiv.textContent = 'The Number of vowels is : ' + count;
  }

  function refresh(){
    window.location.reload()
    document.getElementById('inputText').value = ''; resultDiv = '';
    error = '';
  
  }




  
  
 