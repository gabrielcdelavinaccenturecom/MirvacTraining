({
    createItem : function() {
        var action = component.get("c.saveItem");
        action.setParams({
            "item": item
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var items = component.get("v.items");
                items.push(response.getReturnValue());
                component.set("v.items", items);
            }
        });
        $A.enqueueAction(action);
        var Items = component.get("v.items");
        var Item = component.get("v.newItem");
        Items.push(Item);   
        component.set("v.items",Items);
        component.set("v.newItem",{ 'sobjectType': 'Camping_Item__c',
                                   'Name': '',
                                   'Quantity__c': 0,
                                   'Price__c': 0,
                                   'Packed__c': false });
        
    },
    
    validateItemForm: function(component) {
        
        // Simplistic error checking
        var validItem = true;
        
        // Name must not be blank
        var nameField = component.find("name");
        var name = nameField.get("v.value");
        if ($A.util.isEmpty(name)){
            validItem = false;
            nameField.set("v.errors", [{message:"Item name can't be blank."}]);
        }
        else {
            nameField.set("v.errors", null);
        }
        
        // Quantity must be set, must be a positive number
        var qtyField = component.find("quantity");
        var qty = qtyField.get("v.value");
        if ($A.util.isEmpty(qty) || isNaN(qty) || (qty <= 0)){
            validItem = false;
            qtyField.set("v.errors", [{message:"Enter an item quantity."}]);
        }
        else {
            // If the amount looks good, unset any errors...
            qtyField.set("v.errors", null);
        }
        // Price must be set, must be a positive number
        var priceField = component.find("price");
        var price = priceField.get("v.value");
        if ($A.util.isEmpty(price) || isNaN(qty) || (qty <= 0)){
            validItem = false;
            priceField.set("v.errors", [{message:"Enter an item price."}]);
        }
        else {
            priceField.set("v.errors", null);
        } 
        
        return(validItem);
    },
})