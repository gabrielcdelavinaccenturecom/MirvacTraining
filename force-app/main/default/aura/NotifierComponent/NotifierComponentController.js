({
    fireApplicationEvent : function(component, event, helper) {
        var appEvent = $A.get("e.c:ApplicationEvent");
        appEvent.setParams({
            "message" : "A component event fired me. " +
            "It all happened so fast. Now, I'm here!"
        });
        appEvent.fire();
    }
})