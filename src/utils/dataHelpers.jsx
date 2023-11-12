export function findCardById (array, id) {
    for (const item of array) {
        if(item.id === id){
            return(item);
        };
    };
};

export function findCardsByDrawer (array, drawer) {
    const cardList = [];
    array.forEach(item => {
        if(item.drawer === drawer){
            cardList.push(item);
        };
    });
    return cardList;
};

export function sortDrawersOldNew (array){
    const newArray = [];

    for(i = 1; i <= array.length; i++){
        array.forEach(item => {
            if(item.id === i){
                newArray.push(item);
            };
        });
    };

    return newArray;
};

export function sortDrawersNewOld (array){
    const newArray = [];

    for(i = array.length+1; i = 1; i--){
        array.forEach(item => {
            if(item.id === i){
                newArray.push(item);
            };
        });
    };

    return newArray;
};