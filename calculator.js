function Calc() {
    let x = [];
    let op = [];
    let y = [];
    let results = [];

    function inputNums() {
        while (true) {
            let x_input = prompt("Value of X: ");
            let op_input = prompt("Operator: ");
            let y_input = prompt("Value of Y: ");
            x.push(x_input);
            op.push(op_input);
            y.push(y_input);
            let loop = confirm("Continue loop?");
            if (!loop) break;
        }
        for (let i = 0; i < x.length; i++) {
            if (!isNaN(x[i]) && !isNaN(y[i])) {
                if (op[i] == "+") {
                    results[i] = parseInt(x[i]) + parseInt(y[i]);
                } else if (op[i] == "-") {
                    results[i] = parseInt(x[i]) - parseInt(y[i]);
                } else if (op[i] == "*") {
                    results[i] = parseInt(x[i]) * parseInt(y[i]);
                } else if (op[i] == "/") {
                    results[i] = parseInt(x[i]) / parseInt(y[i]);
                } else if (op[i] == "%") {
                    results[i] = parseInt(x[i]) % parseInt(y[i]);
                } else {
                    results[i] = "Computation error";
                }
            } else {
                results[i] = "Wrong input number";
            }
        }
        document.write("<table style='border: 1px solid black'>");
        document.write("<tr style = 'border: 1px solid black'> " +
            " <th style = 'border: 1px solid black'>x input</th> " +
            "<th style = 'border: 1px solid black'>operator</th> " +
            "<th style = 'border: 1px solid black'>y input</th> " +
            "<th style = 'border: 1px solid black'> result</th></tr>");
        for(let i = 0; i < x.length; i++)   {
            document.write("<tr style='background: lightblue; border: 1px solid black'>" +
                "<td style='background: lightblue; border: 1px solid black'>" + x[i] +
                "</td><td style='background: lightblue; border: 1px solid black'>" + op[i] +
                "</td><td style='background: lightblue; border: 1px solid black'>" + y[i] +
                "</td><td style='background: lightblue; border: 1px solid black'>" + results[i] +"</td></tr>");
        }
        document.write("</table>");
    }
    function statsTable()   {
        let final = [];
        let total = 0;
        document.write("<table style='border: 1px solid black'>");
        document.write("<tr style = 'border: 1px solid black'> " +
            " <th style = 'border: 1px solid black'>Min</th> " +
            "<th style = 'border: 1px solid black'>Max</th> " +
            "<th style = 'border: 1px solid black'>Average</th> " +
            "<th style = 'border: 1px solid black'>Total</th></tr>");
        for(let i = 0; i < results.length; i++) {
            if(!isNaN(results[i]))  {
                final.push(results[i]);
                total += results[i];
            }
        }
        let min = Math.min.apply(Math, final);
        let max = Math.max.apply(Math, final);
        let avg = total / final.length;
        document.write("<tr style='background: lightblue; border: 1px solid black'>" +
            "<td style='background: lightblue; border: 1px solid black'>" + min +
            "</td><td style='background: lightblue; border: 1px solid black'>" + max +
            "</td><td style='background: lightblue; border: 1px solid black'>" + avg +
            "</td><td style='background: lightblue; border: 1px solid black'>" + total +"</td></tr>");
        document.write("</table>");
    }
    inputNums();
    statsTable();
    document.write("<br>");
    document.write("<a href = 'index.html'> Back to index.html </a>");
}