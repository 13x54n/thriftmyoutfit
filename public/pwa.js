// src/utils/pwa.js

let deferredPrompt;

export function hasUserDismissedPrompt() {
  return localStorage.getItem('pwaInstallPromptDismissed') === 'true';
}

export function showInstallPrompt() {
  if (deferredPrompt) {
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
        localStorage.setItem('pwaInstallPromptDismissed', 'true');
      }
      deferredPrompt = null;
    });
  }
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  if (!hasUserDismissedPrompt()) {
    showInstallPrompt();
  }
});
