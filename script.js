document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  var selectedSet = document.querySelector('input[name="set"]:checked').value;
  if (selectedSet === 'set1') {
    // Load files and content for Set 1
    var script = document.createElement('script');
    script.src = 'set1.js';
    document.head.appendChild(script);
    console.log('Loading Set 1');
  } else if (selectedSet === 'set2') {
    // Load files and content for Set 2
    var script = document.createElement('script');
    script.src = 'set2.js';
    document.head.appendChild(script);
    console.log('Loading Set 2');
  }
});