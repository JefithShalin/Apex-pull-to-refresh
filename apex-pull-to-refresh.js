/*
===============================================================================
Pull Down to Refresh - Oracle APEX
===============================================================================

Library Used:
https://cdnjs.cloudflare.com/ajax/libs/pulltorefreshjs/0.1.21/index.umd.min.js

===============================================================================
Steps to Implement:
===============================================================================

Step 1: Include the Pull-to-Refresh Library
- Go to Page Properties in Oracle APEX
- Add the below URL in "JavaScript File URLs":
  https://cdnjs.cloudflare.com/ajax/libs/pulltorefreshjs/0.1.21/index.umd.min.js

Step 2: Identify the Refreshable Region
- Assign a Static ID to the region you want to refresh
- Example Static ID: main

Step 3: Add This JavaScript File
- Upload this JS file under Shared Components → Static Application Files
  OR include it in File URLs

Step 4: Ensure Proper Static ID Usage
- Replace '#main' with your region Static ID
- Use same ID in apex.region("main").refresh()

Step 5: Run and Test
- Open the page on mobile
- Swipe down to trigger refresh

===============================================================================
*/

(function () {
    "use strict";

    function initPullToRefresh() {

        // Check if library is loaded
        if (typeof PullToRefresh === "undefined") {
            console.error("PullToRefresh library is not loaded.");
            return;
        }

        // Initialize Pull-to-Refresh
        PullToRefresh.init({
            mainElement: '#main', // Replace with your region Static ID

            onRefresh: function (done) {

                // Refresh APEX region using Static ID
                try {
                    apex.region("main").refresh();
                } catch (e) {
                    console.warn("Region refresh failed:", e);
                }

                // Delay to simulate refresh effect
                setTimeout(function () {
                    done(); // Signal refresh completion
                }, 1500);
            }
        });
    }

    // Execute after page load
    document.addEventListener("DOMContentLoaded", function () {
        initPullToRefresh();
    });

})();
