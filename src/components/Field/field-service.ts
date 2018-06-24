enum Side {
    'left',
    'right'
}

export function arrangePlayers(players: number[], side: Side) {
    switch (side) {
        case Side.left:             
            return [
                [players[5], players[6], players[1]],
                [players[4], players[3], [players[2]]]    
            ];
        case Side.right: 
            return [
                [players[2], players[3], players[4]],
                [players[1], players[6], [players[5]]]    
            ];
        default: 
            console.log('Invalid Side')
    }
}