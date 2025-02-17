/**
 * Google Drive පින්තූර ලබා ගැනීම සඳහා:
 *   https://drive.google.com/uc?export=view&id=IMAGE_ID
 * ලෙස URL සකසා ගන්න.
 */

/** 
 * ඔබගේ සියලු පින්තූර data මෙහි එකතු කරන්න.
 * category: කැටගරි නාමය
 * src: පින්තූරය ඇති URL (ඔබගේ Google Drive ID එක භාවිතා කර build කළ link)
 */
const allImages = [

    // ------------------ Anime ------------------
    { category: "anime", src: "https://drive.google.com/thumbnail?id=1DQRX9CTeWkprpL37FNBSYEnNq2XecUpV" },
    { category: "anime", src: "https://drive.google.com/thumbnail?id=1NcIIVmznnli6Ikzw4acfflW9LCmlwsYf" },
    { category: "anime", src: "https://drive.google.com/thumbnail?id=1ygmxOFugTPuP3k-oU5RTrsy56Smmgkoo" },
    { category: "anime", src: "https://drive.google.com/thumbnail?id=14DPqYSLPCmYH4_zPbN3x1uY8Kd5LvrHS" },
    { category: "anime", src: "https://drive.google.com/thumbnail?id=1X-Ve4CzOD0TShLLili2ByHySsHYiGL4Y" },
    { category: "anime", src: "https://drive.google.com/thumbnail?id=10-pb4tFAwzR3fdtbkKh7ueEqVmxr5EnW" },
    { category: "anime", src: "https://drive.google.com/thumbnail?id=1L_Ncshi8OLmH1Ckrr-lBjifeNwoCD_zL" },
    { category: "anime", src: "https://drive.google.com/thumbnail?id=1egbYvZUXFmB0uxCZGAIzfhkg_UsUfwi3" },
    { category: "anime", src: "https://drive.google.com/thumbnail?id=1uNCG8QOhcKNJ4vg5KCur6R0sbfdz2A9h" },
    { category: "anime", src: "https://drive.google.com/thumbnail?id=1aRkLJ6LG-u54XBnyz4hEcT-VpkpLwkxR" },
    { category: "anime", src: "https://drive.google.com/thumbnail?id=1aFZ1qUSd96kJGwF08H5A8pYvk84mt7mY" },
    { category: "anime", src: "https://drive.google.com/thumbnail?id=1TqFmHlBJeLNT2kJDvhw0G4vMR1RKD5zU" },
    { category: "anime", src: "https://drive.google.com/thumbnail?id=15KO5etvcf_6b6UnGOGnVw-HkM3meQtav" },
    { category: "anime", src: "https://drive.google.com/thumbnail?id=1ld-Sr_9bi64oKIR21x97jTI9u2R3mrGl" },
    { category: "anime", src: "https://drive.google.com/thumbnail?id=1trbThS5euWYPM_dtXTWspzFMnQSNqMeO" },
    { category: "anime", src: "https://drive.google.com/thumbnail?id=15kFXyFVJwZbqc9dSUfsqGPuxwM7gEFbF" },
    { category: "anime", src: "https://drive.google.com/thumbnail?id=16PMKqSBpIiKY75TaJyyOZ4ruS9WXjf5t" },
    { category: "anime", src: "https://drive.google.com/thumbnail?id=1ShGDc6CNlzgGa43Cd43-NAEGfiFovCXF" },
    { category: "anime", src: "https://drive.google.com/thumbnail?id=11fmozR4LIpouuy3PkVYZj_Rw4a30Zxr6" },
    { category: "anime", src: "https://drive.google.com/thumbnail?id=1m5_D94nXkjSxlSLrdGsG-Ph58DaH2vjO" },
  
    // ------------------ Costume ------------------
    { category: "costume", src: "https://drive.google.com/thumbnail?id=1FbHr8JDixTuxAzZ1lAjR8bZAwLtRUCTf" },
    { category: "costume", src: "https://drive.google.com/thumbnail?id=10Jq2pItYPc_15y9FbrqsErsyjf1R34m6" },
    { category: "costume", src: "https://drive.google.com/thumbnail?id=1f-CObvo4BdP1lFEqs3XszA07PjdPLMwb" },
    { category: "costume", src: "https://drive.google.com/thumbnail?id=1YLewdIp8wFs4rGRSZqK9RSkEpn7SrV5i" },
    { category: "costume", src: "https://drive.google.com/thumbnail?id=1GLvOnNOKx5jRRdlmLbumxprocnmPbfcA" },
    { category: "costume", src: "https://drive.google.com/thumbnail?id=1Pzi2_nq5e8-4mr2ce4CTiXK31BXe6mD8" },
    { category: "costume", src: "https://drive.google.com/thumbnail?id=11XC7U6cb9juHRpelYiGWwIn-yTXyI2-W" },
    { category: "costume", src: "https://drive.google.com/thumbnail?id=1sGOXT1RQnVa2lSdFVazH_N9kB-So8WEK" },
    { category: "costume", src: "https://drive.google.com/thumbnail?id=1QDTD9N8Ss5WrStn4PBA73Z5bD3lg6F7R" },
    { category: "costume", src: "https://drive.google.com/thumbnail?id=1t1PTrxsvzbaQY6v4_YWPEatURJUejNIV" },
    { category: "costume", src: "https://drive.google.com/thumbnail?id=1Irpojh-bNVZC04mih44gFgWHZIBFvupe" },
    { category: "costume", src: "https://drive.google.com/thumbnail?id=1aMovYqT0Grm6KBbgucTD9a8B5TcdE4nV" },
    { category: "costume", src: "https://drive.google.com/thumbnail?id=1nRetJX59hE066W96Pw0tT2xc7aoV9Ok2" },
    { category: "costume", src: "https://drive.google.com/thumbnail?id=17LbBWSH8EKVXTngS1QrLPbhs1kE9ql6G" },
    { category: "costume", src: "https://drive.google.com/thumbnail?id=1mCY90rb29etBa4i4yYjN5mkXpAS2Ug6E" },
    { category: "costume", src: "https://drive.google.com/thumbnail?id=1ZLJUIlncRsEV5kpcRBKd5xmUSdQUhH4q" },
    { category: "costume", src: "https://drive.google.com/thumbnail?id=1A80mL8GJhuYcIjlUmKiDFwEHwKuqvm-F" },
    { category: "costume", src: "https://drive.google.com/thumbnail?id=1dceIjtz8pkDI6kg-Hm_CRJ-PikVZfstW" },
    { category: "costume", src: "https://drive.google.com/thumbnail?id=1uD5NSs-u86LkGzNgbBqjPdfV5ei4ADbB" },
    { category: "costume", src: "https://drive.google.com/thumbnail?id=1ElHRGn8xhv2HyhtWnlmX3qaGUfO2SAQf" },
  
    // ------------------ Drink ------------------
    { category: "drink", src: "https://drive.google.com/thumbnail?id=1S9nEB0Sr9UEnysWH_3DAV_IxRZfaPJiE" },
    { category: "drink", src: "https://drive.google.com/thumbnail?id=1WF-OdJhPPfNf9ch8oh27lyivxG3me9ki" },
    { category: "drink", src: "https://drive.google.com/thumbnail?id=1j-NhKpkLoaIgPnejOuNneVl2TSo9VpRG" },
    { category: "drink", src: "https://drive.google.com/thumbnail?id=1ktzOFaH-mJ-GQPc9dGfAlfBXK4t7inLk" },
    { category: "drink", src: "https://drive.google.com/thumbnail?id=1Yg0I7DN0IF6m6jokQMOpPrc_NClnIzIZ" },
    { category: "drink", src: "https://drive.google.com/thumbnail?id=1xOaRus6JskNED6AYd5d7FSTEAxyA_PlG" },
    { category: "drink", src: "https://drive.google.com/thumbnail?id=1l3SAiTzQzs65XopQpym-s7pdzO_XYut1" },
    { category: "drink", src: "https://drive.google.com/thumbnail?id=1lUeDykXF1r7nAenmB_As18xz9WT0LntC" },
    { category: "drink", src: "https://drive.google.com/thumbnail?id=1GNGyKr2jQqx_uCswXUniOAbITGGCWieK" },
    { category: "drink", src: "https://drive.google.com/thumbnail?id=1WLzi66G7wzEjX_98HILXHKqH5vY9WN_X" },
    { category: "drink", src: "https://drive.google.com/thumbnail?id=10eywTA4Xkiu42p5utkgFLGkmHWkr5d6I" },
    { category: "drink", src: "https://drive.google.com/thumbnail?id=1E5RdbZ4GO0N3Qr58EaUk_7sWI7Ib3z8Q" },
    { category: "drink", src: "https://drive.google.com/thumbnail?id=1aG0U-wlOMO2c_T-39S73gf4KCXql6gvv" },
    { category: "drink", src: "https://drive.google.com/thumbnail?id=18QL8aW1UtEJ2Di4zzsdTzJjf-Fo2ibb1" },
    { category: "drink", src: "https://drive.google.com/thumbnail?id=14BX4PHXinDZZ0FTiiF65YAuFDemZU6jx" },
    { category: "drink", src: "https://drive.google.com/thumbnail?id=1lat9QZ1o-11NyDAHJ5417jGFzVD7nfrD" },
    { category: "drink", src: "https://drive.google.com/thumbnail?id=1XG1quxv_xWmaRP1xuV6UYIRhgVYG-NUW" },
    { category: "drink", src: "https://drive.google.com/uc?export=view&id=19u37VbJ9Oyx9uOxh7-VZcSb7DBhDi_VQ" },
    { category: "drink", src: "https://drive.google.com/thumbnail?id=1gRz0YVmMIxJqCbatL2evHSAIAnBiX5CH" },
    { category: "drink", src: "https://drive.google.com/thumbnail?id=1kDajzC6HRfAScvTFlteukdlwVyzSI82g" },
  
    // ------------------ Landscape ------------------
    { category: "landscape", src: "https://drive.google.com/thumbnail?id=17M09ja1CcucD3vhuN29g1Scxu_E1lapt" },
    { category: "landscape", src: "https://drive.google.com/thumbnail?id=1olfdGKvSo8IdfjVthnPYtv-QrpU196-l" },
    { category: "landscape", src: "https://drive.google.com/thumbnail?id=1gqFwEGaRz87UspdPBSQYgoLxa0ESdTgg" },
    { category: "landscape", src: "https://drive.google.com/thumbnail?id=1pw9tz6Y6uXtUgKa--hK8tpAr4rbY4KR9" },
    { category: "landscape", src: "https://drive.google.com/thumbnail?id=1NF-fV6WrLIyoz43k3FBUrTzSXvjQBO54" },
    { category: "landscape", src: "https://drive.google.com/thumbnail?id=1CgZxoGFXC9E16e_L0c9Bwi4qQ6wON4BR" },
    { category: "landscape", src: "https://drive.google.com/thumbnail?id=1jQAXiKUwtZUSi23xe5fcyROiyOZTnd3b" },
    { category: "landscape", src: "https://drive.google.com/thumbnail?id=1QlUhU9_Az-b3YDzim0Ow_KDfBbDHt9x7" },
    { category: "landscape", src: "https://drive.google.com/thumbnail?id=1M0ywffs9Qiq1jLgNAZB0lmTYjEyIbr4s" },
    { category: "landscape", src: "https://drive.google.com/thumbnail?id=1nj3gtLhQfdBy30OtyYmIW9VRs9t4Q62v" },
    { category: "landscape", src: "https://drive.google.com/thumbnail?id=1nehWR8Bbyd6wSMdfzRwUrzvwuWHwA_Dd" },
    { category: "landscape", src: "https://drive.google.com/thumbnail?id=1Mz-Sh6AY10kl7NOw124R9PCHikXJgczc" },
    { category: "landscape", src: "https://drive.google.com/thumbnail?id=1-l_5-8dokujY629qu6OmN9BLH1gQ0ngU" },
    { category: "landscape", src: "https://drive.google.com/thumbnail?id=1jwN0ikGuXqPZsdunLzs0ocwpVDY1Lr7X" },
    { category: "landscape", src: "https://drive.google.com/thumbnail?id=1HHEXMP_xhiQcy1DfJYB6zLen9Kd37rq_" },
    { category: "landscape", src: "https://drive.google.com/thumbnail?id=1fJgI66koNb-JJAlOsQ2rpAHiRtU8Nrqh" },
    { category: "landscape", src: "https://drive.google.com/thumbnail?id=1xzD8-esOCCEkFVgjO3yqTN8T90E2Noee" },
    { category: "landscape", src: "https://drive.google.com/thumbnail?id=1lDzrbhsXCzbHiWsm4IIhjkyLDe_ZdXIp" },
    { category: "landscape", src: "https://drive.google.com/thumbnail?id=1Ymr84jYiT3WyG6mXFf7w3AnPXKm34mWs" },
    { category: "landscape", src: "https://drive.google.com/thumbnail?id=19c8p7Wu5Hwwak3isY70OI9PzyOLqACeO" },
  
    // ------------------ Outdoor ------------------
    { category: "outdoor", src: "https://drive.google.com/uc?export=view&id=1h1xA7s0bnPVq6nHcCVVYKnLORbB5acm2" },
    { category: "outdoor", src: "https://drive.google.com/uc?export=view&id=1rbNB_YnA_JO6hMEjUELWvngrmq47aD7-" },
    { category: "outdoor", src: "https://drive.google.com/uc?export=view&id=1XJXHILUWYUlMOKQxjuzaOnT5I11muNvI" },
    { category: "outdoor", src: "https://drive.google.com/uc?export=view&id=1ezF3vjZBkgMW5ikYQvIW6L5oTRGxaE5G" },
    { category: "outdoor", src: "https://drive.google.com/uc?export=view&id=1QVbAHVcNC1A7cRoMPoATi97g-WvZE4JN" },
    { category: "outdoor", src: "https://drive.google.com/uc?export=view&id=1hsVSFshSPFC9nxuQ4xWsnxvAo989Oo1x" },
    { category: "outdoor", src: "https://drive.google.com/uc?export=view&id=1Dq-oxrHhDjwGjz7BKlUiEqeAcb4B6pub" },
    { category: "outdoor", src: "https://drive.google.com/uc?export=view&id=1XAhMYVsuXkgg5EAXl3RKCiV3ZLPR9J9G" },
    { category: "outdoor", src: "https://drive.google.com/uc?export=view&id=1jDQLTZj83TyfTOj9wyEZDesv34cxMSl8" },
    { category: "outdoor", src: "https://drive.google.com/uc?export=view&id=1CoXYVqsEKPMbHM9gkt-v-MNJguswNJDc" },
    { category: "outdoor", src: "https://drive.google.com/uc?export=view&id=1SuRJwOnjjUeSwbd5kxzQWUMQGcBL5sr5" },
    { category: "outdoor", src: "https://drive.google.com/uc?export=view&id=1ts6VQYXkgPfSYf08PnfHHK3HrFfIvOu7" },
    { category: "outdoor", src: "https://drive.google.com/uc?export=view&id=107dGVdwFZp4vWJQhzMlreSqkYNrdprXE" },
    { category: "outdoor", src: "https://drive.google.com/uc?export=view&id=1IDzdleZrmIoBMTixeU0KE5478rHgUY9p" },
    { category: "outdoor", src: "https://drive.google.com/uc?export=view&id=1UVW2__N6IL-nZ7IkwygCHCYDRBt-6CpX" },
    { category: "outdoor", src: "https://drive.google.com/uc?export=view&id=1Px5NtHTmSxJDOHBvnWjujvViO9gadz5e" },
    { category: "outdoor", src: "https://drive.google.com/uc?export=view&id=1-ntouiPiCxMKZhyS2f-i9c5ot-CSvT3v" },
    { category: "outdoor", src: "https://drive.google.com/uc?export=view&id=1CiP8ldcqJWUIv9VLtRQ7yaYJpjlQH3J4" },
    { category: "outdoor", src: "https://drive.google.com/uc?export=view&id=1ifl8Ndzplc3Yb2jjqoW1sBvj3hJCDYId" },
  
    // ------------------ Photography ------------------
    { category: "photography", src: "https://drive.google.com/uc?export=view&id=1IA_o3a-5WkxuJaC1Sr9gG3HeBEtX_od5" },
    { category: "photography", src: "https://drive.google.com/uc?export=view&id=17O7BgG2J_9icmHgwjjtFS-kbXD2yKMf3" },
    { category: "photography", src: "https://drive.google.com/uc?export=view&id=1O3JYBfTausdenuhRgOmZNu8suYHW8XzU" },
    { category: "photography", src: "https://drive.google.com/uc?export=view&id=1W1IgGR2gLQGX41lugN_uZR0UX42T8PQi" },
    { category: "photography", src: "https://drive.google.com/uc?export=view&id=18w75Cg_UF49pHIom6e3gs_H9Y3Vcd7DR" },
    { category: "photography", src: "https://drive.google.com/uc?export=view&id=1nfncFg7OsY2QjtYPYseEb9Mkn93hyDpj" },
    { category: "photography", src: "https://drive.google.com/uc?export=view&id=11xyihVasWTdXrBD5YwNSjas3KMsGAChZ" },
    { category: "photography", src: "https://drive.google.com/uc?export=view&id=1DJxx_bWjS5DSEFojfaKp-d53iPmRpo7H" },
    { category: "photography", src: "https://drive.google.com/uc?export=view&id=1RvZt8CpPGOFQXM1xjt2daveBHFe1kKGj" },
    { category: "photography", src: "https://drive.google.com/uc?export=view&id=1NpiTzzdMXf4frF6T0u-3he51EXzxF1z2" },
    { category: "photography", src: "https://drive.google.com/uc?export=view&id=1mnmH1RmVflQd2dZM7vFxSJ18GnvuiheU" },
    { category: "photography", src: "https://drive.google.com/uc?export=view&id=1zAAi0bPiDczeiGsJioQbA1jct7hJIurU" },
    { category: "photography", src: "https://drive.google.com/uc?export=view&id=1JlUXW-UcW8Vy59ycQWnewm9gzmJMBjhS" },
    { category: "photography", src: "https://drive.google.com/uc?export=view&id=1CnfNIRchI0KWj4Cpf5Iya8LFmuYMsiTF" },
    { category: "photography", src: "https://drive.google.com/uc?export=view&id=1nEzD9XO72MyiD_4zZXwsZa1Ft1Apw0D1" },
    { category: "photography", src: "https://drive.google.com/uc?export=view&id=1bs-S5HkXkSoMfrUK8xtBjFSLjVlF2CGa" },
    { category: "photography", src: "https://drive.google.com/uc?export=view&id=1Kd7IuYpPE-OkFyJ_g3U_PjaNjKAtM0Eb" },
    { category: "photography", src: "https://drive.google.com/uc?export=view&id=1JwyEXcBx-mSkhGPyBrskefr_8MimDrGB" },
    { category: "photography", src: "https://drive.google.com/uc?export=view&id=1b4VRTAqhP7Z1ypuXiO8qFpRL3PwD9SU5" },
    { category: "photography", src: "https://drive.google.com/uc?export=view&id=1CJkfJPGaC4eGiTjtj6cGUeoGwP-tIu51" },
  ];
  
  // එකවර පෙන්විය යුතු පින්තූර ගණන
  const IMAGES_PER_LOAD = 10;
  
  // ප්‍රායෝගික වින්‍යාසයන්
  let currentCategory = "all"; // දැනට තෝරා ඇති කැටගරි
  let currentIndex = 0;        // දැනට පෙන්නූ අවසාන පින්තූරය index
  
  // DOM elements
  const galleryContainer = document.getElementById("galleryContainer");
  const categoryElements = document.querySelectorAll(".category");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  
  // මුලින්ම පිළිගත යුතු ක්‍රියාකාරකම්
  window.addEventListener("DOMContentLoaded", () => {
    displayImages("all");
  });
  
  // කැටගරි click event set කිරීම
  categoryElements.forEach(catEl => {
    catEl.addEventListener("click", () => {
      // සියලු category වල active class ඉවත් කිරීම
      categoryElements.forEach(c => c.classList.remove("active"));
      
      // නවතම active class එක add කිරීම
      catEl.classList.add("active");
  
      // data-category අගය ලබා ගැනීම
      const category = catEl.getAttribute("data-category");
      displayImages(category);
    });
  });
  
  // Load More Button click event
  loadMoreBtn.addEventListener("click", () => {
    loadMoreImages();
  });
  
  /**
   * තෝරාගත් කැටගරි අනුව මුල සිට සීමිත ප්‍රමාණයක් (IMAGES_PER_LOAD) පෙන්වීම.
   */
  function displayImages(category) {
    // නව කැටගරි තෝරාගෙන සිටින බැවින් currentIndex reset කිරීම
    currentIndex = 0;
    currentCategory = category;
  
    // galleryContainer හි ඇති සියලු child elements ඉවත් කිරීම
    galleryContainer.innerHTML = "";
  
    // පලමු වර display කිරීම
    loadMoreImages();
  }
  
  /**
   * තවදුරටත් පින්තූර පෙන්නුම් කිරීම
   */
  function loadMoreImages() {
    // තෝරාගත් කැටගරි අනුව filter කළ පින්තූර
    const filteredImages = currentCategory === "all"
      ? allImages
      : allImages.filter(img => img.category === currentCategory);
  
    // ඉතිරි පින්තූර ගණන ගණනය කිරීම
    const remainingImages = filteredImages.length - currentIndex;
  
    // දැක්විය යුතු පින්තූර ගණන ගණනය කිරීම
    const imagesToLoad = Math.min(IMAGES_PER_LOAD, remainingImages);
  
    // පවතින currentIndex සිට imagesToLoad ගණන තෝරාගැනීම
    const slicedImages = filteredImages.slice(currentIndex, currentIndex + imagesToLoad);
  
    // galleryContainer තුළ නවතම පින්තූර append කිරීම
    slicedImages.forEach(imgObj => {
      const imgCard = document.createElement("div");
      imgCard.classList.add("image-card");
      imgCard.innerHTML = `
        <img src="${imgObj.src}" alt="${imgObj.category}">
      `;
      galleryContainer.appendChild(imgCard);
    });
  
    // currentIndex update කිරීම
    currentIndex += imagesToLoad;
  
    // ඉතිරි පින්තූර නැත්නම් Load More බොත්තම සැඟවීම, ඇත්නම් පෙන්වීම
    if (currentIndex >= filteredImages.length) {
      loadMoreBtn.style.display = "none";
    } else {
      loadMoreBtn.style.display = "inline-block";
    }
  }
  