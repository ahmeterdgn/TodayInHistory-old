$(document).ready(function(){

  $("#Events").attr("class", "active");
  $("#Birthdays").attr("class", "");
  $("#Death").attr("class", "");

    $.getJSON("https://history.muffinlabs.com/date?callback=?", function(data) {
      var items = [];
      for (var i = data.data.Events.length - 1; i >= 0; i--) {
          items.push("<div class='col s12 '><div class='card horizontal'><div class='card-stacked'><div class='card-content'>"+
          "<p>"+data.data.Events[i].year+"->"+ data.data.Events[i].text +"</p></div><div class='card-action'>"+
         "<a href='"+data.data.Events[i].link+"' class='right'>More</a>"+
         "</div></div></div></div>"
         );
       
      }
          $("<div>", {
        "class": "row",
        html: items.join("")
    }).appendTo("div.tarih");
       
      });

});








$('#Events').click(function(){
  $("div.tarih").empty();
  $("#Events").attr("class", "active");
  $("#Birthdays").attr("class", "");
  $("#Death").attr("class", "");

    $.getJSON("https://history.muffinlabs.com/date?callback=?", function(data) {
      var items = [];
      for (var i = data.data.Events.length - 1; i >= 0; i--) {
          items.push("<div class='col s12 '><div class='card horizontal'><div class='card-stacked'><div class='card-content'>"+
          "<p>"+data.data.Events[i].year+"->"+ data.data.Events[i].text +"</p></div><div class='card-action'>"+
         "<a href='"+data.data.Events[i].link+"' class='right'>More</a>"+
         "</div></div></div></div>"
         );
       
      }
          $("<div>", {
        "class": "row",
        html: items.join("")
    }).appendTo("div.tarih");
       
      });

});
      

      
$('#Birthdays').click(function(){
  $("div.tarih").empty();

  $("#Birthdays").attr("class", "active");
  $("#Events").attr("class", "");
  $("#Death").attr("class", "");

    $.getJSON("https://history.muffinlabs.com/date?callback=?", function(data) {
      var items = [];
      for (var i = data.data.Births.length - 1; i >= 0; i--) {
          items.push("<div class='col s12 '><div class='card horizontal'><div class='card-stacked'><div class='card-content'>"+
          "<p>"+data.data.Births[i].year+"->"+ data.data.Births[i].text +"</p></div><div class='card-action'>"+
         "<a href='"+data.data.Births[i].link+"' class='right'>More</a>"+
         "</div></div></div></div>"
         );
       
      }
          $("<div>", {
        "class": "row",
        html: items.join("")
    }).appendTo("div.tarih");
       console.log(items);
      });

});
      

$('#Death').click(function(){
  $("div.tarih").empty();
  $("#Death").attr("class", "active");
  $("#Events").attr("class", "");
  $("#Birthdays").attr("class", "");

    $.getJSON("https://history.muffinlabs.com/date?callback=?", function(data) {
      var items = [];
      for (var i = data.data.Deaths.length - 1; i >= 0; i--) {
          items.push("<div class='col s12 '><div class='card horizontal'><div class='card-stacked'><div class='card-content'>"+
          "<p>"+data.data.Births[i].year+"->"+ data.data.Births[i].text +"</p></div><div class='card-action'>"+
         "<a href='"+data.data.Births[i].link+"' class='right'>More</a>"+
         "</div></div></div></div>"
         );
       
      }
          $("<div>", {
        "class": "row",
        html: items.join("")
    }).appendTo("div.tarih");
       console.log(items);
      });

});
      