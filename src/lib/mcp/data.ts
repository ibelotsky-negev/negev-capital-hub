// Static content mirrored from the site. Kept import-safe: no I/O, no throws.

export const fundOverview = {
  name: "Negev Capital",
  tagline: "CNS and brain health therapeutics. Fully invested. Realized.",
  size: "$30M+",
  vintage: "2021",
  status: "Fully Invested",
  domicile: "Cayman Islands",
  strategy: "CNS / Brain Health · Seed–Series A",
  portfolioCompanies: 16,
  realizedExits: 4,
  website: "https://www.negevcap.com",
  ventureStudio: {
    name: "Palomar Labs",
    website: "https://palomar-labs.com",
    description:
      "Palomar Labs sources overlooked CNS drug candidates backed by existing human data, builds them into capital-efficient companies, and targets pharma licensing on accelerated timelines. The studio model is designed to deliver founder-level returns to our investors.",
    companies: [
      {
        name: "Ariadne Bio",
        status: "Active",
        website: "https://www.ariadnebio.com",
        stage: "Phase 1b",
        modality: "Non-hallucinogenic 5-HT2A agonist",
        indication: "Apathy in Parkinson's / late-life depression",
        description:
          "Ariadne Bio is developing AB-300, a first-in-class non-hallucinogenic 5-HT2A agonist designed to treat apathy in Parkinson's disease, late-life depression, and neurodegeneration — an unmet need affecting ~8 million U.S. patients with zero approved therapies. Phase 1b trial initiation targeted for Q4 2026.",
      },
    ],
  },
};

export type PortfolioStatus = "exit" | "active" | "merged" | "liquidity";

export interface PortfolioCompany {
  name: string;
  status: PortfolioStatus;
  focus: string;
  website?: string;
  note?: string;
  dealUrl?: string;
  stage?: string;
  modality?: string;
  indication?: string;
  invested?: string;
}

