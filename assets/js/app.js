/** GitHub Projects */

$.ajax({
    url: "https://api.github.com/users/fvcproductions/repos?callback=?",
    dataType: "json",
    success: function(data) {
        var repos = data.data;
        if (repos.length > 1) {
            for (var repo in repos) {
                if (repos.hasOwnProperty(repo)) {
                    if (repos[repo].language === null) {
                        repos[repo].language = "";
                    }
                    $('.projects .github-projects').append("<div class='card'><a href='" + repos[repo].html_url + "' target='_blank'><button type='button' class='btn btn-primary-outline'>" + repos[repo].name + "</button></a><div class='card-text'><small class='text-muted'><span><i class='fa fa-star'></i>" + repos[repo].watchers + "</span><span><i class='fa fa-code-fork'></i>" + repos[repo].forks + "</span><span class='lang'><b>" + repos[repo].language + "</span></b></small><p class='card-text'>" + repos[repo].description + "</p>");
                }
            }
        }
    },
    error: function(request, status, error) {
        console.log(error);
    }
});

/** Facebook Sharing */

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

/** Small to Big Image */

$(document).ready(function() {
    var small = { width: "200px"};
    var large = { width: "400px"};
    var count = 1;
    $("#img-change").css(small).on('click', function() {
        $(this).animate((count == 1) ? large : small);
        count = 1 - count;
    });
});

/** Behance Projects */

$(document).ready(function() {
    var q = {
        url: 'https://api.behance.net/v2/users/fvcproductions/projects?',
        key: 'client_id=6rsbOlgsV0AdMoXTOFJug1yjarwjXx0S'
    };

    $.ajax({
        url: q.url + q.key,
        dataType: 'jsonp',
        success: function(res) {
            // loop through all projects and display
            for (var i = 0; i < res.projects.length; i++) {
                var behance_project = '<div class="card"><img class="thumbnail" src="' + res.projects[i].covers['202'] + '">' + '<div class="label"><h6><a href="' + res.projects[i].url + '">' + res.projects[i].name + '</a></h6><p>views: ' + res.projects[i].stats.views + '</p>' + '</div></div>';
                $('.projects .behance-projects').append(behance_project);

            }
        }, // end success action
        error: function(request, errorType, errorMessage) {
            alert('Error: ' + errorType + ', ' + errorMessage + '!');
        }
    });
});
