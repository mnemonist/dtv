import { uuid } from "uuidv4";

export const seasons = [
  {
    id: uuid(),
    name: "Seasons",
    children: [
      {
        id: uuid(),
        name: "Summer",
        children: [
          {
            id: uuid(),
            name: "Hot",
            children: [
              {
                id: uuid(),
                name: "June",
                route: "/June"
              },
              {
                id: uuid(),
                name: "July",
                route: "/July"
              }
            ]
          },

          {
            id: uuid(),
            name: "August",
            route: "/August"
          }
        ]
      },
      {
        id: uuid(),
        name: "Fall",
        children: [
          {
            id: uuid(),
            name: "September",
            route: "/September"
          },
          {
            id: uuid(),
            name: "October",
            route: "/October"
          },
          {
            id: uuid(),
            name: "November",
            route: "/November"
          }
        ]
      },
      {
        id: uuid(),
        name: "Winter",
        children: [
          {
            id: uuid(),
            name: "December",
            route: "/December"
          },
          {
            id: uuid(),
            name: "January",
            route: "/January"
          },
          {
            id: uuid(),
            name: "February",
            route: "/February"
          }
        ]
      },
      {
        id: uuid(),
        name: "Spring",
        children: [
          {
            id: uuid(),
            name: "March",
            route: "/March"
          },
          {
            id: uuid(),
            name: "April",
            route: "/April"
          },
          {
            id: uuid(),
            name: "May",
            route: "/May"
          }
        ]
      }
    ]
  }
];

const raw_seasons = [
  {
    name: "December",
    type: "Winter,Chill",
    route: "/December"
  }
];

const types = [...new Set(raw_seasons.map((season) => season.type))];
console.log(types);
const mock_seasons = [];
let multiType = [];
let multi = false;

types.map((type) => {
  console.log(type);
  const children = [];
  raw_seasons.map((season) => {
    if (type.includes(",")) {
      console.log(type);
      multi = true;
      multiType = type.split(",");

      children.push(
        Object.assign(
          {},
          { name: multiType[1], id: "uuid()", route: season.route }
        )
      );
      console.log(children);
    }

    // if (season.type === type) {
    //   children.push(
    //     Object.assign(
    //       {},
    //       { name: season.name, id: "uuid()", route: season.route }
    //     )
    //   );
    // }
  });
  if (multi) {
    mock_seasons.push(
      Object.assign(
        {},
        { name: multiType[0], children: children, id: "uuid()" }
      )
    );
    console.log(mock_seasons);
    multi = false;
  } else {
    mock_seasons.push(
      Object.assign({}, { name: type, children: children, id: "uuid()" })
    );
  }
});
