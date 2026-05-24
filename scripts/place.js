document.addEventListener('DOMContentLoaded', () => {
    const japanDemographicsDataset = [
        { label: "Area", value: "377,975 sq km" },
        { label: "Population", value: "122,427,731" },
        { label: "Capital", value: "Tokyo" },
        { label: "Languages", value: "Japanese" },
        { label: "Currency", value: "Japanese Yen (¥)" },
        { label: "Time Zone", value: "UTC +9" },
        { label: "Calling Code", value: "+81" },
        { label: "Internet TLD", value: ".jp" }
    ];
    const tokyoWeatherDataset = [
        { label: "Temperature", value: "19°C / 66°F" },
        { label: "Conditions", value: "Clear Skies" },
        { label: "Wind", value: "11 km/h ENE" },
        { label: "Wind Chill", value: "19°C" }
    ];
    const dataContainerNode = document.getElementById('japanDataGrid');
    const weatherContainerNode = document.getElementById('japanWeatherGrid');
    const displayLabelNode = document.getElementById('canvasText');

    function buildTargetListTemplateMarkup(sourceArray, mountingElementTargetNode) {
        if (!mountingElementTargetNode) return;
        
        mountingElementTargetNode.innerHTML = sourceArray.map(item => `
            <li class="property-row">
                <span class="prop-label">${item.label}:</span>
                <span class="prop-value">${item.value}</span>
            </li>
        `).join('');
    }
    function evaluateResponsiveTextLayoutWidth() {
        if (!displayLabelNode) return;
        if (window.innerWidth >= 900) {
            displayLabelNode.textContent = "Large Image";
        } else {
            displayLabelNode.textContent = "Small Image";
        }
    }

    buildTargetListTemplateMarkup(japanDemographicsDataset, dataContainerNode);
    buildTargetListTemplateMarkup(tokyoWeatherDataset, weatherContainerNode);

    window.addEventListener('resize', evaluateResponsiveTextLayoutWidth);
    evaluateResponsiveTextLayoutWidth();
});

const currentYear = new Date().getFullYear();
const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = currentYear;

const modifiedElement = document.getElementById("lastModified");
if (modifiedElement) modifiedElement.textContent = document.lastModified;