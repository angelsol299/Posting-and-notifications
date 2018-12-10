const initState = {
  projects: [
    { id: 1, title: "help eme guy", content: "yes lets do it" },
    { id: 2, title: "lets do it", content: "yes lets do it" },
    { id: 3, title: "play", content: "yes lets do it" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
  }

  return state;
};

export default projectReducer;
