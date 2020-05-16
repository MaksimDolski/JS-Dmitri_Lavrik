var textview = document.querySelector('.textview');

function insert(num) {
  textview.value = textview.value + num;
}

function equal() {
  textview.value = eval(textview.value);
}

function clean() {
  textview.value = "";

}