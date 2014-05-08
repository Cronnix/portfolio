$(document).ready(function() {
    $("#tabs").tabs({

        show: function(event, ui) {

            var lastOpenedPanel = $(this).data("lastOpenedPanel");

            if (!$(this).data("topPositionTab")) {
                $(this).data("topPositionTab", $(ui.panel).position().top)
            }                
            $(ui.panel).hide().fadeIn(500);
            if (lastOpenedPanel) {
                lastOpenedPanel
                    .toggleClass("ui-tabs-hide")
                    .css("position", "absolute")
                    .css("top", $(this).data("topPositionTab") + "px")
                    .fadeOut(500, function() {
                        $(this)
                        .css("position", "");
                    });
            }
            $(this).data("lastOpenedPanel", $(ui.panel));
        }
    });
});