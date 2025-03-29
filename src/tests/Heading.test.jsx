import React from "react";
import { render, screen } from "@testing-library/react";
import Heading from "../Heading/Heading";
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from "vitest";


describe("Heading", () => {

    it("renders Deafult Heading", () => {
        render(
            <MemoryRouter>  {/* ✅ Wrap component inside MemoryRouter */}
                <Heading />
            </MemoryRouter>
        );
        expect(screen.getByText('Distance Calculator')).toBeInTheDocument();
        expect(screen.getByText('Prototype web application for calculating the distance between addresses')).toBeInTheDocument();
        expect(screen.getByText('View Historical Queries')).toBeInTheDocument();
    });
    
})