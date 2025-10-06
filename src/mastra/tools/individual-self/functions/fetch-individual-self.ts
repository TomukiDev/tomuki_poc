import individualSelf from "../../../../../individual-self.json";

export const fetchUserIndividualSelf = async (id: number) => {
  const response = individualSelf.find((self) => self.id === id);
  if (!response) {
    throw new Error("Individual self not found");
  }
  return response;
};
