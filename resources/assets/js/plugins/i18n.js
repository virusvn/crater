import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "./en.json";
import fr from "./fr.json";
import es from "./es.json";
import vi from "./vi.json";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "en",
  messages: {
    en,
    fr,
    es,
    vi
  }
});

export default i18n;
