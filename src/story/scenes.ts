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

  //Første karakter blir introdusert

  person: {
    id: "person",
    text: `
    "Jeg har sittet her lenge", sier de.
    "så lenge at jeg sluttet å telle."
    
    De ser ikke slitne ut. 
    Bare vant.
    `,
    choices: [
      { text: "Spørre hvorfor de aldri gikk av", next: "aldri_gatt_av" },
      { text: "Spørre hvor toget skal", next: "hvor_toget_skal" },
      { text: "Avslutte samtalen", next: "stillhet" },
    ],
  },

  aldri_gatt_av: {
    id: "aldri_gatt_av",
    text: `De trekker litt på skuldrene.
    
    "Det var alltid lettere å bli litt til."
    "Og så ble det bare sånn."
    
    De ser på deg igjen, som om de prøver å huske
    når det sluttet å være et valg.
    `,

    choices: [
      { text: "Spørre om de angrer", next: "anger" },
      { text: "Reise deg og gå videre", next: "vogn" },
      { text: "Bli sittende med dem", next: "stillhet" },
    ],
  },

  hvor_toget_skal: {
    id: "hvor_toget_skal",
    text: `
    De smiler svakt.
    
    "Det har aldri vært poenget,"
    sier de.
    
    "Det viktige er at det beveger seg."
    `,

    choices: [
      { text: "Spørre hva de mener med det", next: "aldri_gatt_av" },
      { text: "Avslutte samtalen", next: "vogn" },
      { text: "Bli sittende i stillhet", next: "stillhet" },
    ],
  },

  anger: {
    id: "anger",
    text: `
    De blir sittende en stund.
    
    "Anger er et rart ord", sier de til slutt.
    "Det forutsetter at man visste noe annet var mulig."
    
    De ser bort, som om svaret ligger et sted utenfor vinduet.
    `,

    choices: [
      { text: "Spørre hva de mener med det", next: "aldri_gatt_av" },
      { text: "La det være og bli sittende", next: "stillhet" },
      { text: "Reise deg og gå videre", next: "vogn" },
    ],
  },

  //Karakter nummer to blir introdusert.

  angret_person: {
    id: "angret_person",
    text: `
    En person står ved døren mellom to vogner.
    Hånden deres hviler på dørhåndtaket,
    men de slipper det ikke.
    
    "Jeg gikk av en gang", sier de lavt.
    "Jeg trodde det var det riktige."
    
    De ser ikke på deg når de snakker.
    `,

    choices: [
      { text: "Spørre hva som skjedde", next: "hva_som_skjedde" },
      { text: "Spørre hvorfor de gikk på igjen", next: "hvorfor_tilbake" },
      { text: "Gå videre uten å si noe", next: "vogn" },
    ],
  },

  hva_som_skjedde: {
    id: "hva_som_skjedde",
    text: `
    De rister svakt på hodet.
    
    "Det spiller ingen rolle nå."
    "Det ble ikke slik jeg hadde sett for meg."
    
    Hånden strammes rundt håndtaket igjen.
    `,

    choices: [
      { text: "Spørre hvorfor de gikk på igjen", next: "hvorfor_tilbake" },
      { text: "La dem være", next: "stillhet" },
      { text: "Gå videre i toget", next: "vogn" },
    ],
  },

  hvorfor_tilbake: {
    id: "hvofor_tilbake",
    text: `
    "Fordi det var kjent", sier de.
    "Og fordi det som ventet der ute
    ikke var det jeg trodde."
    
    De slipper dørhåndtaket.
    `,

    choices: [
      { text: "Bli stående litt til", next: "stillhet" },
      { text: "Gå videre i toget", next: "vogn" },
    ],
  },

  //Lokfører blir introdusert

  lokforer: {
    id: "lokforer",
    text: `
    Fronten av toget er stille.
    Det står èn person der, vendt bort fra deg.
    
    "Dette toget stopper ikke", sier de.
    "Men dørene fungerer."
    
    De snur seg ikke når de snakker.
    `,

    choices: [
      { text: "Spørre hva de mener", next: "hva mener du?" },
      { text: "Gå uten å si noe", next: "vogn" },
    ],
  },

  hva_mener_du: {
    id: "hva_mener_du",
    text: `
    Det betyr bare èn ting," sier de rolig.
    "Du kan bli så lenge du vil."

    "Men hvis du går,
    er det ditt valg."

    Toget fortsetter å bevege seg.
    `,

    choices: [
      { text: "Gå tilbake i toget", next: "vogn" },
      { text: "Bli stående litt til", next: "stillhet" },
    ],
  },

  nodbrems: {
    id: "nodbrems",
    text: `
    En rød spak henger på veggen ved døren.
    Den er slitt, som om den har blitt brukt før.
    
    Det står tydelig hva den er ment for.
    
    Toget beveger seg jevnt fremover.
    `,

    choices: [
      { text: "Trekke i nødbremsen", next: "brems_trukket" },
      { text: "La den være", next: "vogn" },
    ],
  },

  brems_trukket: {
    id: "brems_trukket",
    text: `Du trekker i spaken.

    Toget bremser.
    Bare litt.
    Nok til at du merker det.

    Så fortsetter det som før.

    Ingen sier noe.
    `,

    choices: [
      { text: "Se deg rundt", next: "vogn" },
      { text: "Bli stående", next: "stillhet" },
    ],
  },

  slutt_gar_av: {
    id: "slutt_gar_av",
    text: `
    Du åpner døren.
    
    Det er mørkt utenfor,
    men stille på en annen måte enn inne i toget.
    
    Du tar et steg ut.
    
    Bak deg fortsetter toget.
    `,
    choices: [],
  },

  slutt_blir: {
    id: "slutt_blir",
    text: `
    Du slipper døren.
    
    Setter deg igjen.
    
    Noen har forlatt setet sitt.
    Toget beveger seg videre.
    `,
    choices: [],
  },

  slutt_passiv: {
    id: "slutt_passiv",
    text: `
    Du blir stående litt for lenge.
    
    Døren lukker seg av seg selv.
    
    Toget fortsetter.
    `,
    choices: [],
  },
};
