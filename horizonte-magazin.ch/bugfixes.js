<script type="text/javascript">
  <!-- SCRIPT FOR BUGFIX IN CO-AUTHORS PLUS: REPLACE "und" with " und " IN MULTIPLE EDITORS INFORMATION  -->
	<!-- PROBLEM ONLY EXISTS IN GERMAN -->
  <!--  A very weird bug of the wp theme that was bought. When there is more than 1 author for a post
        and their names are listed comma-separated, the last name is added with a leading "and" (EN)
        or "et" (FR) or "und" (DE). Only in the last case there are no spaces before or after the "und"
        so it written something like: Daniel SaragaundPascale Hofmeier
        This script changes the output to: Daniel Saraga und Pascale Hofmeier  
  -->
    jQuery('.post-time').each(function() {
		if (jQuery('.post-time:contains("</a>und<a")')) {
			jQuery('.post-time .author.url.fn:nth-last-child(3)').after(" ");
			jQuery('.author.url.fn:last').before(" ");
        }
    });
</script>


<script type="text/javascript">
	jQuery( document ).ready(function() {
		if (jQuery(window).width() < 500) {
			jQuery('.fa-search').click(
				function() {
					jQuery('.searchform').toggle();
					jQuery('input.text').focus();
				}
			);
		}
	});
</script>
