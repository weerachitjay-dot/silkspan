# Implementation Plan: Restructuring & Refinement

## Goal Description
Restructure the project directory to match the production URL paths requested by the user. This involves creating subdirectories and moving files to `index.html` within them. Additionally, finish the Quote Banner implementation and ensure all relative links are updated.

## User Review Required
> [!IMPORTANT]
> Files will be moved and renamed to `index.html` inside subfolders.
> - `mockup_car_insurance.html` -> `car-insurance/index.html`
> - `mockup_type1.html` -> `car-insurance/type1/index.html`
> - `mockup_compare_fb.html` -> `car-insurance/compare-fb/index.html`
> - `mockup_article.html` -> `article/index.html`
> - `index.html` -> `article/insurance/difference-between-2plus-and-3plus-insurance/index.html`

## Proposed Changes

### Directory Structure [NEW]
- Create the following directories:
    - `/car-insurance/`
    - `/car-insurance/type1/`
    - `/car-insurance/compare-fb/`
    - `/article/`
    - `/article/insurance/difference-between-2plus-and-3plus-insurance/`

### File Moves & Renames
- Move current HTML files to their new `index.html` locations.

### Link Updates
#### [MODIFY] All HTML Files
- **CSS/JS Imports**: Update `<link>` and `<script>` tags to use correct relative paths (e.g., `../../style.css`).
- **Navigation Links**: Update `<a href="...">` to point to the new relative paths.
    - Example: Linking to "Car Insurance" from "Article" becomes `../car-insurance/index.html`.

### Content Features (Continuing)
#### [MODIFY] `article/insurance/.../index.html` (formerly `index.html`)
- **Quote Banner**: Ensure the recently added Quote Banner functions correctly in the new location (images, styles).

## Verification Plan
### Automated Tests
- **Link Verification**: Check that all pages can load their CSS/JS assets.
- **Navigation Flow**: Verify clicking "Car Insurance" -> "Type 1" -> "Compare" works across the new folder structure.

### Manual Verification
- Open `article/index.html` and click through to the main article.
- Verify the Quote Banner on the article page sends users to the correct Compare page.
