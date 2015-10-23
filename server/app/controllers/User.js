export function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  return resAccessDenied(res);
}

export function ensureUser(req, res, next) {
  if (req.isAuthenticated() && (req.user.roles.indexOf('user') > -1)) {
    return next();
  }

  return resAccessDenied(res);
}

export function ensureAdmin(req, res, next) {
  if (req.isAuthenticated() && (req.user.roles.indexOf('admin') > -1)) {
    return next();
  }

  return resAccessDenied(res);
}

export function getUser(req, res) {
  res.json(req.user || null);
}

function resAccessDenied(res) {
  return res.status(403).json({ message: 'Access denied.' });
}
