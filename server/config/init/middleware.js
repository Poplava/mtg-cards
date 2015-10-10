import bodyParser from 'body-parser';

export default function() {
  this.use(bodyParser.urlencoded({ extended: false }));
  this.use(bodyParser.json());
};
