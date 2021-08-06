import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from "history"
import { Router } from "react-router-dom"
import { act } from "react-dom/test-utils"
import App from './App';

const arrangeHistoryRouterWithApp = (history) => {
  return render(
    <Router history={history}  >
      <App />
    </Router>
  )
}

describe("App", () => {
  describe("on submit button push on pizza configurator page", () => {
    it("navigates to pizza checkouter page", () => {
      const history = createMemoryHistory()
      const { container, getByText } = arrangeHistoryRouterWithApp(history)
      expect(container.innerHTML).toMatch("Configure your pizza")
      fireEvent.click(getByText(/order for:/i))
      expect(container.innerHTML).toMatch("Check out your pizza")
    })
  })

  describe("on submit button push on pizza checkouter page", () => {
    it("navigates to pizza order page", () => {
      const history = createMemoryHistory()
      history.push("/pizza-checkouter")
      const { container, getByText } = arrangeHistoryRouterWithApp(history)
      expect(container.innerHTML).toMatch("Check out your pizza")
      fireEvent.click(getByText(/pay:/i))
      expect(container.innerHTML).toMatch("Thanks for order!")
    })
  })

  describe("on registration link click and on autorization link click", () => {
    it("navigates to registration page and back to autorization page", async () => {
      const history = createMemoryHistory()
      history.push("/login")
      const { container, getByText, getByRole } = arrangeHistoryRouterWithApp(history)
      expect(container.innerHTML).toMatch("Authorization")
      fireEvent.click(getByText(/registration/i))
      expect(container.innerHTML).toMatch("Registration")
      await act(async () => {
        fireEvent.click(getByRole("button"))
      })
      expect(container.innerHTML).toMatch("Authorization")
    })
  })
  describe("enter /orders URL", () => {
    it("navigates to orders page", () => {
      const history = createMemoryHistory()
      history.push("/orders")
      const { container } = arrangeHistoryRouterWithApp(history)
      expect(container.innerHTML).toMatch("My orders")
    })
  })
  describe("with an unsupported URL", () => {
    it("shows 404 page", () => {
      const history = createMemoryHistory()
      history.push("/some/an-existing/page")
      const { container } = arrangeHistoryRouterWithApp(history)
      expect(container.innerHTML).toMatch("404 Page not found")
    })
  })
})
