
    function appendToResult(value) {
      const resultElement = document.getElementById("result");
      resultElement.value += value;
    }

    function calculateResult() {
      const resultElement = document.getElementById("result");
      const result = eval(resultElement.value);
      resultElement.value = result;
    }

    function clearResult() {
      const resultElement = document.getElementById("result");
      resultElement.value = '';
    }
