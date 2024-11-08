// Immediately Invoked Function Expression (IIFE) to avoid global scope pollution
(function () {
  // Constants and configurations
  const LANGUAGES = {
    am: {
      code: "am",
      name: "Amharic",
      nativeName: "አማርኛ",
      twoLettersCode: "am",
    },
    ar: {
      code: "ar",
      name: "Arabic",
      nativeName: "عربي",
      twoLettersCode: "ar",
    },
    "zh-CN": {
      code: "zh-CN",
      name: "Simplified Chinese",
      nativeName: "简体中文",
      twoLettersCode: "zh",
    },
    "zh-TW": {
      code: "zh-TW",
      name: "Traditional Chinese",
      nativeName: "繁體中文",
      twoLettersCode: "zh",
    },
    "fa-AF": {
      code: "fa-AF",
      name: "Dari",
      nativeName: "دری",
      twoLettersCode: "fa",
    },
    en: {
      code: "en",
      name: "English",
      nativeName: "English",
      twoLettersCode: "en",
    },
    fr: {
      code: "fr",
      name: "French",
      nativeName: "Français",
      twoLettersCode: "fr",
    },
    ko: {
      code: "ko",
      name: "Korean",
      nativeName: "한국어",
      twoLettersCode: "ko",
    },
    ru: {
      code: "ru",
      name: "Russian",
      nativeName: "Русский",
      twoLettersCode: "ru",
    },
    so: {
      code: "so",
      name: "Somali",
      nativeName: "Soomaали",
      twoLettersCode: "so",
    },
    "es-US": {
      code: "es-US",
      name: "Spanish",
      nativeName: "Español",
      twoLettersCode: "es",
    },
    ti: {
      code: "ti",
      name: "Tigrinya",
      nativeName: "ትግርኛ",
      twoLettersCode: "ti",
    },
    tl: {
      code: "tl",
      name: "Tagalog",
      nativeName: "Tagalog",
      twoLettersCode: "tl",
    },
    uk: {
      code: "uk",
      name: "Ukrainian",
      nativeName: "Українська",
      twoLettersCode: "uk",
    },
    vi: {
      code: "vi",
      name: "Vietnamese",
      nativeName: "Tiếng Việt",
      twoLettersCode: "vi",
    },
  };

  const CONTENT_PATHS = {
    maps: {
      areas: {
        north: {
          current: {
            am: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67299160b2029beb5bd5defa_north-area-map-current_am.jpg",
            ar: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67299160afe521a432381834_north-area-map-current_ar.jpg",
            "zh-CN":
              "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67299162e783307e2153a343_north-area-map-current_zh-cn.jpg",
            "zh-TW":
              "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/6729916299654f6726b46e76_north-area-map-current_zh-tw.jpg",
            "fa-AF":
              "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67299160c5c842c1cd314060_north-area-map-current_fa-AF.jpg",
            en: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/6722a1aa7123afd607556c55_north-area-map-current_en.jpg",
            fr: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67299161b2029beb5bd5df90_north-area-map-current_fr.jpg",
            ko: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672991605bd50b2b0a821137_north-area-map-current_ko.jpg",
            ru: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672991616a55c3202e8bc753_north-area-map-current_ru.jpg",
            so: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672991618458fe142f233a69_north-area-map-current_so.jpg",
            "es-US":
              "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/6729916031f07097dd036458_north-area-map-current_es-US.jpg",
            ti: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/6729916133cdf377ba111f77_north-area-map-current_ti.jpg",
            tl: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672993c212491d13253654d7_north-area-map-current_tl.jpg",
            uk: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672991614eae3b90700f3c86_north-area-map-current_uk.jpg",
            vi: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/6729916133cdf377ba111f93_north-area-map-current_vi.jpg",
          },
          proposed: {
            am: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67299c6bb2029beb5bdf502f_north-area-map-proposed_am.jpg",
            ar: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67299c6b870ecd048975484e_north-area-map-proposed_ar.jpg",
            "zh-CN":
              "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67299c6dfbffd955409ddef2_north-area-map-proposed_zh-cn.jpg",
            "zh-TW":
              "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67299c6d78530d529336e7bc_north-area-map-proposed_zh-tw.jpg",
            "fa-AF":
              "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67299c6bcd731a1f0b6d0c87_north-area-map-proposed_fa-AF.jpg",
            en: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/6722a1aa7123afd607556c53_north-area-map-proposed_en.jpg",
            fr: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67299c6b79d42fdd90d6beee_north-area-map-proposed_fr.jpg",
            ko: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67299c6b6e373e92a0b68409_north-area-map-proposed_ko.jpg",
            ru: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67299c6bf62f3dfa57e58ca7_north-area-map-proposed_ru.jpg",
            so: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67299c6b3d8968f4ca9a113d_north-area-map-proposed_so.jpg",
            "es-US":
              "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67299c6b3d8968f4ca9a1107_north-area-map-proposed_es-US.jpg",
            ti: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67299c6c870ecd048975493e_north-area-map-proposed_ti.jpg",
            tl: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67299c6cfa02c1674d3f0404_north-area-map-proposed_tl.jpg",
            uk: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67299c6cd898c1b53a7852ad_north-area-map-proposed_uk.jpg",
            vi: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67299c6c70ce88242dcbe790_north-area-map-proposed_vi.jpg",
          },
        },
        south: {
          current: {
            am: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672994a4178be75947f86aec_south-area-map-current_am.jpg",
            ar: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672994a531f07097dd05f4d6_south-area-map-current_ar.jpg",
            "zh-CN":
              "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672994a7cd731a1f0b6622f3_south-area-map-current_zh-cn.jpg",
            "zh-TW":
              "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672994a8da163c48a5620e7d_south-area-map-current_zh-tw.jpg",
            "fa-AF":
              "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672994a5b2029beb5bd8c8b2_south-area-map-current_fa-AF.jpg",
            en: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/6722a1aa7123afd607556c54_south-area-map-current_en.jpg",
            fr: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672994a5e783307e21563793_south-area-map-current_fr.jpg",
            ko: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672994a60affc77b434627a0_south-area-map-current_ko.jpg",
            ru: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672994a579d42fdd90cff377_south-area-map-current_ru.jpg",
            so: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672994a66a55c3202e8e7c79_south-area-map-current_so.jpg",
            "es-US":
              "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672994a4e783307e21563752_south-area-map-current_es-US.jpg",
            ti: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672994a6870ecd04896ebb5b_south-area-map-current_ti.jpg",
            tl: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672994a66a55c3202e8e7c50_south-area-map-current_tl.jpg",
            uk: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672994a66a55c3202e8e7c5a_south-area-map-current_uk.jpg",
            vi: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672994a641b7f1ade7ae1ab6_south-area-map-current_vi.jpg",
          },
          proposed: {
            am: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672998f479d42fdd90d3cd41_south-area-map-proposed_am.jpg",
            ar: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672998f470ce88242dc89eaa_south-area-map-proposed_ar.jpg",
            "zh-CN":
              "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672998f631f07097dd098e0f_south-area-map-proposed_zh-cn.jpg",
            "zh-TW":
              "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672998f633cdf377ba17247b_south-area-map-proposed_zh-tw.jpg",
            "fa-AF":
              "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672998f412f9fd5118db3d15_south-area-map-proposed_fa-AF.jpg",
            en: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/6722a1aa7123afd607556c52_south-area-map-proposed_en.jpg",
            fr: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672998f579d42fdd90d3cd8d_south-area-map-proposed_fr.jpg",
            ko: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672998f578530d5293341744_south-area-map-proposed_ko.jpg",
            ru: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672998f570ce88242dc89fcc_south-area-map-proposed_ru.jpg",
            so: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672998f5fa02c1674d3c3db0_south-area-map-proposed_so.jpg",
            "es-US":
              "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672998f4fbffd955409b2722_south-area-map-proposed_es-US.jpg",
            ti: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672998f53d8968f4ca975108_south-area-map-proposed_ti.jpg",
            tl: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67299f47bce0b1362a5ed677_south-area-map-proposed_tl.jpg",
            uk: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672998f5fc86a99437450725_south-area-map-proposed_uk.jpg",
            vi: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67299f800affc77b434fa0f5_south-area-map-proposed_vi.jpg",
          },
        },
      },
      network: {
        current: {
          am: "/maps/network/current/map_am.jpg",
          ar: "/maps/network/current/map_ar.jpg",
          "zh-CN": "/maps/network/current/map_zh-CN.jpg",
          "zh-TW": "/maps/network/current/map_zh-TW.jpg",
          "fa-AF": "/maps/network/current/map_fa-AF.jpg",
          en: "/maps/network/current/map_en.jpg",
          fr: "/maps/network/current/map_fr.jpg",
          ko: "/maps/network/current/map_ko.jpg",
          ru: "/maps/network/current/map_ru.jpg",
          so: "/maps/network/current/map_so.jpg",
          "es-US": "/maps/network/current/map_es-US.jpg",
          ti: "/maps/network/current/map_ti.jpg",
          tl: "/maps/network/current/map_tl.jpg",
          uk: "/maps/network/current/map_uk.jpg",
          vi: "/maps/network/current/map_vi.jpg",
        },
        proposed: {
          am: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67298bc18458fe142f1ed0bc_network-map-proposed_am.jpg",
          ar: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67298bc14b9029c78c05b3b5_network-map-proposed_ar.jpg",
          "zh-CN":
            "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67298beeda163c48a55ad1a8_network-map-proposed_zh-cn.jpg",
          "zh-TW":
            "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67298bee0affc77b433f8823_network-map-proposed_zh-tw.jpg",
          "fa-AF":
            "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67298bc1474d3e3e0829030b_network-map-proposed_fa-AF.jpg",
          en: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/6722a1aa7123afd607556c42_network-map-proposed_en.jpg",
          fr: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67298bc14ec1d04b73f7b025_network-map-proposed_fr.jpg",
          ko: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67298bc112f9fd5118d076c3_network-map-proposed_ko.jpg",
          ru: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67298beec5c842c1cd2cd2b3_network-map-proposed_ru.jpg",
          so: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67298bee3d8968f4ca8c8596_network-map-proposed_so.jpg",
          "es-US":
            "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672959dfa527012073c8321d_network-map-proposed_es.jpg",
          ti: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67298bee490a06a163a6ce12_network-map-proposed_ti.jpg",
          tl: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67298dabb8e4eb80f5f03674_network-map-proposed_tl.jpg",
          uk: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67298c04ec4cf962ce75ce34_network-map-proposed_uk.jpg",
          vi: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/67298e4b178be75947f391c7_network-map-proposed_vi.jpg",
        },
      },
    },
    routes: {
      north: {
        '156': {
          am: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672ae3c64256aee30bf55231_route-156_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aeeb11f1056737d427af5_route-156_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aef05d053b34a1f4ffe94_route-156_ZH-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aef47ecc86e34c31a3dec_route-156_ZH-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aef56e6e6909046091760_route-156_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/6722a1aa7123afd607556c71_route-156_en.pdf',
          fr: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672afc932c7f77c562c1bde5_route-156_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672b002c5bf679e83af8c7db_route-156_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3c1a1414871c3466c865_route-156_RU.pdf',
          so: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3cbed4c6add0420472b4_route-156_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aa779b74412446ba026a5_route-156_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3d1c131dd184f8f367c0_route-156_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3de3f1fce4c570154494_route-156_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3e37e2895a282f948f18_route-156_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3ede230f49999b1702fd_route-156_VI.pdf'
        },
        '162': {
          am: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672ae3c6c0531e325c105ecc_route-162_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aeeb1bdc3c588844127bb_route-162_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aef05b74412446bde6cd3_route-162_ZH-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aef46dc2fe90d9ae52cad_route-162_ZH-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aef564163926064fb4a38_route-162_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/6722a1aa7123afd607556c75_route-162_en.pdf',
          fr: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672afc8ff42d53e91bf09fdc_route-162_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672b002bf1876a6d76b0ed58_route-162_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3c1a4d14280030371ac0_route-162_RU.pdf',
          so: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3cbcaae896ca249aeca0_route-162_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aa7794df0f61228079db9_route-162_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3d1c7be26a2aa5f8e952_route-162_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3de32057326221ff3854_route-162_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3e3754a210c9910da650_route-162_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3edf5350eb1eb92b9234_route-162_VI.pdf'
        },
        '164': {
          am: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672ae3c5cf90e0c391f4e226_route-164_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aeeb18077d2fe2737cb63_route-164_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aef05d10182c41152d6a0_route-164_ZH-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aef461f1056737d4383c3_route-164_ZH-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aef5633b74c64a825a3e0_route-164_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/6722a1aa7123afd607556c6e_route-164_en.pdf',
          fr: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672afc91ad239f3454303188_route-164_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672b002c533ee573b56c29b1_route-164_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3c1b18e402b3fa74da54_route-164_RU.pdf',
          so: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3cbcafabf8528a54b6f3_route-164_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aa779c93a8b2d17e6ade1_route-164_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3d1c337b62278aad1311_route-164_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3de3337b62278aadcb21_route-164_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3e38d7c2be56b3863116_route-164_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3edf9d094a1533f0ec14_route-164_VI.pdf'
        },
        '166': {
          am: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672ae3c52466812572e11d09_route-166_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aeeb1c0531e325c1a045b_route-166_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aef0513c942e5af7f8291_route-166_ZH-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aef476b7ee52be724f7df_route-166_ZH-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aef562466812572eadb5e_route-166_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/6722a1aa7123afd607556c6d_route-166_en.pdf',
          fr: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672afc9033b74c64a8313fba_route-166_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672b002c02502ae0416cccab_route-166_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3c1a1414871c3466c82d_route-166_RU.pdf',
          so: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3cbc131dd184f8f31885_route-166_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aa779e9a0c91466f508cb_route-166_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3d1c748373f97980795f_route-166_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3de3337b62278aadcb24_route-166_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3e3754a210c9910da658_route-166_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3edf72d06f07583ea9e6_route-166_VI.pdf'
        },
        '183': {
          am: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672ae3c5e6e6909046ffaee1_route-183_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aeeb1d053b34a1f4fae3f_route-183_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aef0571cb48ec1ea365c9_route-183_ZH-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aef4613c942e5af7fae39_route-183_ZH-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aef569e2f1439876d4a19_route-183_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/6722a1aa7123afd607556c6c_route-183_en.pdf',
          fr: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672afc91c21c0fb947f85685_route-183_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672b002b533ee573b56c299d_route-183_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3c1a11fe2ea0d697ba65_route-183_RU.pdf',
          so: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3cbc8dda78adc6b53219_route-183_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aa7794f035266a3fbde4e_route-183_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3d1ca657fe2dd66df468_route-183_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3de3748373f9798135f3_route-183_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3e377b1bd792cfd53c7d_route-183_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3edf55e3a15c911a69f2_route-183_VI.pdf'
        },
        '631': {
          am: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672ae3c55d756f3fc30d21b1_route-631_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aeeb2c33bceae44baca90_route-631_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aef05871881309ddcbcf7_route-631_ZH-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aef469831a1c347395c1f_route-631_ZH-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aef56823a23f66af9fbdb_route-631_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/6722a1aa7123afd607556c72_route-631_en.pdf',
          fr: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672afc91ad239f345430318b_route-631_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672b002cc9769c30b461db3e_route-631_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3c1af1fce4c57013ec04_route-631_RU.pdf',
          so: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3cbc3f51c81f4f91e8e0_route-631_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aa779d10182c41116bd1f_route-631_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3d1c748373f979807949_route-631_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3de3a3abd723c4043229_route-631_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3e37bd0634dcf820cc68_route-631_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3edf112364c560410318_route-631_VI.pdf'
        }
      },
      south: {
        '181': {
          am: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672ae3e6e48c63b8c391d829_route-181_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aefa1823a23f66afa3405_route-181_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672af009d10182c4115386e3_route-181_ZH-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672af08fae2894545981fe91_route-181_ZH-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aefb613c942e5af800c10_route-181_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/6722a1aa7123afd607556c76_route-181_en.pdf',
          fr: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672afd53ad239f345430ec48_route-181_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672affffe6e690904616ca0f_route-181_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3c569c2e2761aaeb63b7_route-181_RU.pdf',
          so: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3c99166e63d81ad89586_route-181_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672add42645fb9e882056de0_route-181_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3d5600221218213f6ab3_route-181_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3df809f33cfb3cafd81c_route-181_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3e7765ec2149ff813090_route-181_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3eb42571b826ac7cff15_route-181_VI.pdf'
        },
        '182': {
          am: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672ae3e633b74c64a81cf051_route-182_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aefa18077d2fe273870b0_route-182_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672af009e6e690904609a4f1_route-182_ZH-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672af08fc478f7cc2fbe83b9_route-182_ZH-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aefb6e48c63b8c39ad2c0_route-182_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/6722a1aa7123afd607556c70_route-182_en.pdf',
          fr: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672afd535bf679e83af653bf_route-182_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672affff5fa6662390b04018_route-182_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3c56eb364d49b1630acd_route-182_RU.pdf',
          so: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3c913a593dcd17e4a140_route-182_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672add42f42d53e91bd642c5_route-182_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3d57a3abd723c403c00c_route-182_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3df8eca1eb68f69f9397_route-182_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3e775350eb1eb92b519d_route-182_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3eb420a1ad165945de1b_route-182_VI.pdf'
        },
        '186': {
          am: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672ae3e68077d2fe272f85e7_route-186_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aefa113c942e5af7ff81a_route-186_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672af0090616d6a7ef6ac148_route-186_ZH-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672af08f08683f3d3cdc2745_route-186_ZH-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aefb65d756f3fc316671f_route-186_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/6722a1aa7123afd607556c6f_route-186_en.pdf',
          fr: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672afd53c21c0fb947f8da8c_route-186_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672affffedda5fdc1b64da29_route-186_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3c56b00860a4b3e47150_route-186_RU.pdf',
          so: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3c91eb6e6af5efb13783_route-186_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672add42f42d53e91bd642ba_route-186_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3d56fb85522ee768ade0_route-186_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3df8458e45bec3a36162_route-186_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3e771159371223328c0a_route-186_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3eb59be74ab1a944d5b4_route-186_VI.pdf'
        },
        '187': {
          am: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672ae3e6d10182c4114a620e_route-187_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aefa14163926064fb8d75_route-187_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672af0095d756f3fc316a1d1_route-187_ZH-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672af08f71cb48ec1ea49c4d_route-187_ZH-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aefb66b7ee52be72545cf_route-187_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/6722a1aa7123afd607556c74_route-187_en.pdf',
          fr: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672afd53621b8081a1b41066_route-187_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672affff91e5827d509126eb_route-187_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3c56de677e391e86366e_route-187_RU.pdf',
          so: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3c92eca1eb68f69e8dff_route-187_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672add42cb1c90f16071b5b9_route-187_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3d56b1b4cf4b12644038_route-187_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3df8601cc2efa9c68e52_route-187_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3e7765ec2149ff8130aa_route-187_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3eb4f8cee0447b9f37b5_route-187_VI.pdf'
        },
        '193': {
          am: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672ae3e6d004527a261f50b3_route-193_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aefa1c9769c30b454fd3f_route-193_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672af00988571a4bdf944490_route-193_ZH-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672af08f1ba414606cbc7c15_route-193_ZH-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aefb6fbb01b1ebb6cb5c8_route-193_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/6722a1aa7123afd607556c73_route-193_en.pdf',
          fr: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672afd5345edda45a5ae2bb9_route-193_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672affffb74412446becb4fe_route-193_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3c56131dd184f8f2d735_route-193_RU.pdf',
          so: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3c917b3d8d60e466982b_route-193_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672add42cf90e0c391f053a4_route-193_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3d562641a41e5784c242_route-193_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3df8337ecb5df412967e_route-193_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3e771a4205276d9ba682_route-193_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3eb407b973c13d451ac6_route-193_VI.pdf'
        },
        '903': {
          am: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672ae3e671cb48ec1e9b1cac_route-903_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aefa18077d2fe273870df_route-903_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672af009bdc3c58884421d1c_route-903_ZH-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672af08f6b7ee52be725e965_route-903_ZH-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aefb69cc16e1447940139_route-903_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/6722a1aa7123afd607556c6b_route-903_en.pdf',
          fr: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672afd539e2f14398778c41f_route-903_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672afffff42d53e91bf33590_route-903_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3c56601cc2efa9c4f852_route-903_RU.pdf',
          so: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3c91d4c6add042045483_route-903_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672add43cf90e0c391f053ea_route-903_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3d5635c16684274add4b_route-903_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3df8d4c6add042055eeb_route-903_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3e77897f36fdd2da2143_route-903_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3eb407b973c13d451ac0_route-903_VI.pdf'
        },
        'a-line': {
          am: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672ae3e8c9769c30b44ba963_route-a-line_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aefa2c478f7cc2fbdd4c4_route-a-line_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672af009f42d53e91be5586d_route-a-line_ZH-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672af08fbdc3c588844283f4_route-a-line_ZH-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aefb7c0531e325c1afed8_route-a-line_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/6722a1aa7123afd607556c79_a-line_en.pdf',
          fr: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672afd53533ee573b569b6e8_route-a-line_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672b002cd4e11b2c6a75d46a_route-a-line_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3c563a593dcd17e473df_route-a-line_RU.pdf',
          so: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3c91cf60b8a53b06b651_route-a-line_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672add414256aee30bf06c57_a-line_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3d56d4c6add04204e970_route-a-line_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3df8512e97e476fcdd4e_route-a-line_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3e772571b826ac7cd547_route-a-line_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3eb4834180efdb688bb1_route-a-line_VI.pdf'
        },
        'south-auburn-metro-flex': {
          am: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672ae3e89cc16e14478b2a7d_route-s-auburn-metro-flex_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aefa17fcc9904e63063d5_route-s-auburn-metro-flex_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672af009f42d53e91be55869_route-s-auburn-metro-flex_ZH-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672af08fc21c0fb947eeba83_route-s-auburn-metro-flex_ZH-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aefb82c7f77c562b7a458_route-s-auburn-metro-flex_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/6722a1aa7123afd607556c77_south-auburn-flex_en.pdf',
          fr: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672afd53546851ae6e0d6578_route-s-auburn-metro-flex_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672b002c29e5f9706167fc3b_route-s-auburn-metro-flex_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3c57880151afdebc5085_route-s-auburn-metro-flex_RU.pdf',
          so: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3c994c200619ad2a6870_route-s-auburn-metro-flex_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672add432466812572dc8647_south-auburn-flex_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3d5605e864e32e58ca27_route-s-auburn-metro-flex_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3df8337ecb5df41296ac_route-s-auburn-metro-flex_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3e77093a9608dc24de33_route-s-auburn-metro-flex_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3eb431507086e342abad_route-s-auburn-metro-flex_VI.pdf'
        },
        'federal-way-metro-flex': {
          am: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672ae3e89831a1c3473051ad_route-fed-way-metro-flex_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aefa21ba414606cbbb0b2_route-fed-way-metro-flex_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672af009f7df71c54c47eb96_route-fed-way-metro-flex_ZH-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672af08fc478f7cc2fbe83ef_route-fed-way-metro-flex_ZH-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672aefb6f42d53e91be514b4_route-fed-way-metro-flex_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/6722a1aa7123afd607556c78_federal-way-flex_en.pdf',
          fr: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672afd532a69cc172158291d_route-fed-way-metro-flex_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672b002c9e2f1439877aeb79_route-fed-way-metro-flex_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3c57748373f9797fd926_route-fed-way-metro-flex_RU.pdf',
          so: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3c91a657fe2dd66d8ea9_route-fed-way-metro-flex_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672add41fef293ea5582e118_federal-way-flex_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3d564d14280030381a4f_route-fed-way-metro-flex_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3df8337b62278aaddbf6_route-fed-way-metro-flex_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3e7831507086e3428135_route-fed-way-metro-flex_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d3eb407b973c13d451ba0_route-fed-way-metro-flex_VI.pdf'
        }
      }
    },
  };

  const URL_PATHS = {
    surveys: {
      main: {
        am: "https://kcit.qualtrics.com/jfe/form/SV_cYGn3gSfhUiyF3E",
        ar: "https://kcit.qualtrics.com/jfe/form/SV_0lfrBNTfQGDAToq",
        en: "https://kcit.qualtrics.com/jfe/form/SV_2mzgA4jKokOT0Ts",
        ko: "https://kcit.qualtrics.com/jfe/form/SV_8uYszKNJ4v5Joii",
        ru: "https://kcit.qualtrics.com/jfe/form/SV_868q1TEhm5GnCXI",
        "zh-CN": "https://kcit.qualtrics.com/jfe/form/SV_3g5v5mmBSj7Louq",
        so: "https://kcit.qualtrics.com/jfe/form/SV_7418lrrcCDaLwW2",
        "es-US": "https://kcit.qualtrics.com/jfe/form/SV_9Mr5oOm3BXvNsxw",
        tl: "https://kcit.qualtrics.com/jfe/form/SV_0ijehZ52TaKqJxk",
        "zh-TW": "https://kcit.qualtrics.com/jfe/form/SV_8hUoSWFmU5JBw7s",
        uk: "https://kcit.qualtrics.com/jfe/form/SV_09zFpOuonY750Z8",
        vi: "https://kcit.qualtrics.com/jfe/form/SV_6A93EyIhPW9OLHM",
      },
    },
    partnerBoard: {
      application: {
        am: "https://kingcounty.gov/en/dept/metro/programs-and-projects/south-link-connections/partner-review-board-form/am",
        ar: "https://kingcounty.gov/en/dept/metro/programs-and-projects/south-link-connections/partner-review-board-form/ar",
        "zh-CN":
          "https://kingcounty.gov/zh-cn/dept/metro/programs-and-projects/south-link-connections/partner-review-board-form",
        "zh-TW":
          "https://kingcounty.gov/en/dept/metro/programs-and-projects/south-link-connections/partner-review-board-form/zh-hant",
        "fa-AF":
          "https://kingcounty.gov/en/dept/metro/programs-and-projects/south-link-connections/partner-review-board-form/prs",
        en: "https://kingcounty.gov/en/dept/metro/programs-and-projects/south-link-connections/partner-review-board-form",
        fr: "https://kingcounty.gov/en/dept/metro/programs-and-projects/south-link-connections/partner-review-board-form/fr",
        ko: "https://kingcounty.gov/ko-kr/dept/metro/programs-and-projects/south-link-connections/partner-review-board-form",
        ru: "https://kingcounty.gov/ru-ru/dept/metro/programs-and-projects/south-link-connections/partner-review-board-form",
        so: "https://kingcounty.gov/so-so/dept/metro/programs-and-projects/south-link-connections/partner-review-board-form",
        "es-US":
          "https://kingcounty.gov/es-es/dept/metro/programs-and-projects/south-link-connections/partner-review-board-form",
        ti: "https://kingcounty.gov/en/dept/metro/programs-and-projects/south-link-connections/partner-review-board-form/ti",
        tl: "https://kingcounty.gov/en/dept/metro/programs-and-projects/south-link-connections/partner-review-board-form/tl",
        uk: "https://kingcounty.gov/uk-ua/dept/metro/programs-and-projects/south-link-connections/partner-review-board-form",
        vi: "https://kingcounty.gov/vi-vn/dept/metro/programs-and-projects/south-link-connections/partner-review-board-form",
      },
    },
    sideMap: {
      main: {
        am: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d5c223f17b418e887fc6e_P2SLC_CurrPropSidebySide_AM.pdf",
        ar: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d5c227facd6084171913a_P2SLC_CurrPropSidebySide_AR.pdf",
        "zh-CN":
          "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d5c2420ffc86da56aace9_P2SLC_CurrPropSidebySide_ZH-CN.pdf",
        "zh-TW":
          "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d5cc2e9461c6882dff379_P2SLC_CurrPropSidebySide_ZH-TW.pdf",
        "fa-AF":
          "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d5c22c7fd8e83a8a4c300_P2SLC_CurrPropSidebySide_fa-AF.pdf",
        en: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d58cf3e5eb70a566bdc6a_P2SLC_CurrPropSidebySide_en.pdf",
        fr: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d5c22771d7bd769589ba3_P2SLC_CurrPropSidebySide_FR.pdf",
        ko: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d5c22528b3b2aa790887a_P2SLC_CurrPropSidebySide_KO.pdf",
        ru: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d5c23149665d2839b3faa_P2SLC_CurrPropSidebySide_RU.pdf",
        so: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d5c23a0aad614c02e7513_P2SLC_CurrPropSidebySide_SO.pdf",
        "es-US":
          "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d5c227facd60841719153_P2SLC_CurrPropSidebySide_es-US.pdf",
        ti: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d5c23c9614f13fc955774_P2SLC_CurrPropSidebySide_TI.pdf",
        tl: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d5c235416fd8456a182bd_P2SLC_CurrPropSidebySide_TL.pdf",
        uk: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d5c23f849e8119583b165_P2SLC_CurrPropSidebySide_UK.pdf",
        vi: "https://cdn.prod.website-files.com/6722a1aa7123afd607556ae7/672d5c247facd60841719488_P2SLC_CurrPropSidebySide_VI.pdf",
      },
    },
  };

  class WebflowLanguageSwitcher {
    constructor() {
      this.currentLang = this.getCurrentLanguage();
      this.init();
    }

    init() {
      // Wait for Webflow load
      window.Webflow = window.Webflow || [];
      window.Webflow.push(() => {
        this.setupEventListeners();
        this.handlePopupVisibility();
        this.populateLanguagesDropdown();
        this.updateContent(this.currentLang);
      });
    }

    getCurrentLanguage() {
      return (
        localStorage.getItem("selectedLanguage") ||
        new URLSearchParams(window.location.search).get("lng") ||
        "en"
      );
    }

    handlePopupVisibility() {
      const hasVisited = localStorage.getItem("hasVisited");
      const modal = document.getElementById("pop-up");
      if (!modal) return;

      if (!hasVisited) {
        modal.style.display = "flex";
        localStorage.setItem("hasVisited", "true");
      } else {
        modal.style.display = "none";
      }
    }

populateLanguagesDropdown() {
  const dropdown = document.querySelector(".navbar_dropdown-list");
  if (!dropdown) return;

  dropdown.innerHTML = "";
  Object.values(LANGUAGES).forEach((lang) => {
    const link = document.createElement("a");
    link.href = `/?lng=${lang.code}`;
    link.className = "navbar_dropdown-link w-dropdown-link";

    // Add w--current class if this is the current language
    if (lang.code === this.currentLang) {
      link.classList.add("w--current");
    }

    link.textContent =
      lang.code === "en" || lang.code === "tl"
        ? lang.nativeName
        : `${lang.nativeName} (${lang.name})`;
    link.dataset.langCode = lang.code;
    dropdown.appendChild(link);
  });
}

    updateContent(langCode) {
      this.updateNavbarDisplay(langCode);
      this.updateLayoutDirection(langCode);
      this.updateImages(langCode);
      this.updateSurveyLinks(langCode);
      this.updatePartnerBoardLinks(langCode);
      this.updateSideMapLinks(langCode);

      this.updateRoutePdfLinks(langCode);
    }

    updateNavbarDisplay(langCode) {
      const lang = LANGUAGES[langCode];
      if (!lang) return;

      const displayElement = document.querySelector(
        ".navbar_dropdown-toggle > div"
      );
      if (displayElement) {
        displayElement.textContent =
          langCode === "en" || langCode === "tl"
            ? lang.nativeName
            : `${lang.nativeName} (${lang.name})`;
      }
    }

    updateLayoutDirection(langCode) {
      const isRTL = ["ar", "fa-AF"].includes(langCode);
      document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
      document.documentElement.classList.toggle("rtl", isRTL);
    }

    updateImages(langCode) {
      document.querySelectorAll("[data-map][data-variant]").forEach((img) => {
        const map = img.dataset.map;
        const variant = img.dataset.variant;
        const path = this.getImagePath(map, variant, langCode);

        if (path) {
          const timestamp = Date.now();
          const newPath = `${path}?${timestamp}`;

          // Update main image
          img.src = newPath;
          if (img.srcset) {
            img.srcset = newPath;
          }

          // Update associated lightbox if it exists
          const lightboxLink = img.closest(".w-inline-block.w-lightbox");
          if (lightboxLink) {
            this.updateLightbox(lightboxLink, path);
          }
        } else {
          // If no path found, try falling back to English version
          const englishPath = this.getImagePath(map, variant, "en");
          if (englishPath) {
            const timestamp = Date.now();
            const newPath = `${englishPath}?${timestamp}`;

            img.src = newPath;
            if (img.srcset) {
              img.srcset = newPath;
            }

            const lightboxLink = img.closest(".w-inline-block.w-lightbox");
            if (lightboxLink) {
              this.updateLightbox(lightboxLink, englishPath);
            }
          }
        }
      });
    }

    updateLightbox(lightboxLink, path) {
      const scriptElement = lightboxLink.querySelector(
        'script[type="application/json"]'
      );
      if (!scriptElement) return;

      try {
        const lightboxConfig = JSON.parse(scriptElement.textContent);

        if (lightboxConfig.items && lightboxConfig.items.length > 0) {
          if (path) {
            const timestamp = Date.now();
            const newPath = path.includes("?") ? path : `${path}?${timestamp}`;

            // Update lightbox configuration
            lightboxConfig.items[0].url = newPath;
            lightboxConfig.items[0].type = "image";
            scriptElement.textContent = JSON.stringify(lightboxConfig);

            // Properly reinitialize Webflow lightbox
            const Lightbox =
              window.Webflow && window.Webflow.require("lightbox");
            if (Lightbox) {
              try {
                // Try to destroy existing instance if it exists
                if (typeof Lightbox.destroy === "function") {
                  Lightbox.destroy();
                }
                // Initialize new instance
                Lightbox.ready();
              } catch (e) {
                console.warn("Lightbox reinitialization error:", e);
                // Fallback: force reload lightbox
                window.Webflow.push(function () {
                  window.Webflow.require("lightbox").ready();
                });
              }
            }
          }
        }
      } catch (error) {
        console.warn("Error updating lightbox:", error);
      }
    }

    updateSurveyLinks(langCode) {
      try {
        const surveyUrl =
          URL_PATHS.surveys.main[langCode] || URL_PATHS.surveys.main["en"];
        if (surveyUrl) {
          // Update all survey links
          document.querySelectorAll(".survey-link").forEach((link) => {
            link.href = surveyUrl;
          });
        }
      } catch (error) {
        console.warn("Error updating survey links:", error);
      }
    }

    updatePartnerBoardLinks(langCode) {
      try {
        const partnerBoardUrl =
          URL_PATHS.partnerBoard.application[langCode] ||
          URL_PATHS.partnerBoard.application["en"];
        if (partnerBoardUrl) {
          // Update all partner board application links
          document
            .querySelectorAll(".mobility-board-application-link")
            .forEach((link) => {
              link.href = partnerBoardUrl;
            });
        }
      } catch (error) {
        console.warn("Error updating partner board links:", error);
      }
    }

    updateSideMapLinks(langCode) {
      try {
        const sideMapUrl =
          URL_PATHS.sideMap.main[langCode] ||
          URL_PATHS.sideMap.main["en"];
        if (sideMapUrl) {
          // Update all side map links
          document
            .querySelectorAll(".side-map-link")
            .forEach((link) => {
              link.href = sideMapUrl;
            });
        }
      } catch (error) {
        console.warn("Error updating side map links:", error);
      }
    }

    // Add the new method here
updateRoutePdfLinks(langCode) {
    try {
        const updateLink = (link, routePath) => {
            if (routePath) {
                link.href = routePath;
                link.target = '_blank';
                link.rel = 'noopener noreferrer'; // Added noreferrer

                // Remove existing click listeners
                const newLink = link.cloneNode(true);
                link.parentNode.replaceChild(newLink, link);

                // Add new click handler
                newLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setTimeout(() => {
                        window.open(routePath, '_blank', 'noopener,noreferrer');
                    }, 0);
                });
            }
        };

        // Update north route PDFs
        document.querySelectorAll('[data-route-area="north"][data-route-number]').forEach(link => {
            const routeNumber = link.dataset.routeNumber;
            const routePath = CONTENT_PATHS.routes.north[routeNumber]?.[langCode] ||
                             CONTENT_PATHS.routes.north[routeNumber]?.['en'];
            updateLink(link, routePath);
        });

        // Update south route PDFs
        document.querySelectorAll('[data-route-area="south"][data-route-number]').forEach(link => {
            const routeNumber = link.dataset.routeNumber;
            const routePath = CONTENT_PATHS.routes.south[routeNumber]?.[langCode] ||
                             CONTENT_PATHS.routes.south[routeNumber]?.['en'];
            updateLink(link, routePath);
        });

        // Update flex route PDFs
        document.querySelectorAll('[data-route-area="flex"][data-route-number]').forEach(link => {
            const routeId = link.dataset.routeNumber;
            const routePath = CONTENT_PATHS.routes.south[routeId]?.[langCode] ||
                             CONTENT_PATHS.routes.south[routeId]?.['en'];
            updateLink(link, routePath);
        });
    } catch (error) {
        console.warn('Error updating route PDF links:', error);
    }
}

    getImagePath(map, variant, langCode) {
      try {
        let path;
        if (map === "network") {
          path = CONTENT_PATHS.maps.network[variant][langCode];
        } else {
          path = CONTENT_PATHS.maps.areas[map][variant][langCode];
        }

        // Verify the path exists and is valid
        if (!path) {
          console.warn(
            `No path found for ${map}/${variant}/${langCode}, trying English fallback`
          );
          return CONTENT_PATHS.maps[map === "network" ? "network" : "areas"][
            map
          ][variant]["en"];
        }

        return path;
      } catch (error) {
        console.warn(
          `Error getting image path for: ${map}/${variant}/${langCode}`,
          error
        );
        return null;
      }
    }

    setupEventListeners() {
      // Language selection
      document.addEventListener("click", (e) => {
        const languageLink = e.target.closest("[data-lang-code]");
        if (languageLink) {
          e.preventDefault();
          const langCode = languageLink.dataset.langCode;
          this.handleLanguageSelection(langCode);
        }

        // Modal close
        if (e.target.closest(".modal_close-button")) {
          this.closeModal();
        }
      });
    }

    handleLanguageSelection(langCode) {
      // Remove current highlight from all links
      document.querySelectorAll('.navbar_dropdown-link').forEach(link => {
        link.classList.remove('w--current');
      });

      // Add highlight to selected language
      const selectedLink = document.querySelector(`[data-lang-code="${langCode}"]`);
      if (selectedLink) {
        selectedLink.classList.add('w--current');
      }
      localStorage.setItem("selectedLanguage", langCode);
      this.currentLang = langCode;
      this.updateContent(langCode);
      this.closeModal();
      window.location.search = `?lng=${langCode}`;
    }

    closeModal() {
      const modal = document.getElementById("pop-up");
      if (modal) {
        modal.style.display = "none";
      }
    }
  }

  // Initialize after Webflow load
  window.Webflow = window.Webflow || [];
  window.Webflow.push(() => {
    window.languageSwitcher = new WebflowLanguageSwitcher();
  });
})();
