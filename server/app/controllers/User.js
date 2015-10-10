export function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(403).json({ message: 'Access denied.' });
  }
}

export function getUser(req, res) {
  res.json(req.user || null);
}
