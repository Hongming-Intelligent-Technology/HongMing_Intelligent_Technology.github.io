# Hongming Intelligent Technology - Project Portfolio

## Overview
This project showcases Hongming Intelligent Technology's portfolio through an interactive visualization system. The centerpiece is an ECharts-based pie chart that displays our project distribution across different technology domains, with enhanced hover interactions to reveal detailed project information.

## Features

### Interactive Pie Chart
- **Category Distribution**: Visually represents project allocation across 5 key technology areas
- **Dynamic Details Panel**: Hover over any segment to see:
  - Category name and percentage
  - List of specific projects in that category
  - Color-coded for easy identification
- **Responsive Design**: Automatically adjusts to different screen sizes

### Enhanced UI Elements
- Custom sidebar navigation with back button functionality
- Clean, modern interface with consistent styling
- Smooth transitions and visual feedback

## Technical Implementation

### Frontend Architecture
- **Core Libraries**:
  - ECharts v5 for data visualization
  - Bootstrap for responsive layout
  - jQuery for DOM manipulation
- **Custom Components**:
  - Dynamic details panel (right-side overlay)
  - Interactive chart behaviors
  - Responsive event handlers

### Key Code Files
1. `index.html` - Main application structure
2. `css/templatemo-style.css` - Custom styles
3. `js/projects-chart.js` - ECharts implementation
4. `js/back-button.js` - Navigation logic

## Setup Instructions

### Prerequisites
- Modern web browser (Chrome/Firefox/Edge recommended)
- Web server for local development (optional)

### Installation
1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```
2. Open `index.html` in your browser

### For Developers
1. Install dependencies (if modifying):
   ```bash
   npm install echarts jquery bootstrap
   ```
2. Main chart configuration is in `js/projects-chart.js`
3. Customize project data in the `projectDetails` object

## Data Structure
The visualization uses the following data format:

```javascript
var projectDetails = {
    'Category Name': [
        'Project 1',
        'Project 2',
        // ...
    ],
    // ...
};

var chartData = [
    { 
        value: 35, 
        name: 'Category 1',
        itemStyle: { color: '#HEXCODE' }
    },
    // ...
];
```

## Customization Guide

### Changing Project Data
1. Update the `projectDetails` object with your projects
2. Adjust the `chartData` array values to match your distribution
3. Modify colors using HEX codes in the `itemStyle` properties

### Styling Adjustments
- Edit `css/templatemo-style.css` for overall styling
- Modify the inline styles in `projects-chart.js` for the details panel
- Chart dimensions can be adjusted in the container CSS

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Edge (latest)
- Safari 12+
- IE 11 (with polyfills)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact
For questions or support, please contact:
- Email: Lanyi_adict@outlook.com
- Website: [www.hongmingtech.com](https://hongming-intelligent-technology.github.io/HongMing_Intelligent_Technology.github.io/)
