import { describe } from "vitest";

describe("Audio Player", () => {
    it("plats audio", () => {
        cy.visit("/")
        cy.get(".composition-name:first").click()
        cy.get("#play-btn").click()
        // cy.wait(5000)
        cy.get("#player-play-btn").click()
    })
})