import morgan from 'morgan';

const morganConfigString = '[:date[clf]] :remote-user :method :url :status :res[content-length] - :response-time ms\'';
export default morgan(morganConfigString);
