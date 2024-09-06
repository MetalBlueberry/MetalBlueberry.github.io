fig = {
    data: [
        {
            x: [60],
            name: "Software Engineering",
            type: "bar",
            orientation: "h",
            textposition: 'auto',
            text: "60%",
            textfont: {
                family: 'Arial',
                size: 30,
            },
            marker: { color: "rgb(1, 173, 216)" }
        },
        {
            x: [25],
            name: "Communication",
            type: "bar",
            orientation: "h",
            textposition: 'auto',
            text: "25%",
            textfont: {
                family: 'Arial',
                size: 24,
            },
            marker: { color: "rgb(34, 139, 34)" }
        },
        {
            x: [15],
            name: "Team leadership",
            type: "bar",
            orientation: "h",
            textposition: 'auto',
            text: "15%",
            textfont: {
                family: 'Arial',
                size: 24,
            },
            marker: { color: "rgb(255, 165, 0)" }
        },
        {
            x: [10],
            name: "Data Engineering",
            type: "bar",
            orientation: "h",
            textposition: 'auto',
            text: "10%",
            textfont: {
                family: 'Arial',
                size: 15,
            },
            marker: { color: "rgb(128, 0, 128)" }
        }
    ],
    layout: {
        title: "Skill chart",
        barmode: "stack",
        xaxis: {
            showgrid: false,
            zeroline: false,
            visible: false
        },
        yaxis: {
            showgrid: false,
            zeroline: false,
            visible: false
        },
        height: "200",
        legend: {
            orientation: "h",
            traceorder: "normal"
        },
        margin: {
            l: 0, // left margin
            r: 0, // right margin
            t: 30, // top margin
            b: 0, // bottom margin
        }
    },
    config: {
        staticPlot: true
    }
};