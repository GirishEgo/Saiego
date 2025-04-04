const Products = [
  {
    id: "Heating",
    name: "Heating",
    subProduct: [

      // PTC heatres data
      {
        id: "PTC-Enclosure-Heaters",
        title: "PTC Enclosure Heaters",
        productImg: async () =>
          (
            await import(
              "../assets/ptoductsImg/ptc-heatersimgs/pta (1).png"
            )
          ).default,
        application: "For Panel Boards & Switchgear Industries",
        models: ["HGG 140 15W-150W"],
        featuresH: "Features",
        features: [
          "Pressure clamp connectors",
          "Dynamic heating up",
          "Wide voltage range ",
          "Temperature limiting",
          "Energy saving",
          "DIN rail mounted",
          "Quick installation",
        ],
        description:
          "Prevents condensation and maintains minimum temperature with an aluminum body for even heat distribution. Easy installation with pressure clamp connectors and mounting holes.",
        workingH: "Working Principle & Features",
        workingDetails: [
          "These heaters are used in enclosures where damage from condensation must be prevented, or where the temperature must be maintained above a minimum value.",
          "The aluminum profile heater body design has a chimney effect to distribute heat evenly.",
          "The pressure clamp connectors save time and simplify installation.",
          "Mounting holes provided on one side.",
        ],
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
                    "../assets/ptoductsImg/ptc-heatersimgs/pta (5).png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/ptc-heatersimgs/pta (6).png"
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
                    "../assets/ptoductsImg/ptc-heatersimgs/pta (4).png"
                  )
                ).default,
            ],
          },
          {
            heading: "Wiring Diagram",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/ptc-heatersimgs/pta (2).png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/ptc-heatersimgs/pta (3).png"
                  )
                ).default,
            ],
          },
        ],

      },

      // combi heaters data
          {
            id: "COMBI-SPACE-HEATERS",
            title: "COMBI-SPACE HEATERS ",
            productImg: async () =>
          (
            await import(
              "../assets/ptoductsImg/combi-heaters-Imgs/combi (1).png"
            )
          ).default,
            application: "with BUILT IN CAPILLARY THERMOSTAT",
            models: ["COMBI model"],
            featuresH: "Features",
            features: [
              "Compact design",
              "Built-in Thermostat",
              "Stainless steel cover",
            ],
            description:
              "'GIRISHEGO' Combi Space Heaters with built-in capillary Thermostat are ideal for prevention of condensation, corrosion & Leakage currents in L.T. & H.T. Switchgear panel boards/electronic instruments & panels etc.",
            workingH: "Working Principle & Features",
            workingDetails: [
              "In this, a long life and sturdy extruded aluminium sheathed, mica insulated heater and an accurate capillary thermostat are place in a Rust resistant steel perforated body.  ",
              "A2x2.5 sqr. mm porcelain terminal block is provided for electrical connection. ",
              "The pressure clamp connectors save time and simplify installation.",
              "Mounting holes provided on one side.",
            ],
            tests: [],
            intended: "Intended Use",
            uses: [
              "Prevention of condensation, corrosion & Leakage currents in L.T. & H.T. ",
              "Switchgear panel boards, enclosures, switch boards, & electronic instruments etc.",
            ],
            Installation: "Installation",
            instructions: [
              "Four side slot holes for fixing tabs are provided for fitting the heater in the panel. ",
              "Installation can be done in vertical or horizontal position although vertical mounting is preferred. ",
              "Distance from surface of panel should be at least 10mm and distance from plastic parts should be at least 50mm. ",
              "Connection wire must be on the side or below to avoid warming up of the wire.",
            ],
            remark: "",
            recommendation: "",
            otherImages: [
              {
                heading: "Technical Data",
                images: [
                  async () =>
                    (
                      await import(
                        "../assets/ptoductsImg/combi-heaters-Imgs/combi (2).png"
                      )
                    ).default,
                  async () =>
                    (
                      await import(
                        "../assets/ptoductsImg/combi-heaters-Imgs/combi (3).png"
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
                        "../assets/ptoductsImg/combi-heaters-Imgs/combi (5).png"
                      )
                    ).default,
                ],
              },
              {
                heading: "Mounting Hole Details",
                images: [
                  async () =>
                    (
                      await import(
                        "../assets/ptoductsImg/combi-heaters-Imgs/combi (6).png"
                      )
                    ).default,
                ],
              },
              {
                heading: "Wiring Diagram",
                images: [
                  async () =>
                    (
                      await import(
                        "../assets/ptoductsImg/combi-heaters-Imgs/combi (4).png"
                      )
                    ).default,
                 
                ],
              },
            ],

          },
          // heavy duty heaters data
          {
            id: "HEAVY-DUTY-SLIM-SPACE-HEATER",
            title: "Heavy Duty Slim Space Heater",
            productImg: async () =>
          (
            await import(
              "../assets/ptoductsImg/havydudy-heaters_img/HDG (1).png"
            )
          ).default,
            application: "with COVER FOR CONTINUOUS USE ",
            models: ["SJ-III model"],
            featuresH: "Features",
            features: [
              "Flat body takes very less space inside enclosure",
              " Quick and uniform heating",
              "Fast dissipation of heat into air",
              "Withstands mechanical shock and vibration",
              "Very good insulation resistance",
            ],
            description:"'SAIEGO' make SJ-III model is a slim & Heavy duty space heater, it is encased in a specially designed Aluminum broad heat sink channel having a Perforated Protection cover for evenly distributed temperature within the enclosure/cabinet. It is highly recommended for continuous use for prevention of condensation, corrosion, Leakage currents in L.T. & H.T. Switchgears, Panel boards / electronic instruments & panels etc. Its is specially designed for continuos use.",
            workingH: "Working Principle & Features",
            workingDetails: [
              "Heater body is made of anodized heat sink grade extruded aluminium for fast dissipation of heat into air.",
              "High quality resistance heating element is insulated with mica for optimum insulation even in extreme humid conditions.",
              "Resistance element and insulation are held tight in between aluminium parts and squeezed for quick and uniform heating.",
              "Heater can withstand much higher degree of mechanical shock and vibration. Elevated body provides for easy passage of heat directly to air, without heating panel body.",
              "A Perforated cover made of Powder coated M.S. sheet is provided for safety."
            ],
            tests: [],
            intended: "Intended Use",
            uses: ["Prevention of condensation, corrosion","Leakage currents in L.T. & H.T. Switchgear panel boards","enclosures, switch boards","electronic instruments etc.",],
            Installation: "",
            instructions: [],
            remark: "Remark",
            recommendation:
              "It is recommended to use a 'SAIEGO' thermostat to control the heater.",
            otherImages: [
              {
                heading: "Technical Data",
                images: [
                  async () =>
                    (
                      await import(
                        "../assets/ptoductsImg/havydudy-heaters_img/HDG (2).png"
                      )
                    ).default,
                  async () =>
                    (
                      await import(
                        "../assets/ptoductsImg/havydudy-heaters_img/HDG (4).png"
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
                        "../assets/ptoductsImg/havydudy-heaters_img/HDG (3).png"
                      )
                    ).default,
                  async () =>
                    (
                      await import(
                        "../assets/ptoductsImg/havydudy-heaters_img/HDG (5).png"
                      )
                    ).default,
                ],
              },
              // {
              //   heading: "Wiring Diagram",
              //   images: [
                 
                  
              //   ],
              // },
            ],

          },

      // HAZARDOUS AREA THERMOSTAT
      {
        id: "Hazardous-Area-Heater",
        title: "Hazardous Area Heater",
        productImg: async () =>
          (
            await import(
              "../assets/ptoductsImg/Hazardous Area Heater images/img (1).png"
            )
          ).default,
        application: "",
        models: [
          " SCREX020T5 150W/100W ",
          "SCREX020T4 |50W/100W/150W/200W",
          " SCREX020T3 50W/100W/150W/200W/250W",
        ],
        featuresH: "Features",
        features: [
          "For use in Hazardous Area",
          "Large convection surface",
          "Din Rail & Screw mounting Ready to use with Strain relief",
          "Maintenance Free",
        ],
        description:
          "Compact convection heater prevents condensation, temperature fluctuations, and frost in hazardous areas.",
        workingH: "Working Principle & Features",
        workingDetails: [
          "Compact convection heater is for use in hazardous areas for prevention of formation of condensation, temperature fluctuations, and for protection against frost in control and switch cabinets, as well as in measuring equipment.",
        ],
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
                    "../assets/ptoductsImg/Hazardous Area Heater images/img (4).png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/Hazardous Area Heater images/img (6).png"
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
                    "../assets/ptoductsImg/Hazardous Area Heater images/img (2).png"
                  )
                ).default,
            ],
          },
          {
            heading: "Pannel Fixing Details",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/Hazardous Area Heater images/img (3).png"
                  )
                ).default,
              
              
            ],
          },
          {
            heading: "Aslo Avelable",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/Hazardous Area Heater images/img (5).png"
                  )
                ).default,
            ],
          },
        ],

      },
     
      //fan heaters data
      {
        id: "Space-Saving-Fan-Heaters",
        title: "SPACE-SAVING FAN HEATERS ",
        productImg: async () =>
          (
            await import(
              "../assets/ptoductsImg/fanheatersimags/fanheaters (1).png"
            )
          ).default,
        application: "with COVER FOR CONTINUOUS USE ",
        models: ["HV 031/HVL 031 100W-400W "],
        featuresH: "Features",
        features: [
          "Compact",
          "Flat Design",
          "High Air throw-Flow",
          "Temperature safety cut-out",
          "DIN rail mounted",
        ],
        description:
          "Compact high-performance fan heater prevents condensation and ensures even air distribution in enclosures. Available with or without a fan.",
        workingH: "Working Principle & Features",
        workingDetails: [
          "The compact high-performance fan heater prevents formation of condensation in control or systems and provides an evenly distributed interior air temperature in enclosures.",
          "This fan heater is available without fan (SHV 031) as well as with fan (SHVL 031).",
        ],
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
                    "../assets/ptoductsImg/fanheatersimags/fanheaters (4).png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/fanheatersimags/fanheaters (6).png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/fanheatersimags/fanheaters (7).png"
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
                    "../assets/ptoductsImg/fanheatersimags/fanheaters (2).png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/fanheatersimags/fanheaters (3).png"
                  )
                ).default,
            ],
          },
          {
            heading: "Wiring Diagram",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/fanheatersimags/fanheaters (5).png"
                  )
                ).default,
             
            ],
          },
        ],

      },

      // space heaters data
      {
        id: "SpaceHeaters",
        title: "SPACE HEATERS (Perforated Body)",
        productImg: async () =>
          (
            await import(
              "../assets/ptoductsImg/space_Heaters_Img/spaceheaters.jpeg"
            )
          ).default,
        application: "For Panel Boards & Switchgear Industries",
        models: ["SH", "SHISS", "SHIL"],
        featuresH: "Features",
        features: [
          "Perforated cover for protection",
          "Quick and uniform heating",
          "Withstands mechanical shock and vibration",
          "Very good insulation resistance",
        ],
        description:
          "'GIRISHEGO' Range of Space Heaters are ideal for prevention of condensation, corrosion & Leakage currents in LT. & H.T. Switchgear panel boards/ electronic instruments & panels etc.",
        workingH: "Working Principle & Features",
        workingDetails: [
          "Specially developed design with a stainless steel sheathed cartridge heating element in a perforated sheet metal enclosure.",
          "Black powder coated finish for rapid heat dissipation.",
          "2 x 2.5 mm porcelain terminal block for electrical connection.",
          "Mounting holes provided on one side.",
        ],
        tests: [
          "High Voltage Test at 2kV/1Min",
          "Insulation Resistance > 10 Mega Ohms",
          "Power Rating within ±5%",
        ],
        intended: "Intended Use",
        uses: [
          "Prevention of condensation",
          "corrosion",
          "of leakage currents in LT & HT Switchgear panel boards or electronic instruments & panels.",
        ],
        Installation: "Installation",
        instructions: [
          "Two holes (217mm) provided for mounting on one side of the heater.",
          "Can be installed vertically or horizontally, though horizontal is preferred.",
          "Distance from panel surface: At least 10mm.",
          "Distance from plastic parts: At least 50mm.",
          "Connection wire must be on the side or below to avoid warming up.",
        ],
        remark: "Remark",
        recommendation: "Use a 'GIRISHEGO' thermostat to control the heater.",
        // otherImages: [table1, alsoavalabel, diagram, table2],
        otherImages: [
          {
            heading: "Technical Data sheet ",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/space_Heaters_Img/alsoAvalableTable.png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/space_Heaters_Img/Tech_table.png"
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
                    "../assets/ptoductsImg/space_Heaters_Img/digram.png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/space_Heaters_Img/asloavalibaelProducrs.png"
                  )
                ).default,
            ],
          },
        ],
      },
      // box heaters data
      {
        id: "BOX-SPACE-HEATERS",
        title: "BOX TYPE SPACE HEATERS",
        productImg: async () =>
          (
            await import(
              "../assets/ptoductsImg/boxtypeheatersimg/boxtypespace.jpeg"
            )
          ).default,
        application: "For Panel Boards & Switchgear Industries",
        models: ["BOX"],
        featuresH: "Features",
        features: [
          "Bigger surface area for heat dissipation in Aluminum enclosure",
          "Quick and uniform heating",
          "Withstands mechanical shock and vibration",
          "Very good insulation resistance",
        ],
        description:
          "'GIRISHEGO' Range of Space Heaters are ideal for prevention of condensation, corrosion. Leakage currents in LT. & H.T. Switchgear panel boards/ electronic instruments & panels etc.",
        workingH: "Working Principle & Features",
        workingDetails: [
          "Specially developed design with a stainless steel sheathed cartridge heating element in a perforated sheet metal enclosure.",
          "Black powder coated finish for rapid heat dissipation.",
          "2 x 2.5 mm porcelain terminal block for electrical connection.",
          "Mounting holes provided on one side.",
        ],
        tests: [
          "High Voltage Test at 2kV/1Min",
          "Insulation Resistance > 10 Mega Ohms",
          "Power Rating within ±5%",
        ],
        intended: "Intended Use",
        uses: [
          "Prevention of condensation",
          "corrosion",
          "of leakage currents in LT & HT Switchgear panel boards or electronic instruments & panels.",
        ],
        Installation: "Installation",
        instructions: [
          "Two holes (217mm) provided for mounting on one side of the heater.",
          "Can be installed vertically or horizontally, though horizontal is preferred.",
          "Distance from panel surface: At least 10mm.",
          "Distance from plastic parts: At least 50mm.",
          "Connection wire must be on the side or below to avoid warming up.",
        ],
        remark: "Remark",
        recommendation: "Use a 'GIRISHEGO' thermostat to control the heater.",
        otherImages: [
          {
            heading: "Technical Data sheet ",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/boxtypeheatersimg/imgs (1).png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/boxtypeheatersimg/imgs (3).png"
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
                    "../assets/ptoductsImg/boxtypeheatersimg/imgs (4).png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/boxtypeheatersimg/imgs (2).png"
                  )
                ).default,
            ],
          },

         
        ],
      },

      // small semi conductor heater
      {
        id: "SMALL-SEMICONDUCTOR-HEATER",
        title: "SMALL SEMICONDUCTOR HEATER",
        productImg: async () =>
          (
            await import(
              "../assets/ptoductsImg/SMALL SEMICONDUCTOR HEATER/img (2).png"
            )
          ).default,
        application: "",
        models: ["SRC-016 8W, 10W, 13W"],
        featuresH: "Features",
        features: [
          "Temperature Limiting",
          "Vide Woltage Range",
          "Dynamic Heating",
          "Energy Saving & Compact",
        ],
        description:
          "Small heaters prevent condensation and maintain minimum operating temperature in compact enclosures like camera housings.",
        workingH: "Working Principle & Features",
        workingDetails: [
          "These small heaters are designed to ensure prevention of condensation along with minimum operating temperature in small enclosures like camera enclosures, etc.",
        ],
        tests: [],
        intended: "",
        uses: [],
        Installation: "",
        instructions: [],
        remark: "",
        recommendation: "",
        otherImages: [
          {
            heading: "Technical Data sheet ",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SMALL SEMICONDUCTOR HEATER/img (1).png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SMALL SEMICONDUCTOR HEATER/img (3).png"
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
                    "../assets/ptoductsImg/SMALL SEMICONDUCTOR HEATER/img (4).png"
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
                    "../assets/ptoductsImg/SMALL SEMICONDUCTOR HEATER/img (5).png"
                  )
                ).default,

            ],
          },
        ],
      },


    ]
  },
  {
    id: "Control",
    name: "Control",
    subProduct: [
               
                // ENCLOSURE - THERMOSTAT
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
                //mechanical hgydrostat data
                {
                  id: "Mechanical-HYGROSTAT",
                  title: "mechanical hygrostat",
                  productImg: async () => (await import("../assets/ptoductsImg/machinacal-hygrostat-images/MH (1).png")).default,

                  application: "",
                  models: ["ZSR-011"],
                  featuresH: "Also Available",
                  features: [
                    "Adjustable relative humidity range",
                    "High switching capacity",
                    "DIN rail mountable",
                  ],
                  description:
                    "MSFR-012 regulates enclosure humidity by activating heaters at set levels to prevent condensation and corrosion. Can also control cooling fans and warning devices.",
                  workingH: "Principle of Operation",
                  workingDetails: [
                    "The MSFR-012 is designed to control the relative air humidity inside of enclosures. When connected to an enclosure heater (de-humidifier), it will turn the heater on at the set humidity level in order to raise the dew point.",
                    "This helps prevent damage and malfunction of electronic components caused by condensation and corrosion. The MSFR-012 can also be used to control cooling fans, warning lights, or other devices.",
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
                              "../assets/ptoductsImg/machinacal-hygrostat-images/MH (2).png"
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
                              "../assets/ptoductsImg/machinacal-hygrostat-images/MH (3).png"
                            )
                          ).default,
                      ],
                    },
                  ],

                },

                // ELECTRONIC HYGROSTAT data
                {
                  id: "ELECTRONIC-HYGROSTAT",
                  title: "Electronic Hygrostat",
                  productImg: async () =>
                    (
                      await import(
                        "../assets/ptoductsImg/ELECTRONIC-HYGROSTAT-imags/imgs (1).png"
                      )
                    ).default,
                  application: "",
                  models: ["ESFR-012"],
                  featuresH: "features",
                  features: [
                    "Adjustable and pre-set relative humidity",
                    "LED status indicator",
                    "High switching capacity",
                    "Clip Fixing",
                    "Temperature-compensated",
                  ],
                  description:
                    "ESFR-012 electronic hygrostat controls humidity in enclosures by activating heaters to prevent condensation. Features an LED indicator for operation status.",
                  workingH: "Principle of Operation",
                  workingDetails: [
                    "The ESFR-012 electronic hygrostat senses the relative humidity in an enclosure with electric/electronic components and turns on a heater at the set point, helping prevent the formation of condensation in the enclosure.",
                    "The LED integrated in the adjustment knob is lit when the connected heater is in operation.",
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
                              "../assets/ptoductsImg/ELECTRONIC-HYGROSTAT-imags/imgs (2).png"
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
                              "../assets/ptoductsImg/ELECTRONIC-HYGROSTAT-imags/imgs (3).png"
                            )
                          ).default,
                      ],
                    },
                    {
                      heading: "Wiring Diagram",
                      images: [
                        async () =>
                          (
                            await import(
                              "../assets/ptoductsImg/ELECTRONIC-HYGROSTAT-imags/imgs (4).png"
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
                              "../assets/ptoductsImg/ELECTRONIC-HYGROSTAT-imags/imgs (5).png"
                            )
                          ).default,
                      ],
                    },
                  ],

                },

                //ELECTRONIC HYGROTHERM data
                {
                  id: "ELECTRONIC-HYGROTHERM",
                  title: "Electronic Hygrotherm",
                  productImg: async () =>
                    (
                      await import(
                        "../assets/ptoductsImg/ELECTRONIC HYGROTHERM IMAGES/eL-HRM (5).png"
                      )
                    ).default,
                  application: "ELECTRONIC HYGROSTAT WITH THERMOSTAT ",
                  models: ["ESTF-012"],
                  featuresH: "features",
                  features: [
                    "Adjustable and pre-set Temperature & relative humidity",
                    "LED status indicator",
                    "High switching capacity",
                    "DIN rail mounted",
                    "Temperature-compensated",
                  ],
                  description:
                    "Electronic sensor controls heater and fan operation based on ambient temperature and humidity.",
                  workingH: "Principle of Operation",
                  workingDetails: [
                    "Electronic temperature and humidity sensor can control the on & off of the heater and fan according to ambient temperature and relative humidity.",
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
                              "../assets/ptoductsImg/ELECTRONIC HYGROTHERM IMAGES/eL-HRM (1).png"
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
                              "../assets/ptoductsImg/ELECTRONIC HYGROTHERM IMAGES/eL-HRM (2).png"
                            )
                          ).default,
                      ],
                    },
                    {
                      heading: "Wiring Diagram",
                      images: [
                        async () =>
                          (
                            await import(
                              "../assets/ptoductsImg/ELECTRONIC HYGROTHERM IMAGES/eL-HRM (3).png"
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
                              "../assets/ptoductsImg/ELECTRONIC HYGROTHERM IMAGES/eL-HRM (4).png"
                            )
                          ).default,
                      ],
                    },
                  ],

                },

                // ELECTRONIC DC THERMOSTAT data
                {
                  id: "ELECTRONIC-DC-THERMOSTAT",
                  title: "Electronic DC Thermostat",
                  productImg: async () =>
                    (
                      await import(
                        "../assets/ptoductsImg/ELECTRONIC-DC-THERMOSTATIMAGES/IMG (1).png"
                      )
                    ).default,

                  application: "",
                  models: ["EST-01124V DC"],
                  featuresH: "features",
                  features: [
                    "High DC Breaking capacity",
                    "Low Hysteresis",
                    "Adjustable Temperature ",
                    "Changeover contact",
                    "DIN rail mounted",
                  ],
                  description:
                    "ET 011 electronic thermostat regulates DC 24V equipment with low hysteresis, controlling heating, cooling, and signal devices through a change-over contact.",
                  workingH: "Principle of Operation",
                  workingDetails: [
                    "Electronic thermostat for regulating high-performance DC 24V equipment. Heating or cooling appliances as well as signal devices can be switched via the potential-free change-over contact.",
                    "In comparison to mechanical thermostats, the ET 011 has a low hysteresis making the switching point more accurate.",
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
                              "../assets/ptoductsImg/ELECTRONIC-DC-THERMOSTATIMAGES/IMG (2).png"
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
                              "../assets/ptoductsImg/ELECTRONIC-DC-THERMOSTATIMAGES/IMG (3).png"
                            )
                          ).default,
                      ],
                    },
                    {
                      heading: "Wiring Diagram",
                      images: [
                        async () =>
                          (
                            await import(
                              "../assets/ptoductsImg/ELECTRONIC-DC-THERMOSTATIMAGES/IMG (4).png"
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
                              "../assets/ptoductsImg/ELECTRONIC-DC-THERMOSTATIMAGES/IMG (5).png"
                            )
                          ).default,
                      ],
                    },
                  ],

                },
                // ELECTRONIC THERMOSTAT
                {
                  id: "ELECTRONIC-THERMOSTAT",
                  title: "Electronic Thermostat",
                  productImg: async () =>
                    (
                      await import(
                        "../assets/ptoductsImg/ELECTRONIC-THERMOSTATIMAGES/EL-DC-TH (5).png"
                      )
                    ).default,
                  application: "",
                  models: ["ESTR-011"],
                  featuresH: "features",
                  features: [
                    "Adjustable Temperature",
                    "LED status indicator",
                    "High switching capacity",
                    "DIN rail mounted",
                  ],
                  description:
                    "Electronic thermostats control heater operation based on ambient temperature.",
                  workingH: "Principle of Operation",
                  workingDetails: [
                    "Electronic Thermostats can control the on & off of the heater according to the ambient temperature.",
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
                              "../assets/ptoductsImg/ELECTRONIC-THERMOSTATIMAGES/EL-DC-TH (1).png"
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
                              "../assets/ptoductsImg/ELECTRONIC-THERMOSTATIMAGES/EL-DC-TH (2).png"
                            )
                          ).default,
                      ],
                    },
                    {
                      heading: "Wiring Diagram",
                      images: [
                        async () =>
                          (
                            await import(
                              "../assets/ptoductsImg/ELECTRONIC-THERMOSTATIMAGES/EL-DC-TH (3).png"
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
                              "../assets/ptoductsImg/ELECTRONIC-THERMOSTATIMAGES/EL-DC-TH (4).png"
                            )
                          ).default,
                      ],
                    },
                  ],

                },

                // TEMPER-PROOF MECHANICAL THERMOSTAT
                {
                  id: "TPM-THERMOSTAT",
                  title: "TEMPER-PROOF MECHANICAL THERMOSTAT",
                  productImg: async () =>
                    (
                      await import(
                        "../assets/ptoductsImg/TEMPER-PROOF MECHANICAL THERMOSTAT IMAGES/IMGS (3).png"
                      )
                    ).default,
                  application: "",
                  models: ["SFTO-011", "SFTS-011"],
                  featuresH: "features",
                  features: ["Small Size", "Default Temp. Setting ", "Easy to install"],
                  description:
                    "Tamperproof thermostats regulate heaters or signal devices based on temperature changes, with pre-set contact breakers for SFTO-011 and contact makers for SFTS-011.",
                  workingH: "Tamperproof (Pre-set) Thermostat SFTO-011",
                  workingDetails: [
                    "Contact breaker/NC (red casing) for regulating heaters or for switching signal devices when temperature has fallen below the minimum value. The contact opens when temperature is rising.",
                  ],
                  construtionH: "Tamperproof (Pre-set) Thermostat SFTS-011",
                  constrution: [
                    "Contact maker / NO (blue casing) for regulating filter fans, heat exchangers, cooling devices Or switching signal devices when temperature limit has been exceeded. The contact closes when temperaure is rising.",
                  ],
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
                              "../assets/ptoductsImg/TEMPER-PROOF MECHANICAL THERMOSTAT IMAGES/IMGS (2).png"
                            )
                          ).default,
                      ],
                    },
                    {
                      heading: "Product View",
                      images: [
                        async () =>
                          (
                            await import(
                              "../assets/ptoductsImg/TEMPER-PROOF MECHANICAL THERMOSTAT IMAGES/IMGS (1).png"
                            )
                          ).default,
                      ],
                    },
                    {
                      heading: "Wiring Diagram",
                      images: [
                        async () =>
                          (
                            await import(
                              "../assets/ptoductsImg/TEMPER-PROOF MECHANICAL THERMOSTAT IMAGES/IMGS (4).png"
                            )
                          ).default,
                        async () =>
                          (
                            await import(
                              "../assets/ptoductsImg/TEMPER-PROOF MECHANICAL THERMOSTAT IMAGES/IMGS (5).png"
                            )
                          ).default,
                        async () =>
                          (
                            await import(
                              "../assets/ptoductsImg/TEMPER-PROOF MECHANICAL THERMOSTAT IMAGES/IMGS (6).png"
                            )
                          ).default,
                      ],
                    },
                  ],

                },
       //TEMPER-PROOF DUAL NO-NC THERMOSTAT DATA
                {
                  id: "T-P -DUAL_NO-NC_THERMOSTAT",
                  title: "TEMPER-PROOF DUAL NO-NC THERMOSTAT ",
                  productImg: async () =>
                    (
                      await import(
                        "../assets/ptoductsImg/TEMPER-PROOF DUAL NO-NC THERMOSTAT IMAGES/IMGS (3).png"
                      )
                    ).default,
                  application: "(PRESET)",
                  models: ["SFTD-011"],
                  featuresH: "features",
                  features: [
                    "NOC & NCC in one casing",
                    "Default Temp. Setting",
                    "High switching capacity",
                    "Clip Fixing",
                  ],
                  description:
                    "Two thermostats in one casing for independent control of heaters and cooling equipment with temperature offset, featuring tamper-proof pre-set contacts.",
                  workingH: "Two thermostats in one casing:",
                  workingDetails: [
                    "Tamper-proof (pre-set) thermostat/contact breaker (NC) for regulating heaters or switching signal devices when the temperature falls below the minimum value. The contact opens when the temperature rises.",
                    "Tamper-proof (pre-set) thermostat/contact maker (NO) for regulating filter fans, heat exchangers, or switching signal devices when the temperature limit is exceeded. The contact closes when the temperature rises.",
                    "Heaters and cooling equipment can be switched independently from each other with a temperature offset, unlike usual change-over contacts.",
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
                              "../assets/ptoductsImg/TEMPER-PROOF DUAL NO-NC THERMOSTAT IMAGES/IMGS (2).png"
                            )
                          ).default,
                      ],
                    },
                    {
                      heading: "Product View",
                      images: [
                        async () =>
                          (
                            await import(
                              "../assets/ptoductsImg/TEMPER-PROOF DUAL NO-NC THERMOSTAT IMAGES/IMGS (1).png"
                            )
                          ).default,
                      ],
                    },
                    {
                      heading: "Wiring Diagram",
                      images: [
                        async () =>
                          (
                            await import(
                              "../assets/ptoductsImg/TEMPER-PROOF DUAL NO-NC THERMOSTAT IMAGES/IMGS (4).png"
                            )
                          ).default,
                        async () =>
                          (
                            await import(
                              "../assets/ptoductsImg/TEMPER-PROOF DUAL NO-NC THERMOSTAT IMAGES/IMGS (5).png"
                            )
                          ).default,
                        async () =>
                          (
                            await import(
                              "../assets/ptoductsImg/TEMPER-PROOF DUAL NO-NC THERMOSTAT IMAGES/IMGS (6).png"
                            )
                          ).default,
                      ],
                    },
                  ],

                },
                
      //Hazardous Area Heater
     
      {
        id: "HAZARDOUS-AREA-THERMOSTAT",
        title: "Hazardous Area Thermostat",
        productImg: async () =>
          (
            await import(
              "../assets/ptoductsImg/HAZARDOUS AREA THERMOSTAT-IMAGES/IMAGES (1).png"
            )
          ).default,
        application: "",
        models: ["SREX-01115°C 25°C"],
        featuresH: "features",
        features: [
          "Compact Desogn",
          "Set Temperature",
          "High switching capacity",
          "Clip mounted",
        ],
        description:
          "Compact mechanical thermostat for regulating and monitoring heaters in hazardous areas. Features high accuracy, long lifespan, and direct control of heaters.",
        workingH: "Principle of Operation",
        workingDetails: [
          "Compact small mechanical thermostat for temperature regulation and monitoring of heaters, for example in transmitter cabinets, control panels, and measuring equipment which are deployed in areas with explosion hazard.",
          "The special switch construction enables high response accuracy, small switch temperature difference, and a very long service life.",
          "High switching performance allows direct control of the heaters.",
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
                    "../assets/ptoductsImg/HAZARDOUS AREA THERMOSTAT-IMAGES/IMAGES (2).png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/HAZARDOUS AREA THERMOSTAT-IMAGES/IMAGES (6).png"
                  )
                ).default,
            ],
          },
          {
            heading: "Diagram",
            images: [
              // async () =>
              //   (
              //     await import(
              //       "../assets/ptoductsImg/HAZARDOUS AREA THERMOSTAT-IMAGES/IMAGES (2).png"
              //     )
              //   ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/HAZARDOUS AREA THERMOSTAT-IMAGES/IMAGES (3).png"
                  )
                ).default,
            ],
          },
          {
            heading: "Wiring Diagram",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/HAZARDOUS AREA THERMOSTAT-IMAGES/IMAGES (4).png"
                  )
                ).default,
              
            ],
          },
          {
            heading: " ",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/HAZARDOUS AREA THERMOSTAT-IMAGES/IMAGES (5).png"
                  )
                ).default,

            ],
          },
        ],

      },

      // SUNSIm
      {
        id: "SUNSIM",
        title: "SUNSIM",
        productImg: async () =>
          (
            await import(
              "../assets/ptoductsImg/SUNSIM/img (3).png"
            )
          ).default,
        application: "ENERGY REGULATORS",
        models: ["(HEAVY DUTY MODEL)"],
        featuresH: "features",
        features: [
          "Compact design",
          "All Brass Terminals",
          "Extra Heavy contacts",
        ],
        description: "‘Saiego’ range of Energy regulators are designed to control the heat from zero to full by simply turning the knob.These are used in OTG., drying cabinets, wash boilers, boiling rings, hot plates, grills, boilers, Thermoplastic / Thermosetting moulding machines, oil baths, switchgear & panel board and other domestic, commercial & industrial heating equipments.",
        workingH: "Principle & Features",
        workingDetails: [
          ": These have snap action switch which opens and closes the load circuit at precise time intervals.",
          " The proportion of time ‘ON’ to ‘OFF’ can be varied regulating the average power input and assuring a smooth output of heat.",
        ],
        construtionH: "Construction",
        constrution: [
          "There are ten arbitrary divisions from zero to full on the scale marked on a black dial with a control knob.",
          " The entire switch mechanism is mounted on a heat resistant thermosetting / thermoplastic base in ‘SUNSIM’ & ‘SUNTEK’ ‘ and is protected with a cover which withstands temperature conditions where it is designed to function.",
          "All internal parts are made heavy duty for long trouble free life.Variation of ambient temperature of upto 85°C and compensation for voltage fluctuations of upto 15% are both automatic.",
          "Within these limits the rate of heat output will not be affected once the switch is set.A thread bush with registering lugs is provided for fixing.It can be fitted in any convenient position on the control panel as there is no thermal contact"
        ],
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
                    "../assets/ptoductsImg/SUNSIM/img (4).png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SUNSIM/img (5).png"
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
                    "../assets/ptoductsImg/SUNSIM/img (6).png"
                  )
                ).default,
            ],
          },
          {
            heading: "Wiring Diagram",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SUNSIM/img (7).png"
                  )
                ).default,
             
            ],
          },
          {
            heading: "Pannel Fixing Details",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SUNSIM/img (1).png"
                  )
                ).default,
            ],
          },
          {
            heading: "Also Available",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SUNSIM/img (2).png"
                  )
                ).default,
            ],
          },
        ],

      },

      // SUNTEK
      {
        id: "SUNTEK",
        title: "Suntek",
        productImg: async () =>
          (
            await import(
              "../assets/ptoductsImg/SUNTEK/img (3).png"
            )
          ).default,
        application: "ENERGY REGULATORS",
        models: ["(HEAVY DUTY MODEL)"],
        featuresH: "features",
        features: [
          "Compact design",
          "All Brass Terminals",
          "Extra Heavy contacts",
        ],
        description: "‘Saiego’ range of Energy regulators are designed to control the heat from zero to full by simply turning the knob.These are used in OTG., drying cabinets, wash boilers, boiling rings, hot plates, grills, boilers, Thermoplastic / Thermosetting moulding machines, oil baths, switchgear & panel board and other domestic, commercial & industrial heating equipments.",
        workingH: "Principle & Features",
        workingDetails: [
          "These have snap action switch which opens and closes the load circuit at precise time intervals.",
          "The proportion of time ‘ON’ to ‘OFF’ can be varied regulating the average power input and assuring a smooth output of heat.",
        ],
        construtionH: "Construction",
        constrution: [
          "There are ten arbitrary divisions from zero to full on the scale marked on a black dial with a control knob.",
          " The entire switch mechanism is mounted on a heat resistant thermosetting / thermoplastic base in ‘SUNSIM’ & ‘SUNTEK’ ‘ and is protected with a cover which withstands temperature conditions where it is designed to function.",
          "All internal parts are made heavy duty for long trouble free life.Variation of ambient temperature of upto 85°C and compensation for voltage fluctuations of upto 15% are both automatic.",
          "Within these limits the rate of heat output will not be affected once the switch is set.A thread bush with registering lugs is provided for fixing.It can be fitted in any convenient position on the control panel as there is no thermal contact"
        ],
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
                    "../assets/ptoductsImg/SUNTEK/img (4).png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SUNTEK/img (5).png"
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
                    "../assets/ptoductsImg/SUNTEK/img (6).png"
                  )
                ).default,
              
            ],
          },
          {
            heading: "Wiring Diagram",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SUNTEK/img (7).png"
                  )
                ).default,
              
            ],
          },
          {
            heading: "Pannel Fixing Details",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SUNTEK/img (1).png"
                  )
                ).default,
            ],
          },
          {
            heading: "Also Available",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SUNTEK/img (2).png"
                  )
                ).default,
            ],
          },
        ],

      },
      // SUMO
      {
        id: "SUMO",
        title: "Sumo",
        productImg: async () =>
          (
            await import(
              "../assets/ptoductsImg/SUMO/img (3).png"
            )
          ).default,
        application: "ENERGY REGULATORS",
        models: ["(HEAVY DUTY MODEL)"],
        featuresH: "features",
        features: [
          "Robust design",
          "Porcelain Base",
          "Heavy duty contacts",
          "Large dial & knob",
        ],
        description: "‘Saiego’ range of Energy regulators are designed to control the heat from zero to full by simply turning the knob.These are used in OTG., drying cabinets, wash boilers, boiling rings, hot plates, grills, boilers, Thermoplastic / Thermosetting moulding machines, oil baths, switchgear & panel board and other domestic, commercial & industrial heating equipments.",
        workingH: "Principle & Features",
        workingDetails: [
          "These have snap action switch which opens and closes the load circuit at precise time intervals.",
          " The proportion of time ‘ON’ to ‘OFF’ can be varied regulating the average power input and assuring a smooth output of heat.",
        ],
        construtionH: "Construction",
        constrution: [
          "There are ten arbitrary divisions from zero to full on the scale marked on a black dial with a control knob.",
          "The entire switch mechanism is mounted on a heavy duty porcelain base and is protected with a cover which withstands temperature conditions where it is designed to function.",
          "All internal parts are made heavy duty for long trouble free life.",
          "Variation of ambient temperature of upto 85°C and compensation for voltage fluctuations of upto 15% are both automatic.",
          "Within these limits the rate of heat output will not be affected once the switch is set.A thread bush with registering lugs is provided for fixing.",
          "It can be fitted in any convenient position on the control panel as there is no thermal contact",
        ],
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
                    "../assets/ptoductsImg/SUMO/img (4).png" 
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
                    "../assets/ptoductsImg/SUMO/img (5).png"
                  )
                ).default,
              
            ],
          },
          {
            heading: "Wiring Diagram",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SUMO/img (2).png"
                  )
                ).default,
             
            ],
          },
          {
            heading: "Pannel Fixing Details",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SUMO/img (1).png"
                  )
                ).default,
            ],
          },
          {
            heading: "Also Available",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SUMO/img (6).png"
                  )
                ).default,
            ],
          },
        ],

      },
