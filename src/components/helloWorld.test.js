import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import HelloWorld from "./helloWorld"

describe("Hello World Component", ()=> {
    test("Check if Hello World is there in the DOM", ()=> {
        render(<HelloWorld/>)
        const HelloWorldText = screen.getByText("HelloWorld!");
        expect(HelloWorldText).toBeInTheDocument();
    })
    test("Check if on button click ChangedText shows", async()=> { 
        render(<HelloWorld/>)
        const ChangeTextButton = screen.getByRole("button", {name: "ChangeTextButton"})
        await userEvent.click(ChangeTextButton)
        const changeText = screen.getByText("ChangeText")
        const notChangeText = screen.queryByText("Not ChangeText");
        expect(notChangeText).toBeNull()
        expect(changeText).toBeInTheDocument()

    })
})

