import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
    it("should renders button correctly", () => {
        const { container } = render(<Button />);
        expect(container).toMatchSnapshot();
    });

    it("should render button text correctly", () => {
        render(<Button />);
        expect(screen.getByRole("button").textContent).toMatch(
            /Clicked 0 times./i
        );
    });

    it("should change clicked count after user clicked", async () => {
        const user = userEvent.setup();

        render(<Button />);
        const button = screen.getByRole("button");

        await user.click(button);

        expect(screen.getByRole("button").textContent).toMatch(
            /Clicked 1 times./i
        );
    });

    screen.debug();
});
