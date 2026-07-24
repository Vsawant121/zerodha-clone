import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Updated import path
import Hero from "../landing_page/home/hero"; // Ensure this path matches your folder structure

describe('Hero Component', () => {
    test("renders hero image", () => {
        render(<Hero />);

        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "homeHero.png");
    });
});
