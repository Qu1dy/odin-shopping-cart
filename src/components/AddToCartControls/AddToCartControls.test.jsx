import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddToCartControls from "./";

const setup = (inCart = false) => {
    const user = userEvent.setup();
    const onRemove = vi.fn();
    const utils = render(
        <AddToCartControls
            quantity={1}
            setQuantity={vi.fn()}
            onAdd={vi.fn()}
            onRemove={onRemove}
            inCart={inCart}
        />
    );
    const addToCartBtn = screen.queryByRole("button", {
        name: /add to cart/i,
    });
    const status = screen.queryByRole("status");
    const undoBtn = screen.queryByRole("button", { name: /undo/i });

    return {
        utils,
        user,
        status,
        undoBtn,
        onRemove,
        addToCartBtn,
    };
};

describe("AddToCartControls", () => {
    it('should render "In cart" text and Undo when inCart is true', () => {
        const { status, undoBtn } = setup(true);
        expect(status).toHaveTextContent(/in cart/i);
        expect(undoBtn).toBeInTheDocument();
    });

    it("should call onRemove when Undo is clicked on", async () => {
        const { undoBtn, user, onRemove } = setup(true);
        await user.click(undoBtn);
        expect(onRemove).toHaveBeenCalled();
    });

    it("should render Add to Cart when inCart is false", () => {
        const { addToCartBtn } = setup(false);
        expect(addToCartBtn).toBeInTheDocument();
    });
});
