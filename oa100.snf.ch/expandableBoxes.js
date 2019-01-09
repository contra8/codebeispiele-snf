<script>
	jQuery( document ).ready(function() {

    /*******************************************************************************************
		 * Make the boxes on HOME and ON OTHER PLACES interactive (expandable).
		 * 3rd attempt by giving the highest possible div element a special class and the inside div
		 * including the long text a 2nd special class.
     *
     * Expandable boxes can be found here: https://oa100.snf.ch/de/engagement/veranstaltungen/
     * Or on Home of http://oa100.snf.ch/
		 ******************************************************************************************/
		function addEventHandlerToExpandableBox() {
			jQuery(".expandable-box").click(function(event) {
				var obj = jQuery(this);
				console.log("obj = " + obj);
				if (obj.find(".expandable-box-main-content").css("display") == "none") {
					obj.addClass("open");
					obj.css("cursor", "auto");
					obj.find(".expandable-box-main-content").show(200);
					obj.unbind("click");
					obj.find(".vc_wp_text.wpb_content_element:nth-child(1)").css("cursor", "pointer");
					obj.find(".vc_wp_text.wpb_content_element:nth-child(1)").click(function (event) {
						obj.find(".vc_wp_text.wpb_content_element:nth-child(1)").unbind("click");
						obj.removeClass("open");
						obj.find(".expandable-box-main-content").hide(200);
						obj.css("cursor", "pointer");
						addEventHandlerToExpandableBox();
					});
				}
			});
		}
		addEventHandlerToExpandableBox();

		/*******************************************************************************************
		 * Manipulate search box in main nav bar to use bop-nav-search correctly
		 * The search box did something wrong with the search path. It is here set to /
		 * Also, the default word by WP is replaced by local words like "Recherche" and "Suche"
		 ******************************************************************************************/
		jQuery(".bop-nav-search").attr('action', '/');
		if ( jQuery("html").attr("lang") == "de-CH" )
			jQuery("#searchsubmit").attr('value', 'Suche');
		else if ( jQuery("html").attr("lang") == "de-DE" )
			jQuery("#searchsubmit").attr('value', 'Suche');
		else if ( jQuery("html").attr("lang") == "fr-FR" )
			jQuery("#searchsubmit").attr('value', 'Recherche');
		else jQuery("#searchsubmit").attr('value', 'Search');

		// Workaround to make main headlines (2nd level navigation) in megadropdown unclickable and not linked
		jQuery(".not-linked").children().removeAttr("href");
		jQuery(".not-linked").children().addClass("nonlinkedmegadrop");

	});
</script>
