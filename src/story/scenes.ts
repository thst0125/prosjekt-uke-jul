import type { Scene } from "./types";

export const scenes: Record<string, Scene> = {
  //Første scene i historien
  start: {
    id: "start",
    text: `
Du sitter i en togvogn som beveger seg jevnt fremover.
Lyset er dempet. Utenfor vinduet er det mørkt.

Du kan ikke huske når du gikk på.
    `,

    //Brukeren sitt første valg
    choices: [
      { text: "Se ut av vinduet", next: "vindu" },
      { text: "Se deg rundt i vognen", next: "vogn" },
      { text: "Bli sittende", next: "stillhet" },
    ],
  },

  //Scenen der brukeren ser ut av vinduet
  vindu: {
    id: "vindu",
    text: `
Mørket utenfor gir ingenting tilbake.
Bare refleksjonen av deg selv i glasset.
    `,
    choices: [
      { text: "Gå videre i toget", next: "vogn" },
      { text: "Bli sittende", next: "stillhet" },
    ],
  },

  //Scenen der brukeren ser seg rundt i vognen
  vogn: {
    id: "vogn",
    text: `
    Du ser deg rundt i vognen.
    Det sitter noen få andre her.
    Ingen sier noe, men en av dem ser på deg som om at de visste at du kom.
    `,

    choices: [
      { text: "Snakke med personen", next: "person" },
      { text: "Gå videre i toget", next: "vindu" },
      { text: "Bli sittende", next: "stillhet" },
    ],
  },

  //Scene hvor bruker kan velge å være passiv
  stillhet: {
    id: "stillhet",
    text: `
    Du blir sittende.
    Lyden av skinner og vind er konstant.
    Det føles som om tiden går, men du er ikke sikker.`,

    choices: [
      { text: "Reise deg", next: "vogn" },
      { text: "Fortsette å sitte", next: "stillhet" },
    ],
  },
};
