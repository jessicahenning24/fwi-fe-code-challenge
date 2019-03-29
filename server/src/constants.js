const path = require('path');

const PORT = 3001;
const ROUTE_PLAYERS = '/players';

const COUNTRIES = ["BD", "BE", "BF", "BG", "BA", "BB", "WF", "BL", "BM", "BN", "BO", "BH", "BI", "BJ", "BT", "JM", "BV", "BW", "WS", "BQ", "BR", "BS", "JE", "BY", "BZ", "RU", "RW", "RS", "TL", "RE", "TM", "TJ", "RO", "TK", "GW", "GU", "GT", "GS", "GR", "GQ", "GP", "JP", "GY", "GG", "GF", "GE", "GD", "GB", "GA", "SV", "GN", "GM", "GL", "GI", "GH", "OM", "TN", "JO", "HR", "HT", "HU", "HK", "HN", "HM", "VE", "PR", "PS", "PW", "PT", "SJ", "PY", "IQ", "PA", "PF", "PG", "PE", "PK", "PH", "PN", "PL", "PM", "ZM", "EH", "EE", "EG", "ZA", "EC", "IT", "VN", "SB", "ET", "SO", "ZW", "SA", "ES", "ER", "ME", "MD", "MG", "MF", "MA", "MC", "UZ", "MM", "ML", "MO", "MN", "MH", "MK", "MU", "MT", "MW", "MV", "MQ", "MP", "MS", "MR", "IM", "UG", "TZ", "MY", "MX", "IL", "FR", "IO", "SH", "FI", "FJ", "FK", "FM", "FO", "NI", "NL", "NO", "NA", "VU", "NC", "NE", "NF", "NG", "NZ", "NP", "NR", "NU", "CK", "XK", "CI", "CH", "CO", "CN", "CM", "CL", "CC", "CA", "CG", "CF", "CD", "CZ", "CY", "CX", "CR", "CW", "CV", "CU", "SZ", "SY", "SX", "KG", "KE", "SS", "SR", "KI", "KH", "KN", "KM", "ST", "SK", "KR", "SI", "KP", "KW", "SN", "SM", "SL", "SC", "KZ", "KY", "SG", "SE", "SD", "DO", "DM", "DJ", "DK", "VG", "DE", "YE", "DZ", "US", "UY", "YT", "UM", "LB", "LC", "LA", "TV", "TW", "TT", "TR", "LK", "LI", "LV", "TO", "LT", "LU", "LR", "LS", "TH", "TF", "TG", "TD", "TC", "LY", "VA", "VC", "AE", "AD", "AG", "AF", "AI", "VI", "IS", "IR", "AM", "AL", "AO", "AQ", "AS", "AR", "AU", "AT", "AW", "IN", "AX", "AZ", "IE", "ID", "UA", "QA", "MZ"];

const INITIAL_DATA_FILE = path.join(__dirname, '..', 'initialData.json');
const DATA_DIR = path.join(__dirname, '..', 'data');
const DATA_FILE = path.join(DATA_DIR, 'index.json');

const PLAYER_LIST_DEFAULTS = {
    from: 0,
    size: 25
};
const PLAYER_SORTABLE_FIELDS = ['name', 'country', 'winnings'];
const SORT_ORDER_ASC = 'asc';
const SORT_ORDER_DESC = 'desc';

module.exports = {
    PORT,
    ROUTE_PLAYERS,
    COUNTRIES,
    INITIAL_DATA_FILE,
    DATA_DIR,
    DATA_FILE,
    PLAYER_LIST_DEFAULTS,
    PLAYER_SORTABLE_FIELDS,
    SORT_ORDER_ASC,
    SORT_ORDER_DESC
};