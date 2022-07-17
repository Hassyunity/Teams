export const getComments = async () => {
    return [
      {
        id: "1",
        body: "Les achats nets de titres par l’Eurosystème dans le cadre du PEPP (Pandemic Emergency Purchase Programme) se sont arrêtés fin mars 2022, deux ans après le lancement",
        username: "Hadrien CAMATTE",
        userId: "1",
        parentId: null,
        createdAt: "2022-08-18T23:00:33.010+02:00",
      },
      {
        id: "2",
        body: "La modélisation occupe une place importante dans le plan d’action de l’Eurosystème sur le changement climatique. L’analyse macroéconomique et la préparation des décisions de politique monétaire reposent en effet sur des travaux quantitatifs où les modèles jouent un rôle central.",
        username: "Stéphane Dees, Jean-François Ouvrard",
        userId: "2",
        parentId: null,
        createdAt: "2022-08-16T23:00:33.010+02:00",
      },
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "Hassy",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };