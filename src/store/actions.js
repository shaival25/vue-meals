import axiosClient from "../axiosClient";

export function searchMeals({ commit }, keyword) {
  if (keyword !== "") {
    axiosClient.get("search.php?s=" + keyword).then(({ data }) => {
      commit("setSearchedMeals", data.meals);
    });
  } else {
    commit("setSearchedMeals", []);
  }
}

export function searchMealsByLetter({ commit }, letter) {
  axiosClient.get("search.php?f=" + letter).then(({ data }) => {
    commit("setMealsByLetter", data.meals);
  });
}

export function searchMealsByIngredient({ commit }, ingrident) {
  axiosClient.get("filter.php?i=" + ingrident).then(({ data }) => {
    commit("setMealsByIngredient", data.meals);
  });
}
export function setIngredient(state, ingredient) {
  state.ingredient = ingredient;
}
