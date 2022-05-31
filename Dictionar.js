let dict = [];
function addWord() {
  dict.push(document.getElementById("myText").value);
}
function wordSearching() {
  var searchedWord = document.getElementById("searching").value;
  if (dict.indexOf(searchedWord) >= 0) {
    return document.getElementById("result").innerHTML = "Cuvantul e in dictionar";
  }
  return document.getElementById("result").innerHTML = "Cuvantul nu e in dictionar";
}