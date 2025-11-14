// Example: Highlight vehicle info on click
document.addEventListener('DOMContentLoaded', () => {
    const vehicleInfo = document.querySelector('.vehicle-info');
    if (vehicleInfo) {
        vehicleInfo.addEventListener('click', () => {
            vehicleInfo.style.backgroundColor = '#f9f9f9';
            vehicleInfo.style.transition = 'background-color 0.3s';
        });
    }
});
