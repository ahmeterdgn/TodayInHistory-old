$(document).ready(function(){
  $(".overlay").show();
  $("div.tarih").empty();
  $("#Events").attr("class", "active");
  $("#Birthdays").attr("class", "");
  $("#Death").attr("class", "");

    $.getJSON("http://todayinhistory.app.codeveal.com/api/registries?page=1&size=1000&category=Olay&ApiKey=9CD8F419-CF18-44C2-BF9D-7D2D2B688351", function(data) {
      var items = [];
      for (var i = data.length - 1; i >= 0; i--) {
               items.push("<div class='col s12 '><div class='card horizontal'><div class='card-stacked'><div class='card-content'>"+
          "<p>"+ data[i].text +"</p></div><div class='card-action'>"+
         "<a href='#' class='right' onclick=\"window.plugins.socialsharing.share('"+data[i].text , data[i].text+"');\"><i class='far fa-share-square'></i></a>"+
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

    $.getJSON("http://todayinhistory.app.codeveal.com/api/registries?page=1&size=1000&category=Olay&ApiKey=9CD8F419-CF18-44C2-BF9D-7D2D2B688351", function(data) {
      var items = [];
      for (var i = data.length - 1; i >= 0; i--) {
               items.push("<div class='col s12 '><div class='card horizontal'><div class='card-stacked'><div class='card-content'>"+
          "<p>"+ data[i].text +"</p></div><div class='card-action'>"+
         "<a href='#' class='right' onclick=\"window.plugins.socialsharing.share('"+data[i].text , data[i].text+"');\"><i class='far fa-share-square'></i></a>"+
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

$('#Birthdays').click(function(){
  $("div.tarih").empty();
$(".overlay").show();
  $("#Birthdays").attr("class", "active");
  $("#Events").attr("class", "");
  $("#Death").attr("class", "");

    $.getJSON("http://todayinhistory.app.codeveal.com/api/registries?page=1&size=1000&category=Do%C4%9Fum&ApiKey=9CD8F419-CF18-44C2-BF9D-7D2D2B688351", function(data) {
      var items = [];
      for (var i = data.length - 1; i >= 0; i--) {
               items.push("<div class='col s12 '><div class='card horizontal'><div class='card-stacked'><div class='card-content'>"+
          "<p>"+ data[i].text +"</p></div><div class='card-action'>"+
         "<a href='#' class='right ' onclick=\"window.plugins.socialsharing.share('"+data[i].text , data[i].text+"');\"><i class='far fa-share-square'></i></a>"+
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
    $.getJSON("http://todayinhistory.app.codeveal.com/api/registries?page=1&size=1000&category=Ölüm&ApiKey=9CD8F419-CF18-44C2-BF9D-7D2D2B688351", function(data) {
      var items = [];
      for (var i = data.length - 1; i >= 0; i--) {
          items.push("<div class='col s12 '><div class='card horizontal'><div class='card-stacked'><div class='card-content'>"+
          "<p>"+ data[i].text +"</p></div><div class='card-action'>"+
         "<a href='#' class='right' onclick=\"window.plugins.socialsharing.share('"+data[i].text , data[i].text+"');\" ><i class='far fa-share-square'></i></a>"+
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
    days =[ 'Pazar',
     'Pazartesi',
     'Salı',
     'Çarşamba',
     'Perşembe',
     'Cuma',
     'Cumartesi'],
    day = days[d.getDay()],
    
    months = ['Ocak',
'Şubat',
'Mart',
'Nisan',
'Mayıs ayı',
'Haziran',
'Temmuz',
'Ağustos',
'Eylül',
'Ekim',
'Kasım',
'Aralık'],
    month = months[d.getMonth()],
    date = d.getDate()
    var timestamp = day+', '+month+' '+date;
    
    document.getElementById("datetime").innerHTML=timestamp;
