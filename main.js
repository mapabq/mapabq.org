        function getWednesdays(d) {
            var date = new Date(d.getTime());
            var month = date.getMonth(),
            wednesdays = [];
            date.setDate(1);
            while (date.getDay() !== 3) {
                date.setDate(date.getDate() + 1);
            }
            while (date.getMonth() === month) {
                wednesdays.push(new Date(date.getTime()));
                date.setDate(date.getDate() + 7);
            }

            return wednesdays;
        }
        var d = new Date();
        var wednesdays = getWednesdays(d);
        if (wednesdays[1] < d) {
            d.setMonth(d.getMonth() + 1);
            d.setDate(1);
            wednesdays = getWednesdays(d);
        }
        var nextDateEl = document.getElementById("next-date");
        var secondWednesday = wednesdays[2];
        nextDateEl.innerText = formatDate(secondWednesday);

        function formatDate(date) {
            var monthNames = [
                "January", "February", "March",
                "April", "May", "June", "July",
                "August", "September", "October",
                "November", "December"
            ];

            var day = date.getDate();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();

            return monthNames[monthIndex] + " " + day + " " + year;
        }
     
        var bowAndArrow = [35.1048139, -106.6509943];
        var bAInfo = "<b>Bow and Arrow Brewing Co.</b><br> 608 McKnight Ave NW,<br> Albuquerque, NM 87102"
        var meetingLocation = bowAndArrow;
        var meetingLocationInfo = bAInfo;
        var abqCenter = [35.0844,106.6504]
        var mymap = L.map('map').setView(meetingLocation, 16);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYWJxIiwiYSI6ImNpeHRxc3Y1MjAwNTQycW56d3NsMmNwYXkifQ.S9tHYTJkndcIGC5RWh_7Hw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
            id: 'mapbox.streets'
        }).addTo(mymap);
        /*
        L.marker(meetingLocation)
            .addTo(mymap)
            .bindPopup(meetingLocationInfo);
        */