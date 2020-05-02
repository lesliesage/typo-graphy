const prod = "https://typo-graphy-api.herokuapp.com/";
const dev = "http://localhost:3000/";
export const API_URL = process.env.NODE_ENV === "development" ? dev : prod;
export const URL_QUEUE = API_URL + "queue";
export const URL_TESTS = API_URL + "tests";
export const URL_MEDIANS = API_URL + "medians";
export const URL_HELP_ARTICLES = API_URL + "help_articles";
export const URL_LOGIN = API_URL + "login";
export const URL_SIGNUP = API_URL + "signup";
export const URL_LOGOUT = API_URL + "logout";
export const URL_PROFILE = API_URL + "profile";
export const URL_USERS_UPDATE = API_URL + "users/update";
export const URL_USERS_DESTROY = API_URL + "users/destroy";

export const FIELDS = [
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
  "slash",
];

export const FIELDKEY = {
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
  slash: "/",
};

export const MODAL_STYLE = {
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
    boxShadow: "1px 1px 1px 0px rgba(0, 0, 0, 0.2)",
  },
};

export const COLORS = {
  cream: "#f9f6f0",
  lightgrey: "#e3e7e6",
  midgrey: "#dedede",
  grey: "#bdc5c8",
  darkgrey: "#89979c",
  darkergrey: "#636d70",
  darkestgrey: "#4b5254",
  lightblue: "#a1bacd",
  blue: "#647b88",
  darkblue: "#214f6a",
  dark: "#002733",
  red: "#cc0000",
  shadow: "rgba(0, 0, 0, 0.2)",
};
