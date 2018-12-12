export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();

    firestore.collection("projects").add({});

    dispatch({ type: "CREATE_PROJECT", project });
  };
};
