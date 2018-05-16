(function(){
  $( document ).ready(init());

    function init (){
      $('#startMissionBtn').on("click", setMission);
    }

    function setMission(){
      var missionType = $('[name=missionType]:checked').data('jsoncode');
      var missionSource = $('[name=missionSource]:checked').data('jsoncode');
      var missionNumber = $('[name=missionNumber]:checked').data('jsoncode');
      window.location.href = './mission?json='+missionSource+"/"+missionType+missionNumber;
    }

})();
