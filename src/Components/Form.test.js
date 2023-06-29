import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Form from "./Form";

test("test form", ()=>{
    render(<Form />);
    const textFile = screen.getByText(/Simple Form/i)
    expect(textFile).toBeInTheDocument();
})


test("test form second", async()=>{
    render(<Form />);
    const textFile = await screen.findByText(/Simple Form/i)
    expect(textFile).toBeInTheDocument();
})

test("test email", async()=>{
    render(<Form />);
    const emailText = await screen.findByPlaceholderText("Email")
    expect(emailText).toBeInTheDocument();
})