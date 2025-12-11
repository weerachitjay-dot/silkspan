/**
 * Smart Tracking Script
 * Intercepts internal links and appends typedealer parameter dynamically.
 * Uses Event Delegation to ensure ALL links to Type 1 are tracked.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the current article slug from the meta tag or URL
    const articleSlugMeta = document.querySelector('meta[name="article-slug"]');
    const articleSlug = articleSlugMeta ? articleSlugMeta.content : 'unknown-article';

    // 2. Define the tracking parameter key and prefix
    const PARAM_KEY = 'typedealer';
    const PARAM_PREFIX = 'organic_';
    const TARGET_PATH_SUBSTRING = '/type1/'; // Target links pointing to Type 1 insurance

    // 3. Global Event Delegation
    document.body.addEventListener('click', function (e) {
        // Find the closest anchor tag
        const link = e.target.closest('a');

        // If not a link, or no href, ignore
        if (!link || !link.href) return;

        // Check if the link target contains the target path (e.g., /type1/)
        if (!link.href.includes(TARGET_PATH_SUBSTRING)) return;

        // 4. Fail-Safe Check: Does it already have the parameter?
        const targetUrl = new URL(link.href, window.location.origin); // Ensure robust URL parsing
        if (targetUrl.searchParams.has(PARAM_KEY)) {
            // Already tracked, let it proceed normally
            return;
        }

        // 5. Apply Tracking
        e.preventDefault(); // Stop default navigation to modify URL

        // Construct the tracking value: e.g., organic_difference-2plus-vs-3plus
        let trackingValue = `${PARAM_PREFIX}${articleSlug}`;

        // Check position for suffix
        if (link.closest('.banner-middle')) {
            trackingValue += '_banner_middle';
        } else if (link.closest('.banner-bottom')) {
            trackingValue += '_banner_bottom';
        } else if (link.closest('.sticky-banner') || link.closest('#sticky')) {
            trackingValue += '_banner_right';
        }
        // If no specific container is found, it defaults to just 'organic_{slug}' or could add specific default like '_text_link'
        // For now, we stick to the base pattern if no container match.

        // Append the parameter
        targetUrl.searchParams.set(PARAM_KEY, trackingValue);

        // Navigate to the new URL
        window.location.href = targetUrl.toString();
    });

    console.log(`Smart Tracking initialized for: ${articleSlug}. Global listener active.`);
});
