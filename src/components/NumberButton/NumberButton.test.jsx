import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberButton from "./";

const setup = (quantity = 1) => {
    const user = userEvent.setup();
    const setQuantity = vi.fn();
    const utils = render(
        <NumberButton quantity={quantity} setQuantity={setQuantity} />
    );

    return {
        ...utils,
        user,
        setQuantity,
        increaseBtn: screen.getByRole("button", { name: /increase quantity/i }),
        decreaseBtn: screen.getByRole("button", { name: /decrease quantity/i }),
    };
};

describe("NumberButton", () => {
    it("should render decrease button, quantity, and increase button", () => {
        const { container } = setup(1);
        expect(container).toMatchSnapshot();
    });
    it("should call setQuantity when increase button is clicked on", async () => {
        const { user, increaseBtn, setQuantity } = setup(1);
        await user.click(increaseBtn);
        expect(setQuantity).toHaveBeenCalled();
    });

    it("should call setQuantity when decrease button is clicked on and quantity is more than 1", async () => {
        const { user, decreaseBtn, setQuantity } = setup(2);
        await user.click(decreaseBtn);
        expect(setQuantity).toHaveBeenCalled();
    });

    it("should NOT call setQuantity when decrease button is clicked on and quantity is 1", async () => {
        const { user, decreaseBtn, setQuantity } = setup(1);
        await user.click(decreaseBtn);
        expect(setQuantity).not.toHaveBeenCalled();
    });
});
