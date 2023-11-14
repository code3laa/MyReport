let tabs = document.querySelectorAll(".myList a");
let tabsArr = Array.from(tabs);
let main = document.querySelectorAll(".main div");
let divsArr = Array.from(main);

tabsArr.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        tabsArr.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        divsArr.forEach((div) => {
            div.style.display = 'none'
        });
        document.querySelector(e.currentTarget.dataset.showme).style.display = 'block';
    });
});

// myseach tri
let test = [
    '11-Deoxycorticosterone',
    '17 Alpha OH Progesterone(Neo Scr)',
    '17- Ketosteroids,urine',
    '17-Alpha Hydroxyprogesterone in serum',
    '5 H.I.A.A in 24 hrs urine',
    'A.C.T.H ( Random )',
    'ABO Antibody titre',
    'ABO Grouping',
    'ABO Subgroup',
    'ACE in Serum',
    'Acetone in Urine',
    'Acetyl Choline Receptor Abs.',
    'Acid Phosphatase (Total & Prostatic) in serum',
    'Acid Phosphatase Prostatic',
    'Acidified Glycerol Lysis Test AGLT (Fresh)',
    'Acidified Glycerol Lysis Test AGLT (Incubated)',
    'ACTH am in plasma',
    'ACTH pm in plasma',
    'Actin Ab ( smooth muscle Ab )',
    'Activated Partial Thromboplastine Time APTT',
    'Activated Protein C-Resistance (APC-R)',
    'Acyl Carnitine &Free Carnitine',
    'Adenosine Deaminase(ADA)',
    'ADH',
    'ADNA (ds)',
    'ADNA by IF',
    'Adrenal cortical Ab.',
    'AFP',
    'AFP In CSF',
    'Albumin',
    'Albumin (Body Fluid)',
    'Albumin in 24 hrs urine',
    'Albumin In Ascitic fluid',
    'Albumin in CSF',
    'Albumin In Pleural Fluid',
    'Albumin/ creatinine ratio, Urine',
    'Alcohol',
    'Alcohol (Urine)',
    'Alcohol in serum (Quantitative)',
    'Aldolase',
    'Aldosterone in serum',
    'Alk.phosphatase',
    'Alpha- 1 - Anti trypsin in stool',
    'Alpha Glucosidase in Semen',
    'Alpha-1-antitrypsin',
    'Alpha-2-Macroglobulin',
    'ALUMINIUM',
    'AMA (M2)',
    'AMINO ACIDS (QUALITATIVE-URINE)',
    'Amino Acids in urine (Quantitative)',
    'Aminogram (Qualitative) Plasma',
    'Aminogram (Qulitative) Urine',
    'Ammonia',
    'Amoeba Antibodies',
    'Amphetamine Screen',
    'Amylase',
    'Amylase (Fluid)',
    'Amyloid A',
    'ANA',
    'ANA by IF',
    'ANA titre by IF',
    'ANCA',
    'ANCA (Cytoplasmic)',
    'ANCA (Perinuclear)',
    'ANCA-Myeloperoxidase, IgG (ANCA-p)',
    'Androsteinedione in serum',
    'Anti -beta 2-Glycoprotein (IgA)',
    'Anti -beta 2-Glycoprotein (IgG)',
    'Anti -beta 2-Glycoprotein (IgM)',
    'Anti CCP Antibodies',
    'Anti Centromere',
    'Anti D antibody Titre',
    'Anti DGP GLIADIN IgA Ab',
    'Anti DGP GLIADIN IgG Ab',
    'Anti DNA & Titre',
    'Anti Endomysial Ab',
    'Anti Factor X a ( Heparin )',
    'ANTI GAD 65 Ab',
    'Anti- histone antibody',
    'Anti Insulin Antibody in serum',
    'Anti Islet Cell Antibody',
    'Anti Keratin Ab',
    'Anti Liver Soluble Antigen',
    'Anti Microsomal Antibody (TPO)',
    'Anti Mitochondrial Antibodies(Titre)by IF',
    'Anti Mullerin Hormone-Adult(AMH) in serum',
    'ANTI MUSCLE SPECIFIC KINASE (ANTI MUSK)',
    'Anti Parietal Antibody',
    'Anti Platelet Ab (Direct)',
    'Anti Platelet Antibody (Indirect)',
    'Anti RNP',
    'Anti -SCL- 70',
    'Anti Smith (sm)',
    'Anti Smith (sm) & RNP',
    'Anti Sperm Ab in semen',
    'Anti Sperm Ab in Serum',
    'Anti Sperm Ab. Titre in Serum',
    'Anti SSA (Ro)',
    'Anti SS-B (LA)',
    'Anti Synthetase Ab. (Mi2-KU-PL7-PL12) - Anti SRP - Anti Pmsd',
    'Anti Thyroglobulin Ab.',
    'Anti- Thyroid Antibodies',
    'Anti Thyroid Peroxidase Ab',
    'Anti-Cardiolipin IgG (ACL)',
    'Anti-Cardiolipin IgM (ACL)',
    'Anti-glomerular basement membrane antibody (anti-GBM Ab)',
    'Antihuman Tissue Transglutaminase (Anti TTG) Screen IgG',
    'Antihuman Tissue Transglutaminase (TTG) Screen IgA',
    'Anti-Nuclear Ab with Titre',
    'Anti-Phospholipase A2 Receptor (PLA2R )',
    'Anti-thrombin III (AT-III)',
    'Apo-Lipoprotein "A"',
    'Apo-Lipoprotein "B"',
    'Aquaporin 4 Abs.(NMO)(CSF)',
    'Aquaporin-4 Autoantibody Serum',
    'Arsenic (Blood)',
    'Aryl sulphatase A',
    'Arylsulfatase B',
    'ASCA',
    'ASCA IgA',
    'ASCA IgG',
    'Ascitic Fluid Chemistry Profile',
    'Ascitic Fluid Culture',
    'Ascitic Fluid Examination',
    'ASMA',
    'ASOT',
    'ATYPICAL PNEUMONIA SEROLOGY',
    'Azospermia Factor Gene (azf) Microdeletion Y Chromosome',
].sort();

// to add testname in the ul
ul = document.getElementById('Test-List');
let search = function (tests) {
    let li = "";
    for (i in tests) {
        li += "<li>" + tests[i] + "</li>";
    }
    ul.innerHTML = li;
}
search(test);
input = document.getElementById('Test_search');
let selectTest = function () {
    keyword = input.value.toLowerCase();
    scearing = test.filter(function (ele) {
        ele = ele.toLowerCase();
        return ele.indexOf(keyword) > -1;
    });
    search(scearing);
}
input.addEventListener('keyup', selectTest)