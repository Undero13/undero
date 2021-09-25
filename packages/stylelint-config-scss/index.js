module.exports = {
  extends: ["@wemake-services/stylelint-config-scss"],
  plugins: [
    "stylelint-order",
    "stylelint-scss",
    "stylelint-no-unsupported-browser-features",
    "stylelint-no-nested-media",
  ],
  rules: {
    "plugin/no-unsupported-browser-features": true,
    "order/order": ["custom-properties", "declarations"],
    "order/properties-order": ["width", "height"],
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "pitcher/no-nested-media": true,
  },
};