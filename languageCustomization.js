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
            en: "/maps/areas/south/current/map_en.jpg",
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
            en: "/maps/areas/south/proposed/map_en.jpg",
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
      flex: {
        am: "/routes/flex/route_am.pdf",
        ar: "/routes/flex/route_ar.pdf",
        "zh-CN": "/routes/flex/route_zh-CN.pdf",
        "zh-TW": "/routes/flex/route_zh-TW.pdf",
        "fa-AF": "/routes/flex/route_fa-AF.pdf",
        en: "/routes/flex/route_en.pdf",
        fr: "/routes/flex/route_fr.pdf",
        ko: "/routes/flex/route_ko.pdf",
        ru: "/routes/flex/route_ru.pdf",
        so: "/routes/flex/route_so.pdf",
        "es-US": "/routes/flex/route_es-US.pdf",
        ti: "/routes/flex/route_ti.pdf",
        tl: "/routes/flex/route_tl.pdf",
        uk: "/routes/flex/route_uk.pdf",
        vi: "/routes/flex/route_vi.pdf",
      },
      "rapid-ride": {
        am: "/routes/rapid-ride/route_am.pdf",
        ar: "/routes/rapid-ride/route_ar.pdf",
        "zh-CN": "/routes/rapid-ride/route_zh-CN.pdf",
        "zh-TW": "/routes/rapid-ride/route_zh-TW.pdf",
        "fa-AF": "/routes/rapid-ride/route_fa-AF.pdf",
        en: "/routes/rapid-ride/route_en.pdf",
        fr: "/routes/rapid-ride/route_fr.pdf",
        ko: "/routes/rapid-ride/route_ko.pdf",
        ru: "/routes/rapid-ride/route_ru.pdf",
        so: "/routes/rapid-ride/route_so.pdf",
        "es-US": "/routes/rapid-ride/route_es-US.pdf",
        ti: "/routes/rapid-ride/route_ti.pdf",
        tl: "/routes/rapid-ride/route_tl.pdf",
        uk: "/routes/rapid-ride/route_uk.pdf",
        vi: "/routes/rapid-ride/route_vi.pdf",
      },
      standard: {
        am: "/routes/standard/route_am.pdf",
        ar: "/routes/standard/route_ar.pdf",
        "zh-CN": "/routes/standard/route_zh-CN.pdf",
        "zh-TW": "/routes/standard/route_zh-TW.pdf",
        "fa-AF": "/routes/standard/route_fa-AF.pdf",
        en: "/routes/standard/route_en.pdf",
        fr: "/routes/standard/route_fr.pdf",
        ko: "/routes/standard/route_ko.pdf",
        ru: "/routes/standard/route_ru.pdf",
        so: "/routes/standard/route_so.pdf",
        "es-US": "/routes/standard/route_es-US.pdf",
        ti: "/routes/standard/route_ti.pdf",
        tl: "/routes/standard/route_tl.pdf",
        uk: "/routes/standard/route_uk.pdf",
        vi: "/routes/standard/route_vi.pdf",
      },
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
