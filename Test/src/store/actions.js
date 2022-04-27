import ACTypes from "./types";

export const deleteUser = (id) => {
  return { type: ACTypes.DELETE_USER, payload: { id: id } };
};

export const userAdd=(user)=>{
  return {type:ACTypes.ADD_USER, payload: user}
}
