import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe('Testing <AddCategory/> component', () => {

    it('should to changes the text box value', () => {

        render(<AddCategory onAddCategory={() => {}}/>);
        //screen.debug();
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Hello World' } });

        //screen.debug();

        expect(input.value).toBe('Hello World');
    });

});