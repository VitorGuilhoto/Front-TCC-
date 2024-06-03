import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue, { rules } from "eslint-plugin-vue";


export default [
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
];


