function getElementByXpath(path) {
	return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function github1s(){
	var rsGit = window.location.href.match(/github\.com(\/\w+){2}(\/.*)?/g);
	
	var rsGit1s = window.location.href.match(/github1s\.com(\/\w+){2}(\/.*)?/g);
	if(rsGit) {
		var newUrl = 'https://' + rsGit[0].replace('github','github1s');
		window.open(newUrl, '_blank');
		return newUrl;
	}

	if(rsGit1s) {
		var newUrl = 'https://' + rsGit1s[0].replace('github1s','github');
		window.open(newUrl, '_blank');
		return newUrl;
	}
	return "";
}

github1s();

