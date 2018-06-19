/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      tasks: [
                {
                  id: 1,
                  text: "Take out the dog",
                  completed: false
                },{
                  id: 2,
                  text: "Take out the rabbit",
                  completed: false
                },{
                  id: 3,
                  text: "Bring in grocieries",
                  completed: false
                }
                ],

      // reviews: [
      //           { 
      //             reviewer: "James Macaver",
      //             rating: 5,
      //             text: "Testing more",
      //           },{ 
      //             reviewer: "James Macaver", 
      //             rating: 4,
      //             text: "More tests",
      //           },{ 
      //             reviewer: "James Macaver", 
      //             rating: 9,
      //             text: "What is going on?"
      //           }
      //           ],
      newTask: {
                  // id: "",
                  text: ""
                  }
    };
  },

  created: function() {},
  methods: {
    addTask: function() {
      var newTaskInfo = {
                            // id: this.newTask.id,
                            text: this.newTask.text,
                            completed: false

                          };
      if (this.newTask.text) {
          this.tasks.push(newTaskInfo);
          this.newTask.text = "";
      }
    },
    markComplete: function(inputTask) {
      var indexOfTask = this.tasks.indexOf(inputTask)
      this.tasks.splice(indexOfTask, 1);
    }
  },

  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});