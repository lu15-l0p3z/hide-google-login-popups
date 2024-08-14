// content.js

// Function to remove Google login pop-ups
function removeGoogleLoginPopups() {
  const popups = document.querySelectorAll('iframe[src*="accounts.google.com"], div[role="dialog"]');
  popups.forEach(popup => popup.remove());
}

// Run the function immediately after the page loads
removeGoogleLoginPopups();

// Also, observe the DOM and remove any new pop-ups that appear
const observer = new MutationObserver(removeGoogleLoginPopups);
observer.observe(document.body, { childList: true, subtree: true });