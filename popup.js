document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('modifyButton').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: removePosts
      });
    });
  });
});

function removePosts() {
	let i=0;
	while (i<1) {
		let moreButton = document.querySelector("a.sEdgeMore-processed");
		if(moreButton) {
			moreButton.click();
			i++;
		}
	}
	for (let i = 0; i < 3; i++) {
		let listItems = document.querySelectorAll('li[id^="edge-assoc-"]');
		listItems.forEach(function(listItem) {
			let nestedAnchor = listItem.querySelector('span.long-username a');
			let trimmed = nestedAnchor.textContent.trim();
			if (nestedAnchor && (trimmed === "Lisa Hall" || trimmed === "Rachael Kaci" || trimmed === "Rossana Castillo" || trimmed === "Megan Garcia" || trimmed === "Curtis Johansen" || trimmed === "Kristy Blackburn" || trimmed === "Wendy Stratton" || trimmed === "Nicole Menache" || trimmed == "Mycal Hixon")) {
				console.log("Match found. Removing list item.");
				listItem.remove(); 
			}
		});
	}
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