export const portfolio: PortfolioCompany[] = [
  { name: "Gilgamesh Pharmaceuticals", status: "exit", focus: "Asset sale to AbbVie — bretisilocin (GM-2505) for major depressive disorder.", website: "https://www.gilgameshpharmaceutical.com/", note: "Acquired by AbbVie", stage: "Phase 2", modality: "Small molecule", indication: "Major Depressive Disorder", invested: "2022" },
  { name: "Mindset Pharma", status: "exit", focus: "Next-generation psychedelic medicines for neuropsychiatric and neurological disorders.", website: "https://www.mindsetpharma.com/", note: "Acquired by Otsuka", stage: "Preclinical", modality: "Small molecule", indication: "Neuropsychiatric", invested: "2021" },
  { name: "Bright Minds Biosciences", status: "exit", focus: "Selective serotonin receptor agonists for epilepsy and neuropsychiatric disorders.", website: "https://www.brightmindsbio.com/", note: "Public-market exit · Nasdaq: DRUG · 2024", stage: "Phase 2", modality: "Small molecule", indication: "Epilepsy / Neuropsychiatry", invested: "2021" },
  { name: "Awakn Life Sciences", status: "merged", focus: "Therapeutics for substance and behavioral addictions, focus on Alcohol Use Disorder.", website: "https://www.solvonis.com/", note: "Merged with Solvonis Therapeutics", stage: "Phase 2", modality: "Small molecule", indication: "Alcohol Use Disorder", invested: "2021" },
  { name: "Beckley Psytech", status: "exit", focus: "Clinical-stage psychedelic medicines for neurological and psychiatric disorders; lead asset BPL-003 (intranasal 5-MeO-DMT) for treatment-resistant depression.", website: "https://atai.life/", note: "Acquired by Eli Lilly (2026) via AtaiBeckley", dealUrl: "https://www.prnewswire.com/news-releases/lilly-to-acquire-ataibeckley-to-advance-therapies-for-treatment-resistant-depression-and-other-mental-health-conditions-302827468.html", stage: "Phase 3", modality: "5-MeO-DMT (psychedelic)", indication: "Treatment-resistant depression", invested: "2021" },
  { name: "Filament Health", status: "merged", focus: "GMP manufacturer of natural, standardized psychedelic drug candidates for clinical development.", website: "https://redlighthollandcorp.com/", note: "Merged with Red Light Holland (CSE: TRIP)", dealUrl: "https://www.newsfilecorp.com/release/288047/RETRANSMISSION-Red-Light-Holland-Signs-Definitive-Agreement-with-Filament-Health-to-Expand-Its-Platform-for-Natural-Psychedelic-Drug-Development-and-Microdosing-Innovation", stage: "Preclinical", modality: "Botanical psychedelics", indication: "Substance Use Disorders", invested: "2021" },
  { name: "Small Pharma", status: "merged", focus: "Clinical-stage DMT-based psychedelic therapies for depression and anxiety.", website: "https://www.cybin.com/", note: "Merged with Helus Pharma (formerly Cybin)", dealUrl: "https://www.businesswire.com/news/home/20230828350890/en/Cybin-to-Acquire-Small-Pharma-Inc.", stage: "Phase 2", modality: "DMT", indication: "Depression / Anxiety", invested: "2021" },
  { name: "Helus Pharma", status: "active", focus: "Clinical-stage neuropsychiatry company (formerly Cybin) advancing serotonergic agonists for MDD and GAD.", website: "https://www.cybin.com/", note: "Nasdaq: HELP", stage: "Phase 2", modality: "Serotonergic agonist", indication: "MDD / GAD", invested: "2021" },
  { name: "Freedom Biosciences", status: "active", focus: "Next-generation ketamine and psychedelic therapeutics for treatment-resistant depression.", website: "https://freedombio.co/", stage: "Phase 1", modality: "Ketamine / psychedelic", indication: "Treatment-resistant depression", invested: "2021" },
  { name: "Biomind Labs", status: "active", focus: "Novel pharmaceutical formulations of DMT, 5-MeO-DMT and mescaline for CNS disorders.", website: "https://biomindlabs.com/", stage: "Preclinical", modality: "DMT / 5-MeO-DMT", indication: "CNS disorders", invested: "2021" },
  { name: "Psylo", status: "active", focus: "Next-generation non-hallucinogenic 5-HT2A agonists as alternatives to SSRIs.", website: "https://psylo.bio/", stage: "Preclinical", modality: "Non-hallucinogenic 5-HT2A", indication: "Depression", invested: "2022" },
  { name: "Delix Therapeutics", status: "active", focus: "Non-hallucinogenic neuroplastogens targeting depression and neurodegeneration.", website: "https://www.delixtherapeutics.com/", stage: "Phase 1", modality: "Neuroplastogen", indication: "Depression / Neurodegeneration", invested: "2021" },
  { name: "MindState Design Labs", status: "active", focus: "Computational design of novel serotonergic psychedelic compounds.", website: "https://www.mindstate.design/", stage: "Preclinical", modality: "Serotonergic psychedelic", indication: "Neuropsychiatric", invested: "2022" },
  { name: "A Better Life Pharma", status: "active", focus: "Patentable psychedelic and analgesic compounds for mental health and pain.", website: "https://abetterlifepharma.com/", stage: "Preclinical", modality: "Psychedelic / analgesic", indication: "Mental health / Pain", invested: "2021" },
  { name: "Reconnect Labs", status: "active", focus: "Swiss precision neuropsychiatry — therapeutics and predictive diagnostics for insomnia, anxiety and substance use disorders.", website: "https://reconnect-labs.com/", stage: "Preclinical", modality: "Precision neuropsychiatry", indication: "Insomnia / Anxiety / SUD", invested: "2022" },
  { name: "Reset Pharma", status: "active", focus: "First-in-class psilocybin-inspired therapies for demoralization syndrome in life-altering diseases.", website: "https://www.resetpharma.com/", stage: "Preclinical", modality: "Psilocybin-inspired", indication: "Demoralization syndrome", invested: "2022" },
];

export const realizedExits = [
  {
    company: "Beckley Psytech",
    counterparty: "Eli Lilly (via AtaiBeckley)",
    year: "2026",
    dealValue: "~$2.8B upfront cash; up to ~$3.8B incl. milestone CVRs",
    summary: "Eli Lilly acquired AtaiBeckley, the company formed by Beckley Psytech's combination with atai Life Sciences, in a transaction led by BPL-003, Beckley's intranasal 5-MeO-DMT candidate for treatment-resistant depression.",
    dealUrl: "https://www.prnewswire.com/news-releases/lilly-to-acquire-ataibeckley-to-advance-therapies-for-treatment-resistant-depression-and-other-mental-health-conditions-302827468.html",
  },
  {
    company: "Gilgamesh Pharmaceuticals",
    counterparty: "AbbVie",
    year: "2025",
    dealValue: "Up to $1.2B (upfront + milestones)",
    summary: "AbbVie acquired bretisilocin (GM-2505), Gilgamesh's lead compound — a next-generation psychedelic-derived candidate for major depressive disorder.",
    dealUrl: "https://news.abbvie.com/2025-08-25-AbbVie-to-Acquire-Gilgamesh-Pharmaceuticals-Bretisilocin,-a-Novel,-Investigational-Therapy-for-Major-Depressive-Disorder,-Expanding-Psychiatry-Pipeline",
  },
  {
    company: "Mindset Pharma",
    counterparty: "Otsuka Pharmaceutical",
    year: "2023",
    dealValue: "~CAD $80M",
    summary: "Otsuka acquired Mindset to strengthen its neuropsychiatric pipeline with next-generation psychedelic-based therapeutics.",
    dealUrl: "https://otsuka-us.com/news/otsuka-pharmaceutical-acquire-mindset-pharma-strengthens-pipeline-area-psychiatric-and",
  },
  {
    company: "Bright Minds Biosciences",
    counterparty: "Public markets (Nasdaq: DRUG)",
    year: "2024",
    dealValue: "Public-market realization",
    summary: "Negev Capital realized its position in Bright Minds Biosciences through public-market sales during the 2024 share-price appreciation.",
    dealUrl: "https://www.brightmindsbio.com/",
  },
];

