import React, { useState, useMemo } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        // Add more items as needed
    ]);

    // Your code starts here
    var totalValue = useMemo(()=>{
        return items.map((item)=>(item.value)).reduce((acc,curr)=> (acc = acc+curr),0);
    },[items]);
    
    // Your code ends here


    function addItems() {
        setItems([...items,{name:'Eggs',value:100}]);
    }
    console.log("re-renders");
    return (
        <div>
            <ul>

                {items.map(function(item, index){

                    //totalValue +=item.value
                    return(
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                    )
                })}
            </ul>
            <p>Total Value: {totalValue}</p>

            <button onClick={addItems}>Add Items</button>
        </div>
    );
};
