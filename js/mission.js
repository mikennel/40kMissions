(function(){
  $( document ).ready(init);

    var mission;

    function init (){
      $('.carousel').carousel();
      getMissionData();
    }

    function getMissionData(){
      var missionID = getUrlParameter();
      // grab json and parse it in to 'mission' variable
      var jsonFetch = $.getJSON("./missionJSON/"+missionID+".json", function(response){
        mission = jsonFetch.responseJSON;
        populateData();
      });
    }

      // gets url paramater of the json id
    function getUrlParameter() {
      var sPageURL = decodeURIComponent(window.location.search.substring(1));
      var sParameterName = sPageURL.split('=');
      return sParameterName[1];
    }

    function populateData(){
      // set title header
      $('#missionTitle').html(mission.title);
      // populate battlefield data
      for (i in mission.battlefield){
        $('#missionBattlefield').append("<li class='collection-item listItem'>"+mission.battlefield[i]+"</li>");
      }
    }

})();
