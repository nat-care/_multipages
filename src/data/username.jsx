const uesrnames = [
  { user: "user", pass: "pass", role: "admin", token: "user" },
];

export function checkUsername(user, pass) {
  const userInfo = uesrnames.find(
    (u) => u.user === user && u.pass === pass
  );

  return userInfo ? { token: userInfo.token, role: userInfo.role } : null;
}
