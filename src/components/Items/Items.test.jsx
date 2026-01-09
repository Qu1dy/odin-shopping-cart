import { screen, render } from "@testing-library/react";
import Items from "./";

describe("Items", () => {
    it("should show Loading on screen when loading is true", () => {
        render(
            <Items
                data={[]}
                error={null}
                loading={true}
                cartItems={[]}
                setCartItems={vi.fn()}
            />
        );
        const loadingStatus = screen.getByRole("status");
        expect(loadingStatus).toHaveTextContent(/loading/i);
    });

    it("should show Error on screen when error is not null", () => {
        render(
            <Items
                data={[]}
                error="test"
                loading={false}
                cartItems={[]}
                setCartItems={vi.fn()}
            />
        );

        const errorStatus = screen.getByRole("status");
        expect(errorStatus).toHaveTextContent(/error/i);
    });

    it("should not show error or loading when both are falsy", () => {
        render(
            <Items
                data={[]}
                error={null}
                loading={false}
                cartItems={[]}
                setCartItems={vi.fn()}
            />
        );
        const status = screen.queryByRole("status");
        expect(status).not.toBeInTheDocument();
    });
});
