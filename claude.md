# Astro Development Notes

## Client-Side JavaScript in Astro Components

When writing vanilla JavaScript for interactive components in Astro:

1. **Always use `is:inline` directive** on `<script>` tags to prevent Astro from bundling/processing the script
   ```astro
   <script is:inline>
     // your code here
   </script>
   ```

2. **Wrap initialization in `DOMContentLoaded`** to ensure the DOM is fully loaded before running
   ```javascript
   document.addEventListener('DOMContentLoaded', function() {
     // initialize your component here
   });
   ```

3. **Why this is necessary:**
   - Astro processes and bundles scripts by default, which can cause timing issues
   - Without `is:inline`, scripts may run before the DOM is ready
   - `DOMContentLoaded` ensures all HTML elements are available for manipulation

4. **Common mistake:**
   ```astro
   <!-- ❌ This won't work reliably -->
   <script>
     const element = document.querySelector('.my-element');
     // element might be null!
   </script>
   ```

5. **Correct approach:**
   ```astro
   <!-- ✅ This works -->
   <script is:inline>
     document.addEventListener('DOMContentLoaded', function() {
       const element = document.querySelector('.my-element');
       // element is guaranteed to exist
     });
   </script>
   ```

## Inline Styles vs CSS

When animating elements with JavaScript (like accordion open/close):
- Don't use inline `style` attribute in the HTML - it has higher specificity than JS
- Set initial styles via JavaScript in the initialization function
- This allows JS to properly manipulate the styles
