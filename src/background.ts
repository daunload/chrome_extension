import browser from 'webextension-polyfill';

console.log('Hello from the background!');

browser.runtime.onInstalled.addListener((details) => {
	console.log('Extension installed:', details);
	showRedDot();
});

function showRedDot() {
	chrome.action.setBadgeBackgroundColor({ color: '#d00' });
	chrome.action.setBadgeText({ text: '•' });

	if (chrome.action.setBadgeTextColor) {
		chrome.action.setBadgeTextColor({ color: '#fff' });
	}
}

function clearBadge() {
	chrome.action.setBadgeText({ text: '' });
}

showRedDot();
