(function(){
  $( document ).ready(init);

    function init (){
      $.getJSON("../missionJSON/ewBRB1.json", function (data) {
        $.each(data, function (index, value) {
           console.log("entire JSON = "+value);
        });
        console.log("title = ");
      });
    }

})();
