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
        description: "This product is designed to stop condensation from forming, which helps keep the surface dry and safe. It also helps maintain a steady minimum temperature to protect whatever it’s being used with. The body is made of aluminum, which spreads heat evenly across the surface, making it more efficient. Installing it is simple and quick because it comes with pressure clamp connectors and ready-made mounting holes that make it easy to fix in place.",

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
            heading: "Diemension",
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
            description: "The 'SAIEGO' Combi Space Heaters come with a built-in capillary thermostat, making them a reliable solution for protecting sensitive electrical and electronic equipment. These heaters are specially designed to prevent the build-up of condensation, which can lead to corrosion, moisture-related damage, and leakage currents. They are ideal for use in both Low Tension (L.T.) and High Tension (H.T.) switchgear panel boards, as well as in electronic instruments, control panels, and similar applications. By maintaining a dry and controlled environment, these heaters help improve equipment lifespan, enhance safety, and ensure stable performance under varying environmental conditions.\n\n",

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
                heading: "Diemensions",
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
            description: "The 'SAIEGO' SJ-III model is a slim and heavy-duty space heater, built for long-lasting and efficient performance. It features a specially designed broad aluminum heat sink channel that helps spread heat evenly inside enclosures or cabinets. The unit is covered with a perforated protective shield to ensure safe and consistent heat distribution. This heater is ideal for continuous use and is highly recommended for preventing issues like condensation, corrosion, and leakage currents. It is perfect for use in both Low Tension (L.T.) and High Tension (H.T.) switchgear panels, control boards, and sensitive electronic instruments where reliability and safety are essential.",
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
                heading: "Diemensions",
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
        description: "This compact convection heater is specifically designed to operate in hazardous areas, providing reliable protection against condensation, temperature swings, and frost. It helps maintain a stable internal climate by gently circulating warm air within the enclosure, preventing moisture build-up that could lead to damage or malfunctions. By avoiding sudden temperature changes and frost formation, it ensures the safe and efficient operation of electrical and electronic equipment. Its small and space-saving design allows for easy installation in tight or confined spaces, making it ideal for use in industrial cabinets, control panels, and other sensitive environments where safety and temperature control are critical.",

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
            heading: "Diemensions",
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

      //aluminum heaters data
      {
        id: "Aluminium-Space-Heaters",
        title: "Aluminium Space Heaters ",
        productImg: async () =>
          (
            await import(
              "../assets/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (1).jpg"
            )
          ).default,
        application: "For Panel Boards & Switchgear Industries",
        models: ["SH", "SHISS", "SHIL"],
        featuresH: "Features",
        features: [
          "Aluminum body for fast dissipation of heat into air",
          "Perforated cover for protection",
          "Quick and uniform heating",
          "Withstands mechanical shock and vibration",
          "Very good insulation resistance",
        ],
        description: "The 'SAIEGO' Aluminium Space Heaters are specially designed to prevent condensation, corrosion, and leakage currents in electrical systems. These heaters are ideal for use in both Low Tension (L.T.) and High Tension (H.T.) switchgear panels, control boards, and electronic instruments. By keeping the internal environment dry and maintaining a stable temperature, these heaters help protect sensitive equipment from moisture damage and electrical faults. Their aluminum construction ensures efficient and even heat distribution. Whether in industrial panels or delicate electronic systems, the SAIEGO space heaters play a key role in improving equipment reliability, extending lifespan, and ensuring smooth, uninterrupted performance.",

        workingH: "Working Principle & Features",
        workingDetails: [
          "Body is made of anodized heat sink grade extruded aluminium for fast dissipation of heat into air. High quality resistance heating element is insulated with mica for optimum insulation even in extreme humid conditions.",
          "Resistance element and insulation are held tight in between aluminium parts and squeezed for quick and uniform heating. Heater can withstand much higher degree of mechanical shock and vibration. ",
          "Elevated body provides for easy passage of heat directly to air, without heating panel body. An optional Perforated cover made of Powder coated M.S. sheet can be provided for extra safety",
        ],
        tests: [
          // "High Voltage Test at 2kV/1Min",
          // "Insulation Resistance > 10 Mega Ohms",
          // "Power Rating within ±5%",
        ],
        intended: "Intended Use",
        uses: [
          "Prevention of condensation",
          "corrosion",
          "of Leakage currents in LT. & H.T. Switchgear panel boards, enclosures, switch boards, & electronic instruments etc",
        ],
        Installation: "Installation",
        instructions: [
          "In END FIXING type model one fixing oval holes of 6.5mmX22.5mm and two 6.5mm Holes are provided at each end.",
          "In SIDE & MIDDLE FIXING type models one fixing oval hole of 6.5mmX22.5mm and Two 6.5mm Holes are provided in a bracket at Side Middle of the heater.",
          "Installation can be done in vertical or horizontal position although horizontal mounting is preferred. Distance from surface of panel should be at least 10mm. and distance from plastic parts should be at least 50mm. ",
          "Connection wire must be on the side or below to avoid warming up of the wire.",
        ],
        remark: "Remark",
        recommendation:
          "It is recommended to use a 'GIRISHEGO' thermostat to control the heater.",
        otherImages: [
          
          {
            heading: "Diemensions",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (3).png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (9).png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (10).png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (13).png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (14).png"
                  )
                ).default,


            ],
          },
          {
            heading: "Also Avalible",

            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (2).jpg"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (4).jpg"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (5).jpg"
                  )
                ).default,
              
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (1).jpg"
                  )
                ).default,
            ],
          },
          {
            heading: "Technical Data",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (5).png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (6).png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (15).png"
                  )
                ).default,
            ],
          },
         
        ],
      },

      // CHPFH1
      {
        id: "Compact-High-Performance-Fan-Heater",
        title: "Compact High Performance Fan Heater",
        productImg: async () =>
          (
            await import(
              "../assets/ptoductsImg/Compact High Performance Fan Heater images/img (1).png"
            )
          ).default,
        application: "",
        models: ["SCS0130 700W/900W/1200W"],
        featuresH: "Features",
        features: [
          "Compact Design",
          "Double Insulated",
          "Din Rail & Screw mounting",
          "High Heating Performance",
          "Inbuilt Thermostat (Optional)",
        ],
        description: "This high-performance fan heater is designed to effectively prevent condensation, frost build-up, and uneven temperatures inside electrical enclosures or control panels. It helps maintain a stable and dry environment by ensuring continuous and even distribution of warm air. The heater features double insulation for added safety, along with contact protection to prevent accidental touches, making it safer to operate in sensitive areas. It also comes with an optional built-in thermostat that allows temperature regulation based on specific needs. Ideal for use in various industrial and electronic applications, this fan heater helps enhance equipment performance and reliability over time.",

        workingH: "Working Principle & Features",
        workingDetails: [
          "The compact, high-performance fan heater prevents condensation and frost while ensuring evenly distributed interior air temperature in enclosures containing electrical or electronic components.",
          "Its plastic housing offers double insulation and contact protection. The fan heater is available with an integrated thermostat for precise temperature control.",
          "Designed as a stationary unit, the SCS 0130 is intended for wall mounting, while the SCS 0030 is recommended for installation at the bottom of the enclosure.",
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
                    "../assets/ptoductsImg/Compact High Performance Fan Heater images/img (6).png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/Compact High Performance Fan Heater images/img (3).png"
                  )
                ).default,
            ],
          },
          {
            heading: "Connection Diagram",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/Compact High Performance Fan Heater images/img (5).png"
                  )
                ).default,


            ],
          },
          {
            heading: "Diemensions",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/Compact High Performance Fan Heater images/img (2).png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/Compact High Performance Fan Heater images/img (4).png"
                  )
                ).default,
            ],
          },
         
          // {
          //   heading: "Aslo Avelable",
          //   images: [
          //     async () =>
          //       (
          //         await import(
          //           "../assets/ptoductsImg/Compact High Performance Fan Heater images/img (5).png"
          //         )
          //       ).default,
          //   ],
          // },
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
        description: "This compact, high-performance fan heater is specially designed to prevent condensation and maintain a stable temperature inside electrical enclosures and control cabinets. It ensures even air circulation, which helps avoid moisture build-up that could damage sensitive equipment. The heater is available in two options — with or without a built-in fan, depending on your specific needs. The fan-assisted model offers faster and more efficient heat distribution, while the fanless version provides silent operation for quieter environments. Its small size makes it easy to install, even in tight spaces, making it an excellent choice for maintaining dry and safe conditions in industrial and electronic applications.",
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
            heading: "Diemensions",
           
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
              "../assets/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (6).jpg"
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
        description: "The 'SAIEGO' range of space heaters is designed to effectively prevent issues caused by moisture, such as condensation, corrosion, and leakage currents. These heaters are perfect for use in Low Tension (L.T.) and High Tension (H.T.) switchgear panel boards, as well as in electronic instruments and control panels. By maintaining a consistent temperature and keeping the internal area dry, they help protect sensitive components from damage, improve equipment life, and reduce maintenance needs. With easy installation and efficient performance, SAIEGO space heaters are a reliable solution for keeping enclosures safe and operational in various industrial and electrical environments.",
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
            heading: "Diemensions",
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
              "../assets/ptoductsImg/boxtypeheatersimg/boxtypespace.jpg"
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
        description: "The 'SAIEGO' range of space heaters is specially designed to prevent condensation, corrosion, and leakage currents in electrical systems. These heaters are ideal for use in Low Tension (L.T.) and High Tension (H.T.) switchgear panel boards, as well as in electronic instruments, control panels, and enclosures. By maintaining a consistent internal temperature and keeping moisture away, these heaters help protect delicate electrical components from damage. This not only improves the reliability and performance of the equipment but also extends its lifespan. Compact, efficient, and easy to install, SAIEGO space heaters are a dependable choice for a wide range of industrial applications.",
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
            heading: "wiring Diemensions",
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
        description: "Small heaters are designed to prevent condensation and maintain a minimum operating temperature inside compact and enclosed spaces, such as camera housings and other sensitive electronic equipment. In environments where temperature drops or humidity is present, condensation can easily form, leading to moisture buildup and potential damage to internal components. These compact heaters help regulate the temperature, keeping the enclosure dry and ensuring the equipment works efficiently and reliably. They are especially useful in outdoor or industrial settings where weather and environmental factors can affect device performance. Easy to install and energy-efficient, they provide consistent thermal protection.",
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
            heading: "Diemensions",
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
        description: "'SAIEGO' thermostats are specially designed for accurate temperature control in space heaters used within Low Tension (LT) and High Tension (HT) switchgear systems and panel boards. These thermostats help maintain the right operating temperature by switching the heater on or off as needed, ensuring consistent performance and protecting electrical components from issues caused by temperature fluctuations. They are highly reliable for use in industrial environments where precise temperature management is essential to prevent condensation, corrosion, and electrical failures. Easy to mount and adjust, SAIEGO thermostats offer an efficient solution for long-term temperature regulation in enclosed electrical setups.",
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
                  description: "The ZSR-011 model is equipped with two separate thermostats, allowing independent control for both heating and cooling functions within an electrical enclosure or panel. This dual-control system ensures that the temperature stays within a safe and desired range, preventing overheating or excessive cooling. Each thermostat has a wide adjustment range, giving users flexibility to set precise temperature limits according to their needs. The thermostats also come with color-coded controls – one for heating and the other for cooling – making it easy to identify and operate. This makes the ZSR-011 an ideal choice for efficient and reliable climate regulation.",
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
                      heading: "Diemensions",
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
                  description: "The MSFR-012 is a smart humidity controller designed to regulate moisture levels inside enclosures or panel boards. It works by automatically activating space heaters when the humidity goes above a certain level. This helps to prevent condensation, which can cause problems like corrosion, rust, or electrical leakage. By keeping the internal environment dry, the MSFR-012 ensures the safe and smooth operation of sensitive electronic equipment. In addition to heaters, it can also be used to control cooling fans or warning devices, making it a versatile solution for protecting electrical systems in changing climate conditions.",
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
                      heading: "Diemensions",
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
                  description:"The ESFR-012 is an electronic hygrostat specially designed to control humidity levels inside enclosures or cabinets. When the humidity rises above a certain point, it automatically turns on connected heaters to reduce moisture and prevent condensation, which can lead to corrosion, rust, or short circuits in electrical equipment. This helps in protecting sensitive components and ensures long-lasting performance. The device also comes with a built-in LED indicator that clearly shows when the hygrostat is operating, making it easy to monitor the status at a glance. It’s a reliable and efficient solution for moisture management in control panels and switchgear.",
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
                      heading: "Diemensions",
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
                  description: "This electronic sensor is designed to automatically control the operation of heaters and fans based on the surrounding temperature and humidity levels. It continuously monitors the environment inside enclosures, panels, or cabinets, and activates the heater when it's too cold or humid, helping to prevent condensation, corrosion, or electrical faults. When it gets too warm, the sensor turns on the fan to cool down the internal space. This smart control system helps maintain a stable and safe environment for sensitive electrical or electronic equipment, ensuring better performance and longer lifespan.",
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
                      heading: "Diemensions",
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
                  description: "The ET 011 electronic thermostat is specially designed to regulate DC 24V equipment with high precision and low hysteresis. It efficiently controls heating, cooling, and signal devices by using a change-over contact, which automatically switches based on the surrounding temperature. This thermostat ensures that the internal environment of enclosures or panels remains stable and safe, helping to prevent issues like overheating, condensation, or frost. Its electronic sensing mechanism provides accurate temperature control, making it suitable for use in switchgear, control cabinets, and electronic systems. Overall, it offers reliable, energy-efficient temperature management in compact and sensitive setups.",
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
                      heading: "Diemensions",
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
                  description: "Electronic thermostats are smart devices that automatically control the operation of heaters by sensing the ambient temperature around them. When the temperature drops below a set level, the thermostat activates the heater to warm up the area. Once the desired temperature is reached, it switches the heater off, helping maintain a stable and comfortable environment. This not only ensures energy efficiency, but also protects sensitive equipment from condensation, frost, or overheating. These thermostats are commonly used in electrical enclosures, switchgear panels, and control cabinets to keep everything working smoothly and safely.",
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
                      heading: "Diemensions",
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
                  description: "Tamperproof thermostats are specially designed to control heaters or signal devices based on changes in surrounding temperature. These thermostats come with factory-set temperature limits, meaning users cannot accidentally change the settings — making them ideal for secure or sensitive applications. The SFTO-011 model includes a contact breaker, which automatically disconnects the heater when the temperature gets too high, helping prevent overheating. On the other hand, the SFTS-011 model acts as a contact maker, turning on devices like signal indicators when the temperature rises. These thermostats are perfect for environments where safety, reliability, and tamper resistance are essential.",
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
                        async () =>
                          (
                            await import(
                              "../assets/ptoductsImg/TEMPER-PROOF MECHANICAL THERMOSTAT IMAGES/IMGS (1).png"
                            )
                          ).default,
                      ],
                    },
                    {
                      heading: "Diemensions",
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
                      ],
                    },
                    {
                      heading: "Wiring Diagram",
                      images: [
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
                  description: "This device features two thermostats housed in a single casing, allowing you to independently control both heating and cooling equipment. One thermostat can be set to activate heaters when the temperature drops, while the other can trigger cooling systems or fans when it rises. It also comes with a built-in temperature offset to ensure accurate switching between heating and cooling without overlap. The thermostats include tamper-proof, pre-set contacts, meaning they are factory-set and cannot be easily adjusted, which helps maintain safety and consistency in sensitive environments like switchgear panels or electronic enclosures.",
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
                              "../assets/ptoductsImg/TEMPER-PROOF DUAL NO-NC THERMOSTAT IMAGES/IMGS (1).png"
                            )
                          ).default,
                        async () =>
                          (
                            await import(
                              "../assets/ptoductsImg/TEMPER-PROOF DUAL NO-NC THERMOSTAT IMAGES/IMGS (5).png"
                            )
                          ).default,
                      ],
                    },
                    {
                      heading: "Dimensional",
                      images: [
                        async () =>
                          (
                            await import(
                              "../assets/ptoductsImg/TEMPER-PROOF DUAL NO-NC THERMOSTAT IMAGES/IMGS (4).png"
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
                              "../assets/ptoductsImg/TEMPER-PROOF DUAL NO-NC THERMOSTAT IMAGES/IMGS (2).png"
                            )
                          ).default,
                       
                       
                      ],
                    },
                    {
                      heading: "Connection Diagram",
                      images: [
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
        description: "This compact mechanical thermostat is designed for reliable regulation and monitoring of heaters in hazardous and sensitive areas such as control panels and enclosures. It offers high switching accuracy and a long operational lifespan, making it ideal for continuous industrial use. With its direct heater control capability, it eliminates the need for additional relays or controllers, simplifying installation and reducing system complexity. The thermostat is built for durability and consistent performance in environments prone to temperature fluctuations or condensation, helping to maintain optimal operating conditions and prevent damage to sensitive electrical or electronic components.",
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
            heading: "Diemensions",
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
        description: "The ‘Saiego’ range of Energy Regulators is engineered to provide precise and efficient heat control, allowing users to easily adjust the heating output from zero to maximum with a simple turn of the knob. These regulators are widely used across various applications, including OTGs, drying cabinets, wash boilers, boiling rings, hot plates, grills, boilers, and specialized industrial machinery such as thermoplastic and thermosetting molding machines, oil baths, and switchgear and panel boards. Their versatility makes them ideal for use in domestic, commercial, and industrial heating equipment, offering reliable performance, energy efficiency, and easy integration into existing systems for optimal temperature regulation.",
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
            heading: "Diemensions",
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
        description: "The ‘Saiego’ range of Energy Regulators is thoughtfully designed to provide seamless and precise control of heat output, ranging from zero to full intensity, with just a simple turn of the knob. These high-performance regulators are highly versatile and widely utilized across a variety of heating applications. They are commonly used in OTGs (Oven Toaster Grills), drying cabinets, wash boilers, boiling rings, hot plates, grills, and industrial boilers. Additionally, they are well-suited for thermoplastic and thermosetting moulding machines, oil baths, switchgear panels, and control boards. These energy regulators are ideal for domestic, commercial, and industrial heating systems, ensuring efficiency and dependable temperature regulation.",
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
            heading: "Diemensions",
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
        description: "The ‘Saiego’ range of Energy Regulators is engineered to provide precise and efficient heat control, allowing users to adjust the temperature from zero to full simply by turning a knob. This intuitive operation makes them highly reliable and user-friendly. These regulators are widely used in various heating applications such as OTGs (oven toaster grills), drying cabinets, wash boilers, boiling rings, hot plates, grills, and industrial boilers. They are also ideal for use in thermoplastic and thermosetting moulding machines, oil baths, switchgear, and panel boards. Designed for domestic, commercial, and industrial environments, Saiego energy regulators ensure consistent performance and dependable heat management across different systems.",
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
            heading: "Diemensions",
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
        description: "The COMPAQ model Capillary Thermostats are specifically designed to deliver precise and dependable temperature regulation for a wide range of applications. These thermostats are ideal for domestic appliances, as well as commercial and industrial heating equipment, ensuring reliable operation and safety. Engineered to maintain the temperature of fluids or solids heated by electricity, gas, or oil, the thermostat works by keeping the temperature constant within a set differential range. Whether used in boilers, ovens, heating tanks, or other heating systems, the COMPAQ Capillary Thermostat ensures consistent thermal control, enhancing performance, safety, and energy efficiency across various environments.",
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
            heading: "Diemensions",
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
        description: "The SUN model Capillary Thermostats are engineered for precise and dependable temperature regulation, making them suitable for domestic appliances, as well as commercial and industrial heating equipment. These thermostats ensure consistent temperature control by maintaining the desired temperature range within a defined differential. Whether used to control the heating of fluids or solid materials, they function efficiently with systems powered by electricity, gas, or oil. Their robust design and high accuracy make them ideal for applications like boilers, hot plates, ovens, heating baths, and other heating units. The SUN model ensures stable operation, improved safety, and enhanced energy efficiency in various environments.",
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
            heading: "Diemensions",
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
        description: "The SDLX model Capillary Thermostats are expertly designed for accurate and dependable temperature control across a wide range of domestic appliances, as well as commercial and industrial heating equipment. Built for precision, these thermostats maintain a consistent temperature within a defined differential, making them ideal for managing the heating of both fluids and solid materials. Compatible with electric, gas, or oil-based heating systems, the SDLX model ensures stable performance and enhanced safety. Whether used in boilers, ovens, water heaters, drying cabinets, or industrial processing units, this thermostat offers reliable temperature regulation, improving efficiency and extending the life of heating systems.",
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
            heading: "Diemensions",
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
        description: "The SDLX model Capillary Thermostats are engineered for precise and dependable temperature regulation in a variety of applications, including domestic appliances, commercial systems, and industrial heating equipment. These thermostats are built to ensure consistent performance and long-term reliability. They maintain the temperature of fluids or solids within a set differential range, providing excellent control whether the heating source is electricity, gas, or oil. Designed with durability and safety in mind, the SDLX model is ideal for use in boilers, ovens, dryers, water baths, and processing machinery, offering efficient energy usage and enhanced protection against overheating or temperature fluctuations.",
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
            heading: "Diemensions",
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
        description: "The pressure compensation plug is an essential component designed to safeguard sensitive electrical and electronic enclosures. It effectively regulates internal pressure caused by temperature fluctuations, ensuring that components remain protected from potential damage. By allowing air to flow freely while blocking external contaminants, the plug prevents the ingress of dust, humidity, and water, thereby maintaining a clean and dry internal environment. This is particularly important in harsh or outdoor conditions, where equipment is exposed to extreme weather elements. The plug also helps in avoiding condensation buildup, enhancing the lifespan and reliability of the components inside the enclosure.",
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
            heading: "SDA-084",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/PRESSURE COMPENSATION DEVICE images/img (2).png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/PRESSURE COMPENSATION DEVICE images/img (3).png"
                  )
                ).default,
            ],
          },
          {
            heading: "SDA-284",
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
          // {
          //   heading: "Wiring Diagram",
          //   images: [
          //     async () =>
          //       (
          //         await import(
          //           "../assets/ptoductsImg/PRESSURE COMPENSATION DEVICE images/img (4).png"
          //         )
          //       ).default,
          //     async () =>
          //       (
          //         await import(
          //           "../assets/ptoductsImg/PRESSURE COMPENSATION DEVICE images/img (5).png"
          //         )
          //       ).default,
          //   ],
          // },
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
        description: "This versatile document pocket is specifically designed for the convenient and secure storage of essential documents, manuals, or wiring diagrams inside electrical enclosures, control panels, or server cabinets. Built to withstand demanding industrial conditions, it offers a durable and reliable solution for keeping important paperwork organized and protected. The pocket features easy mounting options such as adhesive strips or screws, ensuring quick and firm attachment to metal or plastic surfaces. Its robust construction ensures that documents remain clean, dry, and easily accessible even in harsh environments, making it an ideal accessory for maintenance, troubleshooting, and day-to-day operational use.",
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
                    "../assets/ptoductsImg/DOCUMENT POCKET FOR ENCLOSURE/img (3).png"
                  )
                ).default,
            ],
          },
          {
            heading: "Diemensions",
            images: [
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/DOCUMENT POCKET FOR ENCLOSURE/img (2).png"
                  )
                ).default,
              async () =>
                (
                  await import(
                    "../assets/ptoductsImg/DOCUMENT POCKET FOR ENCLOSURE/img (4).png"
                  )
                ).default,

            ],
          },
          // {
          //   heading: "Wiring Diagram",
          //   images: [
          //     async () =>
          //       (
          //         await import(
          //           "../assets/ptoductsImg/DOCUMENT POCKET FOR ENCLOSURE/img (4).png"
          //         )
          //       ).default,
             
          //   ],
          // },
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
        description: "The T5 Fluorescent Cabinet Lamp is an ideal lighting solution designed to deliver high brightness and excellent illumination within electrical enclosures, cabinets, and control panels. Known for its energy efficiency, this lamp consumes significantly less power while providing consistent lighting performance. It features a long service life, reducing maintenance needs and ensuring reliable operation even under low-voltage conditions. The compact and slim design allows for easy installation in tight spaces, while its durable construction makes it suitable for use in industrial and commercial environments. With low heat emission and stable output, the T5 cabinet lamp is perfect for continuous lighting applications.",
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
            heading: "Diemensions",
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