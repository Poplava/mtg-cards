export function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(403).json({ message: 'Access denied.' });
  }
}

export function ensureUser(req, res, next) {
  if (req.isAuthenticated() && (req.user.role === 'user' || req.user.role === 'admin')) {
    return next();
  } else {
    res.status(403).json({ message: 'Access denied.' });
  }
}

export function getUser(req, res) {
  res.json(req.user || null);
}
