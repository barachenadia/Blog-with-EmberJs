App = Ember.Application.create();
App.Router.map(function(){
  this.resource('about');
  this.resource('posts', function(){
     this.resource('post', { path: ':post_id' });
  });

});

App.PostsRoute = Ember.Route.extend({
model: function(){
    return posts;
   }
});

App.PostRoute = Ember.Route.extend({
model: function(params){
    return  posts.findBy('id', params.post_id);
   }
});


App.PostController = Ember.ObjectController.extend({
   isEditing: false,

   actions: {
        edit: function(){
        this.set('isEditing', true)
         },

        doneEditing: function(){
        this.set('isEditing', false)
       }
   }
});



Ember.Handlebars.helper('format-date', function(date){
    return moment(date).fromNow();
});

var showdown = new Showdown.converter();
Ember.Handlebars.helper('format-markdown', function(input){
    return new Handlebars.SafeString(showdown.makeHtml(input))
});



var posts = [{
 id: '1',
 title: "le manuscrit",
 author: {name: "paulo coelho"},
 date: new Date('22-10-2014'),
 excerpt: "Lorem ipsum dolor sit amet, consectetur adipisici",
 body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut "
}, {

 id: '2',
 title: "la peste",
 author: {name: "Albert Camus"},
 date: new Date('12-27-2014'),
 excerpt: "Lorem ipsum dolor sit amet, consectetur adipisici",
 body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut "


}]

// App.Router.map(function() {
//   // put your routes here
// });

// App.IndexRoute = Ember.Route.extend({
//   model: function() {
//     return ['red', 'yellow', 'blue'];
//   }
// });
