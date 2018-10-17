import moment from 'moment';

const format = 'YYYY-MM-DD HH:mm:ss';
const status = (req, res) => {
  res.status(200)
    .json({
      serverTime: {
        local: moment().format(format),
        utc: moment.utc().format(format),
      },

    });
};
export default status;
