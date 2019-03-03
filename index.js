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


/// Fourth app:  building list with for loop
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      // Split string into characters, reverse, then join back into string.
      this.message = this.message.split('').reverse().join('');
    }
  }
});


/// Sixth app: form input change
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
});


app.message = 'I have changed the data!';

app3.seen = false;