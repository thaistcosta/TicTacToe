const horizontalWin = (board) => {
    let winningRow
    board.forEach(array => [...new Set(array)].length === 1 && [...new Set(array)] !== [''] ? winningRow = [...new Set(array)] : null  )
    return winningRow;      
};


export { horizontalWin };