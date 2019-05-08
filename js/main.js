        function getWednesdays() {
            var d = new Date(),
                month = d.getMonth(),
                wednesdays = [];

            d.setDate(1);
            while (d.getDay() !== 3) {
                d.setDate(d.getDate() + 1);
            }

            while (d.getMonth() === month) {
                wednesdays.push(new Date(d.getTime()));
                d.setDate(d.getDate() + 7);
            }
            return wednesdays;
        }

        var wednesdays = getWednesdays();
        var nextDateEl = document.getElementById("next-date");
        var secondWednesday = wednesdays[1];
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
        var flyingStar = [35.079832, -106.606297];
        var flyingStarInfo = "<b>Flying Star Cafe</b><br> 3416 Central Ave SE<br> Albuquerque, NM 87106"
        var mymap = L.map('map', {
            scrollWheelZoom: false
        }).setView(flyingStar, 13);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYWJxIiwiYSI6ImNpeHRxc3Y1MjAwNTQycW56d3NsMmNwYXkifQ.S9tHYTJkndcIGC5RWh_7Hw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            id: 'mapbox.streets'
        }).addTo(mymap);

        L.marker(flyingStar)
            .addTo(mymap)
            .bindPopup(flyingStarInfo);