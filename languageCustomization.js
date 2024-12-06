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
      nativeName: "لعربية",
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
      nativeName: "Af Soomaali",
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
            am: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466c536c19cf16a70f49e2_north-area-map-current_am.avif",
            ar: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466c52c548ac4fd2cdf84e_north-area-map-current_ar.avif",
            "zh-CN": "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466c5ccd1230652513f66c_north-area-map-current_zh-CN.avif",
            "zh-TW": "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466bdac612497aa3a08e76_north-area-map-current_zh-TW.avif",
            "fa-AF": "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466c5223733ecd09c097b0_north-area-map-current_fa-AF.avif",
            en: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466c51e5ee4d6fd9c3ebd8_north-area-map-current_en.avif",
            fr: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466c527e461fcfdfea06f2_north-area-map-current_fr.avif",
            ko: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466c540ca1553e7256c63d_north-area-map-current_ko.avif",
            ru: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466c57abb86cbc08aa1a23_north-area-map-current_ru.avif",
            so: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466c57f7d280dd77b27b08_north-area-map-current_so.avif",
            "es-US": "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466c522774f41bc1412d33_north-area-map-current_es-US.avif",
            ti: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466c57661d424224ffc485_north-area-map-current_ti.avif",
            tl: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466c57b712b8413f670bc7_north-area-map-current_tl.avif",
            uk: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466c5768ee38453a1534c6_north-area-map-current_uk.avif",
            vi: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466c58198306bfd7827023_north-area-map-current_vi.avif"
          },
          proposed: {
            am: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466f0ad0f204fe5cde4eb9_north-area-map-proposed_am.avif",
            ar: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466f0abbd3f83f30d05b6a_north-area-map-proposed_ar.avif",
            "zh-CN": "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466f0d68ee38453a178942_north-area-map-proposed_zh-CN.avif",
            "zh-TW": "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466f0dc14d6274b354bf2c_north-area-map-proposed_zh-TW.avif",
            "fa-AF": "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466f096904de737dbd7254_north-area-map-proposed_fa-AF.avif",
            en: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466f0870797c95376c5e01_north-area-map-proposed_en.avif",
            fr: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466f09a8d98b654a4f9983_north-area-map-proposed_fr.avif",
            ko: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466f0985fae38edae22ff3_north-area-map-proposed_ko.avif",
            ru: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67467040be556f84ff5f1269_north-area-map-proposed_ru.avif",
            so: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466f0b105cd68073e4a4f0_north-area-map-proposed_so.avif",
            "es-US": "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67467025ddce7441e5237c6b_north-area-map-proposed_es-US.avif",
            ti: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466f0dbe6bf77756be6eee_north-area-map-proposed_ti.avif",
            tl: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466f0e68ee38453a17897c_north-area-map-proposed_tl.avif",
            uk: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466f0efcaab3992c7891c2_north-area-map-proposed_uk.avif",
            vi: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67466f0e68ee38453a17895d_north-area-map-proposed_vi.avif"
          }
        },
        south: {
          current: {
            am: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6746712c68ee38453a1960ed_south-area-map-current_am.avif",
            ar: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6746712cd0f204fe5ce06cc6_south-area-map-current_ar.avif",
            "zh-CN": "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6746712ebe68b06f340e0002_south-area-map-current_zh-CN.avif",
            "zh-TW": "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67467130c14d6274b3564e84_south-area-map-current_zh-TW.avif",
            "fa-AF": "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6746712c099ac0ac45700cf5_south-area-map-current_fa-AF.avif",
            en: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6746712a1da195fb132168a4_south-area-map-current_en.avif",
            fr: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6746712c6904de737dbf747d_south-area-map-current_fr.avif",
            ko: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6746712c299ff35905eeab12_south-area-map-current_ko.avif",
            ru: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674671305cf8338de5d881bc_south-area-map-current_ru.avif",
            so: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6746713035f9723b4cd16fea_south-area-map-current_so.avif",
            "es-US": "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67467130be68b06f340e00f0_south-area-map-current_es-US.avif",
            ti: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67467130c1db96a82e25db99_south-area-map-current_ti.avif",
            tl: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674671316904de737dbf75bd_south-area-map-current_tl.avif",
            uk: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6746713385fae38edae3f70a_south-area-map-current_uk.avif",
            vi: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67467133c14d6274b3564fe7_south-area-map-current_vi.avif"
          },
          proposed: {
            am: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674672c6be68b06f340f4abd_south-area-map-proposed_am.avif",
            ar: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674672c68f3f84b037831939_south-area-map-proposed_ar.avif",
            "zh-CN": "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674672c9fcf097ba4cd7dc02_south-area-map-proposed_zh-CN.avif",
            "zh-TW": "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674672c97381536993eb6f3b_south-area-map-proposed_zh-TW.avif",
            "fa-AF": "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674672c689d824ea248ec8ad_south-area-map-proposed_fa-AF.avif",
            en: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674672c4be68b06f340f46b4_south-area-map-proposed_en.avif",
            fr: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674672c6484ee5bdc5596932_south-area-map-proposed_fr.avif",
            ko: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674672caacf7e0309c92e910_south-area-map-proposed_ko.avif",
            ru: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674672e5e194887ede0d2687_south-area-map-proposed_ru.avif",
            so: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674672c9c1db96a82e27199b_south-area-map-proposed_so.avif",
            "es-US": "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674672ffacf7e0309c9309db_south-area-map-proposed_es-US.avif",
            ti: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674672c81df34b9edc99bc79_south-area-map-proposed_ti.avif",
            tl: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674672cb64a2bb5472a917dd_south-area-map-proposed_tl.avif",
            uk: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674672c9be6bf77756c1bfb0_south-area-map-proposed_uk.avif",
            vi: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674672ca099ac0ac45715d22_south-area-map-proposed_vi.avif"
          }
        }
      },
      network: {
        current: {
          am: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a0a8025a1033981cda1_P2SLC_CurrPropSidebySide_AM.pdf",
          ar: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a0a69597b463fdeb70c_P2SLC_CurrPropSidebySide_AR.pdf",
          "zh-CN": "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a09dc4ad6a7c4f1d30e_P2SLC_CurrPropSidebySide_zh-CN.pdf",
          "zh-TW": "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a0e4903f84c981c6d11_P2SLC_CurrPropSidebySide_zh-TW.pdf",
          "fa-AF": "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a0a8ba607c604f98b9d_P2SLC_CurrPropSidebySide_fa-AF.pdf",
          en: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a90f4d641e782b6019c_P2SLC_CurrPropSidebySide_EN.pdf",
          fr: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a0a24ce4848d1301aed_P2SLC_CurrPropSidebySide_FR.pdf",
          ko: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a0c4903f84c981c6b6e_P2SLC_CurrPropSidebySide_KO.pdf",
          ru: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a0c95aadbccb069ed34_P2SLC_CurrPropSidebySide_RU.pdf",
          so: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a0c710b843f9a2a153b_P2SLC_CurrPropSidebySide_SO.pdf",
          "es-US": "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a0afdcf2d0998b39c5d_P2SLC_CurrPropSidebySide_es-US.pdf",
          ti: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a0c6e314f09727d649e_P2SLC_CurrPropSidebySide_TI.pdf",
          tl: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a109aa0efa0f07c40d6_P2SLC_CurrPropSidebySide_TL.pdf",
          uk: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a0e838d6c1f67922e44_P2SLC_CurrPropSidebySide_UK.pdf",
          vi: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a0d95aadbccb069ee26_P2SLC_CurrPropSidebySide_VI.pdf",
        },
        proposed: {
          am: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a311701e74fbb3d891c_network-map-proposed_am.jpg",
          ar: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a322a05f95d6152a0fa_network-map-proposed_ar.jpg",
          "zh-CN":
            "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a3583ccc7c7c1009fbd_network-map-proposed_zh-CN.jpg",
          "zh-TW":
            "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a373ad14c3cc0adb425_network-map-proposed_zh-TW.jpg",
          "fa-AF":
            "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a32f4025516fb1ccf22_network-map-proposed_fa-AF.jpg",
          en: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/671bfbd06975812356a045bd_network-map.jpg",
          fr: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a320717ab8e46632eae_network-map-proposed_fr.jpg",
          ko: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a327df78638d2a4a145_network-map-proposed_ko.jpg",
          ru: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a3383ccc7c7c1009e92_network-map-proposed_ru.jpg",
          so: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a3469597b463fdee46c_network-map-proposed_so.jpg",
          "es-US":
            "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a32e92987487fd0c9ca_network-map-proposed_es-US.jpg",
          ti: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a348196b372b641f8a1_network-map-proposed_ti.jpg",
          tl: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a3465dc85b813c2bed5_network-map-proposed_tl.jpg",
          uk: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a34ac827ab864e092b7_network-map-proposed_uk.jpg",
          vi: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a34489654a8f388979c_network-map-proposed_vi.jpg",
        },
      },
    },
    routes: {
      north: {
        "156": {
          am: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451d8203b39e50aea5b1ac_route-156_AM.pdf",
          ar: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451d82a0d064888b1e7543_route-156_AR.pdf",
          "zh-CN": "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451d865f9c23ada05948ed_route-156_zh-CN.pdf",
          "zh-TW": "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451d86c5a8b86d76690320_route-156_zh-TW.pdf",
          "fa-AF": "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451d82dc8cc80af375e2f8_route-156_fa-AF.pdf",
          en: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/672164d4e558447bbc49e41a_route-156_en.pdf",
          fr: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451d826e6f4daeb00aca7c_route-156_FR.pdf",
          ko: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451d83d0ee69222e11bc7f_route-156_KO.pdf",
          ru: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451d853907dab7fa5ebeed_route-156_RU.pdf",
          so: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451d84b7a0e6d80f1346d7_route-156_SO.pdf",
          "es-US": "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451d818bf24b7eb842ae7a_route-156_es-US.pdf",
          ti: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451d84d00829a1f4f92e22_route-156_TI.pdf",
          tl: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451d84c25fad26d36876cd_route-156_TL.pdf",
          uk: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451d856c4a58bf35622d19_route-156_UK.pdf",
          vi: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451d85817d11343fd3fb92_route-156_VI.pdf"
        },
        '162': {
          am: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451e94b7a0e6d80f141cf4_route-162_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451e94c5a8b86d7669c586_route-162_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451e97cd6611a047e2363f_route-162_zh-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451e978bf24b7eb843d638_route-162_zh-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451e94d2127c5de0e90922_route-162_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/672164d4838de6c07b6b08c7_route-162_en.pdf',
          fr: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451e94817d11343fd4d3f1_route-162_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451e95dc8cc80af376cf78_route-162_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451e955580d80aca95a1e6_route-162_RU.pdf',
          so: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451e9503b39e50aea6c021_route-162_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451e941a185c93dda7af72_route-162_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451e95cd6611a047e2353f_route-162_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451e956e6f4daeb00bdb6f_route-162_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451e95d00829a1f4fa230f_route-162_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451e966a2a93f9ea8ba380_route-162_VI.pdf'
        },
        '164': {
          am: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451f58c25fad26d36a1a89_route-164_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451f58f10a7e11f01bb47b_route-64_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451f5bf10a7e11f01bb802_route-164_zh-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451f5b5f9c23ada05afef0_route-164_zh-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451f58031d06b66e9c0c9f_route-164_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/672164d375cd527d9399b6ca_route-164_en.pdf',
          fr: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451f58852e524dc34eecca_route-164_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451f584fe7477ae48baffa_route-164_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451f59a0a49feef0e1847f_route-164_RU.pdf',
          so: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451f591a185c93dda84b2c_route-164_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451f57322e6efdb28243da_route-164_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451f593248cbc157b0d13a_route-164_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451f59c25fad26d36a1b36_route-164_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451f5903b39e50aea755f2_route-164_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67451f5a38dc631e3be9ac0c_route-164_VI.pdf'
        },
        '166': {
          am: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674530bb24f3acda203d63ec_route-166_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674530bb43745be872388935_route-166_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674530be788930aa2f54cffe_route-166_zh-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674530beb4f0e9ac32662cb7_route-166_zh-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674530bb788930aa2f54cea6_route-166_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/672164d32a623b743960bda3_route-166_en.pdf',
          fr: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674530bb2851e09afbb49096_route-166_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674530bbbd17091a028f8b5e_route-166_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674530bcb4f0e9ac326629a3_route-166_RU.pdf',
          so: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674530bc982d0763baa03106_route-166_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674530ba0caab977ae804abc_route-166_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674530bc0caab977ae804b7f_route-166_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674530bcf21b99b881ce531c_route-166_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674530bcf29e218d178cdb9f_route-166_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674530bd488dd33f2e1044dc_route-166_VI.pdf'
        },
        '183': {
          am: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674531c2d6fc38dbf04c585e_route-183_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674531c23174905cc5039165_route-183_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674531c4b892dc12fab3982c_route-183_zh-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674531c50caab977ae810615_route-183_zh-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674531c2546671a06d1033a2_route-183_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/671c14861d99333b3fad486a_route-183.pdf',
          fr: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674531c202dc9546face6891_route-183_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674531c367670e6da346ff50_route-183_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674531c4d12daad13d95ceb3_route-183_RU.pdf',
          so: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674531c307e20712e3b4ca29_route-183_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674531c22eca0f83b47242af_route-183_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674531c30caab977ae810481_route-183_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674531c302dc9546face6f3c_route-183_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674531c33174905cc50391e3_route-183_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674531c5aeeadad28a94ef14_route-183_VI.pdf'
        },
        '631': {
          am: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745329a1fa30d6722448f5a_route-631_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745329a3174905cc504250b_route-631_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745329de1f2691b78d1bd41_route-631_zh-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745329d73dd01e7442d79e2_route-631_zh-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745329aaf95dc031ea0be64_route-631_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/671c1486ab56ed807da4818c_route-631.pdf',
          fr: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745329a07181355198cd86e_route-631_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745329b1fa30d6722448fdc_route-631_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745329c546671a06d10ef5f_route-631_RU.pdf',
          so: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745329c3174905cc50426c5_route-631_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674532993df247d71c9d2db0_route-631_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745329c43745be8723a0f08_route-631_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745329cd12daad13d966dd5_route-631_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745329c1fa30d6722449078_route-631_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745329d09389f3853a836a0_route-631_VI.pdf'
        }
      },
      south: {
        '181': {
          am: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745335aa897c6031c9a7168_route-181_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745335ff324267dc7ae4387_route-181_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745335f29e4d192c7a0a478_route-181_zh-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745335f43745be8723aa68e_route-181_zh-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745335a717e6acaf5fe0857_route-181_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745335aaeeadad28a9619ed_route-181_EN.pdf',
          fr: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745335a07e20712e3b5cba9_route-181_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745335aa897c6031c9a716d_route-181_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745335a2eca0f83b4736704_route-181_RU.pdf',
          so: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745335b717e6acaf5fe0966_route-181_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453359982d0763baa21972_route-181_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745335c869c142763ca418d_route-181_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745335c07181355198d51a3_route-181_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745335c07181355198d5347_route-181_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745335c24f3acda203f861e_route-181_VI.pdf'
        },
        '182': {
          am: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453445788930aa2f57c543_route-182_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745344524f3acda20405c6b_route-182_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453449b892dc12fab55ccc_route-182_zh-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745344a4ed4dbd3425ef912_route-182_zh-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453446d6fc38dbf04e5e17_route-182_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/671c149460d3716eb8d43381_route-182.pdf',
          fr: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453447bd95853a72ce0451_route-182_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674534480caab977ae82ebd5_route-182_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674534453f184caff6563daa_route-182_RU.pdf',
          so: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453447982d0763baa301a2_route-182_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674534453df247d71c9e74fe_route-182_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453448c8acf2e41cda9139_route-182_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453448064961eddcec5f24_route-182_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453448c8acf2e41cda9136_route-182_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453449f324267dc7aef3cc_route-182_VI.pdf'
        },
        '186': {
              am: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674534f40ed32028e723785f_route-186_EN.pdf',
              ar: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674534f4aeeadad28a976fc2_route-186_AR.pdf',
              'zh-CN': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674534f8f324267dc7af84b4_route-186_zh-CN.pdf',
              'zh-TW': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674534f867670e6da3495a0c_route-186_zh-TW.pdf',
              'fa-AF': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674534f43df247d71c9f0754_route-186_fa-AF.pdf',
              en: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674534f40ed32028e723785f_route-186_EN.pdf',
              fr: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674534f429e4d192c7a21d50_route-186_FR.pdf',
              ko: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674534f5d6fc38dbf04eff26_route-186_KO.pdf',
              ru: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674534f6bd95853a72ce8aa1_route-186_RU.pdf',
              so: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674534f602dc9546fad0fc34_route-186_SO.pdf',
              'es-US': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674534f40ed32028e723785f_route-186_EN.pdf',
              ti: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674534f63174905cc505e87c_route-186_TI.pdf',
              tl: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674534f6f29e218d17902886_route-186_TL.pdf',
              uk: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674534f6cf4879613419d105_route-186_UK.pdf',
              vi: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674534f7982d0763baa38418_route-186_VI.pdf'
        },
        '187': {
          am: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745358af29e218d17908bda_route-187_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745358ab4f0e9ac3269c4cd_route-187_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745358e09389f3853aadf05_route-187_zh-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745358dc8acf2e41cdb76d4_route-187_zh-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745358ae1f2691b78d43652_route-187_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745358aaeeadad28a97dc61_route-187_EN.pdf',
          fr: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745358a3df247d71c9f6bfc_route-187_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745358a84a493076eb67278_route-187_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745358bbd95853a72cf284a_route-187_RU.pdf',
          so: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745358bf324267dc7aff6a2_route-187_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453589af95dc031ea32ef5_route-187_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745358bbd17091a0293b605_route-187_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745358bbd17091a0293b60a_route-187_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745358b6398e79b4c925bf5_route-187_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745358cca3f6bdf6fcb7388_route-187_VI.pdf'
        },
        '193': {
          am: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745360bf324267dc7b07cad_route-193_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745360b3f184caff6579622_route-193_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745360e43745be8723da6ca_route-193_zh-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745360ee8d1c4330d562046_route-193_zh-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745360b43c879414ebb2b76_route-193_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/671c1495e735546784ac9e03_route-193.pdf',
          fr: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745360b29e4d192c7a2e7a3_route-193_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745360cf324267dc7b07d5d_route-193_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745360c488dd33f2e1508c3_route-193_RU.pdf',
          so: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745360ca897c6031c9c901f_route-193_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745360b09389f3853ab3e87_route-193_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745360d2eca0f83b4759815_route-193_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745360db4f0e9ac326a29e5_route-193_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745360d29e4d192c7a2e8a0_route-193_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745360ed6fc38dbf04fd43d_route-193_VI.pdf'
        },
        '903': {
          am: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745369e43c879414ebb8fae_route-903_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745369f064961eddcee4604_route-903_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674536a2ca3f6bdf6fcc46ad_route-903_zh-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674536a2064961eddcee4880_route-903_zh-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745369ff324267dc7b0f189_route-903_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/671c1496bf59a98f12f82214_route-903.pdf',
          fr: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745369eb892dc12fab72b7c_route-903_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674536a002dc9546fad25e6f_route-903_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674536a0ac4472b2c6e25abb_route-903_RU.pdf',
          so: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674536a0788930aa2f5999a9_route-903_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745369e36bd75345507cfc1_route-903_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674536a1c8acf2e41cdc6775_route-903_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674536a1717e6acaf5007b21_route-903_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674536a107e20712e3b86743_route-903_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674536a2e2429290fdd6e10f_route-903_VI.pdf'
        },
        'a-line': {
          am: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453770064961eddcef0d38_a-line_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453770717e6acaf5013761_a-line_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453773f21b99b881d3b263_a-line_zh-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453773bd17091a02952680_a-line_zh-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453770aeeadad28a999336_a-line_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/671c149486f75b31ac5d5417_a-line.pdf',
          fr: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453770aeeadad28a999339_a-line_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453771b892dc12fab7d3fe_a-line_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745377207e20712e3b943a9_a-line_RU.pdf',
          so: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453771af95dc031ea4bc5a_a-line_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745377009389f3853ac7f44_a-line_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745377624f3acda2042ee35_a-line_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745377102dc9546fad31394_a-line_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453772cf487961341c12d1_a-line_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/6745377243745be8723ee749_a-line_VI.pdf'
        },
        'south-auburn-metro-flex': {
          am: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674539562eca0f83b4781e16_route-s-auburn-metro-flex_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453956f29e218d1793af1a_route-s-auburn-metro-flex_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453959ac4472b2c6e45acf_route-s-auburn-metro-flex_zh-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453959982d0763baa699dc_route-s-auburn-metro-flex_zh-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453956982d0763baa69865_route-s-auburn-metro-flex_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453956af95dc031ea643e7_route-s-auburn-metro-flex_EN.pdf',
          fr: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453956e2429290fdd8f16a_route-s-auburn-metro-flex_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674539560718135519927b0f_route-s-auburn-metro-flex_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453957ac4472b2c6e459d4_route-s-auburn-metro-flex_RU.pdf',
          so: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674539573df247d71ca2dec3_route-s-auburn-metro-flex_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453956aeeadad28a9b3b74_route-s-auburn-metro-flex_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453957488dd33f2e17ae6d_route-s-auburn-metro-flex_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453957e1f2691b78d79223_route-s-auburn-metro-flex_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453957546671a06d16908a_route-s-auburn-metro-flex_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/67453958788930aa2f5bb019_route-s-auburn-metro-flex_VI.pdf'
        },
        'federal-way-metro-flex': {
          am: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674539e43df247d71ca35ee4_route-fed-way-metro-flex_AM.pdf',
          ar: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674539e3788930aa2f5c334d_route-fed-way-metro-flex_AR.pdf',
          'zh-CN': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674539e607e20712e3bb927d_route-fed-way-metro-flex_zh-CN.pdf',
          'zh-TW': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674539e6488dd33f2e1814c6_route-fed-way-metro-flex_zh-TW.pdf',
          'fa-AF': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674539e3d12daad13d9beeb6_route-fed-way-metro-flex_fa-AF.pdf',
          en: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674539e3546671a06d16fa10_route-fed-way-metro-flex_EN.pdf',
          fr: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674539e33f184caff65aa6b5_route-fed-way-metro-flex_FR.pdf',
          ko: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674539e3b4f0e9ac326d2373_route-fed-way-metro-flex_KO.pdf',
          ru: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674539e4af95dc031ea6c064_route-fed-way-metro-flex_RU.pdf',
          so: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674539e4f29e218d17940bab_route-fed-way-metro-flex_SO.pdf',
          'es-US': 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674539e2c8acf2e41cded590_route-fed-way-metro-flex_es-US.pdf',
          ti: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674539e402dc9546fad55917_route-fed-way-metro-flex_TI.pdf',
          tl: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674539e4ac18968e81e9d6e5_route-fed-way-metro-flex_TL.pdf',
          uk: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674539e46398e79b4c960d0d_route-fed-way-metro-flex_UK.pdf',
          vi: 'https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/674539e5b4f0e9ac326d2673_route-fed-way-metro-flex_VI.pdf'
        }
      }
    },
  };

  const URL_PATHS = {
    surveys: {
      main: {
        am: "https://kcit.qualtrics.com/jfe/form/SV_6zHgqlMVYJuM9x4",
        ar: "https://kcit.qualtrics.com/jfe/form/SV_6zHgqlMVYJuM9x4",
        en: "https://kcit.qualtrics.com/jfe/form/SV_6zHgqlMVYJuM9x4",
        ko: "https://kcit.qualtrics.com/jfe/form/SV_6zHgqlMVYJuM9x4",
        ru: "https://kcit.qualtrics.com/jfe/form/SV_6zHgqlMVYJuM9x4",
        "zh-CN": "https://kcit.qualtrics.com/jfe/form/SV_6zHgqlMVYJuM9x4",
        so: "https://kcit.qualtrics.com/jfe/form/SV_6zHgqlMVYJuM9x4",
        "es-US": "https://kcit.qualtrics.com/jfe/form/SV_6zHgqlMVYJuM9x4",
        tl: "https://kcit.qualtrics.com/jfe/form/SV_6zHgqlMVYJuM9x4",
        "zh-TW": "https://kcit.qualtrics.com/jfe/form/SV_6zHgqlMVYJuM9x4",
        uk: "https://kcit.qualtrics.com/jfe/form/SV_6zHgqlMVYJuM9x4",
        vi: "https://kcit.qualtrics.com/jfe/form/SV_6zHgqlMVYJuM9x4",
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
        am: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a0a8025a1033981cda1_P2SLC_CurrPropSidebySide_AM.pdf",
        ar: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a0a69597b463fdeb70c_P2SLC_CurrPropSidebySide_AR.pdf",
        "zh-CN":
          "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a09dc4ad6a7c4f1d30e_P2SLC_CurrPropSidebySide_zh-CN.pdf",
        "zh-TW":
          "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a0e4903f84c981c6d11_P2SLC_CurrPropSidebySide_zh-TW.pdf",
        "fa-AF":
          "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a0a8ba607c604f98b9d_P2SLC_CurrPropSidebySide_fa-AF.pdf",
        en: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a90f4d641e782b6019c_P2SLC_CurrPropSidebySide_EN.pdf",
        fr: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a0a24ce4848d1301aed_P2SLC_CurrPropSidebySide_FR.pdf",
        ko: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a0c4903f84c981c6b6e_P2SLC_CurrPropSidebySide_KO.pdf",
        ru: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a0c95aadbccb069ed34_P2SLC_CurrPropSidebySide_RU.pdf",
        so: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a0c710b843f9a2a153b_P2SLC_CurrPropSidebySide_SO.pdf",
        "es-US":
          "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a0afdcf2d0998b39c5d_P2SLC_CurrPropSidebySide_es-US.pdf",
        ti: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a0c6e314f09727d649e_P2SLC_CurrPropSidebySide_TI.pdf",
        tl: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a109aa0efa0f07c40d6_P2SLC_CurrPropSidebySide_TL.pdf",
        uk: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a0e838d6c1f67922e44_P2SLC_CurrPropSidebySide_UK.pdf",
        vi: "https://cdn.prod.website-files.com/65c5126e78e56fdf5f559839/673e5a0d95aadbccb069ee26_P2SLC_CurrPropSidebySide_VI.pdf",
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
