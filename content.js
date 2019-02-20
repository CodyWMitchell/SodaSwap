var elements = document.getElementsByTagName('*'); // Get all elements

var wordsToReplace = ['coke', 'soda', 'lolly water', 'lolly-water', 'pop', 'soda pop', 'soda-pop']
var replaceWord = 'Replacement'

function upcaseInclude(lowcaselist) {
  upcaselist = lowcaselist;
  for (item in upcaselist) {
    lowcaselist.push(upcaselist[item][0].toUpperCase()+upcaselist[item].slice(1));
  }
  return lowcaselist;
}

wordsToReplace = upcaseInclude(wordsToReplace);

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) { // This is a text node
            var text = node.nodeValue;
            for (var word in wordsToReplace) {
                // Replace that word in the text
                text = text.replace(wordsToReplace[word], replaceWord);
            }
            if (node.nodeValue !== text) {
              element.replaceChild(document.createTextNode(text),node);
            }
        }
    }
}
