$(document).ready(function() {
    
    // handle bila calcBtn diklik maka hitung berat ideal
    $('#calcBtn').click(function() {
        var heightCm = parseFloat($('#heightInput').val());
        var idealWeightKg = (heightCm - 100) * 0.9;
        $('#idealWeightBox').val(idealWeightKg + ' kg');
    });
    
});