const URL_BASE = "http://localhost:3000/";
const URL_QUEUE = URL_BASE + "queue";
const URL_TESTS = URL_BASE + "tests";
const URL_MEDIANS = URL_BASE + "medians";
const URL_HELP_ARTICLES = URL_BASE + "help_articles";

const FIELDS = [
  "user_id",
  "snippet_id",
  "alpha",
  "numeric",
  "tilde",
  "backtick",
  "exclamation",
  "at",
  "octothorpe",
  "dollar",
  "percent",
  "carrot",
  "ampersand",
  "star",
  "open_paren",
  "close_paren",
  "long_dash",
  "dash",
  "plus",
  "equals",
  "open_curly",
  "close_curly",
  "open_bracket",
  "close_bracket",
  "pipe",
  "backslash",
  "colon",
  "semicolon",
  "doublequote",
  "singlequote",
  "open_angle",
  "close_angle",
  "comma",
  "period",
  "question",
  "slash"
];

export {
  FIELDS,
  URL_BASE,
  URL_QUEUE,
  URL_TESTS,
  URL_MEDIANS,
  URL_HELP_ARTICLES
};