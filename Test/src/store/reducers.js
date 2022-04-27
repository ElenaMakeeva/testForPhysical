import ACTypes from "./types";

const users = [
  {
    id: 14,
    email: "antonida@mail.com",
    first_name: "Antonida",
    pay_status: false,
    last_name: "White",
    username: "AntonidaW",
    profile_link: "https://fizikl.ru/",
  },
  {
    id: 17,
    email: "butonchick@gmail.com",
    first_name: "",
    pay_status: true,
    last_name: "Zorro",
    username: "ananimus007",
    profile_link:
      "https://translate.google.com/?sl=de&tl=ru&text=Herzlich%20willkommen!&op=translate",
  },
  {
    id: 8,
    email: "vasya2007@mail.ru",
    first_name: "Вася",
    pay_status: false,
    last_name: "Пупкин",
    username: "superVasssya",
    profile_link: "",
  },
  {
    id: 12,
    email: "antonio@mail.com",
    first_name: "Anton",
    pay_status: true,
    last_name: "Black",
    username: "ABlack",
    profile_link: "https://translate.google.com/",
  },
];

const initialState = {
  users: users
 
};


export const reducers = (state = initialState, action) => {
  
  switch (action.type) {
    case ACTypes.DELETE_USER:
      const newListUsers = state.users.filter((user) => {
        if (user.id !== action.payload.id) return { ...users };
      });
      return { ...state, users: newListUsers };
      case ACTypes.ADD_USER:
        return {...state, users:[...state.users, action.payload]}

    default:
      return state; 
  }
};
