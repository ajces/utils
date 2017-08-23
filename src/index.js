export function isDev() {
  return process.env.NODE_ENV !== "production";
}

export function isServer() {
  return process.env.BUILD_TARGET === "server";
}

export function randomString(length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export function invariant(v, name) {
  if (v == null) {
    throw Error("Unexepcted null: " + name);
  } else {
    return v;
  }
};
