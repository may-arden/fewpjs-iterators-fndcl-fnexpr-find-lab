

function superbowlWin(array) {
    let win = array.find( ({result}) =>
    result === "W")
    return win ? win.year : undefined
}

