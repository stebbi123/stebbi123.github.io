"use strict";



$.getJSON( "http://apis.is/concerts", function( data ) {

    var concertEvents = [];
    var images;
    var text;
    var date;
    var where;
    console.log(data);

    for(let i = 0; i<data.results.length; i++){
        concertEvents.push
        ({
            name:data.results[i].eventDateName,
            where:data.results[i].eventHallName,
            imageSrc:data.results[i].imageSource,
            when:data.results[i].dateOfShow
        });
    }

    
    for(let i = 0; i<data.results.length; i++){

        images = concertEvents[i].imageSrc;
        text = concertEvents[i].name;
        date = concertEvents[i].when;
        where = concertEvents[i].where;

        var imagesLocation = document.getElementsByTagName('img')[i];
        imagesLocation.setAttribute("src", images);

        var textLocation = document.getElementsByClassName('nafn')[i];
        textLocation.innerHTML = text;

        var textLocation2 = document.getElementsByClassName('date')[i];
        textLocation2.innerHTML = date;

        var textLocation3 = document.getElementsByClassName('venue')[i];
        textLocation3.innerHTML = where;
        console.log("hello");
    }






});
