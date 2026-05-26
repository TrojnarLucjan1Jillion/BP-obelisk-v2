export interface PathwayResult {
  title: string;
  body: string;
}

export type Country = 'Belgium' | 'France' | 'Netherlands' | 'Germany' | 'Portugal';
export type UseCase = 'Permanent residence' | 'Care/family unit' | 'Holiday/tourism' | 'Studio or office';
export type LandStatus = 'Urban land I own' | 'Rural land I own' | 'No land yet';

export function getPathway(country: Country, use: UseCase, land: LandStatus): PathwayResult {
  if (country === 'Belgium' && use === 'Permanent residence') {
    return {
      title: 'Pathway: Wallonia habitation légère',
      body: `Belgium's formal lightweight-dwelling regime, in force since 1 September 2019 under the décret du 2 mai 2019. A structure qualifies by meeting at least 3 of 9 legal criteria. Estimated time to permit: 4 to 9 months. Estimated regulatory cost: €2,500 to €6,500. Note: the décret du 13 décembre 2023, in force since 1 April 2024, introduced duration limits on permits for mobile habitations légères.`,
    };
  }

  if (country === 'Belgium' && use === 'Care/family unit') {
    return {
      title: 'Pathway: Flemish zorgunit',
      body: `A subsidiary dwelling for up to 2 elderly (65+) or care-dependent persons, placed within 30 m of the main dwelling. Requires only a melding (notification), not a full omgevingsvergunning. Max 50 m² floor area. The melding is valid for 3 years, renewable once (6 years maximum total). Introduced 16 August 2021.`,
    };
  }

  if (country === 'France' && (use === 'Holiday/tourism' || use === 'Permanent residence')) {
    if (land === 'Rural land I own') {
      return {
        title: 'Pathway: Résidence démontable (ALUR Article R.111-51)',
        body: `The permanent residence category created by Loi n° 2014-366 du 24 mars 2014 (loi ALUR). Requires: no foundations, autonomous from public networks, occupied as primary residence at least 8 months per year, rapidly demountable. Placement on agricultural or natural land requires a STECAL designation under Article L.151-13 of the Code de l'urbanisme. Estimated time: 6 to 12 months. Estimated regulatory cost: €2,000 to €5,000.`,
      };
    }
    return {
      title: 'Pathway: HLL in authorised leisure zone (Article R.421-2)',
      body: `Habitations légères de loisirs up to 35 m² SHON placed in authorised parcs résidentiels de loisirs, classified holiday villages, or registered campsites are exempt from all planning formality under Article R.421-2 du Code de l'urbanisme. Estimated time: 1 to 3 months. Estimated additional cost: €0 to €800.`,
    };
  }

  if (country === 'Netherlands' && use === 'Permanent residence') {
    return {
      title: 'Pathway: Omgevingswet omgevingsvergunning',
      body: `Under the Omgevingswet (in force 1 January 2024), permanent tiny house placement requires an omgevingsvergunning from the gemeente, plus compliance with the Besluit bouwwerken leefomgeving (Bbl) minimum of 22 m² gebruiksoppervlakte. The Netherlands has 89 documented tiny house projects, of which 32 are permanently zoned and 57 operate under temporary permits (5 to 10 year durations). Land matching required if you do not yet have a plot. Estimated time: 4 to 9 months. Estimated regulatory cost: €2,500 to €5,000.`,
    };
  }

  if (country === 'Germany' && use === 'Studio or office') {
    return {
      title: 'Pathway: Bavaria verfahrensfrei (Article 57 BayBO)',
      body: `Structures up to 75 m³ Brutto-Rauminhalt are procedure-free (verfahrensfrei) in built-up areas (Innenbereich) under Article 57 paragraph 1 of the Bayerische Bauordnung. This applies only where the structure has no habitable rooms, no toilets, and no heating. This route covers studios, garden offices, and seasonal holiday units. For permanent residential use, a Bauvoranfrage is required first (cost: €100 to €500). Estimated time: immediate for verfahrensfrei; 6 to 12 months for residential Baugenehmigung.`,
    };
  }

  if (country === 'Germany' && use === 'Permanent residence') {
    return {
      title: 'Pathway: Bauvoranfrage then Baugenehmigung',
      body: `Germany has 16 separate state building codes (Landesbauordnungen). For permanent residential tiny house use, the standard pathway starts with a Bauvoranfrage (preliminary planning enquiry) from the local Bauamt, which gives a binding determination. Cost: €100 to €500. If favourable, a full Baugenehmigung follows. Estimated total time: 6 to 12 months. Estimated regulatory cost: €3,000 to €7,000.`,
    };
  }

  if (country === 'Portugal') {
    if (use === 'Permanent residence') {
      return {
        title: 'Pathway: Licenciamento camarario on urbano land',
        body: `Since 2024, Portuguese Câmaras treat any structure used for permanent habitation as requiring a full Projecto de Arquitectura, regardless of mobility. The Decreto-Lei n.º 117/2024 de 30 de dezembro (in force 29 January 2025) opens a new reclassification route for community-scale projects under Article 72.º-B of the RJIGT, but individual single-house projects on rural land remain strictly controlled. Estimated time on urban land: 8 to 15 months. Estimated regulatory cost: €3,500 to €6,500.`,
      };
    }
    if (use === 'Holiday/tourism') {
      return {
        title: 'Pathway: Tourism / glamping via Decreto-Lei 117/2024',
        body: `The Decreto-Lei n.º 117/2024 de 30 de dezembro opens new pathways for community-scale tourism developments on reclassified land. At least 70% of the reclassified area must serve affordable housing or tourism, and the land must be adjacent to existing urban areas. This route suits glamping operators and eco-tourism developers more than individual buyers. Estimated time: 18 to 36 months for full reclassification. Individual tourism unit placement on existing approved land is faster.`,
      };
    }
  }

  // Generic fallback
  return {
    title: `Multiple pathways may apply in ${country}`,
    body: `Based on your inputs, more than one legal pathway could apply. Your full pathway report will analyse each option against your specific land, commune, and use case, give you a cost and timeline for each, and recommend the strongest route. The diagnostic above is the starting point.`,
  };
}
