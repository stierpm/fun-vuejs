////
/// Vue.Js
///
/// - When a Vue instance is created, it adds all the properties found in its data object to Vue’s reactivity system
/// - A 'prop' is something you can add to a component that reflects a custom attribute
/// - Data objects need to exist when app is created to be reactive / Can't add data objects to a Vue app on the fly
/// - '@' shorthand for v-on
/// - ':' shorthand for v-bind
////

/// App 01:  Update DOM text
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

app.message = 'I have changed the data!';


/// App 02:  Bind title attribute to DOM text.
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});


/// App 03:  Conditional DOM element.
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});

app3.seen = false;


/// App 04:  Building list with for loop.
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


/// App 05:  Building list with for loop.
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


/// App 06:  Form input change.
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
});


/// App 07:  Registering apps.
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


/// App 08:  Lifecycle function hooks.
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


/// App 09:  HTML vs Plain Text.
var app9 = new Vue({
  el: '#app-9',
  data: {
    color: '<span style="color: red;">This is red</span>',
  }
});


/// App 10:  Using reactive data to create the DOM.
var app10 = new Vue({
  el: '#app-10',

  data: {
    names: ['Joe', 'Jack', 'Susan', 'Betty'],
  },

  mounted () { // Vue function:  call vue app after it's been mounted to DOM
    document.querySelector('#button-10').addEventListener('click', () => {
      let name = document.querySelector('#input-10');

      app10.names.push(name.value);

      name.value = '';
    });
  }
});


/// App 11:  Event listeners.
var app11 = new Vue({
  el: '#app-11',

  data: {
    newName: '',
    names: ['Joe', 'Jack', 'Susan', 'Betty'],
  },

  methods: {
    addName() {
      this.names.push(this.newName);
      this.newName = '';
    }
  }
});


/// App 12:  Binding attributes to DOM elements dynamically.
var app12 = new Vue({
  el: '#app-12',

  data: {
    isLoading: false,
  },

  methods: {
    toggleClass() {
      this.isLoading = true;
    }
  }
});
