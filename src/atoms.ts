import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist();

export interface IToDo {
  text: string;
  id: number;
  category: string;
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom]
});

export const CategoriesState = atom<string[]>({
  key: "categories",
  default: ["To Do", "Doing", "Done"],
  effects_UNSTABLE: [persistAtom]
})

export const categoryState = atom({
  key: "category",
  default: "To Do"
})

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({get}) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  }
});