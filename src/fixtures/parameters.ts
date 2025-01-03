import {defineParameterType} from "playwright-bdd"

// Définir le type de la méthode HTTP
defineParameterType({
  name:'requestMethod',
  regexp: /GET|POST|PUT|DELETE|PATCH/,
  transformer: (s:string) => s,
});

// Définir le type pour l'URL
defineParameterType({
  name: 'url', // Nom utilisé dans votre .feature
  regexp: /https?:\/\/[^\s]+/, // Regex pour valider les URLs
  transformer: (s: string) => s, // Transformation optionnelle
});

// Définir le type pour le code de réponse
defineParameterType({
  name: 'responseCode', 
  regexp: /\d{3}/,
  transformer: (code:string) => parseInt(code, 10),
});

export { defineParameterType };

