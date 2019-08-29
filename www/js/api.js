$(document).ready(function(){

  $("#Events").attr("class", "active");
  $("#Birthdays").attr("class", "");
  $("#Death").attr("class", "");

    $.getJSON("https://history.muffinlabs.com/date?callback=?", function(data) {
      var items = [];
      for (var i = data.data.Events.length - 1; i >= 0; i--) {
          items.push("<div class='col s12 '><div class='card horizontal'><div class='card-stacked'><div class='card-content'>"+
          "<p>"+data.data.Events[i].year+"-"+ data.data.Events[i].text +"</p></div><div class='card-action'>"+
         "<a href='#' class='right' onclick=\"window.plugins.socialsharing.share('"+data.data.Events[i].year , data.data.Events[i].text+"');\"><i class='far fa-share-square'></i></a>"+
         "</div></div></div></div>"
         );
      }
          $("<div>", {
        "class": "row",
        html: items.join("")
    }).appendTo("div.tarih");
       $(".overlay").hide();

      });

});




$('#Events').click(function(){
  $(".overlay").show();
  $("div.tarih").empty();
  $("#Events").attr("class", "active");
  $("#Birthdays").attr("class", "");
  $("#Death").attr("class", "");

    $.getJSON("https://history.muffinlabs.com/date?callback=?", function(data) {
      var items = [];
      for (var i = data.data.Events.length - 1; i >= 0; i--) {
               items.push("<div class='col s12 '><div class='card horizontal'><div class='card-stacked'><div class='card-content'>"+
          "<p>"+data.data.Events[i].year+"-"+ data.data.Events[i].text +"</p></div>"+
         "<a href='#' class='right' onclick=\"window.plugins.socialsharing.share('"+data.data.Events[i].year , data.data.Events[i].text+"');\"><i class='far fa-share-square'></i></a>"+
         "</div></div></div>"
         );

      }
          $("<div>", {
        "class": "row",
        html: items.join("")
    }).appendTo("div.tarih");
       $(".overlay").hide();
      });

});
      

      
$('#Birthdays').click(function(){
  $("div.tarih").empty();
$(".overlay").show();
  $("#Birthdays").attr("class", "active");
  $("#Events").attr("class", "");
  $("#Death").attr("class", "");

    $.getJSON("https://history.muffinlabs.com/date?callback=?", function(data) {
      var items = [];
      for (var i = data.data.Births.length - 1; i >= 0; i--) {
               items.push("<div class='col s12 '><div class='card horizontal'><div class='card-stacked'><div class='card-content'>"+
          "<p>"+data.data.Births[i].year+"-"+ data.data.Births[i].text +"</p></div><div class='card-action'>"+
         "<a href='#' class='right ' onclick=\"window.plugins.socialsharing.share('"+data.data.Births[i].year , data.data.Births[i].text+"');\"><i class='far fa-share-square'></i></a>"+
         "</div></div></div></div>"
         );
     
      }
          $("<div>", {
        "class": "row",
        html: items.join("")
    }).appendTo("div.tarih");
          $(".overlay").hide();
      });

});
      

$('#Death').click(function(){
  $("div.tarih").empty();
  $("#Death").attr("class", "active");
  $("#Events").attr("class", "");
  $("#Birthdays").attr("class", "");
$(".overlay").show();
    $.getJSON("https://history.muffinlabs.com/date?callback=?", function(data) {
      var items = [];
      for (var i = data.data.Deaths.length - 1; i >= 0; i--) {
          items.push("<div class='col s12 '><div class='card horizontal'><div class='card-stacked'><div class='card-content'>"+
          "<p>"+data.data.Deaths[i].year+"-"+ data.data.Deaths[i].text +"</p></div><div class='card-action'>"+
         "<a href='#' class='right' onclick=\"window.plugins.socialsharing.share('"+data.data.Deaths[i].year , data.data.Deaths[i].text+"');\" ><i class='far fa-share-square'></i></a>"+
         "</div></div></div></div>"
         );

      }
          $("<div>", {
        "class": "row",
        html: items.join("")
    }).appendTo("div.tarih");
          $(".overlay").hide();
      });

});




 var d = new Date(),
    days = [ 'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'],
    day = days[d.getDay()],
    
    months = ['January',
'February',
'March',
'April',
'May',
'June',
'July',
'August',
'September',
'October',
'November',
'December'],
    month = months[d.getMonth()],
    date = d.getDate()
    var timestamp = day+', '+month+' '+date;
    
    document.getElementById("datetime").innerHTML=timestamp;
