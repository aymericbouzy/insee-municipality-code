import getMunicipality from "./getMunicipality"

it("rejects empty argument", () => {
  expect(() => getMunicipality()).toThrow("Please provide a valid argument")
  expect(() => getMunicipality(null)).toThrow("Please provide a valid argument")
  expect(() => getMunicipality(undefined)).toThrow(
    "Please provide a valid argument",
  )
  expect(() => getMunicipality("")).toThrow("Please provide a valid argument")
})

it("rejects not well formed argument", () => {
  expect(() => getMunicipality("Hello!")).toThrow(
    "Please provide a valid argument",
  )
  expect(() => getMunicipality("1234")).toThrow(
    "Please provide a valid argument",
  )
  expect(() => getMunicipality("A2341")).toThrow(
    "Please provide a valid argument",
  )
  expect(() => getMunicipality("3A453")).toThrow(
    "Please provide a valid argument",
  )
  expect(() => getMunicipality("2C203")).toThrow(
    "Please provide a valid argument",
  )
})

it("returns municipality", () => {
  expect(getMunicipality("14168")).toEqual({
    insee: "14168",
    postalCode: "14710",
    name: "COLOMBIERES",
  })
})

it("returns null if no municipality", () => {
  expect(getMunicipality("96168")).toBe(null)
})

it("works for Saint-Maur-des-Fossés", () => {
  expect(getMunicipality("94068", { postalCode: "94100" })).toEqual({
    insee: "94068",
    postalCode: "94100",
    name: "SAINT-MAUR-DES-FOSSES",
  })
  expect(getMunicipality("94068", { postalCode: "94210" })).toEqual({
    insee: "94068",
    postalCode: "94210",
    name: "SAINT-MAUR-DES-FOSSES",
  })
  expect(
    getMunicipality("94068", {
      postalCode: "94200",
    }),
  ).toEqual({
    insee: "94068",
    postalCode: "94100",
    name: "SAINT-MAUR-DES-FOSSES",
  })
})
