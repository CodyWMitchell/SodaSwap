var elements = document.getElementsByTagName('*'); // Get all elements

var wordsToReplace = ['coke','soda','lolly water','lolly-water','pop','soda pop','soda-pop']
var replaceWord = 'SodaNameHere'

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) { // This is a text node
            var text = node.nodeValue;
	    for (var word in wordsToReplace) {
		// Replace that word in the text
            	var replacedText = text.replace(wordsToReplace[word], replaceWord);
              console.log("Word Replaced");
              // If a change was made, update
                        if (replacedText !== text) {
                            element.replaceChild(document.createTextNode(replacedText), node);
                        }
	    }
        }
    }
}
