/* =========================================================
   Sua Casa Designer — tabela de tecidos do gerador de orçamento
   Mesma tabela do gerador da EDD Cortinas, com todos os preços +20%
   (preço da EDD x 1,20, arredondado ao centavo), inclusive os adicionais de
   valor fixo (redutor de peso, comando com corda). Os adicionais em % ficam iguais.
   Linho com blackout: EDD x 1,20 = preço do linho x 1,7391 (Flame Irlandês 208,69).
   Os nomes dos modelos são os do site da Sua Casa Designer ("Persiana rolô"...).
   Cada modelo tem coleções; cada coleção tem suas cores (todas com o mesmo preço)
   e um preço por opção (tubo R32/R38/R43 na rolô, 2 a 5 vias no painel).
   - areaMinima / areaMaxima: m² cobrados por peça (sem areaMinima não há mínimo)
   - larguraMax: largura máxima da coleção (o gerador avisa se passar)
   - adicionais: pct = acréscimo % no preço do m²; valor = R$ fixo por peça
   Para mudar um preço, edite o número aqui. Só o gerador usa este arquivo.
   ========================================================= */
const TABELA_TECIDOS = {
  "Persiana rolô": {
    "areaMinima": 1.6,
    "variante": { "rotulo": "Tubo", "opcoes": ["R32", "R38", "R43 (motorizada)"], "automatica": "rolo" },
    "colecoes": [
      { "nome": "Screen 1%", "cores": ["710", "711", "712"], "larguraMax": 3.0, "precos": [345.19, 380.75, 476.06] },
      { "nome": "Screen 3%", "cores": ["700", "701", "702", "703", "704", "705"], "larguraMax": 3.0, "precos": [285.55, 314.95, 364.93] },
      { "nome": "Screen 5%", "cores": ["700", "701", "702", "703", "704", "705"], "larguraMax": 3.0, "precos": [242.14, 267.08, 292.73] },
      { "nome": "Screen Lugano 5%", "cores": ["Brown", "Silver", "Cream"], "larguraMax": 2.5, "precos": [434.51, 480.06, 556.74] },
      { "nome": "Luzes", "cores": ["White", "Offwhite", "Roller", "Strip", "Imbuia", "Tropical", "Inca", "Veneza", "Athenea", "Topázio"], "larguraMax": 2.0, "precos": [266.59, 294.06, 309.64] },
      { "nome": "Munique", "cores": ["Lino", "Sweet", "Ice"], "larguraMax": 2.8, "precos": [279.89, 308.64, 325.08] },
      { "nome": "Bonna", "cores": ["Almond", "Sand", "Silver"], "larguraMax": 2.5, "precos": [249.35, 275.23, 327.13] },
      { "nome": "Treviso Translúcido", "cores": ["Green", "Mescla Marfim", "Bege", "Castanho", "Prata"], "larguraMax": 2.5, "precos": [240.19, 266.33, 308.45] },
      { "nome": "Treviso BK", "cores": ["Branco", "Creme", "Bege", "Cinza", "Natural", "Cinza Mescla"], "larguraMax": 2.8, "precos": [275.40, 303.89, 322.92] },
      { "nome": "Laguna BK", "cores": ["Offwhite", "Castor", "Natural", "Cinza"], "larguraMax": 2.0, "precos": [330.05, 364.04, 421.74] },
      { "nome": "Prestige BK", "cores": ["Branco", "Bege", "Offwhite", "Cinza"], "larguraMax": 2.8, "precos": [325.56, 359.10, 415.93] },
      { "nome": "Munique BK", "cores": ["Lino", "Sweet", "Ice"], "larguraMax": 2.8, "precos": [356.66, 394.42, 457.06] },
      { "nome": "Bonna BK", "cores": ["White", "Sand"], "larguraMax": 2.5, "precos": [367.42, 405.22, 469.37] },
      { "nome": "Pimpoint", "cores": ["320", "322", "323", "324", "330"], "larguraMax": 1.83, "precos": [285.34, 314.74, 345.06] },
      { "nome": "Pimpoint Plus", "cores": ["331", "332", "333", "334"], "larguraMax": 3.0, "precos": [256.39, 282.80, 309.94] },
      { "nome": "Shantung BK", "cores": ["Creme", "Candy", "Chocolate", "Black", "Nature", "Cinza Mescla"], "larguraMax": 2.2, "precos": [365.09, 402.71, 466.45] },
      { "nome": "Miami BK", "cores": ["Crome", "Cinza", "Black"], "larguraMax": 2.5, "precos": [309.14, 341.02, 396.49] },
      { "nome": "Madrid BK", "cores": ["Blue", "Beige", "Sand", "Salmon"], "larguraMax": 2.5, "precos": [402.49, 443.96, 457.06] }
    ],
    "adicionais": [
      { "id": "premium", "nome": "Kit Premium (acessórios bege, cinza, preto ou marrom)", "pdf": "Kit Premium", "pct": 10 },
      { "id": "cunha", "nome": "Base cunha alumínio branco", "pdf": "Base cunha", "pct": 5 },
      { "id": "redutor", "nome": "Redutor de peso", "pdf": "Redutor de peso", "valor": 162.00 }
    ]
  },
  "Persiana painel": {
    "variante": { "rotulo": "Vias", "opcoes": ["2 vias", "3 vias", "4 vias", "5 vias"] },
    "colecoes": [
      { "nome": "Screen 1%", "cores": ["710", "711", "712"], "precos": [357.56, 409.49, 453.22, 509.06] },
      { "nome": "Screen 3%", "cores": ["700", "701", "702", "704", "705"], "precos": [274.04, 313.85, 347.33, 390.12] },
      { "nome": "Screen 5%", "cores": ["750", "751", "752"], "precos": [200.69, 227.42, 251.62, 282.72] },
      { "nome": "Lugano Screen 5%", "cores": ["Brown", "Silver", "Cream"], "precos": [418.15, 478.06, 530.00, 595.32] },
      { "nome": "Pimpoint", "cores": ["320", "322", "323", "324", "330"], "precos": [259.12, 296.74, 328.40, 368.88] },
      { "nome": "Pimpoint Plus", "cores": ["331", "332", "333", "334"], "precos": [216.52, 247.94, 274.40, 308.23] },
      { "nome": "Luzes", "cores": ["Linho", "Strip", "Imbuia", "Tropical"], "precos": [232.55, 266.33, 294.76, 331.08] },
      { "nome": "Treviso Translúcido", "cores": ["Creme", "Bege", "Cinza Mescla", "Green", "Marrom"], "precos": [231.68, 265.31, 293.63, 329.83] },
      { "nome": "Munique", "cores": ["Sweet", "Lino", "Ice"], "precos": [244.13, 280.37, 309.40, 347.46] },
      { "nome": "Bonna", "cores": ["Almond", "Sand", "Silver"], "precos": [245.65, 281.40, 311.41, 349.81] },
      { "nome": "Laguna BK", "cores": ["Offwhite", "Natural", "Castor", "Cinza"], "precos": [316.72, 362.72, 401.44, 450.92] },
      { "nome": "Prestige BK", "cores": ["Branco", "Bege", "Offwhite", "Cinza"], "precos": [312.40, 357.76, 395.98, 444.74] },
      { "nome": "Treviso BK", "cores": ["Branco", "Creme", "Bege", "Cinza", "Natural", "Cinza Mescla"], "precos": [242.44, 277.64, 307.26, 345.12] },
      { "nome": "Munique BK", "cores": ["Lino", "Sweet", "Ice"], "precos": [343.31, 393.23, 435.11, 488.75] },
      { "nome": "Bonna BK", "cores": ["White", "Sand"], "precos": [352.51, 403.73, 446.80, 501.88] },
      { "nome": "Shantung BK", "cores": ["Creme", "Candy", "Chocolate", "Black"], "precos": [350.35, 401.24, 444.05, 498.79] },
      { "nome": "Miami BK", "cores": ["Crome", "Cinza", "Black"], "precos": [297.80, 341.04, 377.44, 424.01] },
      { "nome": "Madrid", "cores": ["Blue", "Beige", "Sand", "Salmon"], "precos": [343.39, 393.17, 435.11, 488.75] }
    ],
    "adicionais": [
      { "id": "cunha", "nome": "Base cunha", "pdf": "Base cunha", "pct": 7 },
      { "id": "corda", "nome": "Comando com corda (por trilho)", "pdf": "Comando com corda", "valor": 162.00 }
    ]
  },
  "Persiana painel romano": {
    "variante": { "rotulo": "Vias", "opcoes": ["2 vias", "3 vias", "4 vias", "5 vias"] },
    "colecoes": [
      { "nome": "Screen 1%", "cores": ["710", "711", "712"], "precos": [417.64, 473.58, 554.58, 605.40] },
      { "nome": "Screen 3%", "cores": ["700", "701", "702", "704", "705"], "precos": [320.00, 362.99, 424.98, 462.84] },
      { "nome": "Screen 5%", "cores": ["750", "751", "752"], "precos": [231.94, 263.09, 308.02, 336.66] },
      { "nome": "Screen 5% (Lugano)", "cores": ["Brown", "Silver", "Cream"], "precos": [488.29, 553.82, 648.54, 708.83] },
      { "nome": "Luzes", "cores": ["Linho", "Strip", "Imbuia", "Tropical", "Athenea"], "precos": [271.62, 308.02, 360.67, 394.20] },
      { "nome": "Munique", "cores": ["Sweet", "Lino", "Ice"], "precos": [285.31, 323.35, 378.65, 413.80] },
      { "nome": "Bonna", "cores": ["Almond", "Sand", "Silver"], "precos": [287.20, 325.51, 381.16, 416.51] },
      { "nome": "Treviso Translúcido", "cores": ["Green", "Marrom", "Prata Mescla", "Bege"], "precos": [272.08, 307.26, 359.53, 393.23] },
      { "nome": "Pinpoint Plus", "cores": ["331", "332", "333", "334"], "precos": [252.88, 286.90, 335.88, 367.09] },
      { "nome": "Laguna BK", "cores": ["Offwhite", "Natural", "Castor", "Cinza"], "precos": [370.01, 419.71, 491.40, 537.08] },
      { "nome": "BK Prestige", "cores": ["Branco", "Bege", "Offwhite", "Cinza"], "precos": [364.99, 414.02, 484.70, 529.96] },
      { "nome": "Treviso BK", "cores": ["Branco", "Creme", "Bege", "Cinza", "Natural"], "precos": [283.28, 321.30, 376.16, 411.26] },
      { "nome": "Bonna BK", "cores": ["White", "Sand", "Almond"], "precos": [412.02, 467.42, 547.02, 598.08] },
      { "nome": "Munique BK", "cores": ["Lino", "Sweet", "Ice"], "precos": [401.30, 455.22, 532.72, 582.44] },
      { "nome": "Shantung BK", "cores": ["Creme", "Candy", "Chocolate", "Black", "Natural", "Cinza Mescla"], "precos": [409.54, 464.94, 543.72, 594.43] },
      { "nome": "Madrid BK", "cores": ["Crome", "Cinza", "Black", "Salmon"], "precos": [401.30, 455.22, 532.72, 582.44] },
      { "nome": "Miami BK", "cores": ["Blue", "Beige", "Sand"], "precos": [347.98, 394.90, 462.13, 505.33] }
    ],
    "adicionais": [
      { "id": "cunha", "nome": "Base cunha", "pdf": "Base cunha", "pct": 8 },
      { "id": "corda", "nome": "Comando com corda (por trilho)", "pdf": "Comando com corda", "valor": 162.00 }
    ]
  },
  "Persiana romana": {
    "areaMinima": 1.6,
    "areaMaxima": 4.5,
    "colecoes": [
      { "nome": "Screen 1%", "cores": ["710", "711", "712"], "larguraMax": 3.0, "precos": [632.99] },
      { "nome": "Screen 3%", "cores": ["700", "701", "702", "704"], "larguraMax": 3.0, "precos": [484.00] },
      { "nome": "Screen 5%", "cores": ["750", "751", "752"], "larguraMax": 3.0, "precos": [350.68] },
      { "nome": "Lugano Screen 5%", "cores": ["Brown", "Silver", "Cream"], "larguraMax": 2.5, "precos": [738.83] },
      { "nome": "Pimpoint Plus", "cores": ["331", "332", "333", "334"], "larguraMax": 3.0, "precos": [382.54] },
      { "nome": "Luzes", "cores": ["Linho", "Strip", "Imbuia", "Tropical"], "larguraMax": 2.0, "precos": [410.72] },
      { "nome": "Bonna", "cores": ["Almond", "Sand", "Silver"], "larguraMax": 2.5, "precos": [434.38] },
      { "nome": "Munique", "cores": ["Sweet", "Lino", "Ice"], "larguraMax": 2.8, "precos": [431.14] },
      { "nome": "Treviso Translúcido", "cores": ["Green", "Castanho", "Prata Mescla", "Bege"], "larguraMax": 2.5, "precos": [409.21] },
      { "nome": "Laguna BK", "cores": ["Offwhite", "Natural", "Castor", "Cinza"], "larguraMax": 2.0, "precos": [559.55] },
      { "nome": "Prestige BK", "cores": ["Branco", "Bege", "Offwhite", "Cinza"], "larguraMax": 2.8, "precos": [551.77] },
      { "nome": "Treviso BK", "cores": ["Branco", "Creme", "Bege", "Cinza", "Natural", "Cinza Mescla"], "larguraMax": 2.8, "precos": [428.33] },
      { "nome": "Munique BK", "cores": ["Lino", "Sweet", "Ice"], "larguraMax": 2.8, "precos": [606.31] },
      { "nome": "Bonna BK", "cores": ["White", "Sand"], "larguraMax": 2.0, "precos": [622.62] },
      { "nome": "Shantung BK", "cores": ["Creme", "Candy", "Chocolate", "Black"], "larguraMax": 2.2, "precos": [618.78] },
      { "nome": "Miami BK", "cores": ["Crome", "Cinza", "Black"], "larguraMax": 2.5, "precos": [525.96] },
      { "nome": "Madrid BK", "cores": ["Blue", "Beige", "Sand", "Salmon"], "larguraMax": 2.5, "precos": [606.31] }
    ],
    "adicionais": [
      { "id": "premium", "nome": "Kit Premium (acessórios bege, cinza, preto ou marrom)", "pdf": "Kit Premium", "pct": 10 }
    ]
  },
  "Persiana double vision": {
    "areaMinima": 1.6,
    "colecoes": [
      { "nome": "Double Vision 32mm", "cores": ["White", "Black", "Nature", "Cinza", "Chocolate", "Offwhite", "Capuccino", "Sand"], "precos": [490.10] },
      { "nome": "Double Vision R 38mm", "cores": ["White", "Black", "Nature", "Cinza", "Chocolate", "Offwhite", "Capuccino", "Sand"], "precos": [540.65] },
      { "nome": "Double Vision R 43mm", "cores": ["White", "Black", "Nature", "Cinza", "Chocolate", "Offwhite", "Capuccino", "Sand"], "precos": [626.62] }
    ],
    "adicionais": [
      { "id": "premium", "nome": "Kit Premium (acessórios bege, cinza, preto ou marrom)", "pdf": "Kit Premium", "pct": 10 }
    ]
  },
  /* Cortinas em tecido (preço por metro de tecido). Metragem = largura do vão x franzimento
     (linhos e tecido com blackout: o vendedor escolhe 2,00 a 4,00, padrão 3,00;
     Cortina acortinado: 2,50 fixo). Até 2,65 m de altura o tecido vai invertido (sem emendas);
     acima disso vai em pé com emendas (panos) e o gerador avisa para confirmar. Cor = código Emteco + nome. */
  "Cortina de tecido": {
    "rotulo": "Tecido",
    "franzido": 3.0,
    "franzimentos": [2.0, 2.5, 3.0, 3.3, 3.5, 4.0],
    "alturaInvertido": 2.65,
    "colecoes": [
      { "nome": "Linho Flame Irlandês", "cores": ["987 Bege 04", "988 Trigo 09", "989 Cinza 03", "990 Marfim 02", "991 Branco 01", "992 Prata 06"], "precos": [120.00] },
      { "nome": "Linho Nix", "cores": ["769 Off White", "770 Cru", "771 Castor"], "precos": [148.80] },
      { "nome": "Linho Safira", "cores": ["772 Safira 02"], "precos": [154.80] },
      { "nome": "Linho Israelense", "cores": ["773 Cinza"], "precos": [154.80] },
      { "nome": "Linho Bora Bora", "cores": ["850 Cru"], "precos": [171.60] },
      { "nome": "Linho Roma", "cores": ["714 Marfim", "767 Bege"], "precos": [190.80] },
      { "nome": "Linho Absoluto", "cores": ["851 Off White", "852 Fendy (K2407-5A C#3)"], "precos": [258.00] },
      { "nome": "Linho Botone", "cores": ["1088 Off White", "1089 Bege"], "precos": [288.00] }
    ]
  },
  /* Linho com blackout: mesmo linho (coleção e cor) + blackout com cor própria.
     Preço do metro = preço do linho x 1,7391 (Flame Irlandês: 120,00 -> 208,69). */
  "Cortina de tecido com blackout": {
    "rotulo": "Tecido",
    "franzido": 3.0,
    "franzimentos": [2.0, 2.5, 3.0, 3.3, 3.5, 4.0],
    "alturaInvertido": 2.65,
    "corBlackout": ["Branco", "Marfim", "Cinza", "Bege"],
    "colecoes": [
      { "nome": "Linho Flame Irlandês", "cores": ["987 Bege 04", "988 Trigo 09", "989 Cinza 03", "990 Marfim 02", "991 Branco 01", "992 Prata 06"], "precos": [208.69] },
      { "nome": "Linho Nix", "cores": ["769 Off White", "770 Cru", "771 Castor"], "precos": [258.78] },
      { "nome": "Linho Safira", "cores": ["772 Safira 02"], "precos": [269.21] },
      { "nome": "Linho Israelense", "cores": ["773 Cinza"], "precos": [269.21] },
      { "nome": "Linho Bora Bora", "cores": ["850 Cru"], "precos": [298.43] },
      { "nome": "Linho Roma", "cores": ["714 Marfim", "767 Bege"], "precos": [331.82] },
      { "nome": "Linho Absoluto", "cores": ["851 Off White", "852 Fendy (K2407-5A C#3)"], "precos": [448.69] },
      { "nome": "Linho Botone", "cores": ["1088 Off White", "1089 Bege"], "precos": [500.86] }
    ]
  },
  /* Acortinado BK: modelo à parte (só no gerador), franzimento 2,50 fixo */
  "Cortina acortinado": {
    "depoisDe": "Cortina de tecido com blackout",
    "calculo": "tecido",
    "alturamax": 2.7,
    "rotulo": "Tecido",
    "franzido": 2.5,
    "alturaInvertido": 2.65,
    "colecoes": [
      { "nome": "Acortinado BK", "cores": ["858 Linho Branco", "878 Indonésia Linho (2210 C#3)"], "precos": [304.80] }
    ]
  }
};

/* Roll'on tela solar: a mesma tabela da Persiana rolô, só com as telas screen */
TABELA_TECIDOS["Roll'on tela solar"] = {
  ...TABELA_TECIDOS["Persiana rolô"],
  colecoes: TABELA_TECIDOS["Persiana rolô"].colecoes.filter((c) => /screen/i.test(c.nome)),
};
