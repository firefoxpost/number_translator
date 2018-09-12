(() => {

  'use strict'

  let startTranslation = () => {
    let numberValue = document.getElementById('number').value;
    let textResult = '';
    let checkNumberValue = new RegExp(/[0-9]/).test(numberValue);

    if(checkNumberValue) {
      let Translator = new Translator(numberValue);
      document.getElementById('text_result').innerHTML = Translator.textResult;
    } else {
      console.log("The number has wrong value!");
    }
  };

  document.getElementById('button').addEventListener("click", startTranslation);

})();
