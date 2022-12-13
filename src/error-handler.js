export const verifyIfResponseIsValid = (response) => {
  if (response.id) {
    return {
      statusCode: 404,
      message: 'Data not found!',
    };
  }
  return response;
};
