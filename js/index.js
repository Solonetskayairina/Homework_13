    const array = [1, 2, 3, 4, 5, 6, 7];

    const removeElement = function (newArray, item) {
        const index = newArray.indexOf(item);
        if (index === -1) {
            console.log('There is no item')
            return
        }
        newArray.splice(index, 1);
    }

    removeElement(array, 5);
    console.log('Result:', array)