/**
 * Smart Tracking Script
 * Intercepts internal links and appends typedealer parameter dynamically.
 * This keeps the HTML links clean for SEO.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the current article slug from the meta tag or URL
    const articleSlugMeta = document.querySelector('meta[name="article-slug"]');
    const articleSlug = articleSlugMeta ? articleSlugMeta.content : 'unknown-article';

    // 2. Define the tracking parameter key and prefix
    const PARAM_KEY = 'typedealer';
    const PARAM_PREFIX = 'organic_';

    // 3. Select all links that should be tracked
    // In this case, we target links with class 'internal-link' or specific patterns
    const trackedLinks = document.querySelectorAll('a.internal-link');

    trackedLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Prevent default navigation
            e.preventDefault();

            //Get the original URL
            const targetUrl = new URL(this.href);

            // Construct the tracking value: e.g., organic_difference-2plus-vs-3plus
            let trackingValue = `${PARAM_PREFIX}${articleSlug}`;

            // Check if the link is inside a banner and append suffix
            if (link.closest('.banner-middle')) {
                trackingValue += '_banner_middle';
            } else if (link.closest('.banner-bottom')) {
                trackingValue += '_banner_bottom';
            } else if (link.closest('.sticky-banner')) {
                trackingValue += '_banner_right';
            }

            // Append the parameter
            targetUrl.searchParams.set(PARAM_KEY, trackingValue);

            // Navigate to the new URL
            window.location.href = targetUrl.toString();
        });
    });

    console.log(`Smart Tracking initialized for: ${articleSlug}. Tracking ${trackedLinks.length} links.`);
});
