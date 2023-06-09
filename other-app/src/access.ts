export default function(initialState:any) {
  console.log(initialState, 'other-app access');
  const { masterInitialState, info } = initialState;

  return {
    canReadFoo: true,
    // canUpdateFoo: role === 'admin',
    // canDeleteFoo: (foo:any) => {
    //   return foo.ownerId === userId;
    // },
  };
}
