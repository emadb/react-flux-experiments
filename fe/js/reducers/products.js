export default function products(state, action){
  switch (action.type) {
    case 'PRODUCTS_LOADED':
      return action.content;
    default:
      return state;
  }
}
