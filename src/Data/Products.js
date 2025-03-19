const Products = [
  {
    id: "ENCLOSURE-THERMOSTAT",
    title: "Enclosure Thermostat",
    productImg: async () =>
      (
        await import(
          "../assets/ptoductsImg/ENCLOSURE-THERMOSTAT-IMAGES/ENTS (4).png"
        )
      ).default,

    application: "With DIN rail mounting",
    models: ["KSTO-011", "KSTS-011"],
    featuresH: "Also Available",
    features: [
      "Compact Design",
      "Wide Adjustment Range",
      "Colour Coded Temperature knobs",
      "Din Rail Mountable",
    ],
    description:
      "'GIRISHEGO' thermostats are ideal for temperature control of space heaters used in LT & HT switchgear & panel boards etc.",
    workingH: "Thermostat (NC):",
    workingDetails: [
      "Thermostat opens on temperature rise - for regulating heaters or for switching signal devices. Čomes with red temperature knob.",
    ],
    construtionH: "Thermostat (NO): ",
    constrution: [
      "Thermostat closes on temperature rise - for regulating filter fans and heat exchangers or for switching signal devices. Comes with blue temperature knob.",
    ],
    tests: [],
    intended: "",
    uses: [],
    Installation: "",
    instructions: [],
    remark: "",
    recommendation: "",

    // ✅ Updated otherImages with headings and image arrays
    otherImages: [
      {
        heading: "Technical Data sheet ",
        images: [
          async () =>
            (
              await import(
                "../assets/ptoductsImg/ENCLOSURE-THERMOSTAT-IMAGES/ENTS (1).png"
              )
            ).default,
         
        ],
      },
      
      {
        heading: "wiring diagram",
        images: [
          async () =>
            (
              await import(
                "../assets/ptoductsImg/ENCLOSURE-THERMOSTAT-IMAGES/ENTS (2).png"
              )
            ).default,
        ],
      },

      {
        heading: "Dimensional Data",
        images: [
          async () =>
            (
              await import(
                "../assets/ptoductsImg/ENCLOSURE-THERMOSTAT-IMAGES/ENTS (3).png"
              )
            ).default,

        ],
      },
    ],
  },
  //dual thermostat data
  {
    id: "Dual-THERMOSTAT",
    title: "Dual Thermostat",
    productImg: async () =>
      (
        await import(
          "../assets/ptoductsImg/dual-thermostat-images/dual-th (4).png"
        )
      ).default,

    application: "",
    models: ["ZSR-011"],
    featuresH: "Also Available",
    features: [
      "Two thermostats in one unit-one Normally Closed (NC) & one Normally Open (NO)",
      "Each with wide adjustable temperature range",
      "Actual size DIN rail mountable",
    ],
    description:
      "ZSR-011 features two separate thermostats for independent heating and cooling control, with wide adjustment ranges and color-coded functions.",
    workingH: "Principle of Operation",
    workingDetails: [
      "The ZSR-011 houses two separate thermostats, allowing the independent control of heating and cooling or other equipment. Both thermostats offer wide adjustment ranges and are color coded for easy function recognition.",
    ],
    construtionH: "",
    constrution: [],
    tests: [],
    intended: "",
    uses: [],
    Installation: "",
    instructions: [],
    remark: "",
    recommendation: "",
    otherImages: [
      {
        heading: "Technical Data",
        images: [
          async () =>
            (
              await import(
                "../assets/ptoductsImg/dual-thermostat-images/dual-th (5).png"
              )
            ).default,
          async () =>
            (
              await import(
                "../assets/ptoductsImg/dual-thermostat-images/dual-th (1).png"
              )
            ).default,
         
        ],
      },
      {
        heading: "Diagram",
        images: [
          
          async () =>
            (
              await import(
                "../assets/ptoductsImg/dual-thermostat-images/dual-th (2).png"
              )
            ).default,
          
        ],
      },
      {
        heading: "wiring diagram",
        images: [
          async () =>
            (
              await import(
                "../assets/ptoductsImg/dual-thermostat-images/dual-th (3).png"
              )
            ).default,
         
        ],
      },
    ],

  },

];

