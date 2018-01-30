$(document).ready(loadPage);

function loadPage() {
    $('#newsfeed-button').click(showNewsFeed);
    paintNewsFeed();
    $('#routines-button').click(showRoutines);
    paintRoutines();
    $('#events-button').click(showEvents);
    paintEvents();
    $('#groups-button').click(showGroups);
    paintGroups();

    $('select').material_select();
}

function showNewsFeed() {
    $('#newsfeed-section').show()
    $('#routines-section').hide()
    $('#events-section').hide()
    $('#groups-section').hide()
}

function showRoutines() {
    $('#newsfeed-section').hide()
    $('#routines-section').show()
    $('#events-section').hide()
    $('#groups-section').hide()
}

function showEvents() {
    $('#newsfeed-section').hide()
    $('#routines-section').hide()
    $('#events-section').show()
    $('#groups-section').hide()
}

function showGroups() {
    $('#newsfeed-section').hide()
    $('#routines-section').hide()
    $('#events-section').hide()
    $('#groups-section').show()
}

function paintNewsFeed() {
    for (var i = 0; i < data['newsfeed'].length; i++) {
        var name = (data['newsfeed'][i]['user']);
        var post = (data['newsfeed'][i]['post']);
        var $postDiv = $('<div />')
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
        var $distance = $('<h6 />');
        $distance.text(data['programs'][i]['distancia'])
        $('#routines').prepend($distance)

    }
}

function paintEvents() {

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
        $('#group-wrapper').append($groupDiv)
    }
}