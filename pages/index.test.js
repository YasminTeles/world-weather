import React from "react"

import { shallow } from "enzyme"

import Home from "./index"

describe("Home", () => {
  it("should have an title page", () => {
    const wrap = shallow(<Home />)

    expect(wrap.find("title").text()).toEqual("Word Weather")
  })
})
