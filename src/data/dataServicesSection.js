const relativePath = `${process.env.PUBLIC_URL}`;

const imagesPath = {
  0: `${relativePath}/img/spawanie.jpg`,
  1: `${relativePath}/img/praceZiemne.jpg`,
  2: `${relativePath}/img/przewierty2.jpg`,
};

export const dataServicesSection = [
  {
    id: 1,
    image: imagesPath[0],
    title: 'Spawanie i pomiary światłowodów',
    text: 'Spawanie światłowodów to nasza specjalność. Nasz wykwalifikowany wykonuje usługę precyzyjnie i dokonuje niezbędnych pomiarów. Dzięki temu zapewniamy niezawodne połączenie i doskonałą jakość transmisji.',
  },
  {
    id: 2,
    image: imagesPath[1],
    title: 'Prace ziemne',
    text: 'Dzięki naszemu doświadczeniu i wiedzy technicznej, jesteśmy w stanie wykonać wszystkie wymagana prace ziemne z precyzją i dokładnością. Nasze zaawansowane techniki i sprzęt pozwalają zachować najwyższe standardy bezpieczeństwa.',
  },
  {
    id: 3,
    image: imagesPath[2],
    title: 'Przewierty sterowane',
    text: 'Dzięki nowoczesnym technologiom i doświadczeniu naszych ekspertów, jesteśmy w stanie wykonać precyzyjne i bezpieczene przewierty w trudno dostępnych miejscach. Nasze usługi obejmują wiercenie pod zieminą bez naruszania powierzchni i instalację różnego rodzaju rur oraz kabli.',
  },
];
