(function(){
  $( document ).ready(init);

    var mission;

    function init (){
      getMissionData();
      populateData();
    }

    function getMissionData(){
      var missionID = getUrlParameter('json');
      // grab json and parse it in to 'mission' variable
      var jsonFetch = $.getJSON("./missionJSON/"+missionID+".json");
      mission = JSON.parse(jsonFetch.responseText);
    }

      // gets url paramater of the json id
    function getUrlParameter(sParam) {
      var sPageURL = decodeURIComponent(window.location.search.substring(1)),
          sURLVariables = sPageURL.split('&'),
          sParameterName,
          i;

      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');

          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : sParameterName[1];
          }
      }
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
