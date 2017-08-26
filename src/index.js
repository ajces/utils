export function isDev() {
  return process.env.NODE_ENV !== "production";
}

export function isServer() {
  return (
    typeof process !== "undefined" &&
    process.release != null &&
    (process.release.name.search(/node|io.js/) !== -1 ||
      typeof process.versions.node !== "undefined")
  );
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
