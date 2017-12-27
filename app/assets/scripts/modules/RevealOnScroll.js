import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
class RevealOnScroll{
    constructor(els,offset){
        this.revealToItem=els;
        this.hideInitially();
        this.offsetsPercentage=offset;
        this.createWaypoints();
        
        
    }    
    hideInitially(){
        this.revealToItem.addClass("reveal-item");
    }
    createWaypoints(){
        var that=this;
        this.revealToItem.each(function(){
            var currentItem =this;
            new Waypoint({
                element:currentItem,
                handler:function(){
                    $(currentItem).addClass("reveal-item--is-visible");
                },
                offset:that.offsetsPercentage
            });
        });
    }
}
export default RevealOnScroll