({
    doInit : function(component, event, helper) {
        var action = component.get("c.getUnits");
        
        action.setCallback(this, function(results){
            var State = results.getState();
            console.log('State: '+State);
            if(State == 'SUCCESS'){
                component.set("v.unit",results.getReturnValue());
                console.log(results.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },
    handleApplicationEvent : function(component, event, helper) {
        var unit = event.getParam("unit");
        component.set("v.unit", unit);
    }    
    
    // controller na mag geget ng value sa event
})