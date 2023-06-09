export default function(initialState:any) {
  console.log(initialState, 'admin-app access');
  const { currentUser } = initialState;

  return {
    guest: true,
  };
}
