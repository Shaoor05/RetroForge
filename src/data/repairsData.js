// Clean repair archive dataset with authentic workbench teardowns and photos

export const repairsData = [
  {
    id: 'murphy-mini-master-4',
    name: 'Murphy Mini Master 4 (Sinus Chassis)',
    year: 1968,
    decade: '1960s',
    category: 'Radio',
    heroImage: '/images/murphy-mini-master-4-front.jpg',
    initialLikes: 42,
    specs: {
      chassis: 'Murphy India Sinus Transistor Superheterodyne',
      bands: 'Medium Wave (MW 200–550m) & Short Wave (SW 16–60m)',
      speaker: 'Murphy India Sinus 3-Ohm Tropic Proof Alnico Driver',
      ifFrequency: '455 kHz Intermediate Frequency',
      aerial: 'Internal high-Q Ferrite Rod Aerial + External SW Wire Tap',
      power: '6V DC (4x 1.5V Cells) / External Battery Socket'
    },
    summary: 'Vintage transistor radio teardown — rescued with heavy static on MW and silence on SW. Serviced tuning gang, recapped dried electrolytic stages, and peaked the 455 kHz IF cans.',
    description: `Rescued from a scrap market with severe static, weak scratchy reception on MW, and total silence across the SW band. The volume potentiometer crackled loudly and dropped audio intermittently whenever rotated.

Opened the vintage clamshell case to inspect the Murphy India Sinus chassis. Found a classic dual-gang air dielectric variable capacitor, long ferrite loopstick antenna bar, discrete germanium transistors, and shielded IF cans wired to the heavy 3-ohm Sinus speaker.

Leaking vintage wax-paper and dried electrolytic decoupling capacitors caused heavy DC bias drift across intermediate RF stages, choking signal gain.

Flushed the tuning capacitor plates and volume pot with contact cleaner. Replaced all degraded electrolytic capacitors with modern low-ESR equivalents, reflowed oxidized solder joints on the bandswitch, and peaked the 455 kHz IF transformers with an RF generator. Vintage Murphy India sets were engineered exceptionally well for tropical humidity — once the leaking caps are replaced and IF cans re-peaked, the RF sensitivity pulls in distant stations with crystal clarity.`,
    teardownImages: [
      {
        url: '/images/murphy-sinus-internal-chassis.jpg',
        caption: 'Chassis interior showing Murphy India Sinus 3-Ohm speaker, ferrite loopstick aerial, IF cans & discrete transistor stage.'
      },
      {
        url: '/images/murphy-mini-master-4-front.jpg',
        caption: 'Front tuning scale with Medium Wave / Short Wave logging scale and original retro leather protective case.'
      }
    ]
  },
  {
    id: 'philips-portable-radio',
    name: 'Philips Multi-Band Portable Radio',
    year: 1982,
    decade: '1980s',
    category: 'Radio',
    heroImage: '/images/philips-radio-teardown-open.jpg',
    initialLikes: 35,
    specs: {
      chassis: 'Philips Dual-Power Portable Superheterodyne',
      powerSupply: 'Internal 230V AC Mains Step-Down Transformer + DC Battery Bay',
      aerialSystem: 'Ferrite Rod Loopstick Antenna + Telescopic SW Lead',
      circuitry: 'Discrete RF Front-End + Monolithic Audio/IF IC Sub-board',
      speaker: 'Permanent Magnet Dynamic 4-Ohm Loudspeaker'
    },
    summary: 'Dual-power portable superhet teardown — repaired snapped internal transformer mains leads, cleared audio motorboating, and serviced the ferrite aerial bar.',
    description: `Dead on AC mains due to severed internal transformer wiring; running on battery produced severe motorboating oscillation and distorted output.

Split the two housing shells apart. The rear lid houses the step-down mains transformer, fuse block, and battery bay with flying lead wires bridging across to the lower chassis containing the speaker, ferrite rod antenna, tuning gang, and main RF PCB with auxiliary IC board.

Mechanical fatigue severed the AC transformer secondary wire at the casing pivot. An open-circuit filter capacitor in the audio feedback loop caused rail instability (motorboating).

Resoldered and heat-shrunk the power transformer leads. Replaced the dried rail bypass capacitor to eliminate oscillation and reflowed cracked solder joints around the headphone jack and audio IC. Clamshell portable radios that split transformer power across cabinet halves almost always suffer wire fatigue at the hinge point. Always check the harness before suspecting complex IC failures.`,
    teardownImages: [
      {
        url: '/images/philips-radio-teardown-open.jpg',
        caption: 'Full internal teardown showing integrated mains step-down transformer in rear casing, battery bays, and main RF/Audio PCB.'
      },
      {
        url: '/images/philips-radio-rf-pcb-detail.jpg',
        caption: 'Detailed view of PCB showing ferrite antenna bar, local oscillator coils, ceramic filter, and auxiliary IC daughterboard.'
      }
    ]
  },
  {
    id: 'panasonic-cordless',
    name: 'Panasonic Cordless Phone Handset',
    year: 2002,
    decade: '2000s',
    category: 'Telephony',
    heroImage: '/images/panasonic-phone-teardown.jpg',
    initialLikes: 18,
    specs: {
      standard: 'DECT 6.0 Digital Enhanced Cordless Telecommunications',
      frequency: '1.9 GHz Band Handset & Base Station',
      display: 'Monochrome Segmented Backlit LCD with Ribbon Cable',
      keypad: 'Conductive Carbon Pill Elastomeric Dome Matrix',
      earpiece: '32-Ohm Dynamic Transducer Driver with Strain-Relief Clip'
    },
    summary: 'Full 3-piece handset teardown — inspecting the carbon contact keypad membrane, monochrome LCD display controller, baseband ASIC, and audio transducer.',
    description: `Opened up the cordless handset casing to diagnose keypad unresponsiveness and intermittent audio during calls.

The handset disassembles into three distinct layers:
1. The rear housing contains the dynamic earpiece speaker secured by a plastic bracket, with insulated twisted leads routed to the main PCB, along with battery bay spring contacts.
2. The main circuit board features a monochrome LCD screen mounted at the top, a conductive carbon contact matrix pad for the keypad buttons, and a surface-mount microphone capsule at the bottom edge.
3. The front bezel houses the optical window for the screen and a translucent elastomeric silicone rubber keypad dome sheet with conductive carbon pads.

Cleaned the carbon keypad contact pads and PCB traces with isopropyl alcohol to remove accumulated skin oil and residue, restored tactile bounce to the dome switches, and inspected the LCD flex ribbon bonding.`,
    teardownImages: [
      {
        url: '/images/panasonic-phone-teardown.jpg',
        caption: 'Chassis separated into 3 tiers: Rear housing with earpiece driver, central PCB with LCD & keypad carbon contacts matrix, and front faceplate with silicone rubber dome membrane.'
      }
    ]
  },
  {
    id: 'philips-cassette-eliminator',
    name: 'Philips Cassette Eliminator',
    year: 1985,
    decade: '1980s',
    category: 'Audio',
    heroImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1000&q=80',
    initialLikes: 19,
    specs: {
      type: 'Magnetic Induction Tape Head Coupler',
      interface: '3.5mm Stereo TRS to Inductive Audio Head',
      housing: 'Molded Compact Cassette Shell'
    },
    summary: 'A cassette-shaped adapter meant to play external line-in audio through vintage tape decks — re-soldered snapped internal wires with strain-relief loops.',
    description: `A cassette-shaped adapter meant to let old tape decks play audio from an external line-in jack. Dead output despite the deck's flywheel mechanism spinning it smoothly.

Cracked open the sonic-welded plastic housing to inspect the magnetic coupling head and internal wiring harness. Traced the fault to a snapped lead wire where the 3.5mm cable enters the PCB strain-relief collar from years of insertion and bending fatigue.

Re-soldered the joint with a reinforced strain-relief loop to prevent repeated bending stress. Always check physical interconnects and solder joints before assuming head or coil failures.`,
    teardownImages: []
  }
];
