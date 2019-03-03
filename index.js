////
/// Vue.Js
///
/// - When a Vue instance is created, it adds all the properties found in its data object to Vue’s reactivity system
/// - A 'prop' is something you can add to a component that reflects a custom attribute
/// - Data objects need to exist when app is created to be reactive / Can't add data objects to a Vue app on the fly
/// -
////

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


/// Seventh app:  registering apps
// Define a new component called todo-item
Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
});


/// Eighth app:  Lifecycle function hooks
var app8 = new Vue({
  el: '#app-8',
  data: {
    a: 1
  },
  created: function () {
    // `this` points to the vm instance
    console.log('a is: ' + this.a)
  }
});


/// Ninth app:  HTML vs Plain Text
var app9 = new Vue({
  el: '#app-9',
  data: {
    color: '<span style="color: red;">This is red</span>',
  }
});


app.message = 'I have changed the data!';

app3.seen = false;