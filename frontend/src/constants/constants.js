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

const FIELDKEY = {
  alpha: "a-z",
  numeric: "0-9",
  tilde: "~",
  backtick: "`",
  exclamation: "!",
  at: "@",
  octothorpe: "#",
  dollar: "$",
  percent: "%",
  carrot: "^",
  ampersand: "&",
  star: "*",
  open_paren: "(",
  close_paren: ")",
  long_dash: "_",
  dash: "-",
  plus: "+",
  equals: "=",
  open_curly: "{",
  close_curly: "}",
  open_bracket: "[",
  close_bracket: "]",
  pipe: "|",
  backslash: "\\",
  colon: ":",
  semicolon: ";",
  doublequote: '"',
  singlequote: "'",
  open_angle: "<",
  close_angle: ">",
  comma: ",",
  period: ".",
  question: "?",
  slash: "/"
};

const MODAL_STYLE = {
  content: {
    bottom: "auto",
    height: "200px",
    left: "50%",
    padding: "1rem",
    position: "fixed",
    right: "auto",
    top: "30%",
    transform: "translate(-50%, -100px)",
    width: "50%",
    maxWidth: "40rem",
    border: "1px solid #89979c",
    borderRadius: "5px",
    color: "#214f6a !important",
    fontWeight: "700",
    fontSize: "12px",
    whiteSpace: "nowrap",
    boxShadow: "1px 1px 1px 0px rgba(0, 0, 0, 0.2)"
  }
};

const COLORS = {
  cream: "#f9f6f0",
  lightgrey: "#e3e7e6",
  grey: "#bdc5c8",
  darkgrey: "#89979c",
  darkergrey: "#636d70",
  darkestgrey: "#4b5254",
  lightblue: "#a1bacd",
  blue: "#647b88",
  darkblue: "#214f6a",
  dark: "#002733",
  red: "#cc0000",
  shadow: "rgba(0, 0, 0, 0.2)"
}

export {
  FIELDS,
  FIELDKEY,
  URL_BASE,
  URL_QUEUE,
  URL_TESTS,
  URL_MEDIANS,
  URL_HELP_ARTICLES,
  MODAL_STYLE,
  COLORS
};
