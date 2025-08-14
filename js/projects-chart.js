document.addEventListener('DOMContentLoaded', function() {
    var chartDom = document.getElementById('piechart-container');
    var myChart = echarts.init(chartDom);
    
    var detailContainer = document.createElement('div');
    detailContainer.style.cssText = `
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        width: 200px;
        padding: 15px;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        display: none;
        z-index: 10;
    `;
    chartDom.appendChild(detailContainer);

    var projectDetails = {
        'Robotics Technology': [
            'Adsorption-type inspection robots',
            'Quadruped robots', 
            'Robotic arms',
            'Automation systems'
        ],
        'Reinforcement Learning': [
            'SafeRL framework',
            'Multi-agent systems',
            'Sim2real transfer learning'
        ],
        'Computer Vision': [
            'YOLO-based tracking systems',
            'Defect detection',
            '3D reconstruction'
        ],
        'Embedded Systems': [
            'IoT devices',
            'Edge computing solutions',
            'Custom hardware controllers'
        ],
        'Other Fields': [
            'Academic research',
            'Cross-disciplinary projects',
            'Experimental prototypes'
        ]
    };

    var option = {
        tooltip: {
            show: false
        },
        legend: {
            top: '5%',
            left: 'center',
            textStyle: {
                color: '#333'
            }
        },
        series: [
            {
                name: 'Project Categories',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 18,
                        fontWeight: 'bold',
                        formatter: '{b}\nProportion: {d}%'
                    },
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { 
                        value: 35, 
                        name: 'Robotics Technology',
                        itemStyle: { color: '#5470C6' }
                    },
                    { 
                        value: 30, 
                        name: 'Reinforcement Learning',
                        itemStyle: { color: '#91CC75' }
                    },
                    { 
                        value: 20, 
                        name: 'Computer Vision',
                        itemStyle: { color: '#FAC858' }
                    },
                    { 
                        value: 10, 
                        name: 'Embedded Systems',
                        itemStyle: { color: '#EE6666' }
                    },
                    { 
                        value: 5, 
                        name: 'Other Fields',
                        itemStyle: { color: '#73C0DE' }
                    }
                ]
            }
        ]
    };

    myChart.setOption(option);
    
    myChart.on('mouseover', function(params) {
        var projects = projectDetails[params.name];
        var html = `<h4 style="margin-top:0;color:${params.color}">${params.name}</h4>
                   <p>Percentage: ${params.percent}%</p>
                   <ul style="padding-left:15px;margin-bottom:0;">`;
        
        projects.forEach(function(project) {
            html += `<li>${project}</li>`;
        });
        
        html += `</ul>`;
        detailContainer.innerHTML = html;
        detailContainer.style.display = 'block';
    });

    myChart.on('mouseout', function() {
        detailContainer.style.display = 'none';
    });

    window.addEventListener('resize', function() {
        myChart.resize();
    });
});