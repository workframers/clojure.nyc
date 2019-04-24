/** External Links **/

function externalLinks() { if (!document.getElementsByTagName) return; var anchors = document.getElementsByTagName("a"); for (var i=0; i<anchors.length; i++) { var anchor = anchors[i]; if (anchor.getAttribute("href") && anchor.getAttribute("rel") == "external") anchor.target = "_blank"; } } window.onload = externalLinks;

/** jQuery Easing **/

jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,a,c,b,d){return jQuery.easing[jQuery.easing.def](e,a,c,b,d)},easeInQuad:function(e,a,c,b,d){return b*(a/=d)*a+c},easeOutQuad:function(e,a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOutQuad:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a+c;return-b/2*(--a*(a-2)-1)+c},easeInCubic:function(e,a,c,b,d){return b*(a/=d)*a*a+c},easeOutCubic:function(e,a,c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(e,a,c,b,d){if((a/=d/2)<1)return b/
2*a*a*a+c;return b/2*((a-=2)*a*a+2)+c},easeInQuart:function(e,a,c,b,d){return b*(a/=d)*a*a*a+c},easeOutQuart:function(e,a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a*a*a+c;return-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(e,a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOutQuint:function(e,a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a*a*a*a+c;return b/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(e,
a,c,b,d){return-b*Math.cos(a/d*(Math.PI/2))+b+c},easeOutSine:function(e,a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(e,a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(e,a,c,b,d){return a==0?c:b*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(e,a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(e,a,c,b,d){if(a==0)return c;if(a==d)return c+b;if((a/=d/2)<1)return b/2*Math.pow(2,10*(a-1))+c;return b/2*(-Math.pow(2,-10*--a)+2)+c},
easeInCirc:function(e,a,c,b,d){return-b*(Math.sqrt(1-(a/=d)*a)-1)+c},easeOutCirc:function(e,a,c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(e,a,c,b,d){if((a/=d/2)<1)return-b/2*(Math.sqrt(1-a*a)-1)+c;return b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d)==1)return c+b;f||(f=d*0.3);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);return-(g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f))+c},easeOutElastic:function(e,
a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d)==1)return c+b;f||(f=d*0.3);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);return g*Math.pow(2,-10*a)*Math.sin((a*d-e)*2*Math.PI/f)+b+c},easeInOutElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d/2)==2)return c+b;f||(f=d*0.3*1.5);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);if(a<1)return-0.5*g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f)+c;return g*Math.pow(2,-10*(a-=1))*Math.sin((a*
d-e)*2*Math.PI/f)*0.5+b+c},easeInBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;return b*(a/=d)*a*((f+1)*a-f)+c},easeOutBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;return b*((a=a/d-1)*a*((f+1)*a+f)+1)+c},easeInOutBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;if((a/=d/2)<1)return b/2*a*a*(((f*=1.525)+1)*a-f)+c;return b/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+c},easeInBounce:function(e,a,c,b,d){return b-jQuery.easing.easeOutBounce(e,d-a,0,b,d)+c},easeOutBounce:function(e,a,c,b,d){return(a/=
d)<1/2.75?b*7.5625*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+0.75)+c:a<2.5/2.75?b*(7.5625*(a-=2.25/2.75)*a+0.9375)+c:b*(7.5625*(a-=2.625/2.75)*a+0.984375)+c},easeInOutBounce:function(e,a,c,b,d){if(a<d/2)return jQuery.easing.easeInBounce(e,a*2,0,b,d)*0.5+c;return jQuery.easing.easeOutBounce(e,a*2-d,0,b,d)*0.5+b*0.5+c}});


(function($) {
  /** Meetup **/

  var signedUrls = {
    nextUpcoming: "https://api.meetup.com/Clojure-nyc/events?desc=true&scroll=next_upcoming&photo-host=public&page=1&sig_id=118155582&sig=2706dede4854566fe13ea35d7b0c7bafd7193716",
    past: "https://api.meetup.com/Clojure-nyc/events?desc=true&scroll=recent_past&photo-host=public&page=20&sig_id=10527166&sig=e294640d82ed254310ae89d8620d108cb38a5ebb"
  };

  function toHtmlString (event, venue, date) {
    // Check for Intl support. It's present on all modern browsers (https://caniuse.com/#feat=internationalization),
    // but it is still nice to fail gracefully for older browsers.
    if (window.Intl && typeof window.Intl === "object"){
      var formattingOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'America/New_York' }
      formattedDate = date.toLocaleDateString('default', formattingOptions)
    } else {
      formattedDate = event.local_date + " " + event.local_time
    }

    return (
      // Name
      "<p><strong>" + event.name + "</strong></p>" +

      // Description
      "<p>" + event.description + "</p>" +

      // Date and Time
      "<p><strong>Date: </strong>" +
      formattedDate + "</p>" +

      // Location
      "<p><strong>Location: </strong><br/>" +
      venue.name + "<br/>" + venue.address_1 + "<br />" +
      venue.city + "," + venue.state + "</p>" +

      // Registration Link
      "<p><strong>Registration: </strong>" +
      "<a href='" + event.link + "'>" + event.link + "</a></p>"
    );
  }

  function loadEvents($el, url, cb) {
    return $.ajax(url, {
      jsonp: "callback",
      dataType: "jsonp",
    }).done(function() {
      $el.removeClass();
    }).fail(function(err) {
      $el.text("Failed to load events.").addClass("error");
    });
  }

  function getNextUpcoming() {
    var $nextUpcoming = $("#next-upcoming");

    if ($nextUpcoming.length) {
      loadEvents(
        $nextUpcoming,
        signedUrls.nextUpcoming
      ).done(function(resp) {
        var event = resp.data["0"];
        var date = new Date(event.time);
        var venue = event.venue;

        $nextUpcoming.html(toHtmlString(event, venue, date));
      });
    }
  }

  function getPast() {
    var $past = $("#past");

    if ($past.length) {
      loadEvents(
        $past,
        signedUrls.past
      ).done(function(resp) {
        $past[0].innerHTML = "";

        for (var i = 0; i < resp.data.length; i++) {
          var event = resp.data[i];
          var date = new Date(event.time);
          var venue = event.venue;

          $past.html(
            $past[0].innerHTML + toHtmlString(event, venue, date)
          );

          if (i < resp.data.length-1) {
            $past[0].innerHTML += "<hr>";
          }
        }
      });
    }
  }

  /** Responsive Menu **/

  function initMenu() {
    $(".menutitle").click(function() {
      $(".menu").slideToggle(350,"easeInOutExpo", function() {
        $(this).attr("style", "").toggleClass("open");
      });

      $(this).toggleClass("active");
    });
  }

  $(function() {
    getNextUpcoming();
    getPast();
    initMenu();
  });
})(window.jQuery);
