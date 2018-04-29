(function(){
  $( document ).ready(init);

    var mission;

    function init (){
      getMissionData();
      populateData();
    }

    function getMissionData(){
      // grab json and parse it in to 'mission' variable
      var jsonFetch = $.getJSON("./missionJSON/ewBRB1.json");
      mission = JSON.parse(jsonFetch.responseText);
    }

    function populateData(){
      // set title header
      $('#missionTitle').html(mission.title);
      // populate battlefield data
      for (i in mission.battlefield){
        $('#missionBattlefield').append("<li class='listItem'>"+mission.battlefield[i]+"</li>");
      }
    }

})();
