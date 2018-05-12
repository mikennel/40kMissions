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
        if (i > 0){
          $('#missionBattlefield').append("<div class='listBorder col s6 offset-s3'></div>");
        }
        $('#missionBattlefield').append("<div class='col s12 listItem'>"+mission.battlefield[i]+"</div>");
      }
      for (i in mission.deployment){
        if (i > 0){
          $('#missionDeployment').append("<div class='listBorder col s6 offset-s3'></div>");
        }
        $('#missionDeployment').append("<div class='col s12 listItem'>"+mission.deployment[i]+"</div>");
      }
      for (i in mission.victory.primary){
        if (i > 0){
          $('#missionVictoryPrimary').append("<div class='listBorder col s6 offset-s3'></div>");
        }
        $('#missionVictoryPrimary').append("<div class='col s12 listItem'>"+mission.victory.primary[i]+"</div>");
      }
      if (mission.victory.secondary.length > 0){
        for (i in mission.victory.secondary){
          if (i > 0){
            $('#missionVictorySecondary').append(", ");
          }
          $('#missionVictorySecondary').append(mission.victory.secondary[i]);
        }
      } else{
        $('#missionVictorySecondary').append("No secondary objectives.");
      }
      $('#missionVictorySecondary').wrapInner("<div class='col s12 listItem'></div>");
    }

})();
