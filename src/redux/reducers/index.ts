export default function reduce(state: any, action: any) {
  console.log('reducer', state);
  console.log('action', action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_CLICKED':
      return {
        ...state,
        clicked: action.clicked,
      };
    case 'SET_BALANCE':
      return {
        ...state,
        balance: action.balance,
      };
    default:
      return state;
  }
}
