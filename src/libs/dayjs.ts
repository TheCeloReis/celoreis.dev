import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

import "dayjs/locale/en";
import "dayjs/locale/pt";
import "dayjs/locale/es";
import "dayjs/locale/fr";

dayjs.extend(localizedFormat);

dayjs.locale("en");
dayjs.locale("pt");
dayjs.locale("es");
dayjs.locale("fr");

export default dayjs;
