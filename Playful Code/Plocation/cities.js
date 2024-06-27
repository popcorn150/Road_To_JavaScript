const findMissingCountries = (arr1, arr2) => {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    const missingFromArr2 = arr1.filter((item) => !set2.has(item));
    const missingFromArr1 = arr2.filter((item) => !set1.has(item));

    return {
        missingFromArr2,
        missingFromArr1,
    };
};

const citiesProvidedByFA = [
    "Appleton",
    "Ashland",
    "Baraboo",
    "Belmont",
    "Beloit",
    "Eau Claire",
    "Fond du Lac",
    "Green Bay",
    "Hayward",
    "Janesville",
    "Kenosha",
    "La Crosse",
    "Lake Geneva",
    "Madison",
    "Manitowoc",
    "Marinette",
    "Menasha",
    "Milwaukee",
    "Neenah",
    "New Glarus",
    "Oconto",
    "Oshkosh",
    "Peshtigo",
    "Portage",
    "Prairie du Chien",
    "Racine",
    "Rhinelander",
    "Ripon",
    "Sheboygan",
    "Spring Green",
    "Stevens Point",
    "Sturgeon Bay",
    "Superior",
    "Waukesha",
    "Wausau",
    "Wauwatosa",
    "West Allis",
    "West Bend",
    "Wisconsin Dells",
];

const citiesProvidedByGPT = [
    "Milwaukee",
    "Madison",
    "Green Bay",
    "Kenosha",
    "Racine",
    "Appleton",
    "Waukesha",
    "Oshkosh",
    "Eau Claire",
    "Janesville",
    "West Allis",
    "La Crosse",
    "Sheboygan",
    "Wauwatosa",
    "Fond du Lac",
    "New Berlin",
    "Brookfield",
    "Greenfield",
    "Menomonee Falls",
    "Sun Prairie",
];

const result = findMissingCountries(citiesProvidedByGPT, citiesProvidedByFA);
console.log(`Missing from FlashApply: ${result.missingFromArr2}\n`);
console.log(`Missing from GPT: ${result.missingFromArr1}\n`);
