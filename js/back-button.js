document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('backButton');
    if(backButton) {
        backButton.addEventListener('click', function(e) {
            if(document.referrer && document.referrer.indexOf(window.location.hostname) !== -1) {
                e.preventDefault();
                history.back();
            }
        });
    }
});