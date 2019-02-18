// Saves options to chrome.storage
function save_options() {
  var color = document.getElementById('namePref').value;
  chrome.storage.sync.set({
    namePreference: color,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

document.getElementById('save').addEventListener('click',
    save_options);