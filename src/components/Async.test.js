import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe("Async render", ()=> {
    test("intial render works", async()=> {
        window.fetch = jest.fn()
        window.fetch.mockResolvedValueOnce({
            json: async()=> [{id: 1, title: "fist post"}]
        })
        render(<Async/>)

        const listItems = await screen.findAllByRole("listitem");
        screen.debug()
       expect(listItems).not.toHaveLength(0);
    })
})