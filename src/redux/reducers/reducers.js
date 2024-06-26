const initialState = {
    fName: '',
    lName: '',
    email: '',
    phone: '',
    bdate: '',
    gender: '',
    occupation:'',
    company:'',
    education: '',
    nationality: '',
    payment:'',
    userName: '',
    password: '',
    eDate: '',
    comment:'',
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_FNAME':
        return { ...state, fName: action.payload };
      case 'SET_LNAME':
        return { ...state, lName: action.payload };
      case 'SET_EMAIL':
        return { ...state, email: action.payload };
      case 'SET_PHONE_NO':
        return { ...state, phone: action.payload };
      case 'SET_BIRTH_DATE':
          return { ...state, bDate: action.payload };
      case 'SET_GENDER':
          return { ...state, gender: action.payload };
      case 'SET_OCCUPATION':
          return { ...state, occupation: action.payload };
      case 'SET_COMPANY':
          return { ...state, company: action.payload };
      case 'SET_EDUCATION':
          return { ...state, education: action.payload };
      case 'SET_NATIONALITY':
          return { ...state, nationality: action.payload };
      case 'SET_MARITAL':
          return { ...state, marital: action.payload };
      case 'SET_EMERGENCY':
          return { ...state, emergency: action.payload };
      case 'SET_MEDICAL':
          return { ...state, medical: action.payload };
      case 'SET_INTRESTS':
          return { ...state, intrests: action.payload };
      case 'SET_LANGUAGE':
          return { ...state, language: action.payload };
      case 'SET_PAYMENT':
          return { ...state, payment: action.payload };
      case 'SET_USERNAME':
          return { ...state, userName: action.payload };
      case 'SET_PASSWORD':
          return { ...state, password: action.payload };
      case 'SET_EDATE':
          return { ...state, eDate: action.payload };
      case 'SET_COMMENT':
          return { ...state, comment: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;


