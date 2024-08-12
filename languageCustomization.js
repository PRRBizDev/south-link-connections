document.addEventListener("DOMContentLoaded", function () {
  const languagesData = {
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
    en: {
      code: "en",
      name: "English",
      nativeName: "English",
      twoLettersCode: "en",
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
      nativeName: "Soomaali",
      twoLettersCode: "so",
    },
    "es-US": {
      code: "es-US",
      name: "Spanish",
      nativeName: "Español",
      twoLettersCode: "es",
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

  function handlePopupVisibility() {
    const hasVisited = localStorage.getItem("hasVisited");
    const modal = document.getElementById("pop-up");
    if (!hasVisited) {
      modal.style.display = "flex";
      localStorage.setItem("hasVisited", "true");
    } else {
      modal.style.display = "none";
    }
  }

  handlePopupVisibility();

  function createLanguageLink(lang) {
    const link = document.createElement("a");
    link.href = `/?lng=${lang.code}`;
    link.className = "navbar_dropdown-link w-dropdown-link";
    if (lang.code === "en" || lang.code === "tl") {
      link.textContent = `${lang.nativeName}`;
    } else {
      link.textContent = `${lang.nativeName} (${lang.name})`;
    }
    link.dataset.langCode = lang.code;
    return link;
  }

  function populateLanguagesDropdown() {
    const dropdown = document.querySelector(".navbar_dropdown-list");
    dropdown.innerHTML = "";

    Object.values(languagesData).forEach((lang) => {
      const link = createLanguageLink(lang);
      dropdown.appendChild(link);
      link.addEventListener("click", (e) => {
        e.preventDefault();
        updateNavbarLanguageDisplay(lang.code);
        window.location.search = `?lng=${lang.code}`;
      });
    });
  }

  function updateNavbarLanguageDisplay(langCode) {
    const selectedLang = languagesData[langCode];
    if (selectedLang) {
      const displayElement = document.querySelector(
        ".navbar_dropdown-toggle > div"
      );
      if (displayElement) {
        if (langCode === "en" || langCode === "tl") {
          displayElement.textContent = `${selectedLang.nativeName}`;
        } else {
          displayElement.textContent = `${selectedLang.nativeName} (${selectedLang.name})`;
        }
      }
    }
  }

  function getCurrentLanguage() {
    const savedLangCode = localStorage.getItem("selectedLanguage");
    if (savedLangCode) {
      return savedLangCode;
    }
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("lng") || "en";
  }

  function setInitialLanguageDisplay() {
    const currentLangCode = getCurrentLanguage();
    updateNavbarLanguageDisplay(currentLangCode);
  }

  populateLanguagesDropdown();
  setInitialLanguageDisplay();

  function closeModal() {
    const modal = document.getElementById("pop-up");
    if (modal) modal.style.display = "none";
  }

  const closeButton = document.querySelector(".modal_close-button");
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      closeModal();
    });
  }

  function updateLayoutForLanguage(langCode) {
    const isRtl = ["ar"].includes(langCode);
    document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");
    document.documentElement.classList.toggle("rtl", isRtl);
  }

  /* const surveyLinks = {
    "am": "https://kcit.qualtrics.com/jfe/form/SV_cYGn3gSfhUiyF3E",
    "ar": "https://kcit.qualtrics.com/jfe/form/SV_0lfrBNTfQGDAToq",
    "en": "https://kcit.qualtrics.com/jfe/form/SV_2mzgA4jKokOT0Ts",
    "ko": "https://kcit.qualtrics.com/jfe/form/SV_8uYszKNJ4v5Joii",
    "ru": "https://kcit.qualtrics.com/jfe/form/SV_868q1TEhm5GnCXI",
    "zh-CN": "https://kcit.qualtrics.com/jfe/form/SV_3g5v5mmBSj7Louq",
    "so": "https://kcit.qualtrics.com/jfe/form/SV_7418lrrcCDaLwW2",
    "es-US": "https://kcit.qualtrics.com/jfe/form/SV_9Mr5oOm3BXvNsxw",
    "tl": "https://kcit.qualtrics.com/jfe/form/SV_0ijehZ52TaKqJxk",
    "zh-TW": "https://kcit.qualtrics.com/jfe/form/SV_8hUoSWFmU5JBw7s",
    "uk": "https://kcit.qualtrics.com/jfe/form/SV_09zFpOuonY750Z8",
    "vi": "https://kcit.qualtrics.com/jfe/form/SV_6A93EyIhPW9OLHM"
  };

  const mobilityBoardAppLinks = {
    "am": "https://www.surveymonkey.com/r/SLCmobilityboard_am",
    "ar": "https://www.surveymonkey.com/r/SLCmobilityboard_ar",
    "en": "https://www.surveymonkey.com/r/SLCmobilityboard",
    "ko": "https://www.surveymonkey.com/r/SLCmobilityboard_ko",
    "ru": "https://www.surveymonkey.com/r/SLCmobilityboard_ru",
    "zh-CN": "https://www.surveymonkey.com/r/SLCmobilityboard_zh-sim",
    "so": "https://www.surveymonkey.com/r/SLCmobilityboard_so",
    "es-US": "https://www.surveymonkey.com/r/SLCmobilityboard_es",
    "tl": "https://www.surveymonkey.com/r/SLCmobilityboard_tl",
    "zh-TW": "https://www.surveymonkey.com/r/SLCmobilityboard_zh-tr",
    "uk": "https://www.surveymonkey.com/r/SLCmobilityboard_uk",
    "vi": "https://www.surveymonkey.com/r/SLCmobilityboard_vi"
  };

  */

  const pdfLinks = {
    en: "https://uploads-ssl.webflow.com/65c5126e78e56fdf5f559839/65ea01fdbc0dd8207e50d801_KCM_S%20Link%20Connections_Map.pdf",
    uk: "https://uploads-ssl.webflow.com/65c5126e78e56fdf5f559839/65f37dddb1dc23bbdc2cd0e1_map_uk.pdf",
    "es-US":
      "https://uploads-ssl.webflow.com/65c5126e78e56fdf5f559839/65f37dde8320abd451c5a1ad_map_es.pdf",
    so: "https://uploads-ssl.webflow.com/65c5126e78e56fdf5f559839/65f4aac84f142a4a1451bf38_map_so.pdf",
    "zh-CN":
      "https://uploads-ssl.webflow.com/65c5126e78e56fdf5f559839/65f37ddef61b9473f213d202_map_zh-cn.pdf",
    ru: "https://uploads-ssl.webflow.com/65c5126e78e56fdf5f559839/65f37de07f04148da29752a5_map_ru.pdf",
    "zh-TW":
      "https://uploads-ssl.webflow.com/65c5126e78e56fdf5f559839/65f37ddedc8f2d3a4ab80db3_map_zh-tw.pdf",
    am: "https://uploads-ssl.webflow.com/65c5126e78e56fdf5f559839/65f4aac8507b564729dde9e1_map_am.pdf",
    vi: "https://uploads-ssl.webflow.com/65c5126e78e56fdf5f559839/65f37dde3ec059d9f1b87c19_map_vi.pdf",
    ko: "https://uploads-ssl.webflow.com/65c5126e78e56fdf5f559839/65f37dddf61b9473f213d1d0_map_ko.pdf",
    tl: "https://uploads-ssl.webflow.com/65c5126e78e56fdf5f559839/65f4aac8d951be63c92ada8b_map_tl.pdf",
    ar: "https://uploads-ssl.webflow.com/65c5126e78e56fdf5f559839/65f4aac884de1ff1964a1a67_map_ar.pdf",
  };

  const routeImages = {
    en: "https://assets-global.website-files.com/65c5126e78e56fdf5f559839/65ea0c0714b9d70110633bcf_metro-south-link-connections-map.webp",
    ru: "https://uploads-ssl.webflow.com/65c5126e78e56fdf5f559839/65f37a58bab6cf20c4219106_KCM_S-Link-Connections_Map_RU.webp",
    am: "https://uploads-ssl.webflow.com/65c5126e78e56fdf5f559839/65f4abe285f345f4972f7215_KCM_S-Link-Connections_Map_AM.webp",
    ar: "https://uploads-ssl.webflow.com/65c5126e78e56fdf5f559839/65f4abe25648396c9378a8c4_KCM_S-Link-Connections_Map_AR.webp",
    "es-US":
      "https://uploads-ssl.webflow.com/65c5126e78e56fdf5f559839/65f37a59c1b3571171f911ad_KCM_S-Link-Connections_Map_ES.webp",
    ko: "https://uploads-ssl.webflow.com/65c5126e78e56fdf5f559839/65f37ab2e0e62d5bfeed1864_KCM_S-Link-Connections_Map_KO.webp",
    uk: "https://uploads-ssl.webflow.com/65c5126e78e56fdf5f559839/65f37a716c43f4c22c7ccd0a_KCM_S-Link-Connections_Map_UK.webp",
    so: "https://uploads-ssl.webflow.com/65c5126e78e56fdf5f559839/65f4abe2c2e38c80c7118e9d_KCM_S-Link-Connections_Map_SO.webp",
    "zh-TW":
      "https://uploads-ssl.webflow.com/65c5126e78e56fdf5f559839/65f37a58dc3a3c4088c89351_KCM_S-Link-Connections_Map_ZH_TW.webp",
    tl: "https://uploads-ssl.webflow.com/65c5126e78e56fdf5f559839/65f4abe27a1a3156cb38a452_KCM_S-Link-Connections_Map_TA.webp",
    "zh-CN":
      "https://uploads-ssl.webflow.com/65c5126e78e56fdf5f559839/65f37a7ea55dd9a25a97c1f4_KCM_S-Link-Connections_Map_ZH_CN.webp",
    vi: "https://uploads-ssl.webflow.com/65c5126e78e56fdf5f559839/65f37a58795af325ec3193fb_KCM_S-Link-Connections_Map_VI.webp",
  };

  /* function updateSurveyLink(langCode) {
    const selectedSurveyLink = surveyLinks[langCode];
    if (selectedSurveyLink) {
      document.querySelectorAll('.survey-link').forEach(link => {
        link.href = selectedSurveyLink;
      });
    }
  }

  function updateMobilityBoardAppLink(langCode) {
    const selectedAppLink = mobilityBoardAppLinks[langCode];
    if (selectedAppLink) {
      document.querySelectorAll('.mobility-board-application-link').forEach(link => {
        link.href = selectedAppLink;
      });
    }
  } */

  function updatePdfLink(langCode) {
    const selectedPdfLink = pdfLinks[langCode];
    if (selectedPdfLink) {
      document.querySelectorAll(".pdf-view-button").forEach((button) => {
        button.href = selectedPdfLink;
      });
    }
  }

  function updateRouteImage(langCode) {
    const selectedRouteImage = routeImages[langCode];
    if (selectedRouteImage) {
      const routeImage = document.querySelector(".route_image");
      if (routeImage) {
        routeImage.src = `${selectedRouteImage}?${new Date().getTime()}`;
        routeImage.srcset = `${selectedRouteImage}?${new Date().getTime()}`;
      }
    }
  }

  function handleLanguageSelection(langCode) {
    localStorage.setItem("selectedLanguage", langCode);
    updateNavbarLanguageDisplay(langCode);
    /* updateSurveyLink(langCode);
    updateMobilityBoardAppLink(langCode); */
    updatePdfLink(langCode);
    updateRouteImage(langCode);
    updateLayoutForLanguage(langCode);
    closeModal();
    window.location.search = `?lng=${langCode}`;
  }

  const currentLangCode = getCurrentLanguage();
  updateNavbarLanguageDisplay(currentLangCode);
  /* updateSurveyLink(currentLangCode);
  updateMobilityBoardAppLink(currentLangCode); */
  updatePdfLink(currentLangCode);
  updateRouteImage(currentLangCode);
  updateLayoutForLanguage(currentLangCode);

  document
    .querySelectorAll(".modal_link, .navbar_dropdown-link")
    .forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const langCode = this.dataset.langCode;
        handleLanguageSelection(langCode);
      });
    });

  const selectedLanguage = localStorage.getItem("selectedLanguage");
  if (selectedLanguage) {
    closeModal();
  }
});
