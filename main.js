    function insertTable() {
        var num_rows = document.getElementById('rows').value;
        var num_cols = document.getElementById('cols').value;
        var width = document.getElementById('width').value;
        var theader = "<table id='table1' width = ' " + width + "% '>";
        var tbody = "";

        for (var j = 0; j < num_cols; j++) {
            theader += "<th> " + (j + 1) + " </th>";
        }

        for (var i = 0; i < num_rows; i++) {
            tbody += "<tr>";
            for (var j = 0; j < num_cols; j++) {
                tbody += "<td>" + (j + 1);
                tbody += "</td>";
            }
            tbody += "</tr><br/>";
        }
        var tfooter = "</table>";
        document.getElementById('wrapper').innerHTML = theader + tbody + tfooter;
    }