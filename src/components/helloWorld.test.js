import { render, screen } from "@testing-library/react"
import HelloWorld from "./helloWorld"

test("Check if Hello World is there in the DOM", ()=> {
    render(<HelloWorld/>)
    const HelloWorldText = screen.getByText("HelloWorld!");
    expect(HelloWorldText).toBeInTheDocument();
})