// COMPAQ
      {
        id: "COMPAQ",
        title: "Compaq",
        productImg: async () =>
          (
            await import(
              "../assets/ptoductsImg/COMPAQ/img (5).png"
            )
          ).default,
        application: "CAPILLARY THERMOSTAT",
        models: ["(As per IS:4165)"],
        featuresH: "features",
        features: [
          "Compact Design",
          "Wide variety of temperature ranges",
          "Precise temperature control",
          "fast reaction time",
        ],
        description: "COMPAQ model Capillary Thermostats are designed for accurate and reliable temperature control for Domestic appliances, Commercial and Industrial Heating Equipments.This instrument keeps constant within the differential the temperature of any fluid or solids heated by electricity, gas or oil.",
        workingH: "Principle & Features",
        workingDetails: [
          "A rise in temperature causes the expansion of liquid within the bulb and capillary.",
          "The liquid acts on a Phial assembly within the housing to open and close electrical contacts.i.e.A single pole single throw, normally closed circuit breaks(opens) on rise of temperature",
        ],
        construtionH: "Construction",
        constrution: [
          "The assembly of these Thermostats consist of copper / SS capillary tube, sensing bulb & Diaphragm (Phial) filled with Liquid,fixed Thermosetting material housing and DMC(Thermosetting) switch base.",
"A 'ABS' plastic Knob & a Dial with clear scale markings calibrated in °C is provided to set the desired temperature",
        ],
        tests: [" Copper capillary in any length upto 5 Mtrs.",
           "SS Capillary & Bulb"
          ],
        intended: "Intended",
        uses: ["It is used in Washing machines, Coffee vending machines, Dishwashers, fryers.",
          "Electric cooker, Hot water appliances, Ind.Boilers, Grills, Ovens, Deep fryer, cooking range, storage heater, switchgear & panel boards, oil Burners, sterlizer Roaster, Dryers, oil bath, water bath incubation other domestic and industrial equipments, plastic moulding machine, kitchen equipments & Laboratory instrument etc."],
        Installation: "Insatallation",
        instructions: ["On panel with two M4 size screws at centre distance of 28mm"],
        remark: "",
        recommendation: "",
        otherImages: [
          {
            heading: "Technical Data",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/COMPAQ/img (6).png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/COMPAQ/img (7).png"
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
                    "../assets/ptoductsImg/COMPAQ/img (8).png"
                  )
                ).default,
             
            ],
          },
          {
            heading: "Wiring Diagram",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/COMPAQ/img (1).png"
                  )
                ).default,
              
            ],
          },
          {
            heading: "Pannel Fixing Details",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/COMPAQ/img (2).png"
                  )
                ).default,
            ],
          },
          {
            heading: "ROTATING ANGLE OF KNOB",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/COMPAQ/img (3).png"
                  )
                ).default,

            ],
          },
          {
            heading: "MOUNTING DIMENSIONS ON PANEL",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/COMPAQ/img (4).png"
                  )
                ).default,
            ],
          },
        ],

      },
      // SUN
      {
        id: "SUN",
        title: "SUN",
        productImg: async () =>
          (
            await import(
              "../assets/ptoductsImg/SUN/img (1).png"
            )
          ).default,
        application: "CAPILLARY THERMOSTAT",
        models: ["(As per IS:4165)"],
        featuresH: "features",
        features: [
          "Compact Design with metallic housing",
          "Wide variety of temperature ranges",
          "Precise temperature control",
          "fast reaction time",
        ],
        description: "SUN model Capillary Thermostats are designed for accurate and reliable temperature control for Domestic appliances, Commercial and Industrial Heating Equipments. This instrument keeps constant within the differential the temperature of any fluid or solids heated by electricity, gas or oil.",
        workingH: "Principle & Features",
        workingDetails: [
          "A rise in temperature causes the expansion of liquid within the bulb and capillary. ",
          "The liquid acts on a Phial assembly within the housing to open and close electrical contacts.i.e.A single pole single throw, normally closed circuit breaks(opens) on rise of temperature",
        ],
        construtionH: "Construction",
        constrution: [
          "The assembly of these Thermostats consist of copper / SS capillary tube, sensing bulb & Diaphragm (Phial) filled with Liquid,fixed plated M.S. housing and Thermoset switch base.",
          "A 'ABS' plastic Knob & a Dial with clear scale markings calibrated in °C is provided to set the desired temperature",
        ],
        tests: [" Copper capillary in any length upto 5 Mtrs.",
        ],
        intended: "Intended",
        uses: ["It is used in Washing machines, Coffee vending machines, Dishwashers, fryers.",
          "Electric cooker, Hot water appliances, Ind.",
         " Boilers, Grills, Ovens, Deep fryer, cooking range, storage heater, switchgear & panel boards, oil Burners, sterlizer Roaster, Dryers, oil bath, water bath incubation other domestic and industrial equipments, plastic moulding machine, kitchen equipments & Laboratory instrument etc."],
        Installation: "Insatallation",
        instructions: ["On panel with two M4 size screws at centre distance of 28mm."],
        remark: "",
        recommendation: "",
        otherImages: [
          {
            heading: "Technical Data",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SUN/img (2).png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SUN/img (3).png"
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
                    "../assets/ptoductsImg/SUN/img (4).png"
                  )
                ).default,

            ],
          },
          {
            heading: "Wiring Diagram",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SUN/img (5).png"
                  )
                ).default,

            ],
          },
          {
            heading: "Pannel Fixing Details",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SUN/img (6).png"
                  )
                ).default,
            ],
          },
          {
            heading: "ROTATING ANGLE OF KNOB",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SUN/img (7).png"
                  )
                ).default,

            ],
          },
          {
            heading: "MOUNTING DIMENSIONS ON PANEL",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SUN/img (8).png"
                  )
                ).default,
            ],
          },
        ],

      },

      // SUPER deluxe
      {
        id: "Super-Deluxe",
        title: " Super Deluxe",
        productImg: async () =>
          (
            await import(
              "../assets/ptoductsImg/SUPER-DULEX/img (4).png"
            )
          ).default,
        application: "CAPILLARY THERMOSTAT",
        models: ["(As per IS:4165)"],
        featuresH: "features",
        features: [
          "Compact Design",
          "Wide variety of temperature ranges",
          "Precise temperature control",
          "fast reaction time",
        ],
        description: "SDLX model Capillary Thermostats are designed for accurate and reliable temperature control for Domestic appliances, Commercial and Industrial Heating Equipments.This instrument keeps constant within the differential the temperature of any fluid or solids heated by electricity, gas or oil.",
        workingH: "Principle & Features",
        workingDetails: [
          "A rise in temperature causes the expansion of liquid within the bulb and capillary. ",
          "The liquid acts on a Phial assembly within the housing to open and close electrical contacts.",
          "i.e. A single pole single throw, normally closed circuit breaks (opens) on  rise  of temperature. (optional single pole single throw contacts can be provided) ",
        ],
        construtionH: "Construction",
        constrution: [
          "The assembly of these Thermostats consist of copper / SS capillary tube, sensing bulb & Diaphragm (Phial) filled with Liquid,fixed in Thermoset switch base and covered with plated M.S. housingbody.",
          "A 'ABS' plastic Knob with clear scale markings calibrated in °C and metallic / plastic Bezel is provided  to  set  the  desired  temperature.",
        ],
        tests: ["Copper capillary in any length upto 5 Mtrs. ",
          "Normally open contacts (NOC)"
        ],
        intended: "Intended",
        uses: ["It is used in Washing machines, Coffee vending machines, Dishwashers, fryers.",
          "Electric cooker, Hot water appliances, Ind.",
          "Boilers, Grills, Ovens, Deep fryer, cooking range, storage heater, switchgear & panel boards, oil Burners, sterlizer Roaster, Dryers, oil bath, water bath incubation other domestic and industrial equipments, plastic moulding machine, kitchen equipments & Laboratory instrument etc."],
        Installation: "Insatallation",
        instructions: ["On panel with two M4 size screws at centre distance of 30mm."],
        remark: "",
        recommendation: "",
        otherImages: [
          {
            heading: "Technical Data",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SUPER-DULEX/img (5).png"
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
                    "../assets/ptoductsImg/SUPER-DULEX/img (6).png"
                  )
                ).default,

            ],
          },
          {
            heading: "Wiring Diagram",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SUPER-DULEX/img (1).png"
                  )
                ).default,

            ],
          },
          {
            heading: "Pannel Fixing Details",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SUPER-DULEX/img (2).png"
                  )
                ).default,
            ],
          },
          {
            heading: "ROTATING ANGLE OF KNOB",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SUPER-DULEX/img (3).png"
                  )
                ).default,

            ],
          },
          
        ],

      },

      // SAI
      {
        id: "SAI",
        title:"SAI",
        productImg: async () =>
          (
            await import(
              "../assets/ptoductsImg/SAI/img (6).png"
            )
          ).default,
        application: "CAPILLARY THERMOSTAT",
        models: ["(As per IS:4165)"],
        featuresH: "features",
        features: [
          "Classic Design",
          "Wide variety of temperature ranges",
          "Precise temperature control",
          "fast reaction time",
        ],
        description: " SDLX model Capillary Thermostats are designed for accurate and reliable temperature control for Domestic appliances, Commercial and Industrial Heating Equipments.This instrument keeps constant within the differential the temperature of any fluid or solids heated by electricity, gas or oil.",
        workingH: "Principle & Features",
        workingDetails: [
          " A rise in temperature causes the expansion of liquid within the bulb and capillary.", 
          "The liquid acts on a Phial assembly within the housing to open and close electrical contacts.",
          "i.e. A single pole single throw, normally closed circuit breaks (opens) on  rise  of temperature. (optional single pole single throw contacts can be provided) ",
        ],
        construtionH: "Construction",
        constrution: [
          "The assembly of these Thermostats consist of copper / SS capillary tube, sensing bulb & Diaphragm (Phial) filled with Liquid, fixed Thermosetting material body and Thermosetting switch base.",
          "A 'ABS' plastic Knob  with clear scale markings calibrated in °C and metallic  is provided  to  set  the  desired  temperature.",
        ],
        tests: ["Copper capillary in any length upto 5 Mtrs.",
          "Normally open contacts (NOC)"
        ],
        intended: "Intended",
        uses: ["It is used in Washing machines, Coffee vending machines, Dishwashers, fryers.",
          "Electric cooker, Hot water appliances, Ind.",
          "Boilers, Grills, Ovens, Deep fryer, cooking range, storage heater, switchgear & panel boards, oil Burners, sterlizer Roaster, Dryers, oil bath, water bath incubation other domestic and industrial equipments, plastic moulding machine, kitchen equipments & Laboratory instrument etc."],
        Installation: "Insatallation",
        instructions: [" On panel with two M4 size screws at centre distance of 45mm."],
        remark: "",
        recommendation: "",
        otherImages: [
          {
            heading: "Technical Data",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SAI/img (1).png"
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
                    "../assets/ptoductsImg/SAI/img (2).png"
                  )
                ).default,

            ],
          },
          {
            heading: "Wiring Diagram",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SAI/img (3).png"
                  )
                ).default,

            ],
          },
          {
            heading: "Pannel Fixing Details",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SAI/img (4).png"
                  )
                ).default,
            ],
          },
          {
            heading: "ROTATING ANGLE OF KNOB",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/SAI/img (5).png"
                  )
                ).default,

            ],
          },

        ],

      },
      
    ]
  },
  {
    id: "Accessories",
    name: "Accessories",
    subProduct: [
      // PRESSURE-COMPENSATION-DEVICE
      {
        id: "PRESSURE-COMPENSATION-DEVICE",
        title: "Pressure Compensation Device",
        productImg: async () =>
          (
            await import(
              "../assets/ptoductsImg/PRESSURE COMPENSATION DEVICE images/img (1).png"
            )
          ).default,
        application: "",
        models: ["SDA-084/ SDA-284"],
        featuresH: "features",
        features: [
          "High Degree of Protection",
          "Waterproof Membrane (SDA-284)",
          "Easy to Install",
        ],
        description:
          "Pressure compensation plug ensures a protected environment for electrical components by regulating pressure and preventing dust, humidity, and water ingress.",
        workingH: "Principle of Operation",
        workingDetails: [
          "It has become more important to provide a protected enclosure environment for crucial electrical and electronic components.",
          "In a tightly closed enclosure, pressure differentials can occur during extreme temperature variations, such as day/night operation.",
          "When this occurs, the risk of dust and humidity being absorbed into the control panel increases dramatically.",
          "The specially designed pressure compensation plug SDA 084 permits a controlled change in pressure.",
          "It can be installed easily in any enclosure. Because of the plug's high degree of protection (IP45 for SDA-084 & IP66 for SDA-284), the protection type of the enclosure will not be affected.",
          "In SDA-284, even with slight overpressure, a waterproof membrane inside the plug allows humidity to escape while blocking water and dirt from entering the enclosure.",
        ],
        construtionH: "Installation of SDA-084",
        constrution: [
          "SDA-084 Protection type IP45 & IP55 (with Gasket)",
          "Make cut-out ø37 +1 mm in enclosure wall and mount pressure compensation device with nut. Please make sure that the sealing gasket is put in place on the outer side panel of the enclosure.",
          "For optimal pressure compensation we recommend to use two devices on opposite sides towards the top of the enclosure.",
        ],
        tests: [],
        intended: "Installation of SDA-284",
        uses: [
          "SDA-284 Available with gasket Protection type IP66 ",
          "Make cut-out ø40 5 mm in enclosure wall and mount pressure compensation device with nut. Please make sure that the sealing gasket is put in place on the outer side panel of the enclosure.",
          "For optimal pressure compensation we recommend to use two devices on opposite sides towards the top of the enclosure.",
        ],
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
                    "../assets/ptoductsImg/PRESSURE COMPENSATION DEVICE images/img (2).png"
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
                    "../assets/ptoductsImg/PRESSURE COMPENSATION DEVICE images/img (3).png"
                  )
                ).default,
            ],
          },
          {
            heading: "Wiring Diagram",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/PRESSURE COMPENSATION DEVICE images/img (4).png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/PRESSURE COMPENSATION DEVICE images/img (5).png"
                  )
                ).default,
            ],
          },
        ],      },
      // DOCUMENT POCKET FOR ENCLOSURE
      {
        id: "DOCUMENT-POCKET",
        title: "Document Pocket For Enclosure",
        productImg: async () =>
          (
            await import(
              "../assets/ptoductsImg/DOCUMENT POCKET FOR ENCLOSURE/img (1).png"
            )
          ).default,
        application: "",
        models: ["SEI DOC POCKET"],
        featuresH: "features",
        features: [
          "ABS new material according to RoHS",
          "A class quality",
          "Holding for documents on cabinet and enclosure",
          "Easy to install onto cabinet and enclosure",
        ],
        description:
          "This versatile document pocket is ideal for storing important documents in enclosures or server cabinets, offering easy mounting and secure attachment in harsh environments.",
        workingH: "Principle of Operation",
        workingDetails: [
          "This document pocket is suitable for use with any enclosure or server cabinet.",
          "The holder allows easy mounting onto any surface to provide convenient storage for valuable and important documents like wiring diagrams, user guides, certifications, or catalogs that are required alongside the housed item.",
          "Using 4 screw holes, the holder ensures a strong attachment, even in harsh environments. This document pocket is a versatile server cabinet and enclosure accessory for a wide range of applications.",
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
                    "../assets/ptoductsImg/DOCUMENT POCKET FOR ENCLOSURE/img (2).png"
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
                    "../assets/ptoductsImg/DOCUMENT POCKET FOR ENCLOSURE/img (3).png"
                  )
                ).default,
            ],
          },
          {
            heading: "Wiring Diagram",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/DOCUMENT POCKET FOR ENCLOSURE/img (4).png"
                  )
                ).default,
             
            ],
          },
        ],      },
      // LED LIGHT FOR PANELBOARD & SWITCHGEAR
      {
        id: "LED-LIGHT-&-SWITCHGEAR",
        title: "Led Light For PanelBord & Switchgear",
        productImg: async () =>
          (
            await import(
              "../assets/ptoductsImg/LED LIGHT FOR PANELBOARD & SWITCHGEARimgas/img (2).png"
            )
          ).default,
        application: "",
        models: ["SAI LCL LED"],
        featuresH: "features",
        features: [
          "T5 Fluorescent Cabinet Lamp",
          "High brightness, small size with on/off switch ",
          "Long service life non flicker & can start by low voltage",
          "Energy Saving with Opal Cover, Or with Striate Cover",
        ],
        description:
          "T5 Fluorescent Cabinet Lamp offering high brightness, long service life, energy saving, and reliable operation at low voltage.",
        workingH: "",
        workingDetails: [],
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
                    "../assets/ptoductsImg/LED LIGHT FOR PANELBOARD & SWITCHGEARimgas/img (1).png"
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
                    "../assets/ptoductsImg/LED LIGHT FOR PANELBOARD & SWITCHGEARimgas/img (3).png"
                  )
                ).default,
            ],
          },
          {
            heading: "Wiring Diagram",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/LED LIGHT FOR PANELBOARD & SWITCHGEARimgas/img (4).png"
                  )
                ).default,
             
            ],
          },
        ],      },     
    ]
  },
  
];

export default Products;