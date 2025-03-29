import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { describe, it, expect } from "vitest";


describe("App Component", () => {

    it("renders whole application", () => {
        render(
           
                <App />
          
        );
       
        expect(screen.getByText('View Historical Queries')).toBeInTheDocument();

        expect(screen.queryByTestId("History")).not.toBeInTheDocument();

        fireEvent.click(screen.getByText("View Historical Queries"));

        expect(screen.getByTestId("History")).toBeInTheDocument();
    });
    
})