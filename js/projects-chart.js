var chartDom = document.getElementById('piechart-container');
var myChart = echarts.init(chartDom);
var app = {};

var detailContainer = document.createElement('div');
detailContainer.id = 'chart-detail';
document.body.appendChild(detailContainer);

var projectDetails = {
    'Robotics Technology': [
        'Adsorption-type Concrete Inspection Robot',
        'Quadruped Robot Motion Control',
        'Autonomous Navigation System'
    ],
    'Reinforcement Learning': [
        'SafeRL-Quad Sim2real Framework',
        'ASAP-based Motion Planning',
        'ABS-inspired Safety Constraints'
    ],
    'Computer Vision': [
        'YOLO11 EyeTrack System',
        'Concrete Defect Detection',
        'Real-time Object Tracking'
    ],
    'Embedded Systems': [
        'Walnut Pie B2 Application',
        'Low-power Sensor Nodes',
        'Real-time Data Acquisition'
    ],
    'Other Fields': [
        'Data Visualization Platform',
        'Cloud Monitoring System'
    ]
};

var option = {
    tooltip: {
        show: true,
        backgroundColor: 'rgba(26, 31, 54, 0.9)',
        borderColor: 'rgba(0, 229, 255, 0.3)',
        borderWidth: 1,
        textStyle: { color: '#f0f4f8' },
        formatter: '{b}: {d}%',
        padding: 12,
        borderRadius: 6
    },
    legend: {
        top: '5%',
        left: 'center',
        textStyle: {
            color: '#333',
            fontFamily: 'Segoe UI, Roboto, sans-serif'
        },
        itemWidth: 12,
        itemHeight: 12
    },
    series: [
        {
            name: 'Project Categories',
            type: 'pie',
            radius: ['45%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 8,
                borderColor: '#fff',
                borderWidth: 2,
                shadowBlur: 15,
                shadowColor: 'rgba(0, 0, 0, 0.1)'
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                scale: true,
                scaleSize: 5,
                label: {
                    show: true,
                    fontSize: 20,
                    fontWeight: 'bold',
                    formatter: '{b}\n{per|{d}%}',
                    rich: {
                        per: {
                            fontSize: 16,
                            color: '#666'
                        }
                    }
                },
                itemStyle: {
                    shadowBlur: 20,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 35, name: 'Robotics Technology', itemStyle: { color: '#0070f3' } },
                { value: 30, name: 'Reinforcement Learning', itemStyle: { color: '#646cff' } },
                { value: 20, name: 'Computer Vision', itemStyle: { color: '#00e5ff' } },
                { value: 10, name: 'Embedded Systems', itemStyle: { color: '#7928ca' } },
                { value: 5, name: 'Other Fields', itemStyle: { color: '#00b8d9' } }
            ]
        }
    ],
    animationDuration: 1500,
    animationEasingUpdate: 'quinticInOut',
    animationDelay: function (idx) {
        return idx * 100;
    }
};

myChart.setOption(option);

detailContainer.style.cssText = `
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 280px;
    padding: 20px;
    background: rgba(26, 31, 54, 0.95);
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    display: none;
    z-index: 10;
    border: 1px solid rgba(0, 229, 255, 0.2);
`;

myChart.on('mouseover', function(params) {
    var projects = projectDetails[params.name];
    if (projects) {
        var html = `<h4 style="margin-top:0;color:${params.color};border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:10px;margin-bottom:15px;">${params.name}</h4>
                   <p style="color:#f0f4f8;margin-bottom:15px;">Percentage: ${params.percent}%</p>
                   <h5 style="color:#cbd5e0;margin-bottom:10px;">Projects:</h5>
                   <ul style="padding-left:20px;margin-bottom:0;color:#e2e8f0;">`;
        
        projects.forEach(function(project) {
            html += `<li style="margin-bottom:5px;">${project}</li>`;
        });
        
        html += `</ul>`;
        detailContainer.innerHTML = html;
        detailContainer.style.display = 'block';
        detailContainer.style.opacity = '0';
        setTimeout(() => {
            detailContainer.style.transition = 'opacity 0.3s ease';
            detailContainer.style.opacity = '1';
        }, 10);
    }
});

myChart.on('mouseout', function() {
    detailContainer.style.opacity = '0';
    setTimeout(() => {
        detailContainer.style.display = 'none';
        detailContainer.style.transition = 'none';
    }, 300);
});

window.addEventListener('resize', function() {
    myChart.resize();
});