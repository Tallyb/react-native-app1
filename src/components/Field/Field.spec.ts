import { Field } from './Field';

describe('Players positions', () => {
    it ('Should return left position', () => {
        let comp = new Field({});
        let players = [1, 2, 3, 4, 5, 6];
        expect(comp.getPlayersPositions(players, 'left')).toBeUndefined();
    });
});