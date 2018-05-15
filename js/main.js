(function(){
  $( document ).ready(init());

    function init (){
      $('#startMissionBtn').on("click", setMission());
    }

    function setMission(){
      console.log("clicked a label");
    }

})();
