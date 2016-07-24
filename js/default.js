/**
 * Created by Michael Win on 7/21/2016.
 */
disable();


function disable() {
    $('img').live('contextmenu', function(e){
        return false;
    });
}