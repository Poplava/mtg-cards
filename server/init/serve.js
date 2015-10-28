import express from 'express';

export default function() {
  this.use('/static', express.static('dist'));
};
