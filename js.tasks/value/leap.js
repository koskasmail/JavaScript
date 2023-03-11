///----[leap::::True/False::::]------------
        // year / 4 = 500 (leap)
        // year / 100 = 20 (not leap)
        // year / 400 = 5 (leap)

        function isLeap(year) {

            var leap = false;

            if ((year % 4) === 0) {
                if ((year % 100) == 0) {

                    if ((year % 400) === 0) {
                        return true;
                    } else {
                        return false;
                    }

                }
                else {
                    leap = true;
                } 
            }
            else
                {
                    leap = false;
                }

            return leap;
        }

        ///:::Example:::2020=true:::2010=false:::
        var year = 2020;
        console.log(`isLeap::: year=${year}::: ${isLeap(year)}`);