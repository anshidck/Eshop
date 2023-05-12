const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return {...state, loading: true};
      case 'FETCH_SUCCES':
        return {...state, product: action.payload, loading: false}
      case 'FETCH_FAIL':
        return {...state, error: action.payload, loading: false}
      default: 
      return state
    }
  }