const horizontalWin = (array) => {
    return [...new Set(array)].length === 1;      
};


export { horizontalWin };