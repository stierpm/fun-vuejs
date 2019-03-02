/// First app:  update DOM text
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});


/// Second app:  bind title attribute to DOM text
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});


/// Third app:  conditional DOM element
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});


/// Fourth app:  building list with for loop
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
});

app.message = 'I have changed the data!';

app3.seen = false;