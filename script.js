 document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  var selectedSet = document.querySelector('input[name="set"]:checked').value;
  var link = document.createElement('link');
  link.rel = 'stylesheet';

  if (selectedSet === 'set1') {
    // Load files and content for Set 1
    link.href = 'set1.css';
    document.head.appendChild(link);
    window.location.href = 'set1.html';
  } else if (selectedSet === 'set2') {
    // Load files and content for Set 2
    link.href = 'set2.css';
    document.head.appendChild(link);
    window.location.href = 'set2.html';
  }
});
