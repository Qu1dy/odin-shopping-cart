import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe } from "vitest";
import SearchBar from ".";

const mockedOnSearch = vi.fn();

describe("SearchBar", () => {
    it("should render an input and a magnifying glass submit button", () => {
        const { container } = render(<SearchBar onSearch={mockedOnSearch} />);
        expect(container).toMatchSnapshot();
    });

    it("should call onSearch when submit button is clicked on", async () => {
        const user = userEvent.setup();
        render(<SearchBar onSearch={mockedOnSearch} />);
        const searchButton = screen.getByRole("button", {
            name: /search game/i,
        });
        await user.click(searchButton);
        expect(mockedOnSearch).toHaveBeenCalled();
    });

    it("should update input value when typed into", async () => {
        const user = userEvent.setup();
        render(<SearchBar onSearch={mockedOnSearch} />);
        const input = screen.getByRole("searchbox");
        await user.type(input, "test");
        expect(input).toHaveValue("test");
    });
});
