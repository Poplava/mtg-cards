import mongoose from 'mongoose';
import { MONGO_URL } from '../config';

export default function() {
  mongoose.connect(MONGO_URL);
};
