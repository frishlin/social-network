$(document).ready(loadPage);

$( document ).ready(function(){
   $(".button-collapse").sideNav();
})


function loadPage() {
    $('#newsfeed-button').click(showNewsFeed);
    $('#newsfeed-button').addClass('active-button')
    paintNewsFeed();
    $('#routines-button').click(showRoutines);
    paintRoutines();
    $('#recipes-button').click(showRecipes)
    paintRecipes();
    $('#events-button').click(showEvents);
    paintEvents(data['events']);
    $('#groups-button').click(showGroups);
    paintGroups();
    $('select').material_select();
    $('#filter').change(filterSelect)
    $('#filter-input').keyup(filterInput)
    $('#publish-button').click(publishFeed)
    $('textarea').keyup(activatePublishButton)

}

function showNewsFeed() {
    $('#newsfeed-button').addClass('active-button')
    $('#routines-button').removeClass('active-button')
    $('#recipes-button').removeClass('active-button')
    $('#events-button').removeClass('active-button')
    $('#groups-button').removeClass('active-button')
    $('#newsfeed-section').show()
    $('#routines-section').hide()
    $('#recipes-section').hide()
    $('#events-section').hide()
    $('#groups-section').hide()
}

function showRoutines() {
    $('#newsfeed-button').removeClass('active-button')
    $('#routines-button').addClass('active-button')
    $('#recipes-button').removeClass('active-button')
    $('#events-button').removeClass('active-button')
    $('#groups-button').removeClass('active-button')
    $('#newsfeed-section').hide()
    $('#routines-section').show()
    $('#recipes-section').hide()
    $('#events-section').hide()
    $('#groups-section').hide()
}

function showRecipes() {
    $('#newsfeed-button').removeClass('active-button')
    $('#routines-button').removeClass('active-button')
    $('#recipes-button').addClass('active-button')
    $('#events-button').removeClass('active-button')
    $('#groups-button').removeClass('active-button')
    $('#newsfeed-section').hide()
    $('#routines-section').hide()
    $('#recipes-section').show()
    $('#events-section').hide()
    $('#groups-section').hide()
}

function showEvents() {
    $('#newsfeed-button').removeClass('active-button')
    $('#routines-button').removeClass('active-button')
    $('#recipes-button').removeClass('active-button')
    $('#events-button').addClass('active-button')
    $('#groups-button').removeClass('active-button')
    $('#newsfeed-section').hide()
    $('#routines-section').hide()
    $('#recipes-section').hide()
    $('#events-section').show()
    $('#groups-section').hide()
}

function showGroups() {
    $('#newsfeed-button').removeClass('active-button')
    $('#routines-button').removeClass('active-button')
    $('#recipes-button').removeClass('active-button')
    $('#events-button').removeClass('active-button')
    $('#groups-button').addClass('active-button')
    $('#newsfeed-section').hide()
    $('#routines-section').hide()
    $('#recipes-section').hide()
    $('#events-section').hide()
    $('#groups-section').show()
}

function paintNewsFeed() {
    for (var i = 0; i < data['newsfeed'].length; i++) {
        var name = (data['newsfeed'][i]['user']);
        var post = (data['newsfeed'][i]['post']);
        var $postDiv = $('<div />', { 'class': 'border-div'})
        var $name = $('<p />')
        var $post = $('<p />')
        $name.text(name)
        $post.text(post)
        $postDiv.append($name)
        $postDiv.append($post)
        $('#feed-wrapper').append($postDiv)

    }
}

function paintRoutines() {
    for (var i = 0; i < data['programs'].length; i++) {
        var $routinesDiv = $('<div />')
        var $distance = $('<h5 />')
        var distance = data['programs'][i]['distancia']
        $distance.append(distance)
        $routinesDiv.append($distance)
        $('#routines-section').append($routinesDiv)
        for (var j = 0; j < data['programs'][i]['rutina'].length; j++) {
            var routineDay = data['programs'][i]['rutina'][j];
            var $routineDay = $('<p />');
            $routineDay.text(routineDay)
            $('#routines-section').append($routineDay)
        }

    }
}


function paintRecipes() {
    for (var i = 0; i < data['programs'].length; i++) {
        var $recipesDiv = $('<div />')
        var $distance = $('<h5 />')
        var distance = data['programs'][i]['distancia']
        $distance.append(distance)
        $recipesDiv.append($distance)
        $('#recipes-section').append($recipesDiv)
        for (var j = 0; j < data['programs'][i]['recetas'].length; j++) {
            var recipeDay = data['programs'][i]['recetas'][j];
            var $recipeDay = $('<p />')
            $recipeDay.text(recipeDay)
            $('#recipes-section').append($recipeDay)
        }
    }
}


function paintEvents(events) {
    $('#events-wrapper').empty()
    for (var i = 0; i < events.length; i++) {
        var $eventDiv = $('<div />')
        var eventName = events[i]['name']

        var eventDate = events[i]['date']
        var eventPlace = events[i]['place']
        $eventName = $('<p />', { 'class': 'name-search' })
        $eventDate = $('<p />')
        $eventPlace = $('<p />')
        $eventName.text(eventName)
        $eventDate.text(eventDate)
        $eventPlace.text(eventPlace)
        $eventDiv.append($eventName)
        $eventDiv.append($eventDate)
        $eventDiv.append($eventPlace)
        $('#events-wrapper').append($eventDiv)

    }
}

function paintGroups() {
    for (var i = 0; i < data['groups'].length; i++) {
        var groupName = data['groups'][i]['group-name']
        var groupPost = data['groups'][i]['post']
        var $groupDiv = $('<div />')
        var $name = $('<p />')
        var $post = $('<p />')
        $name.text(groupName);
        $post.text(groupPost)
        $groupDiv.append($name)
        $groupDiv.append($post)
        $('#group-wrapper').append($groupDiv)
    }
}

function filterSelect() {
    var filteredEvents = []
    var area = $('#filter').val()
    for (var i = 0; i < data['events'].length; i++) {
        if (area === data['events'][i]['area']) {
            filteredEvents.push(data['events'][i])
        } else if (area === 'all') {
            filteredEvents.push(data['events'][i])
        }
    }
    paintEvents(filteredEvents)

}


function filterInput() {
    var search = $('#filter-input').val().trim().toLowerCase()
    $('.name-search').each(function() {
        if ($(this).text().toLowerCase().indexOf(search) === -1) {
            $(this).parent().hide()

        } else if ($(this).text().toLowerCase().indexOf(search) !== -1) {
            $(this).parent().show()
        }
    })
}


function publishFeed() {
var $feedDiv = $('<div />')
var $feedUser = $('<div />')
var $feedText = $('<p />')
var userFeed = $('textarea').val()
$feedUser.text('User')
$feedText.text(userFeed)
$feedDiv.append($feedUser)
$feedDiv.append($feedText)
$('#feed-wrapper').prepend($feedDiv)
$('textarea').val(' ')
}

function activatePublishButton(){
if($('textarea').val().trim().length !== 0){
   $('#publish-button').removeClass('disabled')
} else {
    $('#publish-button').addClass('disabled')
}

}
