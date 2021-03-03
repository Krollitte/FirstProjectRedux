const INITTIAL_STATE = {
  activeModule: {},
  activeLesson: {},
  modules: [
    {
      id: 1,
      title: "Iniciando com React 1",
      lessons: [
        { id: 1, title: "variaveis" },
        { id: 2, title: "segunda aula" },
        { id: 3, title: "terceira aula" },
        { id: 4, title: "quarta aula" },
      ],
    },
    {
      id: 2,
      title: "modulo2",
      lessons: [
        { id: 1, title: "primeira aula" },
        { id: 2, title: "segunda aula" },
        { id: 3, title: "terceira aula" },
        { id: 4, title: "quarta aula" },
      ],
    },
  ],
};
export default function store(state = INITTIAL_STATE, action) {
  if (action.type === "TOGGLE_LESSON") {
    return {
      ...state,
      activeModule: action.module,
      activeLesson: action.lesson,
    };
  }
  return state;
}
