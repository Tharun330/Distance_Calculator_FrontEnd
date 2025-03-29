import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import History from "../History/HistoryPage";
import axios from "axios";
import { describe, it, expect, vi } from "vitest";

vi.mock("axios");

describe("History Component", () => {

    it("renders history page with data coming from backend", async () => {


        axios.get.mockResolvedValue({
            data: [
                { sourceAddress: "NewYork", destinationAddress: "Chicago", distanceInMiles: 12.33, distanceInKilometers: 15.55 },
                { sourceAddress: "Virginia", destinationAddress: "Dallas", distanceInMiles: 11.33, distanceInKilometers: 14.55 }

            ],
        });


        render(<History />);

        await waitFor(() => expect(screen.getByTestId("data-table")).toBeInTheDocument());

        const rows = screen.getAllByTestId("data-row");


        expect(screen.getByText("NewYork")).toBeInTheDocument();
        expect(screen.getByText(12.33)).toBeInTheDocument();

        expect(screen.getByText("Dallas")).toBeInTheDocument();
        expect(screen.getByText(14.55)).toBeInTheDocument();

        expect(screen.getByText('History Queries')).toBeInTheDocument();

        expect(screen.queryByTestId("History of the user's queries.")).not.toBeInTheDocument();

        expect(screen.queryByTestId("Source Address")).not.toBeInTheDocument();


    });

})