export default Products;

 

  // //mechanical hgydrostat data
  //     {
  //       id: "Mechanical-HYGROSTAT",
  //       title: "mechanical hygrostat",
  //       productImg: async () => (await import("../assets/ptoductsImg/machinacal-hygrostat-images/MH (1).png")).default,

  //       application: "",
  //       models: ["ZSR-011"],
  //       featuresH: "Also Available",
  //       features: [
  //         "Adjustable relative humidity range",
  //         "High switching capacity",
  //         "DIN rail mountable",
  //       ],
  //       description:
  //         "MSFR-012 regulates enclosure humidity by activating heaters at set levels to prevent condensation and corrosion. Can also control cooling fans and warning devices.",
  //       workingH: "Principle of Operation",
  //       workingDetails: [
  //         "The MSFR-012 is designed to control the relative air humidity inside of enclosures. When connected to an enclosure heater (de-humidifier), it will turn the heater on at the set humidity level in order to raise the dew point.",
  //         "This helps prevent damage and malfunction of electronic components caused by condensation and corrosion. The MSFR-012 can also be used to control cooling fans, warning lights, or other devices.",
  //       ],
  //       construtionH: "",
  //       constrution: [],
  //       tests: [],
  //       intended: "",
  //       uses: [],
  //       Installation: "",
  //       instructions: [],
  //       remark: "",
  //       recommendation: "",
  //       otherImages: [
  //       async () => (await import("../assets/ptoductsImg/machinacal-hygrostat-images/MH (2).png")).default,
  //       async () => (await import("../assets/ptoductsImg/machinacal-hygrostat-images/MH (3).png")).default,
  //       ],
  //     },
  //      // PTC heatres data
  //     {
  //       id: "PTC-Enclosure-Heaters",
  //       title: "PTC Enclosure Heaters",
  //       productImg: async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/ptc-heatersimgs/pta (1).png"
  //       )
  //     ).default,
  //       application: "For Panel Boards & Switchgear Industries",
  //       models: ["HGG 140 15W-150W"],
  //       featuresH: "Features",
  //       features: [
  //         "Pressure clamp connectors",
  //         "Dynamic heating up",
  //         "Wide voltage range ",
  //         "Temperature limiting",
  //         "Energy saving",
  //         "DIN rail mounted",
  //         "Quick installation",
  //       ],
  //       description:
  //         "Prevents condensation and maintains minimum temperature with an aluminum body for even heat distribution. Easy installation with pressure clamp connectors and mounting holes.",
  //       workingH: "Working Principle & Features",
  //       workingDetails: [
  //         "These heaters are used in enclosures where damage from condensation must be prevented, or where the temperature must be maintained above a minimum value.",
  //         "The aluminum profile heater body design has a chimney effect to distribute heat evenly.",
  //         "The pressure clamp connectors save time and simplify installation.",
  //         "Mounting holes provided on one side.",
  //       ],
  //       tests: [],
  //       intended: "",
  //       uses: [],
  //       Installation: "",
  //       instructions: [],
  //       remark: "",
  //       recommendation: "",
  //       otherImages: [async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/ptc-heatersimgs/pta (2).png"
  //       )
  //     ).default,
  //   async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/ptc-heatersimgs/pta (3).png"
  //       )
  //     ).default,
  //   async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/ptc-heatersimgs/pta (4).png"
  //       )
  //     ).default,
  //   async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/ptc-heatersimgs/pta (5).png"
  //       )
  //     ).default,
  //   async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/ptc-heatersimgs/pta (6).png"
  //       )
  //     ).default,],
  //     },
  //       // combi heaters data
  //     {
  //       id: "COMBI-SPACE-HEATERS",
  //       title: "COMBI-SPACE HEATERS ",
  //       productImg: async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/combi-heaters-Imgs/combi (1).png"
  //       )
  //     ).default,
  //       application: "with BUILT IN CAPILLARY THERMOSTAT",
  //       models: ["COMBI model"],
  //       featuresH: "Features",
  //       features: [
  //         "Compact design",
  //         "Built-in Thermostat",
  //         "Stainless steel cover",
  //       ],
  //       description:
  //         "'GIRISHEGO' Combi Space Heaters with built-in capillary Thermostat are ideal for prevention of condensation, corrosion & Leakage currents in L.T. & H.T. Switchgear panel boards/electronic instruments & panels etc.",
  //       workingH: "Working Principle & Features",
  //       workingDetails: [
  //         "In this, a long life and sturdy extruded aluminium sheathed, mica insulated heater and an accurate capillary thermostat are place in a Rust resistant steel perforated body.  ",
  //         "A2x2.5 sqr. mm porcelain terminal block is provided for electrical connection. ",
  //         "The pressure clamp connectors save time and simplify installation.",
  //         "Mounting holes provided on one side.",
  //       ],
  //       tests: [],
  //       intended: "Intended Use",
  //       uses: [
  //         "Prevention of condensation, corrosion & Leakage currents in L.T. & H.T. ",
  //         "Switchgear panel boards, enclosures, switch boards, & electronic instruments etc.",
  //       ],
  //       Installation: "Installation",
  //       instructions: [
  //         "Four side slot holes for fixing tabs are provided for fitting the heater in the panel. ",
  //         "Installation can be done in vertical or horizontal position although vertical mounting is preferred. ",
  //         "Distance from surface of panel should be at least 10mm and distance from plastic parts should be at least 50mm. ",
  //         "Connection wire must be on the side or below to avoid warming up of the wire.",
  //       ],
  //       remark: "",
  //       recommendation: "",
  //       otherImages: [async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/combi-heaters-Imgs/combi (2).png"
  //       )
  //     ).default,
  //   async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/combi-heaters-Imgs/combi (3).png"
  //       )
  //     ).default,
  //   async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/combi-heaters-Imgs/combi (4).png"
  //       )
  //     ).default,
  //   async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/combi-heaters-Imgs/combi (5).png"
  //       )
  //     ).default,],
  //     },
  //     // heavy duty heaters data
  //     {
  //       id: "HEAVY-DUTY-SLIM-SPACE-HEATER",
  //       title: "Heavy Duty Slim Space Heater",
  //       productImg: async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/havydudy-heaters_img/HDG (1).png"
  //       )
  //     ).default,
  //       application: "with COVER FOR CONTINUOUS USE ",
  //       models: ["SJ-III model"],
  //       featuresH: "Features",
  //       features: [
  //         "Flat body takes very less space inside enclosure Quick and uniform heating",
  //         "Fast dissipation of heat into air",
  //         "Withstands mechanical shock and vibration",
  //         "Very good insulation resistance",
  //       ],
  //       description:"'SAIEGO' make SJ-III model is a slim & Heavy duty space heater, it is encased in a specially designed Aluminum broad heat sink channel having a Perforated Protection cover for evenly distributed temperature within the enclosure/cabinet. It is highly recommended for continuous use for prevention of condensation, corrosion, Leakage currents in L.T. & H.T. Switchgears, Panel boards / electronic instruments & panels etc. Its is specially designed for continuos use.",
  //       workingH: "Working Principle & Features",
  //       workingDetails: [
  //         "Heater body is made of anodized heat sink grade extruded aluminium for fast dissipation of heat into air.",
  //         "High quality resistance heating element is insulated with mica for optimum insulation even in extreme humid conditions.",
  //         "Resistance element and insulation are held tight in between aluminium parts and squeezed for quick and uniform heating.",
  //         "Heater can withstand much higher degree of mechanical shock and vibration. Elevated body provides for easy passage of heat directly to air, without heating panel body.",
  //         "A Perforated cover made of Powder coated M.S. sheet is provided for safety."
  //       ],
  //       tests: [],
  //       intended: "Intended Use",
  //       uses: ["Prevention of condensation, corrosion","Leakage currents in L.T. & H.T. Switchgear panel boards","enclosures, switch boards","electronic instruments etc.",],
  //       Installation: "",
  //       instructions: [],
  //       remark: "Remark",
  //       recommendation:
  //         "It is recommended to use a 'SAIEGO' thermostat to control the heater.",
  //       otherImages: [async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/havydudy-heaters_img/HDG (2).png"
  //       )
  //     ).default,
  //   async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/havydudy-heaters_img/HDG (3).png"
  //       )
  //     ).default,
  //   async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/havydudy-heaters_img/HDG (4).png"
  //       )
  //     ).default,
  //   async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/havydudy-heaters_img/HDG (5).png"
  //       )
  //     ).default,],
  //     },

  //     // ELECTRONIC HYGROSTAT data
  //     {
  //       id: "ELECTRONIC HYGROSTAT",
  //       title: "Electronic Hygrostat",
  //       productImg: async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/ELECTRONIC-HYGROSTAT-imags/imgs (1).png"
  //       )
  //     ).default,
  //       application: "",
  //       models: ["ESFR-012"],
  //       featuresH: "features",
  //       features: [
  //         "Adjustable and pre-set relative humidity",
  //         "LED status indicator",
  //         "High switching capacity",
  //         "Clip Fixing",
  //         "Temperature-compensated",
  //       ],
  //       description:
  //         "ESFR-012 electronic hygrostat controls humidity in enclosures by activating heaters to prevent condensation. Features an LED indicator for operation status.",
  //       workingH: "Principle of Operation",
  //       workingDetails: [
  //         "The ESFR-012 electronic hygrostat senses the relative humidity in an enclosure with electric/electronic components and turns on a heater at the set point, helping prevent the formation of condensation in the enclosure.",
  //         "The LED integrated in the adjustment knob is lit when the connected heater is in operation.",
  //       ],
  //       construtionH: "",
  //       constrution: [],
  //       tests: [],
  //       intended: "",
  //       uses: [],
  //       Installation: "",
  //       instructions: [],
  //       remark: "",
  //       recommendation: "",
  //       otherImages: [async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/ELECTRONIC-HYGROSTAT-imags/imgs (5).png"
  //       )
  //     ).default, 
  //     async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/ELECTRONIC-HYGROSTAT-imags/imgs (2).png"
  //       )
  //     ).default,
  //     async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/ELECTRONIC-HYGROSTAT-imags/imgs (3).png"
  //       )
  //     ).default,
  //     async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/ELECTRONIC-HYGROSTAT-imags/imgs (4).png"
  //       )
  //     ).default,
  //   ]
  //     },

  //     //ELECTRONIC HYGROTHERM data
  //     {
  //       id: "ELECTRONIC-HYGROTHERM",
  //       title: "Electronic Hygrotherm",
  //       productImg: async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/ELECTRONIC HYGROTHERM IMAGES/eL-HRM (5).png"
  //       )
  //     ).default,
  //       application: "ELECTRONIC HYGROSTAT WITH THERMOSTAT ",
  //       models: ["ESTF-012"],
  //       featuresH: "features",
  //       features: [
  //         "Adjustable and pre-set Temperature & relative humidity",
  //         "LED status indicator",
  //         "High switching capacity",
  //         "DIN rail mounted",
  //         "Temperature-compensated",
  //       ],
  //       description:
  //         "Electronic sensor controls heater and fan operation based on ambient temperature and humidity.",
  //       workingH: "Principle of Operation",
  //       workingDetails: [
  //         "Electronic temperature and humidity sensor can control the on & off of the heater and fan according to ambient temperature and relative humidity.",
  //       ],
  //       construtionH: "",
  //       constrution: [],
  //       tests: [],
  //       intended: "",
  //       uses: [],
  //       Installation: "",
  //       instructions: [],
  //       remark: "",
  //       recommendation: "",
  //       otherImages: [
  //         async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/ELECTRONIC HYGROTHERM IMAGES/eL-HRM (1).png"
  //       )
  //     ).default,
  //     async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/ELECTRONIC HYGROTHERM IMAGES/eL-HRM (2).png"
  //       )
  //     ).default,
  //     async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/ELECTRONIC HYGROTHERM IMAGES/eL-HRM (3).png"
  //       )
  //     ).default,
  //     async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/ELECTRONIC HYGROTHERM IMAGES/eL-HRM (4).png"
  //       )
  //     ).default,
  //       ],
  //     },

  //     // ELECTRONIC DC THERMOSTAT data
  //     {
  //       id: "ELECTRONIC-DC-THERMOSTAT",
  //       title: "Electronic DC Thermostat",
  //       productImg:async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/ELECTRONIC-DC-THERMOSTATIMAGES/IMG (1).png"
  //       )
  //     ).default,

  //       application: "",
  //       models: ["EST-01124V DC"],
  //       featuresH: "features",
  //       features: [
  //         "High DC Breaking capacity",
  //         "Low Hysteresis",
  //         "Adjustable Temperature ",
  //         "Changeover contact",
  //         "DIN rail mounted",
  //       ],
  //       description:
  //         "ET 011 electronic thermostat regulates DC 24V equipment with low hysteresis, controlling heating, cooling, and signal devices through a change-over contact.",
  //       workingH: "Principle of Operation",
  //       workingDetails: [
  //         "Electronic thermostat for regulating high-performance DC 24V equipment. Heating or cooling appliances as well as signal devices can be switched via the potential-free change-over contact.",
  //         "In comparison to mechanical thermostats, the ET 011 has a low hysteresis making the switching point more accurate.",
  //       ],
  //       construtionH: "",
  //       constrution: [],
  //       tests: [],
  //       intended: "",
  //       uses: [],
  //       Installation: "",
  //       instructions: [],
  //       remark: "",
  //       recommendation: "",
  //       otherImages: [async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/ELECTRONIC-DC-THERMOSTATIMAGES/IMG (2).png"
  //       )
  //     ).default,
  //   async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/ELECTRONIC-DC-THERMOSTATIMAGES/IMG (3).png"
  //       )
  //     ).default,
  //   async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/ELECTRONIC-DC-THERMOSTATIMAGES/IMG (4).png"
  //       )
  //     ).default,
  //   ],
  //     },
  //      // ELECTRONIC THERMOSTAT
  //     {
  //       id: "ELECTRONIC-THERMOSTAT",
  //       title: "Electronic Thermostat",
  //       productImg:  async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/ELECTRONIC-THERMOSTATIMAGES/EL-DC-TH (5).png"
  //       )
  //     ).default,
  //       application: "",
  //       models: ["ESTR-011"],
  //       featuresH: "features",
  //       features: [
  //         "Adjustable Temperature",
  //         "LED status indicator",
  //         "High switching capacity",
  //         "DIN rail mounted",
  //       ],
  //       description:
  //         "Electronic thermostats control heater operation based on ambient temperature.",
  //       workingH: "Principle of Operation",
  //       workingDetails: [
  //         "Electronic Thermostats can control the on & off of the heater according to the ambient temperature.",
  //       ],
  //       construtionH: "",
  //       constrution: [],
  //       tests: [],
  //       intended: "",
  //       uses: [],
  //       Installation: "",
  //       instructions: [],
  //       remark: "",
  //       recommendation: "",
  //       otherImages: [
  //          async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/ELECTRONIC-THERMOSTATIMAGES/EL-DC-TH (1).png"
  //       )
  //     ).default,
  //      async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/ELECTRONIC-THERMOSTATIMAGES/EL-DC-TH (2).png"
  //       )
  //     ).default,
  //      async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/ELECTRONIC-THERMOSTATIMAGES/EL-DC-TH (3).png"
  //       )
  //     ).default,
  //      async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/ELECTRONIC-THERMOSTATIMAGES/EL-DC-TH (4).png"
  //       )
  //     ).default,
  //       ],
  //     },
  //      // HAZARDOUS AREA THERMOSTAT
  //     {
  //       id: "HAZARDOUS-AREA-THERMOSTAT",
  //       title: "Hazardous Area Thermostat",
  //       productImg:  async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/HAZARDOUS AREA THERMOSTAT-IMAGES/IMAGES (1).png"
  //       )
  //     ).default,
  //       application: "",
  //       models: ["SREX-01115°C 25°C"],
  //       featuresH: "features",
  //       features: [
  //         "Compact Desogn",
  //         "Set Temperature",
  //         "High switching capacity",
  //         "Clip mounted",
  //       ],
  //       description:
  //         "Compact mechanical thermostat for regulating and monitoring heaters in hazardous areas. Features high accuracy, long lifespan, and direct control of heaters.",
  //       workingH: "Principle of Operation",
  //       workingDetails: [
  //         "Compact small mechanical thermostat for temperature regulation and monitoring of heaters, for example in transmitter cabinets, control panels, and measuring equipment which are deployed in areas with explosion hazard.",
  //         "The special switch construction enables high response accuracy, small switch temperature difference, and a very long service life.",
  //         "High switching performance allows direct control of the heaters.",
  //       ],
  //       construtionH: "",
  //       constrution: [],
  //       tests: [],
  //       intended: "",
  //       uses: [],
  //       Installation: "",
  //       instructions: [],
  //       remark: "",
  //       recommendation: "",
  //       otherImages: [ async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/HAZARDOUS AREA THERMOSTAT-IMAGES/IMAGES (5).png"
  //       )
  //     ).default,
  //    async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/HAZARDOUS AREA THERMOSTAT-IMAGES/IMAGES (2).png"
  //       )
  //     ).default,
  //    async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/HAZARDOUS AREA THERMOSTAT-IMAGES/IMAGES (3).png"
  //       )
  //     ).default,
  //    async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/HAZARDOUS AREA THERMOSTAT-IMAGES/IMAGES (4).png"
  //       )
  //     ).default,
  //   async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/HAZARDOUS AREA THERMOSTAT-IMAGES/IMAGES (6).png"
  //       )
  //     ).default,],
  //     },
  //     //fan heaters data
  //     {
  //       id: "Space-Saving-Fan-Heaters",
  //       title: "SPACE-SAVING FAN HEATERS ",
  //       productImg: async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/fanheatersimags/fanheaters (1).png"
  //       )
  //     ).default,
  //       application: "with COVER FOR CONTINUOUS USE ",
  //       models: ["HV 031/HVL 031 100W-400W "],
  //       featuresH: "Features",
  //       features: [
  //         "Compact",
  //         "Flat Design",
  //         "High Air throw-Flow",
  //         "Temperature safety cut-out",
  //         "DIN rail mounted",
  //       ],
  //       description:
  //         "Compact high-performance fan heater prevents condensation and ensures even air distribution in enclosures. Available with or without a fan.",
  //       workingH: "Working Principle & Features",
  //       workingDetails: [
  //         "The compact high-performance fan heater prevents formation of condensation in control or systems and provides an evenly distributed interior air temperature in enclosures.",
  //         "This fan heater is available without fan (SHV 031) as well as with fan (SHVL 031).",
  //       ],
  //       tests: [],
  //       intended: "",
  //       uses: [],
  //       Installation: "",
  //       instructions: [],
  //       remark: "",
  //       recommendation: "",
  //       otherImages: [async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/fanheatersimags/fanheaters (2).png"
  //       )
  //     ).default,
  //   async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/fanheatersimags/fanheaters (3).png"
  //       )
  //     ).default,
  //   async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/fanheatersimags/fanheaters (4).png"
  //       )
  //     ).default,
  //   async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/fanheatersimags/fanheaters (5).png"
  //       )
  //     ).default,
  //   async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/fanheatersimags/fanheaters (6).png"
  //       )
  //     ).default,
  //   async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/fanheatersimags/fanheaters (7).png"
  //       )
  //     ).default,],
  //     },
  //      // TEMPER-PROOF MECHANICAL THERMOSTAT
  //     {
  //       id: "T-P-M-THERMOSTAT",
  //       title: "TEMPER-PROOF MECHANICAL THERMOSTAT",
  //       productImg: async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/TEMPER-PROOF MECHANICAL THERMOSTAT IMAGES/IMGS (3).png"
  //       )
  //     ).default,
  //       application: "",
  //       models: ["SFTO-011", "SFTS-011"],
  //       featuresH: "features",
  //       features: ["Small Size", "Default Temp. Setting ", "Easy to install"],
  //       description:
  //         "Tamperproof thermostats regulate heaters or signal devices based on temperature changes, with pre-set contact breakers for SFTO-011 and contact makers for SFTS-011.",
  //       workingH: "Tamperproof (Pre-set) Thermostat SFTO-011",
  //       workingDetails: [
  //         "Contact breaker/NC (red casing) for regulating heaters or for switching signal devices when temperature has fallen below the minimum value. The contact opens when temperature is rising.",
  //       ],
  //       construtionH: "Tamperproof (Pre-set) Thermostat SFTS-011",
  //       constrution: [
  //         "Contact maker / NO (blue casing) for regulating filter fans, heat exchangers, cooling devices Or switching signal devices when temperature limit has been exceeded. The contact closes when temperaure is rising.",
  //       ],
  //       tests: [],
  //       intended: "",
  //       uses: [],
  //       Installation: "",
  //       instructions: [],
  //       remark: "",
  //       recommendation: "",
  //       otherImages: [async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/TEMPER-PROOF MECHANICAL THERMOSTAT IMAGES/IMGS (2).png"
  //       )
  //     ).default,
  //   async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/TEMPER-PROOF MECHANICAL THERMOSTAT IMAGES/IMGS (1).png"
  //       )
  //     ).default,
  //     async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/TEMPER-PROOF MECHANICAL THERMOSTAT IMAGES/IMGS (4).png"
  //       )
  //     ).default,
  //   async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/TEMPER-PROOF MECHANICAL THERMOSTAT IMAGES/IMGS (5).png"
  //       )
  //     ).default,
  //   async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/TEMPER-PROOF MECHANICAL THERMOSTAT IMAGES/IMGS (6).png"
  //       )
  //     ).default,],
  //     },
  //     //TEMPER-PROOF DUAL NO-NC THERMOSTAT DATA
  //     {
  //       id: "T-P -DUAL_NO-NC_THERMOSTAT",
  //       title: "TEMPER-PROOF DUAL NO-NC THERMOSTAT ",
  //       productImg: async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/TEMPER-PROOF DUAL NO-NC THERMOSTAT IMAGES/IMGS (3).png"
  //       )
  //     ).default,
  //       application: "(PRESET)",
  //       models: ["SFTD-011"],
  //       featuresH: "features",
  //       features: [
  //         "NOC & NCC in one casing",
  //         "Default Temp. Setting",
  //         "High switching capacity",
  //         "Clip Fixing",
  //       ],
  //       description:
  //         "Two thermostats in one casing for independent control of heaters and cooling equipment with temperature offset, featuring tamper-proof pre-set contacts.",
  //       workingH: "Two thermostats in one casing:",
  //       workingDetails: [
  //         "Tamper-proof (pre-set) thermostat/contact breaker (NC) for regulating heaters or switching signal devices when the temperature falls below the minimum value. The contact opens when the temperature rises.",
  //         "Tamper-proof (pre-set) thermostat/contact maker (NO) for regulating filter fans, heat exchangers, or switching signal devices when the temperature limit is exceeded. The contact closes when the temperature rises.",
  //         "Heaters and cooling equipment can be switched independently from each other with a temperature offset, unlike usual change-over contacts.",
  //       ],
  //       construtionH: "",
  //       constrution: [],
  //       tests: [],
  //       intended: "",
  //       uses: [],
  //       Installation: "",
  //       instructions: [],
  //       remark: "",
  //       recommendation: "",
  //       otherImages: [async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/TEMPER-PROOF DUAL NO-NC THERMOSTAT IMAGES/IMGS (2).png"
  //       )
  //     ).default,
  //   async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/TEMPER-PROOF DUAL NO-NC THERMOSTAT IMAGES/IMGS (1).png"
  //       )
  //     ).default,
  //   async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/TEMPER-PROOF DUAL NO-NC THERMOSTAT IMAGES/IMGS (4).png"
  //       )
  //     ).default,
  //   async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/TEMPER-PROOF DUAL NO-NC THERMOSTAT IMAGES/IMGS (5).png"
  //       )
  //     ).default,
  //   async () =>
  //     (
  //       await import(
  //         "../assets/ptoductsImg/TEMPER-PROOF DUAL NO-NC THERMOSTAT IMAGES/IMGS (6).png"
  //       )
  //     ).default,],
  //     },
// ];

// export default Products;
