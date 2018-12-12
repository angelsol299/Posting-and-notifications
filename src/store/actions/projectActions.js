export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();

    firestore.collection("projects").add({
      ...project,
      authorFirstName: "angel",
      authorLastNname: "osoria",
      authorId: 1234,
      createAt: new Date()
    });

    dispatch({ type: "CREATE_PROJECT", project });
  };
};
