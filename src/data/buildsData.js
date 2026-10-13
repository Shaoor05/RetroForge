// Original Maker Builds dataset

export const buildsData = [
  {
    id: 'bare-ic-computer',
    title: 'Bare-IC Computer',
    subtitle: 'Building a working computer from individual logic ICs — no microcontroller, no pre-built CPU. The goal is to understand, at the level of individual gates and registers, what a "computer" actually is.',
    category: 'Digital Logic',
    status: 'Ongoing',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    buildLogs: [
      {
        entryNumber: 1,
        title: 'Clock and reset circuit',
        content: 'Started with the most boring but most essential part: a stable clock signal and a clean reset line. Got a 555-based clock working, but it\'s noisy at higher speeds — need to look into crystal-based timing next.',
      },
      {
        entryNumber: 2,
        title: 'Register bank',
        content: 'Wired up a 4-bit register using 74LS-series flip-flops. First attempt had a data corruption issue that turned out to be a floating input pin I\'d forgotten to pull down. Small mistake, large debugging session.',
      }
    ],
    futureNote: '(Future entries will document the ALU, bus architecture, and instruction decoding as they\'re built.)'
  }
];
