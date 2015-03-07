
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .

//Once the Document Object Model is done loading, prevent default , read input values

$(document).ready(function() {
  $(".search-form").on("submit", function(e) {
    e.preventDefault();
    var city = $("#location_city").val();
    var state = $("#location_state").val();

    // API AJAX request embeds state and city with request return JSON
    $.ajax({
      url: "http://api.wunderground.com/api/9f9665f04fbd9ca7/geolookup/conditions/q/" + state + "/" + city + ".json",
      dataType: "jsonp",
      success: function(weatherResponse) {
        var location = weatherResponse['location']['city'];
        // Temperature_string temp given in F then C
        var temperature_string = weatherResponse['current_observation']['temperature_string'];
        // Wind MPH 
        var wind_mph = weatherResponse['current_observation']['wind_mph'];
        // Relative Humidty
        var relative_humidity = weatherResponse['current_observation']['relative_humidity'];
        // 
        var weather = weatherResponse['current_observation']['weather'];
        var icon_url = weatherResponse['current_observation']['icon_url'];

        // POST request using declared variables above, append into View
        $.ajax({
          url: $("search-form").attr('action'),
          type: "POST",
          data: $(".search-form").serialize(),
          success: function(data) {
            // Start result as blank
            $(".api-result").empty(".api-result");
            // Push in parameters temp_f, temp_c, location, wind_mph to ID=api-result
            $("<div class= 'weather-result'>").html("It's " + temperature_string + " in " + location + "<br>the wind is blowing at " + wind_mph + "mph"+ "<br>the relative humidty is " + relative_humidity).prependTo(".api-result");
            $("<div class= 'weather-icon')>").html("<img src =" + icon_url + ">").appendTo(".weather-result");
            // 
            $("<h2>").html("General Forecast: " + weather).appendTo(".api-result");
            $(".api-result").removeClass("hide");
            $(".api-result").append($(data));
            $('input[type="text"],textarea').val('');

            //preventDefault on submit
            $(".submit-comment").on("submit", function(e) {
              e.preventDefault();
              // Read values from form
              var commenter = $("#comment_commenter").val();
              var comment = $("#comment_comment").val();
              // POST request with data that was input
              $.ajax({
                url: $(".submit-comment").attr('action'),
                type: "POST",
                data: $(".submit-comment").serialize(),
                success: function(data) {
                  // Append new data to view
                  $(".comment-list").append($(data));
                  $('input[type="text"],textarea').val('');
                }
              });
            });
          }
        });
      }
    });
    function installWidgetPreviewSingle(widget, img) {
      widget.onChange(function(file) {
        img.css('visibility', 'hidden');
        img.attr('src', '');
        if (file) {
          file.done(function(fileInfo) {
            var size = '' + (img.width() * 2) + 'x' + (img.height() * 2);
            var previewUrl = fileInfo.cdnUrl + '-/scale_crop/' + size + '/center/';
            img.attr('src', previewUrl);
            img.css('visibility', 'visible');
          }); 
        }
      });
    }
     
    afterOnLoad(function() {
      $('.image-preview-single').each(function() {
        installWidgetPreviewSingle(
          uploadcare.Widget($(this).children('input')),
          $(this).children('img')
        );
      });
    });
  });
});