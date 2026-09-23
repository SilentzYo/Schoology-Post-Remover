chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message !== 'getNames') return;
  fetch(chrome.runtime.getURL('names.txt'))
    .then((response) => response.text())
    .then(sendResponse);
  return true; 
});
