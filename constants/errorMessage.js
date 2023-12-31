export const HTTP_EXCEPTION_ERROR_MESSAGES = {
  FORBIDDEN_RESOURCE: 'Forbidden resource',
  INVALID_JWT_TOKEN: 'Invalid token',
  MISSING_JWT_TOKEN: 'Missing JWT token',
  MISSING_DATA_PAYLOAD: 'Missing user data in payload',
  USER_DOES_NOT_EXIST: "User doesn't exist! Please input another username!",
  USER_EMAIL_MUST_UNIQUE: "User's email must be unique",
  USER_NOT_AUTHENTICATED: 'Your are not authenticated!',
  USER_NOT_AUTHORIZED: 'Your are not authorized!',
  INVALID_PASSWORD: 'Invalid password! Please try again!',

  HOTEL_DOES_NOT_EXIST: 'Hotel does not exist',

  ROOM_DOES_NOT_EXIST: 'Room does not exist',
};

export const HTTP_EXCEPTION_ERROR_CODE = {
  // INTERNAL ERROR: 5XX
  FORBIDDEN_RESOURCE: 500,
  VALIDATION_ERROR: 501,
  JWT_VALIDATION_ERROR: 502,
  MISSING_JWT_TOKEN: 503,
  // GOTRUE AUTH: 6XX
  INVALID_PASSWORD: 601,
  // USER: 4XX
  USER_DOES_NOT_EXIST: 401,
  USER_UPDATE_FORBIDDEN: 402,
  USER_UPDATE_FAILED: 403,
  USER_FIND_FAILED: 404,
  UNAUTHORIZED_TO_REMOVE_USER: 405,
  USER_DELETE_FAILED: 406,
  USER_LIST_FAILED: 407,
  USER_CREATE_FAILED: 408,
  USER_NAME_MUST_UNIQUE: 409,
  USER_EMAIL_MUST_UNIQUE: 410,
  USER_NOT_AUTHENTICATED: 411,
  USER_NOT_AUTHORIZED:412,
  ROOT_USER_CANNOT_BE_DELETED: 413,
  ROOT_USER_CANNOT_REMOVE_ROLE_DEFAULT: 414,
  //HOTEL: 7XX
  HOTEL_LIST_FAILED: 701,
  HOTEL_TITLE_MUST_UNIQUE: 702,
  HOTEL_CREATE_FAILED: 703,
  HOTEL_DOES_NOT_EXIST: 704,
  HOTEL_FIND_FAILED: 705,
  HOTEL_UPDATE_FAILED: 706,
  HOTEL_DELETE_FAILED: 707,
  // ROOM: 8XX
  ROOM_LIST_FAILED: 801,
  ROOM_NAME_MUST_UNIQUE: 802,
  ROOM_CREATE_FAILED: 803,
  ROOM_DOES_NOT_EXIST: 804,
  ROOM_FIND_FAILED: 805,
  ROOM_UPDATE_FAILED: 806,
  ROOM_DELETE_FAILED: 807,
};

export const HTTP_VALIDATION_ERROR_MESSAGE = {
  IsUserExisted: 'User does not exist',
};