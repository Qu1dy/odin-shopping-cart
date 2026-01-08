import { screen, render } from "@testing-library/react";
import Items from "./";

describe("Items", () => {
    it("should show Loading on screen when loading is true", () => {
        render(<Items loading={true} />);
        const loadingStatus = screen.queryByRole("heading", {
            name: /loading/i,
        });
        expect(loadingStatus).toBeInTheDocument();
    });

    it("should show Error on screen when error is not null", () => {
        render(<Items error={"test"} />);
        const errorStatus = screen.queryByRole("heading", { name: /error/i });
        expect(errorStatus).toBeInTheDocument();
    });

    it("should not show error or loading when both are falsy", () => {
        render(<Items error={null} loading={false} />);
        const errorStatus = screen.queryByRole("heading", { name: /error/i });
        const loadingStatus = screen.queryByRole("heading", {
            name: /loading/i,
        });
        expect(errorStatus).not.toBeInTheDocument();
        expect(loadingStatus).not.toBeInTheDocument();
    });
});
