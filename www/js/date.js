    var d = new Date(),
    days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
    day = days[d.getDay()],
    months = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],
    month = months[d.getMonth()],
    date = d.getDate()
    var timestamp = day+', '+month+' '+date;
    
    document.getElementById("datetime").innerHTML=timestamp;

