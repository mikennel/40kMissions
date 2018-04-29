(function(){
  $( document ).ready(init);

    var mission = new object;

    function init (){
      getMissionData();
      populateData();
    }

    function getMissionData(){
      var jsonFetch = $.getJSON("./missionJSON/ewBRB1.json");
      mission = JSON.parse(jsonFetch.responseText);
    }

    function populateData(){
      for (i in mission.battlefield){
        $('#missionBattlefield').append("<p>"+mission.battlefield[i]+"</p>");
      }
    }

})();
