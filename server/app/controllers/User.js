export function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(403).json({ message: 'Access denied.' });
  }
}

export function ensureUser(req, res, next) {
  if (req.isAuthenticated() && (req.user.role.indexOf('user') > -1)) {
    return next();
  } else {
    res.status(403).json({ message: 'Access denied.' });
  }
}

export function ensureAdmin(req, res, next) {
  if (req.isAuthenticated() && (req.user.role.indexOf('admin') > -1)) {
    return next();
  } else {
    res.status(403).json({ message: 'Access denied.' });
  }
}

export function getUser(req, res) {
  res.json(req.user || null);
}
