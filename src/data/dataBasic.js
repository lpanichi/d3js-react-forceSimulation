export const dataBasic = {
  nodes :
  [
    {
      uuid: "0",
      lab: "alpha",
      name: "alpha",
    },
    {
      uuid: "1",
      lab: "beta",
      name: "beta",
    },
    {
      uuid: "2",
      lab: "gamma",
      name: "gamma",
    },
    {
      uuid: "3",
      lab: "delta",
      name: "delta",
    },
    {
      uuid: "4",
      lab: "epsilon",
      name: "espilon",
    },
    {
      uuid: "5",
      lab: "zeta",
      name: "zeta",
    },
  ],
  links:[
    {
      source: "0",
      target: "1",
    },
    {
      source: "0",
      target: "5",
    },
    {
      source: "5",
      target: "3",
    },
    {
      source: "0",
      target: "3",
    },
    {
      source: "2",
      target: "1",
    },
    {
      source: "4",
      target: "1",
    },
  ]
}