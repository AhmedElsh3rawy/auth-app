// This should be in a .env file and igonre it with .gitignore but this app for educational purposes so I will put it here.

export const dotenv = {
  PORT: 8080,
  DB_URL: "postgresql://postgres:password@localhost:5432/auth",

  ACCESS_TOKEN_SECRET:
    "3aac90a21949cbd02fa4afc7c502247a007368349a8fc2fdbc60c011bd87b9ec612ac204b4f3a2fdcbfa3a6563cdb05c0a8d0aa567979f795e75bb080uufeae9",

  REFRESH_TOKEN_SECRET:
    "6b8a6ac3d74cf51099d5f2cd9a88fbb7d3b89761ac808b248c96f147a03c8742cf2163f38f49bdc8f77e0e717da1a14e3b232e9a59295f27646fe494372bbe58",

  BCRYPT_PASSWORD_PEPPER:
    "23ffe6d24114d0e30dc4f3d66fa4be5b35f8a01e90a31bebf37e0f262a93b2e2",

  CORS_ORIGIN: "http://localhost:3000",
};