export const team = [
  {
    name: "Vadim Uzberg",
    title: "Partner, Fund Management",
    location: "Limassol, Cyprus",
    headline: "Co-Founder and Managing Director of Negev Capital since 2021.",
    credentials: [
      "25+ years in private equity and venture capital across Europe, US, and emerging markets",
      "Former Partner at Baring Vostok Capital Partners (~$4B AUM)",
      "Former Investment Director and CFO at Eagle Venture Partners (EBRD-backed)",
      "Harvard Business School (Leadership Development); Voronezh State University",
    ],
    linkedin: "https://www.linkedin.com/in/vadim-uzberg-695210/",
  },
  {
    name: "Ken Belotsky",
    title: "Partner",
    location: "Vienna, Austria",
    headline: "Co-Founding Partner at Negev Capital since 2021 and Co-Founder of Palomar Labs.",
    credentials: [
      "Technology entrepreneur and venture investor with 30+ private investments across US, Israel, Europe",
      "Co-founded Bright Box, a global connected-car platform sold to Zurich Insurance Group (2018)",
      "Co-founded BrightConsult, acquired by Incadea",
      "Columbia Business School (Executive Education); Business Economics, HSE",
    ],
    linkedin: "https://www.linkedin.com/in/ibelotsky/",
  },
  {
    name: "Dr. Stuart Seidman",
    title: "Partner, Medical Science Lead",
    location: "New York",
    headline: "Board-certified psychiatrist and internationally recognized expert in psychopharmacology and neuroendocrinology.",
    credentials: [
      "15+ years as Assistant Professor of Clinical Psychiatry at Columbia University",
      "Assistant Attending Psychiatrist at NewYork-Presbyterian; co-directed the Brain-Behavior Clinic at Columbia",
      "International teaching appointments including Tel Aviv University",
      "Publications in American Journal of Psychiatry, JAMA, and Biological Psychiatry",
    ],
    linkedin: "https://www.linkedin.com/in/stuart-seidman-412b7530/",
  },
  {
    name: "Prof. Bernard Lerer",
    title: "Chief of Scientific Advisory Board",
    location: "Jerusalem, Israel",
    headline: "Professor of Psychiatry and Founder of the Biological Psychiatry Laboratory at Hadassah – Hebrew University Medical Center.",
    credentials: [
      "Former Director of the National Institute for Psychobiology in Israel",
      "Founding Editor-in-Chief of the International Journal of Neuropsychopharmacology",
      "A.E. Bennet Award (US Society for Biological Psychiatry); Fellow, ACNP",
      "380+ peer-reviewed publications and four books in psychopharmacology and neurogenetics",
    ],
    linkedin: "https://www.linkedin.com/in/bernardlerer/",
  },
];

export const press = [
  {
    outlet: "AbbVie Newsroom",
    date: "2025-08-25",
    headline: "AbbVie to Acquire Gilgamesh Pharmaceuticals' Bretisilocin, a Novel, Investigational Therapy for Major Depressive Disorder",
    url: "https://news.abbvie.com/2025-08-25-AbbVie-to-Acquire-Gilgamesh-Pharmaceuticals-Bretisilocin,-a-Novel,-Investigational-Therapy-for-Major-Depressive-Disorder,-Expanding-Psychiatry-Pipeline",
  },
  {
    outlet: "Endpoints News",
    date: "2024-12",
    headline: "Palomar Labs debuts with $30M in assets, striving to build a network of psychedelic biotechs",
    url: "https://endpoints.news/negev-labs-debuts-with-30m-in-assets-striving-to-build-a-network-of-psychedelic-biotechs/",
  },
  {
    outlet: "Otsuka Pharmaceutical",
    date: "2023-10",
    headline: "Otsuka Pharmaceutical to Acquire Mindset Pharma, Strengthening Pipeline in Psychiatric & Neurological Disorders",
    url: "https://otsuka-us.com/news/otsuka-pharmaceutical-acquire-mindset-pharma-strengthens-pipeline-area-psychiatric-and",
  },
];
