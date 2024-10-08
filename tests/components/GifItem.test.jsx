import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('Pruebas componente GifItem', () => {

    const title = 'Saitama';
    const url = "http://test.com/";

    it('should match with the snapshot', () => {
       const { container } = render(<GifItem
        title={title}
        url={url}
       />)

       expect(container).toMatchSnapshot();
    });

    it('Should show the url and the alt setted', () => {
        render(<GifItem
            title={title}
            url={url}
           />);
        
        //screen.debug();

        //expect( screen.getByRole('img').src ).toBe(url);
        //expect( screen.getByRole('img').alt).toBe(title);
        const { src, alt } = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    it('Should to show title in the main component', () => {
        render(<GifItem
            title={title}
            url={url}
           />);
        
        expect(screen.getByText(title)).toBeTruthy();
    });
});