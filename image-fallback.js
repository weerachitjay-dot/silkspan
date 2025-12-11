document.addEventListener('DOMContentLoaded', () => {
    // Select all images
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        // Handle images that have already failed to load (if any)
        if (img.complete && img.naturalHeight === 0) {
            handleImageError(img);
        }

        // Handle future errors
        img.addEventListener('error', function () {
            handleImageError(this);
        });
    });

    function handleImageError(img) {
        // Prevent infinite loop if the fallback itself fails (though we are just styling here)
        if (img.classList.contains('img-error')) return;

        img.classList.add('img-error');

        // Option 1: Replace src with a transparent pixel to remove the broken icon (and let CSS handle background)
        // This is robust across browsers to hide the "broken image" icon.
        img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

        // Ensure alt text is displayed if desired, or hide it.
        // For a "frame", simple background is enough.
    }
});
