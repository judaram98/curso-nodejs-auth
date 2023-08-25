const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$xo9ymV6kQ/SaXxK/hk50tedSBsKjXcTchvC7/95f0YReLQyEIqioq';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
