$(document).ready(function() {
    
    // handle bila calcBtn diklik maka hitung berat ideal
    $('#calcBtn').click(function() {
        var heightCm = parseFloat($('#heightInput').val());
        var idealWeightKg = (heightCm - 110) - ((heightCm - 110) * 0.1);
        $('#idealWeightBox').val(idealWeightKg + ' kg');
    });
    
});