import { render, fireEvent } from "@testing-library/react";
import { StaticRouter } from "react-router-dom"
import { PizzaConfigurator } from "./PizzaConfigurator";

describe("PizzaConfigurator unit test", () => {
  describe("on change inputs", () => {
    it("set changed value", () => {
      const { container, getByLabelText } = render(
        <StaticRouter>
          <PizzaConfigurator />
        </StaticRouter>
      )
      expect(container.innerHTML).toMatch("Configure your pizza")
      const sizeInput = getByLabelText("30");
      fireEvent.change(sizeInput);
      expect(sizeInput.value).toBe("30")
    });
  })
})
