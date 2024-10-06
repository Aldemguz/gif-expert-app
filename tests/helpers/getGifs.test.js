import { getGifs } from "../../src/helpers/GetGif";

describe('Pruebas getGifs()', () => {

    it('should to return an gif array', async () => {
        const gifs = await getGifs('One Punch');

        expect(gifs).not.toBeNull();
        expect(gifs.length).toBeGreaterThan(0);

        expect(gifs[0]).toEqual(
            {
                id:expect.any( String ),
                title: expect.any( String ) ,
                url:expect.any( String )
            }
        );
    });
});