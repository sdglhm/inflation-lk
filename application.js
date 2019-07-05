var data = [
    {
        "Year": 1960,
        "CPI": 1.49
    },
    {
        "Year": 1961,
        "CPI": 1.5
    },
    {
        "Year": 1962,
        "CPI": 1.53
    },
    {
        "Year": 1963,
        "CPI": 1.56
    },
    {
        "Year": 1964,
        "CPI": 1.61
    },
    {
        "Year": 1965,
        "CPI": 1.62
    },
    {
        "Year": 1966,
        "CPI": 1.61
    },
    {
        "Year": 1967,
        "CPI": 1.65
    },
    {
        "Year": 1968,
        "CPI": 1.74
    },
    {
        "Year": 1969,
        "CPI": 1.87
    },
    {
        "Year": 1970,
        "CPI": 1.98
    },
    {
        "Year": 1971,
        "CPI": 2.04
    },
    {
        "Year": 1972,
        "CPI": 2.17
    },
    {
        "Year": 1973,
        "CPI": 2.38
    },
    {
        "Year": 1974,
        "CPI": 2.67
    },
    {
        "Year": 1975,
        "CPI": 2.84
    },
    {
        "Year": 1976,
        "CPI": 2.88
    },
    {
        "Year": 1977,
        "CPI": 2.92
    },
    {
        "Year": 1978,
        "CPI": 3.27
    },
    {
        "Year": 1979,
        "CPI": 3.62
    },
    {
        "Year": 1980,
        "CPI": 4.57
    },
    {
        "Year": 1981,
        "CPI": 5.39
    },
    {
        "Year": 1982,
        "CPI": 5.98
    },
    {
        "Year": 1983,
        "CPI": 6.81
    },
    {
        "Year": 1984,
        "CPI": 7.94
    },
    {
        "Year": 1985,
        "CPI": 8.06
    },
    {
        "Year": 1986,
        "CPI": 8.7
    },
    {
        "Year": 1987,
        "CPI": 9.38
    },
    {
        "Year": 1988,
        "CPI": 10.69
    },
    {
        "Year": 1989,
        "CPI": 11.92
    },
    {
        "Year": 1990,
        "CPI": 14.49
    },
    {
        "Year": 1991,
        "CPI": 16.25
    },
    {
        "Year": 1992,
        "CPI": 18.1
    },
    {
        "Year": 1993,
        "CPI": 20.23
    },
    {
        "Year": 1994,
        "CPI": 21.94
    },
    {
        "Year": 1995,
        "CPI": 23.62
    },
    {
        "Year": 1996,
        "CPI": 27.39
    },
    {
        "Year": 1997,
        "CPI": 30.01
    },
    {
        "Year": 1998,
        "CPI": 32.82
    },
    {
        "Year": 1999,
        "CPI": 34.36
    },
    {
        "Year": 2000,
        "CPI": 36.48
    },
    {
        "Year": 2001,
        "CPI": 41.65
    },
    {
        "Year": 2002,
        "CPI": 45.62
    },
    {
        "Year": 2003,
        "CPI": 48.5
    },
    {
        "Year": 2004,
        "CPI": 52.18
    },
    {
        "Year": 2005,
        "CPI": 58.25
    },
    {
        "Year": 2006,
        "CPI": 64.09
    },
    {
        "Year": 2007,
        "CPI": 74.24
    },
    {
        "Year": 2008,
        "CPI": 90.99
    },
    {
        "Year": 2009,
        "CPI": 94.15
    },
    {
        "Year": 2010,
        "CPI": 100
    },
    {
        "Year": 2011,
        "CPI": 106.72
    },
    {
        "Year": 2012,
        "CPI": 114.77
    },
    {
        "Year": 2013,
        "CPI": 122.7
    },
    {
        "Year": 2014,
        "CPI": 126.09
    },
    {
        "Year": 2015,
        "CPI": 128.91
    },
    {
        "Year": 2016,
        "CPI": 134.05
    }
];


$(document).ready(function () {

    data.forEach(function (value) {
        $('#year_from_id')
            .append($("<option></option>")
                .attr("value", value.Year)
                .text(value.Year));

        $('#year_to_id')
            .append($("<option></option>")
                .attr("value", value.Year)
                .text(value.Year));
    });



    function calculate() {
        var fromYear = $("#year_from_id").val();
        var toYear = $("#year_to_id").val();
        var amount = $("#amount_id").val();

        if (fromYear !== "" && fromYear !== undefined && toYear !== "" && toYear !== undefined && amount !== "" && amount !== undefined && !isNaN(amount)) {
            $("#amount_cals").text(amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
            $("#from_year_note").text(fromYear);
            $("#to_year_note").text(toYear);

            var newAmount = amount * (getCPIbyYear(toYear)[0]["CPI"] / getCPIbyYear(fromYear)[0]["CPI"]);
            console.log(getCPIbyYear(fromYear)[0]["CPI"])
            $("#amount_cals_done").text(newAmount.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));

        }

    }

    $("#year_to_id").change(function () {
        calculate();
    });


    $("#year_from_id").change(function () {
        calculate();
    });


    $("#amount_id").change(function () {
        calculate();
    });

    function getCPIbyYear(year) {
        return data.filter(
          function(data) {
            return data.Year == year
          }
        );
      }
});


