function github1s(){
	var rsGit = window.location.href.match(/github\.com(\/.*){2}(\/.*)?/g);
	
	var rsGit1s = window.location.href.match(/github1s\.com(\/.*){2}(\/.*)?/g);
	if(rsGit) {
		var newUrl = window.location.href.replace('github','github1s');
		window.open(newUrl, '_blank');
		return newUrl;
	}

	if(rsGit1s) {
		var newUrl = window.location.href.replace('github1s','github');
		window.open(newUrl, '_blank');
		return newUrl;
	}
	return "";
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: github1s
  });
});