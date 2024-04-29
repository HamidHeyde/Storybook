// Button.test.js
import React from "react"
import { render, screen } from "@testing-library/react"
import { Button } from "./Button"
import { axe } from "jest-axe"

describe("Button", () => {
  test("renders a button element", () => {
    render(<Button label="This is a test button" />)
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  test("applies correct className based on props", () => {
    render(<Button label="primaryButton" primary />)
    expect(screen.getByText(/primaryButton/i)).toHaveClass(
      "storybook-button--primary"
    )

    render(<Button label="smallButton" size="small" />)
    expect(screen.getByText(/smallButton/i)).toHaveClass(
      "storybook-button--small"
    )
  })

  test("applies style based on backgroundColor prop", () => {
    render(<Button label="This is a test button" backgroundColor="red" />)
    expect(screen.getByRole("button")).toHaveStyle({ backgroundColor: "red" })
  })

  test("renders the label", () => {
    render(<Button label="Save" />)
    expect(screen.getByRole("button")).toHaveTextContent("Save")
  })

  test("calls onClick handler", () => {
    const handleClick = jest.fn()
    render(<Button label="This is a test button" onClick={handleClick} />)
    screen.getByRole("button").click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test("is accessible", async () => {
    const { container } = render(
      <Button label="This is a test button">Test</Button>
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()

    const button = screen.getByRole("button")
    const res = await axe(button)
    expect(res).toHaveNoViolations()
  })
})
