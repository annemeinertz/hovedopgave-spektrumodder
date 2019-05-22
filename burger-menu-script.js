jQuery(document).ready(function() {
    jQuery('.toggle-nav').click(function(e) {
        jQuery('.menusvommehal ul').slideToggle(500);
 
        e.preventDefault();
    });
    
});

