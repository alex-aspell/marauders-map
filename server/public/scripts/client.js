const app = angular.module('magicApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/donothing.html',
        controller: 'NothingController as dn'
    }).when('/insults', {
        templateUrl: 'views/insults.html',
        controller: 'InsultsController as ic'
    }).otherwise({rdirectTo: '/'});
})

app.controller('NothingController', function(){
    console.log('NothingController created'); 
    let self = this; 
    self.message = 'You let Potter go to bed.';
})

app.controller('InsultsController', ['MaraudersService', function(MaraudersService){
    console.log('InsultController created');
    let self = this;
    self.insultArray = MaraudersService.insultArray; 
    console.log(self.insultArray.list);
}])

app.service('MaraudersService', function(){
    console.log('MaraudersService create');
    let self = this; 
    self.insultArray = { list: [
        {author: 'Moony', insult: 'Mr Moony presents his compliments to Professor Snape and begs him to keep his abnormally large nose out of other peoples business.'},
        {author: 'Prongs', insult: 'Mr Prongs agrees with Mr Moony and would like to add that Professor Snape is an ugly git.'},
        {author: 'Padfoot', insult: 'Mr Padfoot would like to register his astonishment that an idiot like that ever became a Professor.'},
        {author: 'Wormtail', insult: 'Mr Wormtail bids Professor Snape good day, and advises him to wash his hair, the slime-ball.'}
    ]}
})