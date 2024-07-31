
export const mutationParams = {
    example: {
        options: {childList: true},
        callback: (mutations) => {

            mutations.forEach(function(mutation) {
                if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
                    let addedElement = mutation.addedNodes[0];

                    /*
                    -------------------YOUR CODE HERE--------------------------
                    */

                }
            });
        },
    }
}