$(document).ready(function() {
  $('#separateEmailsBtn').click(function() {
    var inputData = $('#input').val();
    var emails = inputData.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);

    var outputData = emails ? emails.join('\n') : 'No emails found';
    $('#output').val(outputData);
  });

  $('#removeDateBtn').click(function() {
    var inputData = $('#input').val().split('\n');
    var outputData = '';

    inputData.forEach(function(line) {
      var modifiedLine = line.replace(/Joined .*?\d{4}/, '').trim();
      outputData += modifiedLine + '\n';
    });

    $('#output').val(outputData.trim());
  });
});
