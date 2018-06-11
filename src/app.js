// attaching click handler to login button
$('#login').click(() => {
  const myGreetr = G$('John', 'Doe', $('#language').val());
  myGreetr.HTMLGreeting('#greeting', true).log();
});
