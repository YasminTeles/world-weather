import React from "react"

import { shallow } from "enzyme"

import Home from "./index"

describe("Home", () => {
  it("Deve conter o texto \"Welcome to Next.js!\" dentro de um H1 no componente Index", () => {
    const wrap = shallow(<Home />)
    expect(wrap.find("h1").text()).toEqual("Welcome to Home Page!")
  })
})
